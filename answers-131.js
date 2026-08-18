window.ANSWERS_131 = {
  "131-1-1": {
    "category": "컴퓨터 기초이론",
    "defaultKeywords": "Monte Carlo, Random Sampling, Probability, Simulation, Estimation, Law of Large Numbers",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 정의\n- Monte Carlo Method는 난수(Random Sampling)를 반복 생성하여 확률적 실험을 수행하고, 복잡한 문제의 수치해·확률·기대값을 근사하는 계산 방법이다.\n\nⅡ. 절차\nProblem Modeling\n → Probability Distribution 정의\n → Random Sampling\n → Simulation 반복\n → Statistics/Average\n → Result Estimation\n\nⅢ. 특징\n- 해석적 계산이 어려운 문제를 근사 가능\n- 표본 수 증가 시 대수의 법칙에 의해 추정치 안정화\n- 병렬처리가 용이하나 높은 정확도에는 많은 반복 필요\n\nⅣ. 활용\n- 원주율 추정, Risk Analysis, 금융 VaR\n- Reliability/Availability 평가\n- AI의 Monte Carlo Tree Search\n- Particle Transport, 제조/물류 Simulation\n\nⅤ. 기술사 포인트\n정확도는 Sample 수·분산에 좌우되므로 Variance Reduction, Parallel Computing으로 효율을 높인다."
  },
  "131-1-2": {
    "category": "컴퓨터 통신 및 네트워크",
    "defaultKeywords": "NaaS, Network as a Service, SDN, NFV, Cloud, API, On-demand Network, SASE",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 정의\n- NaaS(Network as a Service)는 Network 기능과 연결자원을 Cloud 방식으로 추상화하여 사용자가 필요한 만큼 On-demand로 이용하는 서비스 모델이다.\n\nⅡ. 구조\nUser/Enterprise\n   ↓ Portal/API\nNaaS Platform\n ├ SDN Controller\n ├ Policy/Automation\n ├ NFV/Security\n └ Monitoring\n   ↓\nWAN/LAN/Internet/Cloud Network\n\nⅢ. 제공기능\n- Bandwidth on Demand, VPN/SD-WAN\n- Firewall/Security Service\n- Cloud Interconnect\n- QoS, Routing, Monitoring\n\nⅣ. 장점\n- CAPEX→OPEX 전환, 빠른 Provisioning\n- API 기반 자동화와 중앙정책\n- Multi-cloud 연결 단순화\n\nⅤ. 고려사항\n- SLA/Latency, Vendor Lock-in\n- Data/Control Plane 보안\n- 장애 시 Provider 의존성\n\nⅥ. 발전\nNaaS는 SDN/NFV, SASE, Zero Trust Network Access와 결합해 정책 중심 Network Service로 발전한다."
  },
  "131-1-3": {
    "category": "최신 기술 동향",
    "defaultKeywords": "Autoencoder, Encoder, Latent Vector, Decoder, Reconstruction Error, Anomaly Detection, VAE",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 정의\n- Autoencoder는 입력을 저차원의 잠재표현(Latent Representation)으로 압축한 후 다시 원본으로 복원하도록 학습하는 비지도/자기지도 Neural Network이다.\n\nⅡ. 구조\nInput x → Encoder → Latent z → Decoder → Reconstructed x'\n                Loss = ||x - x'||²\n\nⅢ. 핵심\n- Encoder: Feature 압축\n- Bottleneck: 핵심 잠재특징 표현\n- Decoder: 입력 복원\n- Reconstruction Loss 최소화\n\nⅣ. 유형/활용\n- Denoising Autoencoder: Noise 제거\n- Sparse Autoencoder: 희소 Feature 학습\n- VAE: 확률적 잠재공간 기반 생성\n- 이상탐지, 차원축소, Feature Learning\n\nⅤ. 장단점\n- Label 없이 Representation 학습 가능\n- 정상 Data 위주 학습 시 이상탐지에 효과적\n- 단순 AE는 Identity Mapping 위험 → Bottleneck/Regularization 필요"
  },
  "131-1-4": {
    "category": "최신 기술 동향",
    "defaultKeywords": "Transfer Learning, Pretrained Model, Fine-tuning, Feature Extraction, Domain Adaptation, Foundation Model",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 정의\n- Transfer Learning은 한 Domain/Task에서 학습한 Model의 지식을 다른 관련 Domain/Task에 재사용하여 학습 Data와 시간을 줄이는 기법이다.\n\nⅡ. 방식\nPretrained Model\n ├ Feature Extraction: Backbone 고정\n └ Fine-tuning: 일부/전체 Parameter 재학습\n        ↓\nTarget Task Model\n\nⅢ. 장점\n- 적은 Label Data로 높은 성능\n- Training 시간·GPU 비용 절감\n- 범용 Feature 재사용\n\nⅣ. 고려사항\n- Source/Target Domain 차이가 크면 Negative Transfer\n- Fine-tuning 시 Catastrophic Forgetting\n- Data Bias와 License/보안 검토\n\nⅤ. 최신 적용\nFoundation Model + PEFT(LoRA/Adapter) + RAG를 조합하여 Domain 특화 AI를 구현한다."
  },
  "131-1-5": {
    "category": "컴퓨터 시스템 평가",
    "defaultKeywords": "ATAM, CBAM, Architecture Evaluation, Quality Attribute, Scenario, Trade-off, Sensitivity Point, Utility, Cost Benefit",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 정의\n- ATAM은 Architecture의 Quality Attribute 간 Trade-off를 Scenario 기반으로 분석하는 평가방법이다.\n- CBAM은 ATAM 결과에 Cost와 Benefit을 추가해 Architecture 투자대안의 우선순위를 정하는 방법이다.\n\nⅡ. ATAM\nBusiness Driver\n → Quality Attribute Scenario\n → Architecture Approach\n → Sensitivity / Trade-off / Risk Point 도출\n\n주요결과\n- Risk/Non-risk\n- Sensitivity Point\n- Trade-off Point\n\nⅢ. CBAM\nArchitecture Strategy별\nBenefit(Utility 증가) / Cost / Risk\n → ROI 관점 우선순위 결정\n\nⅣ. 비교\nATAM: 기술적 Architecture 품질 Trade-off 중심\nCBAM: 경제성까지 포함한 의사결정 중심\n\nⅤ. 활용\n대규모 System의 Performance, Security, Availability, Modifiability 간 충돌을 사전에 가시화하고 투자효율을 판단한다."
  },
  "131-1-6": {
    "category": "하드웨어 시스템",
    "defaultKeywords": "PNM, Processing Near Memory, Memory Wall, Near-data Processing, HBM, CXL, Accelerator",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 정의\n- PNM(Processing Near Memory)은 CPU와 Memory 간 Data 이동 비용을 줄이기 위해 연산 Unit을 Memory 칩 내부가 아니라 '가까운 위치'에 배치하는 Near-data Processing 기술이다.\n\nⅡ. 배경\nCPU 성능 ↑\nMemory Bandwidth/Latency 개선은 상대적으로 완만\n→ Memory Wall + Data Movement Energy 증가\n\nⅢ. 구조\nCPU ↔ Interconnect ↔ [Memory + Near-memory Accelerator]\n                         ↑ 가까운 연산\n\nⅣ. 장점\n- Memory Bandwidth 병목 완화\n- Data Movement 감소로 전력효율 향상\n- AI, Graph, DB Scan 등 Data-intensive Workload에 유리\n\nⅤ. PIM과 비교\n- PIM: Memory 내부/Die에 연산기 통합\n- PNM: Memory 인접 Logic/Controller/Package에서 연산\n\nⅥ. 발전\nHBM, 2.5D/3D Packaging, CXL Memory, Chiplet과 결합된 Near-memory Computing이 중요해지고 있다."
  },
  "131-1-7": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "CAP Theorem, Consistency, Availability, Partition Tolerance, NoSQL, CP, AP, Distributed System",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 정의\n- CAP 정리는 Network Partition이 발생하는 분산 System에서 Consistency(C)와 Availability(A)를 동시에 완벽히 보장할 수 없으므로 둘 중 하나를 우선 선택해야 한다는 원리이다.\n\nⅡ. 3요소\n- C: 모든 Node가 동일한 최신 Data를 보장\n- A: 모든 요청에 정상 응답\n- P: Network 분할 상황에서도 System 지속 동작\n\nⅢ. 유형\n- CP: 일관성 우선, 일부 요청 거절 가능\n- AP: 가용성 우선, 일시적 불일치 허용\n- CA: Partition을 현실적으로 배제할 수 있는 단일/강결합 환경\n\nⅣ. NoSQL 관점\nDistributed DB는 Partition을 현실적 전제로 하므로 CP/AP Trade-off가 핵심이다.\n\nⅤ. 실무\nStrong/Eventual Consistency를 업무단위로 선택하고, 금융 Transaction과 SNS Feed를 동일 Consistency 정책으로 설계하지 않는다."
  },
  "131-1-8": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "RPA, Robotic Process Automation, Rule Based, Bot, OCR, Workflow, Process Mining, Hyperautomation",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 정의\n- RPA는 사람이 반복 수행하는 Rule-based 사무업무를 Software Robot이 UI/Application을 조작하여 자동화하는 기술이다.\n\nⅡ. 구성\nTrigger/Schedule\n → Bot\n → UI/API/Excel/Web/ERP\n → Rule/Workflow\n → Result/Log\n\nⅢ. 적합 업무\n- 반복적·정형적\n- 명확한 Rule\n- 대량 Transaction\n- System 간 단순 Data 이동\n\nⅣ. 장단점\n- 기존 System 수정 없이 빠른 자동화\n- Human Error와 처리시간 감소\n- UI 변경에 취약, 복잡한 판단업무 한계\n\nⅤ. 발전\nOCR/NLP/AI + Process Mining + Workflow를 결합한 Hyperautomation으로 확장된다."
  },
  "131-1-9": {
    "category": "컴퓨터 기초이론",
    "defaultKeywords": "Time Complexity, Space Complexity, Big O, Big Theta, Big Omega, Algorithm Analysis",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 정의\n- 시간복잡도는 입력 크기 n 증가에 따른 연산횟수 증가율이며, 공간복잡도는 Algorithm 실행에 필요한 Memory 사용량 증가율이다.\n\nⅡ. 표기\n- O(g(n)): 점근적 상한\n- Ω(g(n)): 점근적 하한\n- Θ(g(n)): 상·하한이 같은 Tight Bound\n\nⅢ. 대표 시간복잡도\nO(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)\n\nⅣ. 공간복잡도\nTotal Space = Fixed Space + Variable/Auxiliary Space\n- Recursive Call Stack, Temporary Array 등이 포함\n\nⅤ. Trade-off\nHash Table, Memoization처럼 Memory를 더 사용하여 실행시간을 줄이는 Time-Space Trade-off가 존재한다.\n\nⅥ. 실무\nBig-O만 보지 말고 실제 Data Size, Cache Locality, I/O, Constant Factor를 함께 평가해야 한다."
  },
  "131-1-10": {
    "category": "법규·정책·표준",
    "defaultKeywords": "지능정보화 기본법, 지능정보사회, 국가 지능정보화, 정보격차, 디지털 포용, 데이터, AI",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 개요\n- 「지능정보화 기본법」은 지능정보사회 정책의 기본방향과 국가·지자체의 책무, 지능정보화 추진체계 및 정보격차 해소 등의 기반을 규정하는 기본법이다.\n\nⅡ. 주요 내용\n- 국가 지능정보화 기본방향과 추진체계\n- 지능정보기술·서비스의 사회적 활용 촉진\n- 공공·민간 Data와 지능정보기술 활용 기반\n- 디지털 접근성 및 정보격차 해소\n- 지능정보사회 역기능 대응과 이용자 보호\n- 전문인력·산업·기반조성\n\nⅢ. 정책방향\nDigital Transformation\n → AI/Data 활용\n → 공공서비스 혁신\n → 산업 경쟁력\n → Digital Inclusion/Trust\n\nⅣ. 기술사 포인트\n기술 확산 자체보다 '혁신 + 포용 + 안전·신뢰'의 균형 관점으로 정리하는 것이 중요하다."
  },
  "131-1-11": {
    "category": "법규·정책·표준",
    "defaultKeywords": "xAPI, Experience API, Tin Can API, LRS, Statement, Actor Verb Object, Learning Analytics",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 정의\n- xAPI(eXperience API)는 다양한 학습 경험을 'Actor-Verb-Object' 형태의 Statement로 기록하여 Learning Record Store(LRS)에 저장·활용하는 학습경험 추적 표준이다.\n\nⅡ. 구조\nLearner/Device/App\n → \"Kim completed Course-A\"\n → xAPI Statement\n → LRS\n → LMS/Analytics\n\nⅢ. Statement\n- Actor: 누가\n- Verb: 무엇을 했는가\n- Object: 무엇에 대해\n- Result/Context/Timestamp 추가 가능\n\nⅣ. SCORM 대비 특징\n- LMS 내부 Course 중심 제약을 완화\n- Mobile, Simulation, Game, Offline Experience 추적\n- LRS 기반 Learning Analytics 가능\n\nⅤ. 활용\n직무교육·VR Simulation·현장훈련·Adaptive Learning의 통합 학습이력 관리에 활용한다."
  },
  "131-1-12": {
    "category": "법규·정책·표준",
    "defaultKeywords": "CBPR, Cross Border Privacy Rules, APEC, Cross Border Data, Accountability Agent, Privacy Protection",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 정의\n- CBPR(Cross Border Privacy Rules)은 국경 간 개인정보 이전 시 참여 기업의 개인정보 보호 수준과 책임성을 인증·검증하여 Data 활용과 Privacy 보호를 조화시키기 위한 국제적 인증체계이다.\n\nⅡ. 핵심\n- 기업의 Privacy Policy와 실제 운영통제 평가\n- 독립된 Accountability Agent의 심사\n- 국경 간 Data 처리에 대한 책임성 확보\n- 참여 경제권 간 상호신뢰 기반\n\nⅢ. 기대효과\n- Cross-border Data Flow의 예측가능성 향상\n- 글로벌 기업의 중복 Compliance 부담 완화\n- 정보주체 권리·보호조치 강화\n\nⅣ. 고려\nCBPR 인증만으로 각 국가의 개인정보보호 법령상 이전요건이 자동 면제되는 것은 아니므로 국내법·계약·보호조치를 함께 준수해야 한다."
  },
  "131-1-13": {
    "category": "시스템보안",
    "defaultKeywords": "CSRF, Cross Site Request Forgery, Session Cookie, SameSite, CSRF Token, Origin, Referer",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 정의\n- CSRF는 인증된 사용자의 Browser가 공격자가 만든 요청을 신뢰 Site로 전송하게 하여 사용자의 의도와 무관한 행위를 수행시키는 공격이다.\n\nⅡ. 공격\n1) 사용자가 Bank에 Login → Session Cookie 보유\n2) 악성 Site 방문\n3) 공격자가 Transfer Request 강제 전송\n4) Browser가 Cookie를 자동 첨부\n5) Server가 정상 사용자 요청으로 오인\n\nⅢ. 대응\n- CSRF Token\n- SameSite Cookie\n- Origin/Referer 검증\n- 중요행위 Re-authentication/MFA\n- GET에 상태변경 기능 금지\n\nⅣ. XSS와 차이\n- CSRF: 사용자 인증상태 악용\n- XSS: 신뢰 Site 내 Script 실행\n둘 모두 Output Encoding, CSP, Session Security 등 Web Security를 함께 적용한다."
  },
  "131-2-1": {
    "category": "최신 기술 동향",
    "defaultKeywords": "MDP, Markov Decision Process, Transition Probability, State Value, Action Value, Bellman Equation, Reinforcement Learning",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. MDP 개요\n- MDP는 환경이 Markov Property를 만족할 때 Agent의 순차적 의사결정을 모델링하는 수학적 Framework이다.\n- 구성: <S, A, P, R, γ>\n\nⅡ. 전이확률\nP(s'|s,a) = Pr(Sₜ₊₁=s' | Sₜ=s, Aₜ=a)\n- 현재 상태 s와 행동 a가 주어졌을 때 다음 상태 s'로 이동할 확률\n\nⅢ. 가치함수\n1) 상태가치\nVπ(s) = Eπ[Gₜ | Sₜ=s]\n- Policy π를 따를 때 상태 s의 기대 누적보상\n\n2) 행동가치\nQπ(s,a) = Eπ[Gₜ | Sₜ=s, Aₜ=a]\n- 상태 s에서 행동 a 후 π를 따를 때 기대 누적보상\n\nⅣ. Bellman 기대방정식\nVπ(s)=Σa π(a|s) Σs' P(s'|s,a)[R(s,a,s')+γVπ(s')]\n\nQπ(s,a)=Σs'P(s'|s,a)[R+γΣa'π(a'|s')Qπ(s',a')]\n\nⅤ. Bellman 최적방정식\nV*(s)=max_a Σs'P(s'|s,a)[R+γV*(s')]\nQ*(s,a)=Σs'P(s'|s,a)[R+γ max_a'Q*(s',a')]\n\nⅥ. 의미\n- Expectation: 주어진 Policy의 Value 평가\n- Optimality: 가능한 행동 중 최대 Value 선택\n→ Value Iteration, Q-learning의 이론적 기반\n\nⅦ. 실무 포인트\n실제 문제에서는 State 설계, Reward Shaping, Exploration/Exploitation과 Markov 가정의 적합성이 성능을 좌우한다."
  },
  "131-2-2": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "Thrashing, Page Fault, Working Set, Virtual Memory, Local Replacement, Page Fault Frequency, Multiprogramming",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 정의\n- Thrashing은 Virtual Memory에서 Process의 Working Set보다 할당 Frame이 부족하여 Page Fault와 Page Swap이 과도하게 발생하고 CPU Utilization이 급락하는 현상이다.\n\nⅡ. 발생과정\nMultiprogramming 증가\n → Process별 Frame 부족\n → Page Fault 증가\n → Disk I/O 증가\n → CPU Idle 증가\n → OS가 추가 Process 투입\n → 더 심한 Thrashing\n\nⅢ. 원인\n- 물리 Memory 부족\n- 과도한 Multiprogramming\n- Working Set 미고려\n- Global Replacement로 Process 간 Frame 경쟁\n- Locality가 나쁜 Access Pattern\n\nⅣ. 해결\n1) Working Set Model\n- 일정 Window Δ 내 참조 Page 집합을 보장\n\n2) Page Fault Frequency(PFF)\n- Page Fault율 상한 초과 → Frame 추가\n- 하한 미만 → Frame 회수\n\n3) Multiprogramming Degree 감소\n4) Local Replacement\n5) RAM 증설 / Memory Leak 제거\n\nⅤ. Monitoring\nPage Fault/sec ↑ + Disk I/O ↑ + CPU Utilization ↓가 전형적 징후이다.\n\nⅥ. Best Practice\n단순 Swap 증설보다 Working Set과 Memory Pressure를 측정하고 Container/VM Memory Limit을 현실적으로 설정해야 한다."
  },
  "131-2-3": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "Database Capacity Planning, Analogous, Trend Analysis, Transaction Based, Data Growth, Index, Backup, Margin",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 개요\n- DB 용량산정은 현행 Data량과 업무증가율을 기반으로 Table·Index·Temp·Log·Backup을 포함한 TO-BE 저장공간을 예측하는 활동이다.\n\nⅡ. 산정방법\n1) 유사사례 기반\n- 유사 System의 사용자·Transaction·DB Size를 보정\n장점: 빠름\n단점: 업무차이 반영 한계\n\n2) 증가율/추세 기반\nFuture Size = Current Size × (1+Growth Rate)^Period\n장점: 현행 Data 기반 간단\n단점: 사업변화/신규업무 반영 한계\n\n3) 업무량/Record 기반 Bottom-up\nΣ(Record Length × Row Count × Growth)\n+ Index + LOB + Overhead\n장점: 근거 명확\n단점: 상세 Data 필요\n\nⅢ. 용량산정 기준\n- Table별 Record Length/건수\n- 신규/삭제/보존기간\n- Daily/Monthly Transaction\n- Index 크기와 Fill Factor\n- LOB/첨부파일\n- Undo/Redo/Transaction Log\n- Temp/Sort Space\n- Replication/HA/Backup\n- Growth Margin 및 Peak\n\nⅣ. 예시\nTO-BE DB =\nBusiness Data\n+ Index\n+ System Area\n+ Log/Temp\n+ Backup/Replica\n+ Growth/Safety Margin\n\nⅤ. Best Practice\n평균 증가율만 사용하지 말고 Peak Business Event, 법적 보존기간, Partition/Compression 정책을 함께 반영한다."
  },
  "131-2-4": {
    "category": "컴퓨터 통신 및 네트워크",
    "defaultKeywords": "SDN, Machine Learning, Reinforcement Learning, Controller, Telemetry, Policy, QoS, Routing, Closed Loop",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. SDN에 ML을 적용하는 이유\n- 기존 Network는 분산된 Device별 Rule과 수동설정으로 Traffic 변화 대응이 느리다.\n- SDN은 Control Plane을 Controller에 논리적으로 집중시켜 Network-wide 상태를 수집하고 정책을 자동 적용할 수 있어 ML 적용에 적합하다.\n\nⅡ. Architecture\nSwitch/Router Telemetry\n      ↓\nSDN Controller\n      ↓ State/Data\nML/RL Engine\n      ↓ Policy/Action\nSDN Controller\n      ↓ Flow Rule\nData Plane\n\nⅢ. 적용효과\n- Traffic Prediction\n- Dynamic Routing/Load Balancing\n- QoS 최적화\n- Anomaly/DDoS Detection\n- Energy Saving\n\nⅣ. SDN에서 강화학습 적용\n1) State\n- Link Utilization, Delay, Loss, Queue, Flow Demand\n\n2) Action\n- Path 변경, Flow Rule, Queue/QoS, Bandwidth Allocation\n\n3) Reward\n- Throughput ↑, Delay/Loss ↓, Congestion ↓, SLA 위반 Penalty\n\n4) Loop\nObserve → State → RL Policy → Action → Network → Reward → Update\n\nⅤ. 고려사항\n- Exploration에 의한 운영망 장애 Risk\n- State Space 폭증\n- Reward 설계 오류\n- Delayed/Partial Observation\n- Model Poisoning/Adversarial Risk\n\nⅥ. Best Practice\nDigital Twin/Simulator에서 먼저 학습하고, Production에서는 Guardrail·Policy Constraint·Human Approval을 둔 Safe RL이 필요하다."
  },
  "131-2-5": {
    "category": "하드웨어 시스템",
    "defaultKeywords": "Chiplet, Die, Advanced Packaging, Interposer, UCIe, 2.5D, 3D, TSV, Yield, Heterogeneous Integration",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 정의\n- Chiplet은 하나의 대형 SoC를 기능별 작은 Die로 분할하고 Package 내부에서 고속 Interconnect로 연결하여 하나의 System처럼 동작하게 하는 설계방식이다.\n\nⅡ. 구조\n[CPU Die] [GPU Die] [I/O Die] [AI Die] [HBM]\n      ↘   High-speed Die-to-Die   ↙\n          Interposer/Package\n\nⅢ. 장점\n- 작은 Die로 수율(Yield) 향상\n- 검증된 IP Die 재사용\n- Process Node 혼합 가능\n  예) CPU 3nm + I/O 7nm\n- 제품군 확장과 개발기간 단축\n- HBM/Accelerator와 Heterogeneous Integration 용이\n\nⅣ. 연결방법\n1) 2.5D Interposer\n- Silicon Interposer 위에 여러 Die 배치\n\n2) Organic/Advanced Package\n- Package Substrate/Bridge 활용\n\n3) 3D Stacking\n- TSV/Hybrid Bonding으로 수직 적층\n\n4) Die-to-Die Interface\n- UCIe 등 표준화 Interface 활용\n\nⅤ. 과제\n- Die 간 Latency/Bandwidth\n- Package 전력/열\n- Test/Known Good Die\n- Coherence/Protocol\n- 공급망 및 IP 상호운용성\n\nⅥ. 최신 관점\nChiplet은 Moore's Law 보완수단으로 CPU·GPU·NPU·CXL/HBM을 Package 수준에서 조합하는 핵심기술이다."
  },
  "131-2-6": {
    "category": "최신 기술 동향",
    "defaultKeywords": "Cloud, IaaS, PaaS, SaaS, Public Cloud, Private Cloud, Hybrid Cloud, Community Cloud, MSP",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. Cloud Service 개요\n- Cloud Computing은 공유된 IT Resource를 Network를 통해 On-demand로 제공하고 사용량 기반으로 확장·과금하는 Computing Model이다.\n\nⅡ. IT 자원 유형에 따른 분류\n1) IaaS\n- VM, Storage, Network 제공\n- 사용자가 OS/App 관리\n\n2) PaaS\n- Runtime, Middleware, DB, Dev Platform 제공\n- 사용자는 App/Data 중심 관리\n\n3) SaaS\n- 완성된 Application을 Service로 이용\n- Provider 관리범위가 가장 큼\n\nⅢ. 서비스 개방 여부에 따른 분류\n- Public Cloud: 불특정 다수 Tenant를 위한 Provider Cloud\n- Private Cloud: 단일 조직 전용\n- Hybrid Cloud: Public + Private 연계\n- Community Cloud: 공동 목적 조직 간 공유\n\nⅣ. MSP 역할\nMSP(Managed Service Provider)는 고객을 대신해 Cloud의 설계·구축·Migration·운영·보안·비용최적화를 제공한다.\n- Cloud Architecture/landing zone\n- Migration\n- Monitoring/Incident\n- Backup/DR\n- Security/Compliance\n- FinOps/Cost Optimization\n- Multi-cloud Operation\n\nⅤ. Best Practice\nCloud 도입은 단순 Hosting 이전이 아니라 Shared Responsibility, IaC, Observability, FinOps, Exit Plan까지 운영모델을 함께 설계해야 한다."
  },
  "131-3-1": {
    "category": "시스템보안",
    "defaultKeywords": "Adversarial Example, White Box, Black Box, FGSM, PGD, Transferability, Adversarial Training, Defense GAN",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 개요\n- Adversarial Example은 사람이 인지하기 어려운 작은 Perturbation을 입력에 추가하여 AI Model이 잘못된 예측을 하게 만드는 공격 Input이다.\n\nⅡ. White-box Attack\n- 공격자가 Model 구조, Parameter, Gradient를 알고 있음\n- FGSM, PGD, C&W 등 Gradient 기반 공격 가능\n\n장점(공격자)\n- 높은 공격 성공률\n- 정밀한 Perturbation 생성\n\n단점\n- Model 내부정보 필요\n\nⅢ. Black-box Attack\n- 내부정보 없이 Query 결과 또는 Substitute Model 활용\n- Transferability, Query-based Optimization 이용\n\n장점\n- 실제 API 공격에 현실적\n\n단점\n- 많은 Query와 시간 필요\n- 성공률이 White-box보다 낮을 수 있음\n\nⅣ. Adversarial Training\nClean Sample + Adversarial Sample\n → Model Training\n → Robust Model\n\n- Min-Max Optimization으로 공격 Example을 학습과정에 포함\n장점: 알려진 공격에 강한 대표 방어\n단점: Training 비용 증가, 새로운 Attack에 완전하지 않음\n\nⅤ. Defense GAN\nInput → GAN-based Reconstruction → Purified Input → Classifier\n- 정상 Data Manifold에 가깝게 Input을 복원하여 Perturbation 제거 시도\n\n장점\n- Classifier 수정 없이 Preprocessing 가능\n단점\n- GAN 자체 품질/연산비용, Adaptive Attack에 취약 가능\n\nⅥ. 종합대책\nRobust Training + Input Detection + Model Monitoring + Ensemble + Rate Limit을 결합하고 Attack Success Rate를 지속 평가한다."
  },
  "131-3-2": {
    "category": "시스템보안",
    "defaultKeywords": "De-identification, Pseudonymization, Anonymization, Masking, Generalization, Suppression, K-anonymity, Re-identification",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 개요\n- 개인정보 비식별 처리는 개인을 직접 또는 간접적으로 알아볼 수 있는 식별가능성을 낮춰 Data 활용 시 Privacy Risk를 줄이는 처리이다.\n\nⅡ. 비식별 처리 유형\n1) 가명처리/Pseudonymization\n- 식별자를 별도 Key/대체값으로 치환\n\n2) Masking\n- 주민번호/전화번호 일부를 * 처리\n\n3) Generalization\n- 나이 31 → 30대\n- 상세주소 → 시/도\n\n4) Suppression\n- 식별위험이 큰 Record/Attribute 삭제\n\n5) Aggregation\n- 개인단위 값을 집계값으로 변환\n\n6) Perturbation/Noise\n- 통계적 Noise 추가\n\n7) K-anonymity/L-diversity/T-closeness 등 Privacy Model 적용\n\nⅢ. 위험요인\n- 외부 Data와 결합한 Re-identification\n- Quasi-Identifier 조합\n- 희귀값/Outlier\n- 시간에 따른 공개 Data 증가\n- Linkage Attack\n- 가명 Key/Mapping Table 유출\n\nⅣ. 관리방안\nRisk Assessment\n → 비식별 수준 결정\n → 재식별 가능성 평가\n → Access Control/계약/반출통제\n → 주기적 재평가\n\nⅤ. 핵심\n비식별은 1회성 Masking이 아니라 Data 환경 변화까지 고려한 기술·관리적 Risk Management이다."
  },
  "131-3-3": {
    "category": "하드웨어 시스템",
    "defaultKeywords": "RAID5, RAID6, Distributed Parity, Dual Parity, Minimum Disk, Fault Tolerance, Rebuild",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. RAID 개요\n- RAID는 여러 Disk를 병렬 구성하여 Performance, Capacity, Availability를 향상시키는 Storage 기술이다.\n\nⅡ. RAID 5\n구조: Data Striping + Distributed Single Parity\n예)\nDisk1  D1  D4  P7\nDisk2  D2  P4  D7\nDisk3  P1  D5  D8\n\n- 최소 Disk: 3개\n- 가용용량: (N-1) × Disk Size\n- 허용장애: 1개 Disk\n\n장점\n- 용량효율 우수, Read 성능 양호\n\n단점\n- Write Penalty, Rebuild 중 두 번째 장애에 취약\n\nⅢ. RAID 6\n- Data Striping + Distributed Dual Parity\n- 최소 Disk: 4개\n- 가용용량: (N-2) × Disk Size\n- 허용장애: 2개 Disk\n\n장점\n- 대용량 Disk/Rebuild 장시간 환경에서 RAID5보다 안전\n\n단점\n- Parity 2개로 용량·Write Overhead 증가\n\nⅣ. 비교\nRAID5: 최소 3 / 장애 1 / 용량효율 높음\nRAID6: 최소 4 / 장애 2 / Availability 높음\n\nⅤ. Best Practice\n대용량 HDD Array에서는 Rebuild Time과 URE Risk를 고려해 RAID6, Erasure Coding, Hot Spare, Backup을 함께 검토한다. RAID는 Backup이 아니다."
  },
  "131-3-4": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "Transaction, ACID, Atomicity, Consistency, Isolation, Durability, Lock, WAL",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. Transaction 정의\n- Database에서 하나의 논리적 업무단위를 구성하는 연산들의 집합으로 All-or-Nothing 형태로 처리되어야 한다.\n\nⅡ. ACID\n1) Atomicity\n- 모든 연산이 전부 Commit 또는 전부 Rollback\n- Undo Log, Recovery로 보장\n\n2) Consistency\n- Transaction 전후 Integrity Constraint와 Business Rule 만족\n\n3) Isolation\n- 동시 Transaction이 서로 간섭하지 않은 것처럼 동작\n- Lock, MVCC, Isolation Level 사용\n\n4) Durability\n- Commit된 결과는 장애가 발생해도 영구 보존\n- WAL/Redo Log, Replication, Stable Storage\n\nⅢ. 동작\nBEGIN\n → Read/Write\n → Constraint/Concurrency Control\n → COMMIT\n   ↘ Failure → ROLLBACK\n\nⅣ. Trade-off\n높은 Isolation은 Consistency를 강화하지만 Lock/Concurrency 비용이 증가한다.\n\nⅤ. Best Practice\n업무 Criticality에 맞는 Isolation Level과 Transaction Boundary를 설계하고 Long Transaction을 최소화한다."
  },
  "131-3-5": {
    "category": "시스템보안",
    "defaultKeywords": "보안성 검토, 국가정보원, 공공기관, 정보화사업, 보안대책, 사업계획, 검토요청, 보완, 이행점검",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 정의\n- 국가·공공기관 정보화사업의 보안성 검토는 정보시스템 구축·변경 전에 국가안보 및 중요정보 보호 관점의 보안대책 적정성을 사전 검토하여 취약요인을 설계단계에서 제거하는 절차이다.\n\nⅡ. 일반 절차\n1) 사업계획 수립\n- 업무 중요도, 정보등급, System/Network 구조 분석\n\n2) 자체 보안대책 수립\n- 망구성, 접근통제, 암호화, 인증, Logging, Backup, Cloud/외부연계 대책\n\n3) 검토대상 여부 확인\n- 기관 보안담당부서가 사업유형·중요도에 따라 대상 판단\n\n4) 보안성 검토 요청\n- 사업계획서, Architecture, 보안대책, Data Flow 등 제출\n\n5) 검토 및 보완\n- 검토의견 수령\n- 설계/RFP/계약요건에 보완사항 반영\n\n6) 사업 수행\n- 보안요구사항 구현, 변경사항 관리\n\n7) 완료 전 확인\n- 보안취약점 점검, 검토조건 이행여부 확인\n- 필요한 경우 보안적합성 검증 등 후속절차 연계\n\nⅢ. 주요 검토영역\nNetwork Segmentation\n+ Identity/Access\n+ Encryption/Key\n+ Log/Monitoring\n+ Endpoint/Server Hardening\n+ External/Cloud Connection\n+ Supply-chain/Remote Maintenance\n\nⅣ. 핵심\n보안성 검토는 구축 후 점검이 아니라 '설계·발주 전에 Security Requirement를 확정'하는 사전 예방통제이다.\n\nⅤ. 주의\n실제 대상·제출경로·세부절차는 사업시점의 국가·공공기관 보안지침과 기관 내부 규정을 확인해야 한다."
  },
  "131-3-6": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "DataOps, DevOps, Data Pipeline, CI CD, Data Quality, Metadata, Orchestration, Observability, Data Governance",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 정의\n- DataOps는 Data Engineer, Analyst, Data Scientist, 운영조직이 협업하여 Data Pipeline의 개발·배포·품질·운영을 자동화하고 신뢰할 수 있는 Data를 빠르게 제공하는 Practice이다.\n\nⅡ. 주요기술\nSource\n → Ingestion\n → Transform\n → Quality Test\n → Data Lake/Warehouse\n → Analytics/AI\n     ↑\nCI/CD · Orchestration · Metadata · Monitoring\n\n- Data Pipeline Automation\n- ETL/ELT Orchestration\n- Data Quality Test\n- Schema/Version Control\n- Metadata/Data Lineage\n- Data Observability\n- Data Catalog/Governance\n- IaC/Container\n\nⅢ. DevOps와 비교\n구분 | DevOps | DataOps\n대상 | Application/Code | Data/Pipeline\n핵심품질 | Build/Test/Release | Data Quality/Freshness/Lineage\n변경단위 | Source Code | Code + Schema + Data\n운영지표 | Error/Latency | Freshness, Completeness, Drift\n\nⅣ. 공통점\nAgile + Automation + CI/CD + Collaboration + Observability\n\nⅤ. Best Practice\nData Contract, Automated Data Test, Lineage, SLA/SLO를 Pipeline에 내재화해 'Data가 깨진 뒤 발견'하는 운영을 예방한다."
  },
  "131-4-1": {
    "category": "최신 기술 동향",
    "defaultKeywords": "Reinforcement Learning, Value Based, Policy Based, Actor Critic, Policy Gradient, DQN, REINFORCE, PPO",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 강화학습 개요\n- Agent가 Environment와 반복 상호작용하며 Reward의 장기 누적값을 최대화하는 Policy를 학습하는 Machine Learning 방식이다.\n\nⅡ. 기본 Loop\nState sₜ → Agent/Policy → Action aₜ\n  ↑                       ↓\nEnvironment ← Reward rₜ, Next State\n\nⅢ. 가치기반(Value-based)\n- Q(s,a), V(s)를 학습하고 Value가 최대인 Action 선택\n- 대표: Q-learning, DQN\n\n장점\n- Discrete Action에 강함\n\n한계\n- Continuous Action에 직접 적용 어려움\n\nⅣ. 정책기반(Policy-based)\n- Policy πθ(a|s)를 직접 Parameterize\n- Expected Return J(θ)를 최대화\n\n장점\n- Continuous/Stochastic Policy에 적합\n\n한계\n- Gradient 분산이 크고 Sample Efficiency가 낮을 수 있음\n\nⅤ. Actor-Critic\nActor: Policy πθ(a|s)\nCritic: V/Q로 Actor의 Action 평가\n- Policy 기반의 유연성과 Value 기반의 낮은 분산을 결합\n- A2C/A3C, DDPG, SAC, PPO 계열\n\nⅥ. Policy Gradient\n목표:\nJ(θ)=Eτ~πθ[R(τ)]\n\nPolicy Gradient:\n∇θJ(θ)=E[∇θ log πθ(a|s) · Qπ(s,a)]\n\nREINFORCE:\nθ ← θ + α Gₜ ∇θ log πθ(Aₜ|Sₜ)\n\nⅦ. 개선\n- Baseline/Advantage로 Variance 감소\n- Entropy로 Exploration 유지\n- PPO의 Clipping으로 Update 안정화\n\nⅧ. Best Practice\nReward Hacking, Unsafe Exploration을 방지하기 위해 Simulation, Constraint, Human Feedback과 Offline Evaluation을 함께 적용한다."
  },
  "131-4-2": {
    "category": "최신 기술 동향",
    "defaultKeywords": "Recommendation, Content Based Filtering, Collaborative Filtering, User Item Matrix, Matrix Factorization, Latent Factor, Cold Start",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 개요\n- 추천시스템은 사용자 행동·선호·Item 정보를 이용해 개인별 관심 가능성이 높은 Item을 Ranking하여 제시하는 System이다.\n\nⅡ. Content-based Filtering\nUser가 선호한 Item Feature\n → User Profile\n → 유사 Item 추천\n\n예)\n영화 Genre/배우/Keyword Vector\n→ User 선호 Vector와 Cosine Similarity\n\n장점\n- 다른 사용자 Data가 적어도 가능\n- 추천 이유 설명 용이\n\n단점\n- 기존 선호와 유사한 것만 추천하는 Over-specialization\n- Item Feature 품질 의존\n\nⅢ. Collaborative Filtering\nUser-Item Interaction Matrix\n      ↓\n비슷한 User 또는 Item 관계 학습\n      ↓\nRecommendation\n\n- User-based CF\n- Item-based CF\n\n장점\n- Item Content를 몰라도 Collective Pattern 활용\n\n단점\n- Cold Start, Sparsity, Scalability 문제\n\nⅣ. Matrix Factorization\nRating Matrix R ≈ P × Qᵀ\n\nR: User × Item\nP: User Latent Factor\nQ: Item Latent Factor\n\nOptimization:\nmin Σ(rᵤᵢ - pᵤᵀqᵢ)² + λ(||pᵤ||²+||qᵢ||²)\n\n- SVD/ALS/SGD 등으로 잠재 Factor 학습\n- User와 Item의 숨은 취향 Dimension 표현\n\nⅤ. 비교/발전\nContent + CF → Hybrid Recommendation\n최근에는 Deep Learning, Transformer/Embedding, Context-aware 및 LLM 기반 추천으로 확장된다.\n\nⅥ. 평가\nOffline: Precision/Recall/NDCG\nOnline: CTR, Conversion, Retention\n정확도뿐 아니라 Diversity, Novelty, Fairness도 함께 고려한다."
  },
  "131-4-3": {
    "category": "하드웨어 시스템",
    "defaultKeywords": "Cache Memory, Locality, Temporal Locality, Spatial Locality, Cache Line, Coherence, Snooping, Directory, MESI",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. Cache 개념\n- Cache는 CPU와 Main Memory 사이에 위치하는 소용량 고속 Memory로 최근/인접 Data를 저장하여 평균 Memory Access Time을 줄인다.\n\nⅡ. 구조\nCPU\n ↓\nL1 Cache (small, fastest)\n ↓\nL2 Cache\n ↓\nL3/LLC\n ↓\nMain Memory\n\nAddress = Tag + Index/Set + Block Offset\n\nⅢ. Locality\n1) Temporal Locality\n- 최근 사용한 Data/Instruction을 가까운 미래에 다시 접근\n예: Loop Variable, Function Code\n\n2) Spatial Locality\n- 접근 주소 주변의 Data를 곧 접근\n예: Sequential Array Scan\n\n3) Sequential Locality\n- Instruction/Data가 순차 주소로 참조되는 Spatial Locality의 대표형\n\nⅣ. Cache Coherence 문제\nMulti-core에서 각 Core가 동일 Memory Block의 Cache Copy를 보유하면 Write 후 서로 다른 값이 존재할 수 있다.\n\nCore0 Cache X=1\nCore1 Cache X=1\nCore0 Write X=2\n→ Core1의 X=1은 Stale\n\nⅤ. 해결\n1) Snooping\n- Shared Interconnect Transaction을 Cache가 감시\n- MESI/MOESI, Write Invalidate\n\n2) Directory\n- Directory가 Owner/Sharer를 기록해 필요한 Node에만 Message\n- Large-scale System에 적합\n\n3) SW\n- Lock/Atomic/Fence로 Memory Ordering과 동기화 보완\n\nⅥ. 성능 이슈\n- False Sharing\n- Capacity/Conflict Miss\n- Coherence Traffic\n\nⅦ. Best Practice\nData Layout과 Thread Affinity를 설계하여 Locality를 높이고 공유 Cache Line의 불필요한 Write를 줄인다."
  },
  "131-4-4": {
    "category": "컴퓨터 통신 및 네트워크",
    "defaultKeywords": "Matter, Smart Home, CSA, IP, Thread, Wi-Fi, Ethernet, BLE, IPv6, Interoperability",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 개요\n- Matter는 서로 다른 제조사의 Smart Home Device가 IP 기반으로 상호운용되도록 하는 Application Layer 연결 표준이다.\n- 공통 Data Model, Security, Discovery, Commissioning을 제공한다.\n\nⅡ. 기존 Smart Home의 한계\n- Vendor별 Protocol/App/Cloud 종속\n- Hub 다중 설치\n- Device Compatibility 불명확\n- Security/Provisioning 방식 상이\n\nⅢ. Matter 장점\n- Multi-vendor Interoperability\n- Local IP 기반 제어\n- 표준화된 Device Model\n- Secure Commissioning/Device Authentication\n- Multi-Admin으로 여러 Ecosystem 동시 연계\n\nⅣ. Network Stack\nMatter Application/Data Model\n        ↓\nMatter Interaction Model\n        ↓\nSecure Session / CASE·PASE\n        ↓\nUDP/TCP\n        ↓\nIPv6\n        ↓\nWi-Fi / Ethernet / Thread\nCommissioning에는 BLE 등을 활용 가능\n\nⅤ. Thread 역할\n- 저전력 Mesh Network\n- IPv6/6LoWPAN 기반\n- Border Router를 통해 IP Network와 연결\n\nⅥ. 보안\n- Device Attestation\n- Certificate 기반 Trust\n- Encryption/Authentication\n- Fabric 단위 권한관리\n\nⅦ. 방향\nMatter는 Smart Home을 Proprietary Hub 중심에서 IP·표준 Data Model 중심으로 전환시키는 핵심 Interoperability Layer이다."
  },
  "131-4-5": {
    "category": "컴퓨터 시스템 평가",
    "defaultKeywords": "Response Time, Think Time, Concurrent User, Active User, TPS, Little's Law, Interactive Law, Performance Test",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 성능지표 정의\n1) Response Time\n- 사용자가 Request를 보낸 시점부터 Response를 완료할 때까지의 시간\n\n2) Think Time\n- 사용자가 Response를 받은 후 다음 Request를 보내기까지의 사용자 대기시간\n\n3) Concurrent User\n- 일정 시점에 System Session/업무를 동시에 수행하는 사용자 수\n\n4) Active User\n- Concurrent User 중 실제로 Request를 발생시키거나 처리 중인 사용자\n\n5) TPS\n- Transaction Per Second, System이 초당 처리하는 Transaction 수\n\nⅡ. 관계\nInteractive Response Time Law:\nN = X × (R + Z)\n\nN: Concurrent User\nX: Throughput(TPS)\nR: Response Time\nZ: Think Time\n\n따라서\nX = N / (R + Z)\n\nⅢ. 문제 계산\nN = 100명\nR = 5 sec\nZ = 15 sec\n\nTPS = 100 / (5 + 15)\n    = 100 / 20\n    = 5 TPS\n\nⅣ. 해석\n- 평균적으로 각 사용자가 20초에 1 Transaction 수행\n- 100명 × 1/20 = 5 TPS\n\nⅤ. 시험 시 고려\n- Average만 보지 말고 P95/P99 Response Time\n- Ramp-up, Steady State, Peak TPS\n- Error Rate와 Resource Utilization\n- DB/Network Bottleneck을 함께 측정\n\nⅥ. Best Practice\n목표값은 '100명'만 정의하지 말고 User Journey별 Transaction Mix와 Think Time까지 Workload Model에 포함해야 한다."
  },
  "131-4-6": {
    "category": "법규·정책·표준",
    "defaultKeywords": "상용SW 직접구매, 소프트웨어진흥법, 분리발주, 5천만원, GS 인증, 직접구매 예외, 일괄발주",
    "defaultAnswer": "[학습용 예시답안 · 공식 기준답안 아님]\nⅠ. 제도 개요\n- 상용SW 직접구매는 공공 SW사업에 포함되는 일정 기준 이상의 상용SW를 구축사업자에게 일괄 맡기지 않고 발주기관이 별도로 구매하는 제도이다.\n- 목적은 상용SW 제값받기, 전문 SW기업의 참여 확대, 유통구조 개선이다.\n\nⅡ. 적용대상\n- 국가기관 등이 추진하는 SW사업에서 사용하는 상용SW 중 관련 법령·고시의 직접구매 기준을 충족하는 제품\n- 출제시점 지침에서는 일정 사업규모 및 개별 상용SW 가격·품질인증 등 기준을 적용하여 판단한다.\n\nⅢ. 직접구매 예외\n대표적으로 다음과 같이 별도구매가 현저히 비효율적이거나 사업목적 달성이 곤란한 경우는 정해진 절차에 따라 예외를 검토할 수 있다.\n- 기존 System과의 Integration/호환성 때문에 분리 곤란\n- 직접구매로 사업기간·품질·책임소재에 중대한 문제가 발생\n- 시장에 독립적으로 구매 가능한 적정 상용SW가 없는 경우\n- 그 밖에 지침이 정한 예외사유\n※ 실제 적용은 사업시점 고시의 예외기준과 심의절차 확인 필요\n\nⅣ. 직접구매 vs 일괄발주\n구분 | 직접구매 | 일괄발주\n계약 | 상용SW 별도 계약 | SI사업에 포함\n가격 | 제품가격 가시성 높음 | 구축비에 포함\nSW기업 | 직접 참여기회 확대 | SI 종속 가능\nIntegration | 발주기관 조정 필요 | 단일 사업자 책임\n책임경계 | 복수 계약으로 복잡 | 비교적 단순\nVendor 선택 | 발주기관 주도 | SI 제안 영향 큼\n\nⅤ. 성공조건\nRFP에서 Version/License/유지보수 범위를 명확히 하고, SI·SW Vendor 간 Interface와 장애 책임 RACI를 계약 전에 확정해야 한다."
  }
};
