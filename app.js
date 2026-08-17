const RAW_BASE=window.QUESTIONS||[];
const ANSWER_DATA=window.ANSWERS_135||{};
const BASE=RAW_BASE.map(q=>({...q,...(ANSWER_DATA[q.id]||{})}));
const CATS=["컴퓨터 기초이론","하드웨어 시스템","시스템 SW 및 응용 SW","컴퓨터 통신 및 네트워크","시스템보안","컴퓨터 시스템 평가","법규·정책·표준","최신 기술 동향","미분류"];
const KEY="comsiStudyUserV1";
let user=JSON.parse(localStorage.getItem(KEY)||"{}");
let currentId=null, quizOrder=[],quizIndex=-1,quizCorrect=0,quizLocked=false,favOnly=false;
let mockQuestions=[], mockTimerId=null, mockSeconds=6000, mockSession=1, mockRequired=10, mockSelected=new Set(), currentPractice=null, pendingMockResult=null;
const $=id=>document.getElementById(id);
const merged=q=>({...q,...(user[q.id]||{})});
const editedAnswer=q=>q.modelAnswerOverride??q.modelAnswer??'';
const effectiveAnswer=q=>editedAnswer(q)||q.defaultAnswer||'';
const all=()=>BASE.map(merged);
function save(){localStorage.setItem(KEY,JSON.stringify(user));refreshHome();}
function gotoPage(id){document.querySelectorAll('.page').forEach(x=>x.classList.toggle('active',x.id===id));document.querySelectorAll('nav button').forEach(x=>x.classList.toggle('active',x.dataset.page===id));window.scrollTo({top:0,behavior:'instant'});if(id==='questions')renderQuestions();if(id==='stats')renderStats();}
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>gotoPage(b.dataset.page));
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>gotoPage(b.dataset.go));

function counts(data){let m={};data.forEach(q=>m[q.category]=(m[q.category]||0)+1);return m;}
function renderBars(el,data){let c=counts(data),total=Math.max(1,data.length),max=Math.max(1,...Object.values(c));el.innerHTML=Object.entries(c).sort((a,b)=>b[1]-a[1]).map(([k,v])=>{let pct=Math.round(v/total*100);return `<div class="bar-row"><span title="${escapeHtml(k)}">${escapeHtml(k)}</span><div class="bar-bg"><div class="bar-fill" style="width:${v/max*100}%"></div></div><b class="bar-value">${v} · ${pct}%</b></div>`}).join('')||'<div class="muted">데이터 없음</div>';}
function getStatus(q){return q.studyStatus||'미학습';}
function refreshHome(){let d=all(),done=d.filter(q=>getStatus(q)==='완료').length,review=d.filter(q=>getStatus(q)==='복습필요').length,unstudied=d.filter(q=>getStatus(q)==='미학습').length,started=d.length-unstudied,pct=Math.round(done/Math.max(1,d.length)*100);$('qCount').textContent=d.length;$('favCount').textContent=d.filter(q=>q.favorite).length;$('answerCount').textContent=d.filter(q=>effectiveAnswer(q)||q.myAnswer).length;$('reviewCount').textContent=review;$('studyPct').textContent=pct+'%';$('studySummary').textContent=`${started}문제 학습 시작 · ${done}문제 완료`;$('studyProgressBar').style.width=pct+'%';$('unstudiedCount').textContent=unstudied;$('homeReviewCount').textContent=review;renderBars($('homeBars'),d);}
function initFilters(){let rounds=[...new Set(BASE.map(q=>q.round))].sort((a,b)=>b-a);for(let id of ['roundFilter','statsRound']){let s=$(id);rounds.forEach(r=>s.insertAdjacentHTML('beforeend',`<option value="${r}">${r}회</option>`));}CATS.forEach(c=>{$('catFilter').insertAdjacentHTML('beforeend',`<option>${escapeHtml(c)}</option>`);$('editCategory').insertAdjacentHTML('beforeend',`<option>${escapeHtml(c)}</option>`);$('mockCategory').insertAdjacentHTML('beforeend',`<option>${escapeHtml(c)}</option>`);$('practiceCategory').insertAdjacentHTML('beforeend',`<option>${escapeHtml(c)}</option>`);$('quizCategory').insertAdjacentHTML('beforeend',`<option>${escapeHtml(c)}</option>`);});}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
function renderQuestions(){
  let s=$('search').value.trim().toLowerCase(),r=$('roundFilter').value,se=$('sessionFilter').value,c=$('catFilter').value,st=$('statusFilter').value,sort=$('sortFilter').value;
  let d=all().filter(q=>(!s||q.text.toLowerCase().includes(s))&&(!r||q.round==r)&&(!se||q.session==se)&&(!c||q.category===c)&&(!st||getStatus(q)===st)&&(!favOnly||q.favorite));
  d.sort((a,b)=>sort==='new'?(b.round-a.round||a.session-b.session||a.number-b.number):(a.round-b.round||a.session-b.session||a.number-b.number));
  $('resultInfo').textContent=`총 ${d.length}개 문제`;
  $('questionList').innerHTML=d.slice(0,300).map(q=>`<article class="qitem" data-id="${q.id}">
    <div class="qtop"><div class="qmeta"><span class="meta-chip round">${q.round}회</span><span class="meta-chip">${q.session}교시</span><span class="meta-chip">${q.number}번</span></div><button class="star-btn" data-star="${q.id}" aria-label="즐겨찾기">${q.favorite?'★':'☆'}</button></div>
    <div class="qtext">${escapeHtml(q.text)}</div>
    <div class="qbottom"><div class="qtags"><span class="tag">${escapeHtml(q.category)}</span><span class="status-tag status-${getStatus(q)}">${getStatus(q)}</span></div><span class="chevron">›</span></div>
  </article>`).join('')+(d.length>300?'<div class="notice">검색 결과가 많아 300개까지만 표시했습니다. 검색/필터를 사용하세요.</div>':'');
  document.querySelectorAll('.qitem').forEach(x=>x.onclick=e=>{if(e.target.closest('.star-btn'))return;openDetail(x.dataset.id);});
  document.querySelectorAll('.star-btn').forEach(b=>b.onclick=e=>{e.stopPropagation();toggleFavorite(b.dataset.star);});
}
function toggleFavorite(id){let q=all().find(x=>x.id===id);if(!q)return;user[id]={...(user[id]||{}),favorite:!q.favorite};save();renderQuestions();}
['search','roundFilter','sessionFilter','catFilter','statusFilter','sortFilter'].forEach(id=>$(id).addEventListener(id==='search'?'input':'change',renderQuestions));
$('favOnlyBtn').onclick=()=>{favOnly=!favOnly;$('favOnlyBtn').classList.toggle('active',favOnly);$('favOnlyBtn').setAttribute('aria-pressed',favOnly?'true':'false');$('favOnlyBtn').textContent=favOnly?'★ 즐겨찾기':'☆ 즐겨찾기';renderQuestions();};

function openDetail(id){let q=all().find(x=>x.id===id);if(!q)return;currentId=id;$('modalMeta').textContent=`제${q.round}회 · ${q.session}교시 · ${q.number}번`;$('modalTitle').textContent=`${q.number}번 문제`;$('modalQuestion').textContent=q.text;$('editCategory').value=q.category;$('editStatus').value=getStatus(q);$('editKeywords').value=q.keywords||q.defaultKeywords||'';$('editFavorite').checked=!!q.favorite;$('defaultAnswer').textContent=q.defaultAnswer||'아직 기본 학습용 답안이 등록되지 않았습니다.';$('answerBadge').textContent=q.defaultAnswer?'기본답안 제공':'준비중';$('answerBadge').classList.toggle('ready',!!q.defaultAnswer);$('editModel').value=editedAnswer(q);$('editMine').value=q.myAnswer||'';$('editMemo').value=q.memo||'';$('modal').classList.add('open');document.body.style.overflow='hidden';}
function closeDetail(){$('modal').classList.remove('open');document.body.style.overflow='';}
$('closeModal').onclick=closeDetail;$('modal').onclick=e=>{if(e.target===$('modal'))closeDetail();};
$('saveDetail').onclick=()=>{user[currentId]={...(user[currentId]||{}),category:$('editCategory').value,studyStatus:$('editStatus').value,keywords:$('editKeywords').value,favorite:$('editFavorite').checked,modelAnswerOverride:$('editModel').value,myAnswer:$('editMine').value,memo:$('editMemo').value};delete user[currentId].modelAnswer;save();closeDetail();renderQuestions();};
$('copyDefaultAnswer').onclick=()=>{let q=all().find(x=>x.id===currentId);if(!q||!q.defaultAnswer){alert('복사할 기본답안이 없습니다.');return;}if($('editModel').value.trim()&&!confirm('현재 내 수정본을 기본답안으로 덮어쓸까요?'))return;$('editModel').value=q.defaultAnswer;};


$('goUnstudied').onclick=()=>{$('statusFilter').value='미학습';gotoPage('questions');};
$('goReview').onclick=()=>{$('statusFilter').value='복습필요';gotoPage('questions');};

// Quiz / practice / mock mode
function setQuizMode(mode){
  ['concept','practice','mock'].forEach(m=>{
    $(m+'Mode').classList.toggle('active',m===mode);
    $(m+'Panel').classList.toggle('hidden',m!==mode);
  });
  if(mode==='mock') renderMockHistory();
}
$('conceptMode').onclick=()=>setQuizMode('concept');
$('practiceMode').onclick=()=>setQuizMode('practice');
$('mockMode').onclick=()=>setQuizMode('mock');
function formatTime(sec){return String(Math.floor(sec/60)).padStart(2,'0')+':'+String(sec%60).padStart(2,'0');}
function extractKeywords(q){
  const manual=(q.keywords||q.defaultKeywords||'').split(',').map(x=>x.trim()).filter(Boolean);
  const text=(effectiveAnswer(q)||q.text||'');
  const eng=[...text.matchAll(/[A-Za-z][A-Za-z0-9+.#/-]{2,}/g)].map(m=>m[0]);
  const kor=[...text.matchAll(/[가-힣]{2,}/g)].map(m=>m[0]).filter(x=>!['설명하시오','대하여','관련하여','다음','사항','개념','방법','기술','구성','특징'].includes(x));
  return [...new Set([...manual,...eng,...kor])].slice(0,12);
}
function structureSignals(answer){
  const a=answer||'';
  return {length:a.replace(/\s/g,'').length,sections:(a.match(/(^|\n)\s*(Ⅰ|Ⅱ|Ⅲ|Ⅳ|Ⅴ|VI|[1-9][.)]|가\.|나\.|다\.|라\.)/g)||[]).length};
}
function keywordCoverage(q,answer){
  const keys=extractKeywords(q),low=(answer||'').toLowerCase(),hits=keys.filter(k=>low.includes(k.toLowerCase()));
  return {keys,hits,pct:keys.length?Math.round(hits.length/keys.length*100):0};
}
function pickPractice(){
  const session=Number($('practiceSession').value),cat=$('practiceCategory').value;
  let pool=all().filter(q=>Number(q.session)===session&&(!cat||q.category===cat));
  if(!pool.length){alert('조건에 맞는 문제가 없습니다.');return;}
  currentPractice=pool[Math.floor(Math.random()*pool.length)];
  $('practiceExam').classList.remove('hidden');$('practiceReview').classList.add('hidden');$('practiceAnswer').value='';
  $('practiceMeta').textContent=session+'교시 연습';
  $('practiceQMeta').innerHTML=`<span class="meta-chip round">${currentPractice.round}회</span><span class="meta-chip">${currentPractice.session}교시</span><span class="meta-chip">문제 ${currentPractice.number}</span>`;
  $('practiceQuestion').textContent=currentPractice.text;
}
$('startPractice').onclick=pickPractice;$('newPractice').onclick=pickPractice;
$('practiceCheck').onclick=()=>{
  if(!currentPractice)return;
  const ans=$('practiceAnswer').value,cov=keywordCoverage(currentPractice,ans),sig=structureSignals(ans),model=effectiveAnswer(currentPractice)||'아직 저장된 학습용 답안이 없습니다.';
  const missed=cov.keys.filter(k=>!cov.hits.includes(k));
  $('practiceReview').innerHTML=`<div class="review-grid"><div class="review-stat"><b>${sig.length}</b><span>글자수</span></div><div class="review-stat"><b>${sig.sections}</b><span>구조 표식</span></div><div class="review-stat"><b>${cov.pct}%</b><span>키워드</span></div></div>
  <h4>포함 키워드</h4><div class="keyword-wrap">${cov.hits.map(k=>`<span class="keyword hit">${escapeHtml(k)}</span>`).join('')||'<span class="muted">없음</span>'}</div>
  <h4>보완 후보</h4><div class="keyword-wrap">${missed.map(k=>`<span class="keyword miss">${escapeHtml(k)}</span>`).join('')||'<span class="muted">없음</span>'}</div>
  <h4>모범답안</h4><div class="model-box">${escapeHtml(model).replace(/\n/g,'<br>')}</div>`;
  $('practiceReview').classList.remove('hidden');
};
function getMockConfig(session){return session===1?{total:13,required:10,point:10}:{total:6,required:4,point:25};}
function startMock(){
  mockSession=Number($('mockSession').value);const cfg=getMockConfig(mockSession),cat=$('mockCategory').value;
  let pool=all().filter(q=>Number(q.session)===mockSession&&(!cat||q.category===cat));
  if(pool.length<cfg.total){alert('선택 조건의 문제가 부족합니다.');return;}
  mockQuestions=[...pool].sort(()=>Math.random()-.5).slice(0,cfg.total);mockRequired=cfg.required;mockSelected=new Set();mockSeconds=6000;pendingMockResult=null;
  $('mockTimer').textContent=formatTime(mockSeconds);$('mockExam').classList.remove('hidden');$('scoringPanel').classList.add('hidden');
  $('mockRule').textContent=`${mockSession}교시 · ${cfg.total}문제 중 ${cfg.required}문제 선택 · 각 ${cfg.point}점`;
  $('mockList').innerHTML=mockQuestions.map((q,i)=>`<article class="mock-item" data-mi="${i}"><label class="mock-select"><input type="checkbox" class="mock-check" data-mi="${i}"><span>선택</span></label><div class="qmeta"><span class="meta-chip round">${q.round}회</span><span class="meta-chip">${q.session}교시</span></div><h3>${i+1}. ${escapeHtml(q.text)}</h3><textarea class="mock-answer" data-mock="${i}" rows="${mockSession===1?6:10}" placeholder="선택한 문제의 답안을 작성하세요." disabled></textarea></article>`).join('');
  document.querySelectorAll('.mock-check').forEach(ch=>ch.onchange=e=>{const i=Number(e.target.dataset.mi);if(e.target.checked){if(mockSelected.size>=mockRequired){e.target.checked=false;alert(`${mockRequired}문제까지만 선택할 수 있습니다.`);return;}mockSelected.add(i);}else mockSelected.delete(i);const ta=document.querySelector(`.mock-answer[data-mock="${i}"]`);ta.disabled=!e.target.checked;document.querySelector(`.mock-item[data-mi="${i}"]`).classList.toggle('selected',e.target.checked);updateMockProgress();});
  document.querySelectorAll('.mock-answer').forEach(t=>t.oninput=updateMockProgress);updateMockProgress();clearInterval(mockTimerId);
  mockTimerId=setInterval(()=>{mockSeconds--;$('mockTimer').textContent=formatTime(mockSeconds);if(mockSeconds<=0)openScoring(true);},1000);
}
function updateMockProgress(){const answered=[...mockSelected].filter(i=>(document.querySelector(`.mock-answer[data-mock="${i}"]`)?.value||'').trim()).length;$('mockAnswered').textContent=`${mockSelected.size}/${mockRequired} 선택 · ${answered} 작성`;}
function openScoring(fromTimer=false){
  if(!fromTimer&&mockSelected.size!==mockRequired){alert(`${mockRequired}문제를 선택해야 합니다.`);return;}
  if(!fromTimer&&!confirm('자기채점 화면으로 이동할까요?'))return;
  clearInterval(mockTimerId);mockTimerId=null;$('mockExam').classList.add('hidden');$('scoringPanel').classList.remove('hidden');
  const cfg=getMockConfig(mockSession),selected=[...mockSelected];pendingMockResult={date:new Date().toISOString(),session:mockSession,required:cfg.required,point:cfg.point,scores:{}};
  $('scoreList').innerHTML=selected.map((i,idx)=>{const q=mockQuestions[i],ans=document.querySelector(`.mock-answer[data-mock="${i}"]`)?.value||'',cov=keywordCoverage(q,ans),sig=structureSignals(ans),model=effectiveAnswer(q)||'저장된 학습용 답안이 없습니다.',opts=mockSession===1?[0,2,4,6,8,10]:[0,5,10,15,20,25];return `<article class="score-item"><div class="qmeta"><span class="meta-chip round">${q.round}회</span><span class="meta-chip">${q.session}교시</span></div><h3>${idx+1}. ${escapeHtml(q.text)}</h3><div class="auto-check"><span>글자수 <b>${sig.length}</b></span><span>구조 <b>${sig.sections}</b></span><span>키워드 <b>${cov.pct}%</b></span></div><details><summary>내 답안</summary><div class="model-box">${escapeHtml(ans||'(미작성)').replace(/\n/g,'<br>')}</div></details><details><summary>모범답안 / 키워드</summary><div class="keyword-wrap">${cov.keys.map(k=>`<span class="keyword ${cov.hits.includes(k)?'hit':'miss'}">${escapeHtml(k)}</span>`).join('')}</div><div class="model-box">${escapeHtml(model).replace(/\n/g,'<br>')}</div></details><div class="self-score"><span>최종 자기평가</span><div>${opts.map(v=>`<button class="score-btn" data-qid="${q.id}" data-score="${v}">${v}</button>`).join('')}</div></div></article>`;}).join('');
  document.querySelectorAll('.score-btn').forEach(b=>b.onclick=()=>{const qid=b.dataset.qid;pendingMockResult.scores[qid]=Number(b.dataset.score);document.querySelectorAll(`.score-btn[data-qid="${qid}"]`).forEach(x=>x.classList.toggle('active',x===b));updateScoreSummary();});updateScoreSummary();
}
function updateScoreSummary(){if(!pendingMockResult)return;const vals=Object.values(pendingMockResult.scores),total=vals.reduce((a,b)=>a+b,0);$('scoreTotal').textContent=total;$('scoreProgress').textContent=`${vals.length}/${pendingMockResult.required} 채점`;$('scoreBreakdown').textContent=`${mockSession}교시 · ${pendingMockResult.required}문제`;}
$('startMock').onclick=startMock;$('finishMock').onclick=()=>openScoring(false);
function mockHistoryData(){try{return JSON.parse(localStorage.getItem('mockHistory')||'[]')}catch(e){return[]}}
function renderMockHistory(){const hist=mockHistoryData();$('mockHistory').innerHTML=hist.length?hist.slice().reverse().map(r=>{const d=new Date(r.date);return `<div class="history-card"><div><b>${r.session}교시 · ${r.total}점</b><span>${d.getMonth()+1}/${d.getDate()} · ${r.required}문제</span></div><div class="history-score">${r.total}</div></div>`;}).join(''):'<div class="empty">저장된 성적이 없습니다.</div>';}
$('saveMockResult').onclick=()=>{if(!pendingMockResult)return;if(Object.keys(pendingMockResult.scores).length!==pendingMockResult.required){alert('모든 문제의 점수를 입력해주세요.');return;}const hist=mockHistoryData();pendingMockResult.total=Object.values(pendingMockResult.scores).reduce((a,b)=>a+b,0);hist.push(pendingMockResult);localStorage.setItem('mockHistory',JSON.stringify(hist));alert('성적을 저장했습니다.');renderMockHistory();};
$('clearMockHistory').onclick=()=>{if(confirm('성적 기록을 모두 지울까요?')){localStorage.removeItem('mockHistory');renderMockHistory();}};

function renderStats(){let d=all();renderBars($('statsBars'),d);let r=$('statsRound').value;renderBars($('roundBars'),r?d.filter(q=>q.round==r):d);}$('statsRound').onchange=renderStats;
function newQuiz(){
  const cat=$('quizCategory').value,countValue=$('quizCount').value;
  let pool=QUIZ_BANK.map((q,i)=>({q,i})).filter(x=>!cat||x.q.category===cat);
  if(!pool.length){alert('선택한 분야의 객관식 문제가 없습니다.');return;}
  pool.sort(()=>Math.random()-.5);
  const count=countValue==='all'?pool.length:Math.min(Number(countValue),pool.length);
  quizOrder=pool.slice(0,count).map(x=>x.i);
  quizIndex=-1;quizCorrect=0;nextQuiz();
}
function nextQuiz(){
  quizIndex++;quizLocked=false;$('quizExplain').textContent='';$('quizRef').textContent='';
  if(quizIndex>=quizOrder.length){
    let pct=Math.round(quizCorrect/quizOrder.length*100);
    $('quizQ').textContent=`완료! ${quizCorrect}/${quizOrder.length} (${pct}%)`;
    $('quizProgress').textContent='';$('quizChoices').innerHTML='';
    $('quizNext').textContent='다시 시작';$('quizNext').style.display='inline-block';
    localStorage.setItem('quizScore',pct+'%');refreshHome();quizIndex=-1;return;
  }
  let q=QUIZ_BANK[quizOrder[quizIndex]];
  $('quizProgress').textContent=`${quizIndex+1} / ${quizOrder.length} · ${q.category}`;
  $('quizQ').textContent=q.q;
  $('quizChoices').innerHTML=q.choices.map((c,i)=>`<button class="choice" data-i="${i}">${i+1}. ${escapeHtml(c)}</button>`).join('');
  $('quizNext').textContent='다음 문제';$('quizNext').style.display='none';
  document.querySelectorAll('.choice').forEach(b=>b.onclick=()=>answerQuiz(+b.dataset.i));
}
function answerQuiz(i){
  if(quizLocked)return;quizLocked=true;
  let q=QUIZ_BANK[quizOrder[quizIndex]];
  document.querySelectorAll('.choice').forEach((b,j)=>{if(j===q.a)b.classList.add('correct');else if(j===i)b.classList.add('wrong');});
  if(i===q.a)quizCorrect++;
  $('quizExplain').textContent=q.ex;
  $('quizRef').textContent=q.ref?`기출 연계: ${q.ref}`:'';
  $('quizNext').style.display='inline-block';
}
$('quizNext').onclick=()=>quizIndex===-1?newQuiz():nextQuiz();
$('exportBtn').onclick=()=>{let blob=new Blob([JSON.stringify(user,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='comsi-study-backup.json';a.click();URL.revokeObjectURL(a.href);};
$('importInput').onchange=e=>{let f=e.target.files[0];if(!f)return;let rd=new FileReader();rd.onload=()=>{try{user=JSON.parse(rd.result);save();renderQuestions();alert('복원이 완료되었습니다.');}catch{alert('올바른 백업 파일이 아닙니다.');}};rd.readAsText(f);};
$('resetBtn').onclick=()=>{if(confirm('내가 수정한 분류/답안/메모/즐겨찾기를 모두 삭제할까요?')){user={};save();renderQuestions();}};
function applyTheme(isDark){document.body.classList.toggle('dark',isDark);localStorage.setItem('dark',isDark?'1':'0');const b=$('themeBtn');if(b){b.textContent=isDark?'☀':'◐';b.setAttribute('aria-label',isDark?'라이트 모드로 변경':'다크 모드로 변경');}}
const savedDark=localStorage.getItem('dark');applyTheme(savedDark===null?true:savedDark==='1');
$('themeBtn').onclick=()=>applyTheme(!document.body.classList.contains('dark'));
initFilters();refreshHome();renderQuestions();
if('serviceWorker'in navigator&&location.protocol!=='file:')navigator.serviceWorker.register('sw.js?v=151');
