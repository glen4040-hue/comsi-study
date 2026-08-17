window.ANSWERS_135 = {
  "135-1-1": {
    "category": "법규·정책·표준",
    "defaultKeywords": "특허권, 실용신안권, 디자인권, 상표권, 저작권, 영업비밀, 산업재산권",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- 지식재산권(IPR)은 인간의 창작·발명·표지·영업상 정보를 법적으로 보호하여 창작자의 권리와 산업 발전을 조화시키는 권리이다.\n\nⅡ. 종류\n1) 산업재산권: 특허권(발명), 실용신안권(고안), 디자인권(디자인), 상표권(표장)\n2) 저작권: 프로그램·문서·영상 등 창작물, 저작인격권과 저작재산권\n3) 신지식재산권: 반도체 배치설계, 데이터베이스, 영업비밀, 식물신품종 등\n\nⅢ. 실무 포인트\n- SW는 저작권 중심으로 보호되며 기술적 사상은 특허, 제품/서비스 식별은 상표, 비공개 노하우는 영업비밀로 복합 보호하는 전략이 효과적이다."
  },
  "135-1-2": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "SOAP, REST, WSDL, XML, JSON, HTTP, Stateless, API",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- SOAP는 XML 기반 메시지 교환 프로토콜이고, REST는 자원을 URI로 식별하고 HTTP 메서드로 조작하는 아키텍처 스타일이다.\n\nⅡ. 비교\n- 규격: SOAP=엄격한 표준/계약(WSDL), REST=HTTP 기반 단순 구조\n- 데이터: SOAP=주로 XML, REST=JSON·XML 등 자유\n- 상태: SOAP는 상태/무상태 모두 가능, REST는 Stateless 지향\n- 보안/트랜잭션: SOAP는 WS-Security·WS-*에 강점, REST는 HTTPS·OAuth/JWT 등을 조합\n- 성능: REST가 메시지 오버헤드가 작아 웹/모바일 API에 유리\n\nⅢ. 적용\n- 금융·B2B처럼 엄격한 계약/트랜잭션이 필요하면 SOAP, 경량·확장성·개발생산성이 중요하면 REST가 적합하다."
  },
  "135-1-3": {
    "category": "하드웨어 시스템",
    "defaultKeywords": "MMU, Virtual Address, Physical Address, Page Table, TLB, Protection, Paging",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- MMU(Memory Management Unit)는 CPU가 생성한 가상주소를 물리주소로 변환하고 메모리 보호·접근권한을 검사하는 하드웨어 장치이다.\n\nⅡ. 동작\nCPU Virtual Address → TLB 조회 → Hit 시 Physical Address 생성 → Cache/Memory 접근\n                         → Miss 시 Page Table Walk → TLB 갱신\n- 유효 페이지가 없으면 Page Fault를 발생시켜 OS가 처리한다.\n\nⅢ. 주요 기능\n- 주소변환, Paging/Segmentation 지원, 프로세스 주소공간 격리, R/W/X 권한검사, User/Supervisor 보호, TLB를 통한 변환 가속\n\nⅣ. 의의\n- 가상메모리, 프로세스 격리, 메모리 보호를 하드웨어 수준에서 지원하는 OS 핵심 기반이다."
  },
  "135-1-4": {
    "category": "컴퓨터 기초이론",
    "defaultKeywords": "MCTS, Selection, Expansion, Simulation, Backpropagation, UCT, Exploration, Exploitation",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- MCTS는 전체 탐색공간을 모두 전개하지 않고 무작위 시뮬레이션 결과를 이용해 유망한 탐색 경로를 반복적으로 확장하는 휴리스틱 트리 탐색기법이다.\n\nⅡ. 4단계\nSelection → Expansion → Simulation(Rollout) → Backpropagation\n- Selection에서는 UCT 등으로 Exploration과 Exploitation을 균형화한다.\n\nⅢ. 특징\n- 장점: 거대한 상태공간, 휴리스틱 설계가 어려운 문제에서 강함\n- 단점: 반복 계산량이 크고 시뮬레이션 품질에 민감\n\nⅣ. 활용\n- 바둑/체스, 게임 AI, 로봇 경로계획, 의사결정 및 계획 문제에 활용된다."
  },
  "135-1-5": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "Monolithic, Microservice, Coupling, Deployment, Scaling, API Gateway, Service Discovery",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- Monolithic은 기능을 하나의 배포 단위로 구성하고, MSA는 업무 기능을 독립 서비스로 분해해 API/메시지로 연계한다.\n\nⅡ. 비교\n- 배포: Monolithic 전체 배포 / MSA 서비스별 독립 배포\n- 확장: 전체 Scale-out / 병목 서비스만 개별 확장\n- 장애: 영향범위 큼 / 서비스 격리 가능하나 분산장애 발생 가능\n- 데이터: 통합 DB가 단순 / Database per Service로 일관성 관리 복잡\n- 운영: 초기 단순 / Service Discovery, API Gateway, Observability, CI/CD 필요\n\nⅢ. 적용 원칙\n- 소규모·단순 시스템은 Monolithic, 조직/도메인이 크고 독립배포·탄력확장이 중요하면 MSA가 유리하다. 무조건적 분해보다 DDD 기반 경계 설정이 핵심이다."
  },
  "135-1-6": {
    "category": "최신 기술 동향",
    "defaultKeywords": "Multicloud, Vendor Lock-in, Portability, Kubernetes, FinOps, Observability, IAM",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- Multicloud는 둘 이상의 퍼블릭/프라이빗 클라우드 사업자 서비스를 조합해 업무를 배치·운영하는 전략이다.\n\nⅡ. 목적\n- Vendor Lock-in 완화, 서비스별 Best-of-Breed 선택, 지역/규제 대응, 가용성 및 협상력 향상\n\nⅢ. 핵심기술\n- Container/Kubernetes, IaC, 통합 IAM, API 관리, 데이터 이동/동기화, 통합 Observability, FinOps\n\nⅣ. 고려사항\n- 서로 다른 IAM·네트워크·요금·SLA로 복잡성이 증가하므로 Landing Zone 표준화, 정책 일원화, 데이터 주권, 비용 가시성, DR 전략을 함께 설계해야 한다."
  },
  "135-1-7": {
    "category": "컴퓨터 통신 및 네트워크",
    "defaultKeywords": "Shannon, Channel Capacity, Bandwidth, SNR, C=B log2(1+S/N), Noise",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- 샤논 채널용량 정리는 잡음이 존재하는 통신채널에서 오류 없이 전달 가능한 이론적 최대 정보전송률을 제시한다.\n\nⅡ. 식\nC = B · log2(1 + S/N) [bps]\n- C: 채널용량, B: 대역폭(Hz), S/N: 신호대잡음 전력비\n\nⅢ. 의미\n- 대역폭을 늘리거나 SNR을 높이면 용량이 증가하지만 로그 특성 때문에 SNR 증가 효과는 점차 감소한다.\n- 실제 전송률이 C보다 낮으면 적절한 부호화로 오류확률을 충분히 작게 만들 수 있다.\n\nⅣ. 활용\n- 무선링크 예산, 변조·부호화 설계, 스펙트럼 효율 및 통신시스템 성능 한계 분석의 기준이다."
  },
  "135-1-8": {
    "category": "컴퓨터 시스템 평가",
    "defaultKeywords": "TTAK.KO-10.0292/R3, 수식계산법, 참조법, 시뮬레이션법, 보정치, Capacity Planning",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- TTAK.KO-10.0292/R3의 하드웨어 규모산정은 요구 성능을 CPU·메모리·스토리지 등 적정 자원규모로 변환하는 Capacity Planning 활동이다.\n\nⅡ. 3가지 방법\n1) 수식계산법(Calculating Method): 사용자·트랜잭션 등 요소를 수식으로 산정 후 피크부하, 여유율 등 보정치 적용\n2) 참조법(Referencing Method): 유사 업무/시스템의 실제 규모와 부하를 비교하여 산정\n3) 시뮬레이션법(Simulation Technique): 작업부하 모델을 구축하고 시뮬레이션/시험으로 용량 예측\n\nⅢ. 비교\n- 수식: 근거 명확·간편하나 보정치 민감\n- 참조: 빠르고 안전하나 유사사례 의존\n- 시뮬레이션: 정밀하나 시간·비용이 큼\n→ 중요 시스템은 복수 방법을 교차검증하는 것이 Best Practice이다."
  },
  "135-1-9": {
    "category": "최신 기술 동향",
    "defaultKeywords": "Curse of Dimensionality, Sparsity, Distance Concentration, Feature Selection, PCA, Regularization",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- 차원의 저주는 특징 차원이 증가할수록 데이터 공간의 부피가 급격히 커져 데이터가 희소해지고 학습·검색·거리측정 성능이 저하되는 현상이다.\n\nⅡ. 문제점\n- 필요한 표본수 폭증, 과적합, 계산량/메모리 증가, 거리 집중(Distance Concentration), KNN·Clustering 성능 저하\n\nⅢ. 대응\n- Feature Selection, PCA/Autoencoder 등 차원축소, 정규화·Regularization, 충분한 데이터 확보, 도메인 기반 특징공학\n\nⅣ. 시사점\n- 무조건 많은 Feature보다 정보량 대비 복잡도를 관리하고 검증데이터로 일반화 성능을 확인하는 것이 중요하다."
  },
  "135-1-10": {
    "category": "법규·정책·표준",
    "defaultKeywords": "공공데이터 품질인증, 품질관리체계, 데이터 품질, 최우수, 우수, 행정안전부, NIA",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- 공공데이터 품질인증은 공공기관의 데이터 품질관리 수준과 실제 데이터 품질을 진단하여 우수한 기관에 인증을 부여하는 제도이다.\n\nⅡ. 목적\n- 오류·중복·결측 등 품질문제를 예방하고 신뢰할 수 있는 공공데이터의 개방·활용 기반을 조성한다.\n\nⅢ. 평가 관점\n- 기관의 품질관리체계(조직·절차·표준·예방적 관리)와 데이터 품질 수준을 종합 점검하고 등급을 부여한다.\n\nⅣ. 기대효과\n- 데이터 정합성/신뢰성 향상, AI·데이터 분석 활용성 제고, 지속적 품질관리 문화 정착, 기관 간 품질경쟁 촉진."
  },
  "135-1-11": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "Priority Inheritance, Priority Inversion, Mutex, Real-time OS, Blocking",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- Priority Inheritance는 낮은 우선순위 Task가 높은 우선순위 Task가 필요한 자원을 점유해 Priority Inversion이 발생할 때, 자원 보유 Task가 일시적으로 높은 우선순위를 상속받도록 하는 기법이다.\n\nⅡ. 동작\nLow가 Mutex 획득 → High가 Mutex 요청·Blocking → Low가 High 우선순위 상속 → Low가 임계구역 신속 완료 → Mutex 해제 → 원래 우선순위 복귀 → High 실행\n\nⅢ. 효과/한계\n- 중간 우선순위 Task의 선점을 방지해 Blocking 시간을 줄인다. 다중 자원에서는 연쇄 상속·Deadlock 분석이 필요하며 Priority Ceiling과 함께 비교 검토한다."
  },
  "135-1-12": {
    "category": "최신 기술 동향",
    "defaultKeywords": "RAG, Retriever, Embedding, Vector DB, Re-ranking, LLM, Grounding, Hallucination",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- RAG는 LLM이 답변을 생성하기 전에 외부 지식원에서 관련 문서를 검색하여 Context로 제공함으로써 지식의 최신성·근거성을 보완하는 구조이다.\n\nⅡ. 구성/흐름\nDocument → Chunking → Embedding → Vector DB\nQuestion → Embedding → Retriever → (Re-ranking) → Context + Prompt → LLM → Answer\n\nⅢ. 장점\n- Hallucination 완화, 최신/사내 지식 활용, 출처 기반 응답, 모델 재학습 비용 절감\n\nⅣ. 고려사항\n- Chunk 전략, 검색 Recall/Precision, Embedding 품질, Re-ranking, Context Window, 권한기반 검색, 개인정보/Prompt Injection 방어\n\nⅤ. 발전\n- Hybrid Search, Graph RAG, Agentic RAG, Multimodal RAG로 고도화된다."
  },
  "135-1-13": {
    "category": "컴퓨터 통신 및 네트워크",
    "defaultKeywords": "ETSI ZSM, Zero-touch, Closed-loop Automation, Intent, E2E Management, Orchestration, AI/ML",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- ETSI ZSM(Zero-touch network and Service Management)은 5G/차세대 네트워크의 복잡성을 사람이 직접 처리하기 어려운 문제를 해결하기 위해 E2E 관리·오케스트레이션을 자동화하는 표준화 프레임워크이다.\n\nⅡ. 핵심개념\n- End-to-End Service Management, Management Domain 분리, Open Interface, Closed-loop Automation, Intent 기반 운용, AI/ML 분석\n\nⅢ. 동작\nTelemetry/상태수집 → Analytics/AI → Policy·Intent 판단 → 자동 Orchestration/Control → 결과 검증의 Closed Loop\n\nⅣ. 효과\n- 운영 OPEX 감소, 장애 예측/자가복구, 서비스 개통시간 단축, Network Slicing 등 복잡한 서비스의 자동 운영을 지원한다."
  },
  "135-2-1": {
    "category": "최신 기술 동향",
    "defaultKeywords": "TTAK.KO-10.1558, 멀티모달, 표현성, 변환성, 정렬성, 의미정확성, 유효성",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- TTAK.KO-10.1558은 텍스트·이미지·오디오·비디오 등 2개 이상의 모달리티를 결합한 생성형 AI 학습데이터의 품질을 검증하기 위한 기준이다. 단일 데이터의 정확성뿐 아니라 모달 간 의미 관계가 핵심이다.\n\nⅡ. 멀티모달 데이터 품질특성\n1) 표현성(Representation): 각 모달이 대상/상황의 의미를 충분하고 정확하게 표현하는가\n2) 변환/일치성(Transformation/Consistency): 동일 의미가 모달 변환 과정에서 왜곡·누락되지 않는가\n3) 정렬/관계성(Alignment/Relation): 이미지-문장, 영상-음성처럼 서로 다른 모달의 시간·공간·의미 관계가 올바르게 대응되는가\n\nⅢ. 생성 데이터 유형별 유효성 검증\n- Text: 의미적 타당성, 문맥 일관성, 사실/문법 오류\n- Image: 객체·속성·공간관계의 Prompt 일치성, 왜곡/Artifact\n- Audio: 음성·화자·내용 일치, 잡음/명료도\n- Video: 프레임 품질 + 시간적 연속성, 객체/행동/이벤트 정합성\n- Cross-modal: Text-Image/Audio-Video 간 Semantic Alignment 평가\n\nⅣ. 검증 절차\n품질목표 정의 → 대표 학습업무 선정 → 품질특성/지표 매핑 → 표본검사·자동지표·전문가검증 → 오류정제·재검증\n\nⅤ. 제언\n- 생성형 AI 데이터는 '개별 모달 품질 + 모달 간 정렬 품질 + 실제 Task 유효성'의 3단계로 평가하고, 사람 평가와 자동지표를 병행해야 한다."
  },
  "135-2-2": {
    "category": "최신 기술 동향",
    "defaultKeywords": "Sustainable Smart City, ESG, Digital Twin, IoT, Urban Data Platform, Carbon Neutrality, Resilience",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- 지속 가능한 스마트시티는 ICT·데이터·AI를 활용하여 도시서비스의 효율을 높이면서 환경·사회·경제적 지속가능성과 시민 삶의 질을 동시에 달성하는 도시 운영모델이다.\n\nⅡ. 추진 배경\n- 고령화·1인가구 등 인구구조 변화, 에너지/탄소 문제, 재난·교통·의료 수요 증가, 도시 인프라 노후화\n\nⅢ. 참조구조\nSensor/IoT → 5G/LPWAN → Edge/Cloud → Urban Data Platform → AI/Digital Twin → 교통·에너지·안전·복지 서비스\n- 데이터 거버넌스·보안·개인정보보호가 전 계층 공통 기반이다.\n\nⅣ. 핵심 서비스\n- Mobility: MaaS, 지능형 교통\n- Energy/Environment: EMS, 스마트그리드, 탄소 모니터링\n- Safety: 재난예측, CCTV/센서 융합\n- Welfare: 고령자 돌봄·원격건강관리\n- Governance: 시민참여·공공데이터\n\nⅤ. 성공요건\n- 기술 중심이 아닌 문제 중심 KPI, 상호운용 표준, 데이터 주권, 디지털 포용, 사이버보안, 민관 협력 및 장기 TCO 관리가 필요하다."
  },
  "135-2-3": {
    "category": "시스템보안",
    "defaultKeywords": "MAC, DAC, RBAC, ABAC, PDP, PEP, Policy, Attribute, Label, Zero Trust",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 접근통제 개념\n- Subject가 Object에 수행하려는 행위를 정책에 따라 허용/거부하여 기밀성·무결성을 보호하는 보안 메커니즘이다.\n\nⅡ. 정책 비교\n- MAC: 중앙정책과 Security Label 기반, 강한 통제/유연성 낮음\n- DAC: 소유자가 권한 부여, 편리하나 권한 전파 위험\n- RBAC: Role-User/Permission 매핑, 조직형 권한관리에 적합\n- ABAC: 사용자·자원·행위·환경 Attribute와 Policy로 동적 판정, 세밀하지만 정책 복잡\n\nⅢ. MAC + ABAC 필요성\n- MAC의 강제 등급통제로 최소 보안선을 보장하면서 ABAC의 상황인지형 정책을 결합하면 기밀등급·업무속성·시간·위치·단말위험도를 동시에 반영할 수 있다. 국방/공공/제로트러스트 환경에 적합하다.\n\nⅣ. 동적 운영방안\nRequest → PEP → PDP → [MAC Label 검증 + ABAC Attribute/Context 평가] → Permit/Deny/Obligation\n1) Label/등급과 Attribute 표준화\n2) IdP·CMDB·EDR 등에서 신뢰 속성 수집\n3) 중앙 PDP에서 Policy-as-Code 운영\n4) 세션 중 위험변화 지속평가 및 권한 재조정\n5) 정책 버전관리·감사로그·충돌검증\n\nⅤ. Best Practice\n- Default Deny, Least Privilege, Continuous Verification을 기본으로 정책 성능과 설명가능성까지 관리한다."
  },
  "135-2-4": {
    "category": "하드웨어 시스템",
    "defaultKeywords": "Cache, LRU, FIFO, LFU, Random, Write Through, Write Back, MESI, Coherence",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- Cache는 CPU-주기억장치 속도 격차를 Locality로 완화하며, 한정된 Cache Line의 교체·쓰기·일관성 정책이 성능을 좌우한다.\n\nⅡ. 교체기법\n- LRU: 가장 오래 참조되지 않은 Line 교체, 지역성 반영 우수/관리비용 큼\n- FIFO: 가장 먼저 들어온 Line 교체, 단순/참조패턴 미반영\n- LFU: 참조횟수 최소 Line 교체, 빈도반영/과거 이력 편향\n- Random/Pseudo-LRU: HW 복잡도와 성능의 절충\n\nⅢ. Write Through vs Write Back\n- Through: Cache와 Memory 동시 기록 → 일관성·복구 단순, Write Traffic 증가\n- Back: Cache만 수정하고 Eviction 시 Memory 반영(Dirty Bit) → 성능 우수, 일관성/복구 복잡\n\nⅣ. MESI\n- Modified: Cache만 최신, Memory와 불일치\n- Exclusive: 단독 보유 Clean\n- Shared: 여러 Cache가 Clean 공유\n- Invalid: 무효 Line\n- Bus Snooping/Coherence Message로 Read/Write 시 상태를 전이시켜 한 Writer/다수 Reader 규칙을 보장한다.\n\nⅤ. 관점\n- 멀티코어에서는 False Sharing, Interconnect Traffic, Memory Ordering까지 함께 고려해야 한다."
  },
  "135-2-5": {
    "category": "컴퓨터 통신 및 네트워크",
    "defaultKeywords": "Traffic Policing, Traffic Shaping, Token Bucket, Leaky Bucket, CIR, Burst, QoS",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- Policing과 Shaping은 계약 대역폭과 QoS를 준수하도록 트래픽 전송률과 Burst를 제어하는 Traffic Conditioning 기법이다.\n\nⅡ. 구성요소\n- Meter: 유입률 측정(CIR/PIR, Burst)\n- Marker: DSCP/우선순위 표시\n- Dropper/Remark: 초과 패킷 폐기·재마킹\n- Queue/Scheduler: Shaping 시 버퍼링 후 지연전송\n\nⅢ. 알고리즘\n1) Token Bucket: 일정 속도로 Token 생성, Token 범위 내 Burst 허용\n2) Leaky Bucket: 일정한 누수속도로 출력하여 평탄화\n- Policing은 주로 Token Bucket으로 초과 트래픽 Drop/Remark\n- Shaping은 Queue + Token/Leaky Bucket으로 지연시켜 평활화\n\nⅣ. 비교\n- Policing: 즉시 처리, Delay 없음, Loss 가능, Ingress/SLA 단속에 적합\n- Shaping: Buffering, Delay 증가, Loss 감소, Egress/WAN 대역폭 적응에 적합\n\nⅤ. Best Practice\n- 경계에서는 Policing, 송신측 병목 앞에서는 Shaping을 적용하고 QoS Class·Queue Scheduler와 연계한다."
  },
  "135-2-6": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "Recovery, REDO, UNDO, WAL, Checkpoint, Shadow Paging, Log, Commit",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- DB Recovery는 장애 후 Atomicity와 Durability를 보장하기 위해 Log/Copy를 이용해 일관된 상태로 복구하는 기법이다.\n\nⅡ. REDO / UNDO\n- REDO: Commit된 Transaction의 변경이 Disk에 미반영된 경우 After Image를 재적용\n- UNDO: Commit되지 않은 Transaction의 변경을 Before Image로 취소\n- WAL(Write Ahead Logging): 데이터 페이지보다 Log를 먼저 안정 저장\n\nⅢ. Checkpoint\n정상운영 → 주기적 Checkpoint에 활성 Tx/Dirty Page 등 기록 → 장애 → 마지막 Checkpoint부터 Analysis → REDO → UNDO\n- 전체 Log Scan 범위를 줄여 Recovery Time을 단축한다.\n\nⅣ. Shadow Paging\n- Current Page Table과 Shadow Page Table을 분리하고 수정은 새 페이지에 기록한다. Commit 시 포인터를 원자적으로 전환한다.\n- 장점: Undo/Redo Log 부담 감소, 복구 단순\n- 단점: Fragmentation, 페이지 복사/GC, 대규모 동시성 처리에 불리\n\nⅤ. 비교/적용\n- 고성능 DBMS는 일반적으로 WAL + Checkpoint(예: ARIES 계열)를 사용하고, Shadow Paging은 단순·특수 저장구조에 적합하다."
  },
  "135-3-1": {
    "category": "최신 기술 동향",
    "defaultKeywords": "Edge Computing, Cloud, MEC, Autonomous Vehicle, V2X, Maritime, Digital Twin, Low Latency",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- Edge Computing은 데이터 발생지 근처에서 수집·분석·제어를 수행하여 Cloud 왕복 지연, 대역폭, 연결 의존성을 줄이는 분산 컴퓨팅 구조이다.\n\nⅡ. Cloud 환경의 Edge\nDevice/Sensor → Edge Gateway/MEC → Regional Cloud → Central Cloud\n- Edge: 실시간 판단·필터링·캐시\n- Cloud: 대규모 학습·장기 저장·전역 최적화\n- 핵심은 Workload Placement와 Cloud-Edge Orchestration이다.\n\nⅢ. 자율주행 차량 아키텍처\nCamera/LiDAR/Radar → In-vehicle ECU/AI Accelerator(즉시 인지·제어) → Roadside/MEC(V2X 협력인지·HD Map) → Cloud(모델학습·Fleet 관리)\n- Safety-critical 제어는 차량 Edge에서, 협력서비스는 MEC, 비실시간 분석은 Cloud에 배치한다.\n\nⅣ. 해양 자율이동체\nShip/USV Sensor → On-board Edge(항법·충돌회피) → Coastal/5G·Satellite Edge → Maritime Cloud(항로최적화·Digital Twin)\n- 해상은 통신 단절·저대역폭이 빈번하므로 Store-and-Forward, Offline-first, 강건한 보안·OTA가 중요하다.\n\nⅤ. Best Practice\n- Latency, Data Gravity, Privacy, Availability, Cost를 기준으로 기능을 Edge/MEC/Cloud에 분할하고 통합 Observability와 Zero Trust를 적용한다."
  },
  "135-3-2": {
    "category": "시스템보안",
    "defaultKeywords": "Anti-Drone, 탐지, 식별, 무력화, 관리적 조치, 기술적 조치, 보조적 조치, RF, Radar, EO/IR",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- 안티드론 시스템은 비인가/위협 무인항공기를 탐지·식별·추적하고 위험도에 따라 대응·무력화하는 Counter-UAS 체계이다. TTAK.KO-10.1460 계열은 참조구조와 탐지·식별·무력화 등 하위 시스템의 역할/요구사항을 다룬다.\n\nⅡ. 참조구조\n1) 관리적 조치: 운용정책, 관제, 승인/법적 절차, 기관 협업\n2) 기술적 조치: 탐지 → 식별/분류 → 추적/위협평가 → 무력화 → 결과확인\n3) 보조적 조치: 경보, 상황전파, 증거/로그, 시설·인력 대응\n\nⅢ. 기술적 조치 구조\n- Detection: Radar, RF Scanner, EO/IR, Acoustic 등 Multi-Sensor\n- Identification/Tracking: Sensor Fusion, Drone/Controller 식별, 궤적/위험도 분석\n- Neutralization: RF/GNSS Jamming·Spoofing, Protocol Takeover, 물리적 대응 등 법적 허용범위 내 선택\n- C2/Interface: Sensor/Subsystem 데이터 표준화와 통합 관제\n\nⅣ. 설계 고려사항\n- 오탐/미탐, 다중 드론, 도심 전파환경, 안전한 무력화, 개인정보, 전파법/항공안전 규제, Cybersecurity를 함께 고려한다.\n\nⅤ. 발전\n- AI Sensor Fusion과 Remote ID 연계, 다중 드론 협업위협 대응, 표준 인터페이스 기반 모듈화가 중요하다."
  },
  "135-3-3": {
    "category": "시스템보안",
    "defaultKeywords": "Zero Trust, Never Trust Always Verify, Identity, Device, Network, Application, Data, Visibility, Automation, Maturity",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의 및 핵심원칙\n- Zero Trust는 네트워크 내·외부 위치를 신뢰 근거로 삼지 않고 모든 접근 요청을 지속적으로 검증하는 보안모델이다. 핵심은 'Never Trust, Always Verify', 최소권한, 침해 가정이다.\n\nⅡ. 보안모델 구성요소\n- Identity: 강한 인증·Context 기반 접근\n- Device/Endpoint: 자산식별·보안상태 평가\n- Network: Micro-Segmentation, 암호화\n- Application/Workload: 서비스 ID·정책기반 통신\n- Data: 분류·암호화·DLP·세밀한 권한\n- Visibility/Analytics & Automation/Orchestration: Telemetry, 위험평가, 동적 정책집행\n\nⅢ. 성숙도 4단계 관점\n- 전통/초기: Perimeter 중심, 정적 권한, 가시성 제한\n- 기본: MFA·자산식별·부분적 세분화, 핵심영역부터 ZT 적용\n- 향상: 통합 Identity/Device Risk, 동적 정책, 광범위 Micro-segmentation, 중앙 분석\n- 최적: 실시간 Risk 기반 지속 검증, 자동화된 Closed-loop 정책·대응, 전사 데이터/워크로드 통합\n※ 실제 수준명·세부 체크항목은 KISA 가이드라인 2.0 체크리스트를 기준으로 확인한다.\n\nⅣ. 도입 절차\n1) 현황/보호대상·Data Flow 식별\n2) 성숙도 진단과 목표수준 설정\n3) 우선 Use Case 선정 및 To-Be Architecture/정책 설계\n4) PoC·단계적 구축(IAM, EDR, ZTNA, Segmentation 등)\n5) Telemetry 통합·정책 자동화\n6) KPI/성숙도 재평가·지속 개선\n\nⅤ. Best Practice\n- 제품 구매가 아니라 Identity·Device·Data 중심의 정책 운영모델 전환으로 접근해야 한다."
  },
  "135-3-4": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "RM, Rate Monotonic, MLQ, SQMS, MQMS, Multiprocessor Scheduling, Load Balancing, Affinity",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- Scheduling은 Ready Task 중 CPU를 할당하는 정책으로, 단일/실시간 환경뿐 아니라 Multicore에서 Queue 구조와 Load Balancing이 성능을 좌우한다.\n\nⅡ. RM(Rate Monotonic)\n- 고정 우선순위 실시간 Scheduling. 주기 T가 짧을수록 높은 우선순위. Deadline=Period인 독립 주기 Task에 적합하다.\n- n개 Task의 충분조건 이용률 U ≤ n(2^(1/n)-1), n→∞ 시 약 69.3%.\n\nⅢ. MLQ(Multi-Level Queue)\n- Ready Queue를 System/Interactive/Batch 등 여러 Queue로 고정 분류하고 Queue 간 우선순위, 내부별 RR/FCFS 등 별도 정책을 사용한다.\n\nⅣ. SQMS vs MQMS\n- SQMS: 모든 CPU가 하나의 Global Ready Queue 공유. Load Balance 단순, Queue Lock 경합·Cache Affinity 저하\n- MQMS: CPU별/그룹별 Local Queue. 확장성과 Cache Affinity 우수, Load Imbalance 가능 → Work Stealing/Migration 필요\n\nⅤ. 설계기준\n- Real-time은 Predictability, 일반 Multicore는 Affinity·Fairness·NUMA·Migration Cost를 함께 고려한다."
  },
  "135-3-5": {
    "category": "최신 기술 동향",
    "defaultKeywords": "Public Blockchain, Private Blockchain, Consortium, Permissioned, Permissionless, Consensus, Governance",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- Blockchain Network는 참여/검증 권한과 Governance 방식에 따라 Public, Private, Consortium(Hybrid 포함)으로 구분한다.\n\nⅡ. 유형\n1) Public/Permissionless: 누구나 참여·검증, 높은 개방성과 탈중앙성, 처리성능·Privacy 제약\n2) Private/Permissioned: 단일 조직이 참여자·권한 통제, 높은 성능·기밀성, 중앙화 위험\n3) Consortium/Federated: 여러 기관이 공동 Governance, 신뢰·성능의 절충, B2B/금융/공급망에 적합\n4) Hybrid: 공개 검증 영역과 비공개 업무영역을 결합\n\nⅢ. 비교축\n- 참여권한, Consensus, TPS/Latency, Privacy, Governance, 비용, 규제 대응\n\nⅣ. 적용\n- 암호자산/공개증명은 Public, 기업 내부 원장은 Private, 다기관 공동업무는 Consortium이 적합하다. 선택 시 '탈중앙성-확장성-보안'과 규제/데이터 공개수준을 함께 평가한다."
  },
  "135-3-6": {
    "category": "컴퓨터 기초이론",
    "defaultKeywords": "Linked List, Node, Pointer, Singly, Doubly, Circular, Array List, O(1), O(n)",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- Linked List는 데이터와 다음(및 이전) 노드 주소를 가진 Node를 비연속 메모리에 연결한 동적 자료구조이다.\n\nⅡ. 구현\n- Singly: [Data|Next] → Node → NULL\n- Doubly: [Prev|Data|Next], 양방향 순회\n- Circular: 마지막 Node가 Head를 가리킴\n- Head/Tail Pointer와 동적 메모리 할당으로 삽입·삭제한다.\n\nⅢ. 적용\n- Queue/Stack, Hash Chaining, LRU List, Graph 인접리스트, 가변 크기 데이터 관리\n\nⅣ. Array List 비교\n- 접근: Array O(1) / Linked O(n)\n- 중간 삽입·삭제: Array 이동 O(n) / 위치를 알면 Linked 연결변경 O(1)\n- 메모리: Array 연속·Cache Friendly / Linked Pointer Overhead·Cache Locality 낮음\n- 크기변경: Array 재할당 가능 / Linked 동적 확장 용이\n\nⅤ. 선택\n- Random Access가 많으면 Array, 빈번한 연결 변경과 동적 구조가 중요하면 Linked List가 적합하다."
  },
  "135-4-1": {
    "category": "최신 기술 동향",
    "defaultKeywords": "CBDC, Retail, Wholesale, Account-based, Token-based, Privacy, Offline Payment, DLT, Monetary Policy",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- CBDC는 중앙은행이 발행하고 국가 법정통화와 동일한 가치로 교환되는 디지털 형태의 중앙은행 화폐이다. 설계 시 화폐의 공공성·안전성과 디지털 결제의 편의성을 동시에 충족해야 한다.\n\nⅡ. 설계 차원\n1) 대상: Retail CBDC(국민/기업) vs Wholesale CBDC(금융기관 결제)\n2) 원장: 중앙집중형 vs DLT, 성능·복원력·거버넌스 비교\n3) 가치/소유: Account-based vs Token-based, Identity와 보유증명 방식\n4) 발행구조: 중앙은행 직접형 vs 2계층형(은행/PSP 중개)\n\nⅢ. 핵심 고려사항\n- Privacy vs AML/KYC 추적성 균형\n- Offline Payment, 이중지불 방지, 분실/복구\n- 초당 처리량, Finality, 24x7 Availability, DR/BCP\n- PQC 등을 고려한 암호민첩성, HSM/Key Management, Endpoint 보안\n- 은행예금 이탈·금융중개 영향, 보유한도/금리정책, 통화정책 파급\n- 접근성, 디지털 소외, 기존 지급결제망·Cross-border 상호운용\n\nⅣ. Architecture 예\nWallet → Bank/PSP → CBDC Platform/Ledger → Central Bank\n              ↘ IAM/AML, Fraud, Key Mgmt, Monitoring\n\nⅤ. 제언\n- Privacy-by-Design, 단계적 Pilot, 제한적 Offline·보유한도, 개방형 표준과 보안성 검증을 병행해야 한다."
  },
  "135-4-2": {
    "category": "최신 기술 동향",
    "defaultKeywords": "Smart City Data Governance, Data Ownership, Metadata, Quality, Privacy, Data Space, Urban Data Platform, Lifecycle",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- Smart City Data Governance는 도시에서 생성·수집·공유·활용·폐기되는 데이터를 공공가치와 시민권리를 보장하도록 정책·조직·표준·기술로 통제하는 체계이다.\n\nⅡ. 거버넌스 구조\nPolicy/Principle → Governance Council/CDO → Data Owner·Steward → Urban Data Platform → Service Provider/Citizen\n- 공공·민간·IoT·공간 데이터 등 다수 이해관계자를 포괄한다.\n\nⅢ. 핵심 관리영역\n1) Ownership/Responsibility: 소유·관리·활용 책임 R&R\n2) Standard/Metadata: 공통 모델, API, Catalog, Semantic Interoperability\n3) Quality: 정확성·완전성·최신성·정합성 KPI\n4) Security/Privacy: 분류, 최소수집, 가명처리, 접근통제, Audit\n5) Lifecycle: 수집→저장→공유→활용→보존/폐기\n6) Sharing/Value: Open Data, Data Space, 데이터 결합 및 이용조건\n\nⅣ. 운영 프로세스\nUse Case/KPI 정의 → 데이터 인벤토리/등급 → 표준·품질규칙 → 권한·동의·계약 → API/Data Space 공유 → 사용량·품질·위험 모니터링 → 개선\n\nⅤ. 성공요건\n- '플랫폼 구축'보다 데이터 책임체계와 신뢰규칙이 우선이며, 시민 참여·알고리즘 투명성·데이터 주권·상호운용성을 핵심 원칙으로 한다."
  },
  "135-4-3": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "L4 Switch, Load Balancer, Active-Active, Active-Standby, Keepalived, Pacemaker, VRRP, Health Check, Failover",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- 서버 이중화는 단일 장애점(SPOF)을 제거하고 장애 시 서비스를 지속하기 위해 Traffic/Service/Data 계층을 복수 노드로 구성하는 HA 기법이다.\n\nⅡ. L4 Switch 기반\nClient → VIP(L4 #1/#2) → Server A / Server B\n- L4가 TCP/UDP 기준 Load Balancing과 Health Check 수행\n- Active-Active 또는 Active-Standby Server 구성, L4 자체도 VRRP/HA로 이중화\n- 장점: 애플리케이션 변경 적고 고성능, 중앙 Traffic 제어\n- 단점: 전용장비 비용·구성 복잡, L4가 또 다른 장애점이 되지 않게 이중화 필요\n\nⅢ. Software 기반\nClient/DNS → HAProxy/Nginx/Keepalived 또는 Cluster Manager → App Nodes\n- VRRP, Keepalived, Pacemaker/Corosync, K8s Service/Ingress 등 활용\n- 장점: 비용·유연성·자동화 우수, Cloud/Container 친화\n- 단점: OS/운영복잡도, 성능/튜닝, 구성 오류 위험\n\nⅣ. 비교\n- 성능/예측성: L4 우수 / SW는 자원·튜닝 의존\n- 비용: L4 높음 / SW 낮음\n- 유연성·IaC: L4 제한적 / SW 우수\n- 운영: 장비 중심 / DevOps·Platform 중심\n\nⅤ. Best Practice\n- Load Balancer만 이중화해서 끝나지 않으며 Stateless App, Session 외부화, DB Replication, Health Check, Split-brain 방지, RTO/RPO 기반 DR Test까지 설계한다."
  },
  "135-4-4": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "Zero Downtime Deployment, Rolling, Blue-Green, Canary, Feature Flag, Readiness Probe, Database Migration",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- Zero Downtime Deployment는 신규 버전 배포 중에도 사용자 요청을 지속 처리하여 서비스 중단을 체감하지 않도록 하는 배포전략이다.\n\nⅡ. 주요 방식\n1) Rolling: Instance를 일부씩 교체. 비용 효율적이나 구/신버전 공존 호환성 필요\n2) Blue-Green: Blue(현행)/Green(신규) 환경을 병렬 구성 후 Traffic 일괄 전환. Rollback 빠르나 자원비용 큼\n3) Canary: 일부 사용자/Traffic부터 신규버전에 보내 KPI 확인 후 점진 확대. 위험 최소화, Observability 필수\n4) Shadow/Dark Launch + Feature Flag: 실제 Traffic 복제 또는 기능 노출을 제어하여 검증\n\nⅢ. 핵심 Architecture\nCI → Build/Image → Deploy New → Readiness/Health Check → LB Traffic Shift → Observe → Promote/Rollback\n\nⅣ. 난제와 대응\n- DB Schema: Expand-and-Contract, Backward Compatible Migration\n- Session: Stateless/JWT/External Session Store\n- 메시지/API: Versioning·Consumer Compatibility\n- 장애감지: SLI/SLO, Error Rate, Latency, Business KPI\n\nⅤ. Best Practice\n- Immutable Artifact, Automated Test, Progressive Delivery, 자동 Rollback, Feature Flag 수명관리로 배포 위험을 제어한다."
  },
  "135-4-5": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "Fault Tolerance, High Availability, Redundancy, Failover, TMR, Replication, RTO, RPO, Quorum",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개념\n- Fault Tolerance(FT): 구성요소에 고장이 발생해도 오류를 숨기거나 즉시 보정하여 서비스 기능을 계속 제공하는 능력\n- High Availability(HA): 장애 빈도와 복구시간을 줄여 서비스 가동률을 높이는 설계. 짧은 Failover는 허용될 수 있다.\n\nⅡ. FT 기법\n1) Hardware: Dual PSU/NIC, RAID, ECC, Lockstep, TMR, Hot Spare\n2) Software: Process Redundancy, Watchdog, Retry/Timeout, Circuit Breaker, N-Version, Checkpoint/Restart\n3) Data: Replication, Mirroring, WAL, Snapshot, Erasure Coding, Consensus/Quorum\n\nⅢ. HA 구성\n- Active-Standby: 단순·일관성 유리, 유휴자원 발생\n- Active-Active: 처리량/자원효율 우수, 동기화·분산일관성 복잡\n- N+1/N+M, Load Balancer + Cluster, Multi-AZ/Region, Automated Failover\n\nⅣ. 비교\n- 목표: FT=고장 자체를 서비스에 노출하지 않음 / HA=Down Time 최소화\n- 비용: FT 일반적으로 높음 / HA 상대적으로 경제적\n- 지표: FT는 Fault Coverage/Continuity, HA는 Availability·MTBF·MTTR·RTO/RPO\n\nⅤ. Best Practice\n- 업무 중요도에 따라 Tier를 정하고, 장애영역(Failure Domain)을 분리하며, Quorum/Split-brain 대책과 정기 Chaos/DR Test로 설계가 실제 작동하는지 검증한다."
  },
  "135-4-6": {
    "category": "하드웨어 시스템",
    "defaultKeywords": "Pipeline Hazard, Structural Hazard, Data Hazard, RAW, WAR, WAW, Control Hazard, Forwarding, Stall, Branch Prediction",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- Pipeline Hazard는 여러 명령어를 겹쳐 실행할 때 다음 단계가 예정된 Clock에 정상 수행되지 못하게 하는 충돌로, 성능 저하의 주요 원인이다.\n\nⅡ. 유형별 원인\n1) Structural Hazard: 동일 Cycle에 둘 이상의 명령이 같은 HW 자원(ALU, Memory Port 등)을 요구\n2) Data Hazard: 명령 간 Operand 의존성\n- RAW(True Dependency): 선행 Write 전에 후행 Read\n- WAR(Anti Dependency): 선행 Read 전에 후행 Write\n- WAW(Output Dependency): Write 순서 역전\n3) Control Hazard: Branch/Jump 결과·Target이 확정되기 전에 다음 명령을 Fetch\n\nⅢ. 해결방법\n- Structural: 자원 Duplication, I/D Cache 분리, Multi-port, Scheduling\n- RAW: Forwarding/Bypassing, Interlock, Stall/NOP, Compiler Scheduling\n- WAR/WAW: Register Renaming, In-order Commit\n- Control: Static/Dynamic Branch Prediction, BTB, Speculative Execution, Delayed Branch, Mispredict 시 Flush\n\nⅣ. 고성능 CPU 관점\nIF → ID → EX → MEM → WB 파이프라인에 Out-of-Order, Register Renaming, Reorder Buffer를 결합하여 ILP를 높이되, Speculation은 보안·전력·복잡도 Trade-off를 가진다."
  }
};
