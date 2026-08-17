const BASE=window.QUESTIONS||[];
const CATS=["컴퓨터 기초이론","하드웨어 시스템","시스템 SW 및 응용 SW","컴퓨터 통신 및 네트워크","시스템보안","컴퓨터 시스템 평가","법규·정책·표준","최신 기술 동향","미분류"];
const KEY="comsiStudyUserV1";
let user=JSON.parse(localStorage.getItem(KEY)||"{}");
let currentId=null, quizOrder=[],quizIndex=-1,quizCorrect=0,quizLocked=false,favOnly=false;
let mockQuestions=[], mockTimerId=null, mockSeconds=6000;
const $=id=>document.getElementById(id);
const merged=q=>({...q,...(user[q.id]||{})});
const all=()=>BASE.map(merged);
function save(){localStorage.setItem(KEY,JSON.stringify(user));refreshHome();}
function gotoPage(id){document.querySelectorAll('.page').forEach(x=>x.classList.toggle('active',x.id===id));document.querySelectorAll('nav button').forEach(x=>x.classList.toggle('active',x.dataset.page===id));window.scrollTo({top:0,behavior:'instant'});if(id==='questions')renderQuestions();if(id==='stats')renderStats();}
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>gotoPage(b.dataset.page));
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>gotoPage(b.dataset.go));

function counts(data){let m={};data.forEach(q=>m[q.category]=(m[q.category]||0)+1);return m;}
function renderBars(el,data){let c=counts(data),total=Math.max(1,data.length),max=Math.max(1,...Object.values(c));el.innerHTML=Object.entries(c).sort((a,b)=>b[1]-a[1]).map(([k,v])=>{let pct=Math.round(v/total*100);return `<div class="bar-row"><span title="${escapeHtml(k)}">${escapeHtml(k)}</span><div class="bar-bg"><div class="bar-fill" style="width:${v/max*100}%"></div></div><b class="bar-value">${v} · ${pct}%</b></div>`}).join('')||'<div class="muted">데이터 없음</div>';}
function getStatus(q){return q.studyStatus||'미학습';}
function refreshHome(){let d=all(),done=d.filter(q=>getStatus(q)==='완료').length,review=d.filter(q=>getStatus(q)==='복습필요').length,unstudied=d.filter(q=>getStatus(q)==='미학습').length,started=d.length-unstudied,pct=Math.round(done/Math.max(1,d.length)*100);$('qCount').textContent=d.length;$('favCount').textContent=d.filter(q=>q.favorite).length;$('answerCount').textContent=d.filter(q=>q.modelAnswer||q.myAnswer).length;$('reviewCount').textContent=review;$('studyPct').textContent=pct+'%';$('studySummary').textContent=`${started}문제 학습 시작 · ${done}문제 완료`;$('studyProgressBar').style.width=pct+'%';$('unstudiedCount').textContent=unstudied;$('homeReviewCount').textContent=review;renderBars($('homeBars'),d);}
function initFilters(){let rounds=[...new Set(BASE.map(q=>q.round))].sort((a,b)=>b-a);for(let id of ['roundFilter','statsRound']){let s=$(id);rounds.forEach(r=>s.insertAdjacentHTML('beforeend',`<option value="${r}">${r}회</option>`));}CATS.forEach(c=>{$('catFilter').insertAdjacentHTML('beforeend',`<option>${escapeHtml(c)}</option>`);$('editCategory').insertAdjacentHTML('beforeend',`<option>${escapeHtml(c)}</option>`);$('mockCategory').insertAdjacentHTML('beforeend',`<option>${escapeHtml(c)}</option>`);});}
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

function openDetail(id){let q=all().find(x=>x.id===id);if(!q)return;currentId=id;$('modalMeta').textContent=`제${q.round}회 · ${q.session}교시 · ${q.number}번`;$('modalTitle').textContent=`${q.number}번 문제`;$('modalQuestion').textContent=q.text;$('editCategory').value=q.category;$('editStatus').value=getStatus(q);$('editKeywords').value=q.keywords||'';$('editFavorite').checked=!!q.favorite;$('editModel').value=q.modelAnswer||'';$('editMine').value=q.myAnswer||'';$('editMemo').value=q.memo||'';$('modal').classList.add('open');document.body.style.overflow='hidden';}
function closeDetail(){$('modal').classList.remove('open');document.body.style.overflow='';}
$('closeModal').onclick=closeDetail;$('modal').onclick=e=>{if(e.target===$('modal'))closeDetail();};
$('saveDetail').onclick=()=>{user[currentId]={...(user[currentId]||{}),category:$('editCategory').value,studyStatus:$('editStatus').value,keywords:$('editKeywords').value,favorite:$('editFavorite').checked,modelAnswer:$('editModel').value,myAnswer:$('editMine').value,memo:$('editMemo').value};save();closeDetail();renderQuestions();};


$('goUnstudied').onclick=()=>{$('statusFilter').value='미학습';gotoPage('questions');};
$('goReview').onclick=()=>{$('statusFilter').value='복습필요';gotoPage('questions');};

// Quiz / mock mode
$('conceptMode').onclick=()=>{$('conceptMode').classList.add('active');$('mockMode').classList.remove('active');$('conceptPanel').classList.remove('hidden');$('mockPanel').classList.add('hidden');};
$('mockMode').onclick=()=>{$('mockMode').classList.add('active');$('conceptMode').classList.remove('active');$('mockPanel').classList.remove('hidden');$('conceptPanel').classList.add('hidden');};
function formatTime(sec){return String(Math.floor(sec/60)).padStart(2,'0')+':'+String(sec%60).padStart(2,'0');}
function startMock(){let cat=$('mockCategory').value,pool=all().filter(q=>!cat||q.category===cat);if(pool.length<13){alert('선택한 분야의 문제가 13개보다 적습니다. 전체 분야로 선택해주세요.');return;}mockQuestions=[...pool].sort(()=>Math.random()-.5).slice(0,13);mockSeconds=6000;$('mockTimer').textContent=formatTime(mockSeconds);$('mockExam').classList.remove('hidden');$('mockList').innerHTML=mockQuestions.map((q,i)=>`<article class="mock-item"><div class="qmeta"><span class="meta-chip round">${q.round}회</span><span class="meta-chip">${q.session}교시</span></div><h3>${i+1}. ${escapeHtml(q.text)}</h3><textarea class="mock-answer" data-mock="${i}" rows="7" placeholder="핵심 키워드와 답안 구조를 작성하세요."></textarea></article>`).join('');$('mockAnswered').textContent='0 / 13 작성';document.querySelectorAll('.mock-answer').forEach(t=>t.oninput=()=>{let n=[...document.querySelectorAll('.mock-answer')].filter(x=>x.value.trim()).length;$('mockAnswered').textContent=`${n} / 13 작성`;});clearInterval(mockTimerId);mockTimerId=setInterval(()=>{mockSeconds--;$('mockTimer').textContent=formatTime(mockSeconds);if(mockSeconds<=0)finishMock();},1000);}
function finishMock(){clearInterval(mockTimerId);mockTimerId=null;if(!$('mockExam').classList.contains('hidden')&&!confirm('모의고사를 종료할까요? 작성한 답안은 이번 세션 종료 후 저장되지 않습니다.'))return;$('mockExam').classList.add('hidden');}
$('startMock').onclick=startMock;$('finishMock').onclick=finishMock;

function renderStats(){let d=all();renderBars($('statsBars'),d);let r=$('statsRound').value;renderBars($('roundBars'),r?d.filter(q=>q.round==r):d);}$('statsRound').onchange=renderStats;
function newQuiz(){quizOrder=[...Array(QUIZ_BANK.length).keys()].sort(()=>Math.random()-.5);quizIndex=-1;quizCorrect=0;nextQuiz();}
function nextQuiz(){quizIndex++;quizLocked=false;$('quizExplain').textContent='';if(quizIndex>=quizOrder.length){let pct=Math.round(quizCorrect/quizOrder.length*100);$('quizQ').textContent=`완료! ${quizCorrect}/${quizOrder.length} (${pct}%)`;$('quizProgress').textContent='';$('quizChoices').innerHTML='';$('quizNext').textContent='다시 시작';$('quizNext').style.display='inline-block';localStorage.setItem('quizScore',pct+'%');refreshHome();quizIndex=-1;return;}let q=QUIZ_BANK[quizOrder[quizIndex]];$('quizProgress').textContent=`${quizIndex+1} / ${quizOrder.length}`;$('quizQ').textContent=q.q;$('quizChoices').innerHTML=q.choices.map((c,i)=>`<button class="choice" data-i="${i}">${i+1}. ${escapeHtml(c)}</button>`).join('');$('quizNext').textContent='다음 문제';$('quizNext').style.display='none';document.querySelectorAll('.choice').forEach(b=>b.onclick=()=>answerQuiz(+b.dataset.i));}
function answerQuiz(i){if(quizLocked)return;quizLocked=true;let q=QUIZ_BANK[quizOrder[quizIndex]];document.querySelectorAll('.choice').forEach((b,j)=>{if(j===q.a)b.classList.add('correct');else if(j===i)b.classList.add('wrong');});if(i===q.a)quizCorrect++;$('quizExplain').textContent=q.ex;$('quizNext').style.display='inline-block';}
$('quizNext').onclick=()=>quizIndex===-1?newQuiz():nextQuiz();
$('exportBtn').onclick=()=>{let blob=new Blob([JSON.stringify(user,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='comsi-study-backup.json';a.click();URL.revokeObjectURL(a.href);};
$('importInput').onchange=e=>{let f=e.target.files[0];if(!f)return;let rd=new FileReader();rd.onload=()=>{try{user=JSON.parse(rd.result);save();renderQuestions();alert('복원이 완료되었습니다.');}catch{alert('올바른 백업 파일이 아닙니다.');}};rd.readAsText(f);};
$('resetBtn').onclick=()=>{if(confirm('내가 수정한 분류/답안/메모/즐겨찾기를 모두 삭제할까요?')){user={};save();renderQuestions();}};
$('themeBtn').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('dark',document.body.classList.contains('dark')?'1':'0');};
if(localStorage.getItem('dark')==='1'||localStorage.getItem('dark')===null)document.body.classList.add('dark');
initFilters();refreshHome();renderQuestions();
if('serviceWorker'in navigator&&location.protocol!=='file:')navigator.serviceWorker.register('sw.js?v=13');
