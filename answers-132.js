window.ANSWERS_132 = {
  "132-1-1": {
    "category": "하드웨어 시스템",
    "defaultKeywords": "TCAM, Ternary Content Addressable Memory, 0 1 X, Parallel Search, Routing Table, ACL, SDN",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- TCAM은 0, 1뿐 아니라 Don't Care(X) 상태까지 저장할 수 있는 특수 메모리로, 입력 Key와 저장값을 병렬 비교하여 일치 항목을 매우 빠르게 찾는 CAM의 확장형이다.\n\nⅡ. 특징\n- 모든 Entry를 병렬 검색하므로 Lookup 속도가 매우 빠름\n- Exact Match뿐 아니라 Prefix/Mask Match에 유리\n- 반면 전력소모·발열·가격이 높고 집적도가 낮음\n\nⅢ. 활용사례\n- Router/L3 Switch의 Longest Prefix Match(FIB)\n- ACL/Firewall Rule 매칭\n- QoS, Flow Classification, SDN Switch의 Packet Lookup\n\nⅣ. 기술사 포인트\n- TCAM = 고속 검색용 메모리, '속도는 우수하나 비용·전력 부담이 큰 장비용 메모리'로 정리하면 된다."
  },
  "132-1-2": {
    "category": "법규·정책·표준",
    "defaultKeywords": "Pollack's Rule, Processor Performance, Complexity, Square Root, Microarchitecture",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개념\n- Pollack의 법칙은 마이크로프로세서의 성능 증가는 대체로 구조적 복잡도(또는 면적) 증가의 제곱근 수준에 비례한다는 경험 법칙이다.\n\nⅡ. 의미\n- 단순히 회로를 크게·복잡하게 만든다고 성능이 선형으로 증가하지 않음\n- 성능 향상을 위해서는 병렬화, 메모리 효율, 아키텍처 최적화가 필요함\n\nⅢ. 시사점\n- Superscalar 확대만으로는 효율이 제한됨\n- Multi-core, Heterogeneous Computing, Accelerator 활용이 중요\n\nⅣ. 기술사 포인트\n- Pollack's Rule은 '복잡도 증가 대비 성능향상은 점점 둔화된다'는 설계 원칙으로 이해한다."
  },
  "132-1-3": {
    "category": "컴퓨터 시스템 평가",
    "defaultKeywords": "Canary Test, Progressive Delivery, Limited Release, Risk Mitigation, Monitoring, Rollback",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- Canary Test는 신규 버전이나 기능을 전체 사용자에게 일괄 배포하지 않고 일부 사용자·서버·트래픽에 먼저 적용하여 안정성을 검증하는 점진적 배포 기법이다.\n\nⅡ. 절차\n- 소규모 대상 선정 → 신규 버전 배포 → KPI/오류율 모니터링 → 이상 없으면 점진 확대 → 문제 시 Rollback\n\nⅢ. 장점\n- 장애 전파 최소화\n- 실운영 환경에서 검증 가능\n- Blue/Green, A/B Test와 연계 가능\n\nⅣ. 고려사항\n- 대상군 선정, 모니터링 지표, 자동 Rollback 기준이 핵심이다."
  },
  "132-1-4": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "Semaphore, P Operation, V Operation, Mutual Exclusion, Synchronization, Counting Semaphore",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- 세마포어는 공유자원 접근 제어와 프로세스/스레드 동기화를 위한 정수형 동기화 도구이다.\n\nⅡ. 주요 연산\n1) P 연산(Wait, Down)\n- 세마포어 값을 감소시키고, 사용 불가 시 대기 상태로 전환\n2) V 연산(Signal, Up)\n- 세마포어 값을 증가시키고, 대기 프로세스가 있으면 깨움\n\nⅢ. 종류\n- Binary Semaphore: 상호배제\n- Counting Semaphore: 다수 자원 개수 관리\n\nⅣ. 활용\n- Producer-Consumer, Critical Section 보호, Resource Pool 제어"
  },
  "132-1-5": {
    "category": "컴퓨터 통신 및 네트워크",
    "defaultKeywords": "TCP 4-way Handshake, FIN, ACK, Connection Termination, Half Close, TIME_WAIT",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개념\n- TCP 4-way handshake는 양방향 연결을 종료하기 위한 절차로, 송신과 수신 종료를 각각 독립적으로 수행한다.\n\nⅡ. 절차\nHost A            Host B\nFIN   --------->\n      <--------- ACK\n      <--------- FIN\nACK   --------->\n\nⅢ. 특징\n- Half Close 지원: 한쪽 송신 종료 후 반대 방향은 잠시 유지 가능\n- TIME_WAIT을 통해 지연 패킷 문제를 방지\n\nⅣ. 포인트\n- 연결 설정은 3-way, 연결 종료는 송수신 종료를 분리하므로 4-way이다."
  },
  "132-1-6": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "기술성 평가기준 지침, 기술제안서 평가항목, 기능성, 성능, 품질, 유지보수, 보안",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- 소프트웨어 기술성 평가기준 지침의 기술제안서 평가는 단순 가격이 아닌 제안 솔루션의 기술적 적합성과 사업수행 능력을 종합 평가하기 위한 기준이다.\n\nⅡ. 주요 평가항목\n- 기능요구 충족성\n- 시스템 구성 및 구현방안\n- 성능·확장성·안정성\n- 보안성·품질보증\n- 유지관리·운영지원 방안\n- 사업수행 조직 및 인력역량\n- 일정관리·위험관리\n\nⅢ. 의미\n- 발주기관 요구에 대한 적합성, 실현가능성, 운영가능성을 객관적으로 판단하는 데 목적이 있다."
  },
  "132-1-7": {
    "category": "법규·정책·표준",
    "defaultKeywords": "PMO, Project Management Office, 공공사업관리, 일정, 범위, 품질, 위험, 의사소통",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- PMO는 프로젝트 관리 전문조직 또는 위탁기능으로서 범위·일정·비용·품질·위험·의사소통을 체계적으로 관리하도록 지원하는 기능이다.\n\nⅡ. 주요 역할\n- 사업계획 및 추진전략 검토\n- 일정·범위·변경관리\n- 위험·품질·성과관리\n- 발주기관 의사결정 지원 및 이해관계자 조정\n\nⅢ. 효과\n- 대형 전자정부사업의 통제력 강화\n- 사업지연과 품질저하 Risk 감소"
  },
  "132-1-8": {
    "category": "최신 기술 동향",
    "defaultKeywords": "Digital Literacy, Information Literacy, Media Literacy, AI Literacy, Critical Thinking, Ethics",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- 디지털 리터러시는 디지털 도구와 정보를 이해하고 활용하며, 비판적으로 평가하고 안전하고 윤리적으로 사용하는 역량이다.\n\nⅡ. 구성요소\n- 정보 검색·평가 능력\n- 디지털 도구 활용 능력\n- 온라인 의사소통·협업 능력\n- 개인정보·보안·저작권 인식\n- AI/Algorithm 이해와 비판적 사고\n\nⅢ. 중요성\n- 디지털 전환 사회의 기본역량\n- 허위정보 대응, 정보보호, 생산성 향상에 필수"
  },
  "132-1-9": {
    "category": "컴퓨터 통신 및 네트워크",
    "defaultKeywords": "NRTK, Network RTK, GNSS, RTK, VRS, 기준국, cm Level Positioning",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- NRTK는 다수의 기준국 네트워크를 활용해 GNSS 오차를 보정함으로써 cm급 위치정확도를 제공하는 실시간 측위 기술이다.\n\nⅡ. 원리\n- 기준국들이 위성오차를 수집·분석\n- 중앙시스템이 보정정보(VRS 등)를 생성\n- 이동국이 실시간 보정정보를 적용하여 정밀측위 수행\n\nⅢ. 활용\n- 자율주행, 정밀농업, 측량, 드론, 스마트건설\n\nⅣ. 장점/한계\n- 장점: 고정밀·광역지원\n- 한계: 통신품질 의존, 다중경로·가림 영향"
  },
  "132-1-10": {
    "category": "시스템보안",
    "defaultKeywords": "Chinese Wall Model, Brewer Nash, Conflict of Interest, Dynamic Access Control, COI Class",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- Chinese Wall Model(Brewer-Nash Model)은 이해충돌(conflict of interest)을 방지하기 위한 동적 접근통제 모델이다.\n\nⅡ. 핵심 개념\n- 사용자가 A회사 비밀정보에 접근하면 동일 이해충돌 집합(COI Class)에 속한 경쟁회사 정보에는 접근할 수 없음\n- 비충돌 정보에는 접근 가능\n\nⅢ. 활용\n- 회계법인, 컨설팅사, 금융기관 등 고객 간 이해충돌 방지가 필요한 환경\n\nⅣ. 특징\n- Bell-LaPadula처럼 단순 기밀등급이 아닌 '이해충돌 관계'를 중심으로 접근을 통제한다."
  },
  "132-1-11": {
    "category": "최신 기술 동향",
    "defaultKeywords": "Fine-tuning, Pretrained Model, Transfer Learning, Domain Adaptation, Instruction Tuning, PEFT, LoRA",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- Fine-tuning은 사전학습(Pretrained)된 모델을 특정 도메인이나 업무에 맞게 추가 학습시켜 성능을 향상하는 과정이다.\n\nⅡ. 목적\n- 범용 모델을 의료, 금융, 공공, 기업 내부업무 등에 특화\n- 적은 Data로도 빠르게 성능 향상 가능\n\nⅢ. 방식\n- Full Fine-tuning\n- PEFT(Parameter Efficient Fine-Tuning)\n- LoRA, Prompt Tuning, Instruction Tuning\n\nⅣ. 고려사항\n- 학습 Data 품질, 비용, Overfitting, 모델 버전관리, 보안·저작권 검토"
  },
  "132-1-12": {
    "category": "시스템보안",
    "defaultKeywords": "Zero Knowledge Proof, ZKP, Prover, Verifier, Completeness, Soundness, Privacy, Blockchain",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- 영지식 증명은 증명자(Prover)가 어떤 비밀을 알고 있음을 그 비밀 자체를 노출하지 않고 검증자(Verifier)에게 증명하는 암호기술이다.\n\nⅡ. 성질\n- Completeness: 참이면 검증 성공\n- Soundness: 거짓이면 속이기 어려움\n- Zero-knowledge: 비밀정보가 노출되지 않음\n\nⅢ. 활용\n- 인증, 전자투표, 개인정보 보호, Blockchain 확장/프라이버시 기술\n\nⅣ. 포인트\n- '내용 공개 없이 사실만 증명'하는 것이 핵심이다."
  },
  "132-1-13": {
    "category": "최신 기술 동향",
    "defaultKeywords": "Super App, Mini App, Platform, Ecosystem, One-stop Service, Fintech, Mobility",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- 슈퍼앱은 하나의 앱 안에서 메신저, 결제, 쇼핑, 금융, 예약 등 다양한 서비스를 통합 제공하는 플랫폼형 앱이다.\n\nⅡ. 특징\n- Single Sign-on, 통합 결제, Mini App/Ecosystem 구조\n- 사용자 체류시간 증가, 데이터 기반 개인화 용이\n\nⅢ. 장점/한계\n- 장점: One-stop Service, 플랫폼 확장성\n- 한계: 복잡도 증가, 독점·보안·개인정보 이슈\n\nⅣ. 사례\n- WeChat, Grab, Kakao/Toss 계열 서비스 확장 모델"
  },
  "132-2-1": {
    "category": "하드웨어 시스템",
    "defaultKeywords": "Interrupt, Polling, Daisy Chain, Vector Interrupt, Priority, CPU, ISR",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- 인터럽트는 CPU가 현재 작업을 잠시 중단하고 외부/내부 Event를 우선 처리하도록 하는 메커니즘이다.\n\nⅡ. Polling 방식\n1) 개념\n- CPU가 각 Device 상태를 순차적으로 반복 점검하여 서비스 필요 여부를 확인\n2) 특징\n- 구조 단순, 구현 용이\n- CPU 소모가 크고 응답지연이 발생할 수 있음\n3) 적용\n- 소규모 Embedded, 낮은 Event 빈도 환경\n\nⅢ. Daisy-Chain 방식\n1) 개념\n- 다수 Device가 직렬 우선순위 체인으로 연결되어 인터럽트 승인 신호가 전달되며, 먼저 잡은 Device가 Service를 받는 방식\n2) 특징\n- 하드웨어 간단, 고정 우선순위 구현 용이\n- 하위 장치 기아 가능, Chain 장애 영향 큼\n\nⅣ. Vector Interrupt 방식\n1) 개념\n- 인터럽트 발생 시 장치가 자신의 Vector(인터럽트 서비스 루틴 주소 또는 번호)를 CPU에 제공하는 방식\n2) 특징\n- ISR 분기 속도 빠름, 장치 식별 용이\n- 구조가 Polling보다 효율적이고 응답성이 높음\n\nⅤ. 비교\n- Polling: 단순 / CPU 부담 큼\n- Daisy-Chain: 하드웨어 우선순위 / 고정 우선순위\n- Vector Interrupt: 빠른 ISR 진입 / 고성능 시스템 적합\n\nⅥ. 결론\n- 실무적으로는 우선순위 컨트롤러, Vector Interrupt, Masking 기법을 조합하여 응답성과 효율을 높인다."
  },
  "132-2-2": {
    "category": "시스템보안",
    "defaultKeywords": "AIoT, Intelligent IoT, Device Security, Firmware, Authentication, Secure Boot, OTA",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. AIoT 개념\n- AIoT는 IoT의 연결·센싱 기능과 AI의 분석·추론 기능을 결합한 지능형 사물인터넷이다.\n- Sensor Data를 수집하고 AI가 이를 실시간 분석하여 자동 의사결정과 제어를 수행한다.\n\nⅡ. AIoT 보안 취약점\n- 취약한 인증/기본계정 사용\n- Firmware 변조 및 Supply Chain 위험\n- 데이터 위·변조, Privacy 침해\n- 무선구간 도청/재전송 공격\n- AI Model 탈취, Adversarial Attack\n- OTA Update 미흡\n\nⅢ. AIoT 디바이스 보안기술 3가지\n1) Secure Boot\n- 서명된 Firmware만 실행하여 변조 방지\n2) Device Authentication / PKI\n- 기기 고유 인증서, Mutual Authentication\n3) Secure OTA Update\n- 암호화·서명된 원격 업데이트와 버전관리\n※ 추가: TEE/HSM, Data Encryption, EDR for IoT, Network Segmentation\n\nⅣ. 결론\n- AIoT는 Device-Edge-Cloud 전 구간 보안이 필요하며, 기기신뢰+통신보안+모델보호를 함께 설계해야 한다."
  },
  "132-2-3": {
    "category": "컴퓨터 통신 및 네트워크",
    "defaultKeywords": "ICMP, IGMP, Control Message, Multicast, Error Reporting, Group Management",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- ICMP와 IGMP는 모두 IP 계층과 밀접하게 연계되지만 목적이 다르다.\n\nⅡ. ICMP(Internet Control Message Protocol)\n1) 역할\n- 네트워크 제어·오류 보고 메시지 전달\n2) 주요 기능\n- Echo Request/Reply(Ping)\n- Destination Unreachable\n- Time Exceeded(Traceroute)\n3) 특징\n- 데이터 전송용이 아니라 네트워크 상태 진단/제어용\n\nⅢ. IGMP(Internet Group Management Protocol)\n1) 역할\n- IPv4 Multicast Group 가입/탈퇴 관리\n2) 주요 기능\n- Membership Query, Report, Leave\n3) 특징\n- Host와 Multicast Router 간 그룹 참여 관리에 사용\n\nⅣ. 비교\n구분 | ICMP | IGMP\n목적 | 오류/제어 메시지 | 멀티캐스트 그룹 관리\n대상 | Host/Router 전반 | Host ↔ Multicast Router\n대표예 | Ping, Traceroute | Join/Leave Multicast\n\nⅤ. 포인트\n- ICMP는 '상태·오류 통보', IGMP는 '멀티캐스트 참여관리'로 구분하면 된다."
  },
  "132-2-4": {
    "category": "법규·정책·표준",
    "defaultKeywords": "이동형 로봇, 충돌 안전성, TTAK.KO-10.1223, Impact Speed, Dummy, Sensor Data",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- 이동형 로봇의 대인 충돌 안전성 평가는 로봇이 사람과 충돌할 때 인체 위해 수준을 정량 평가하여 안전기준 적합성을 판단하는 방법이다.\n\nⅡ. 충돌 시험에서의 충격 속도 측정방법\n- 충돌 직전 로봇 속도를 센서, 고속카메라, 속도계, 로그데이터 등으로 계측\n- 접촉 직전 속도와 충돌 후 감속 특성을 함께 확인\n- 시험 반복성을 위해 경로·질량·환경 조건을 통제\n\nⅢ. 충돌 시험용 인체모형(dummy)\n- 인체 부위를 모사한 Dummy 또는 Fixture 사용\n- 머리, 흉부, 팔, 다리 등 시험부위별 형상·강성 차등 적용\n- 센서를 부착하여 충격력·압력·가속도 측정\n\nⅣ. 인체모형 측정데이터\n- 힘(Force)\n- 압력(Pressure)\n- 가속도(Acceleration)\n- 변위/변형량(Displacement/Deflection)\n- 접촉시간, 충격속도\n\nⅤ. 결론\n- 단순 속도만이 아니라 질량, 구조, 접촉면, 충격시간까지 함께 고려해야 실제 안전성을 평가할 수 있다."
  },
  "132-2-5": {
    "category": "법규·정책·표준",
    "defaultKeywords": "ISMP, EA, ISP, Master Plan, Information System, 사업대가, 기능점수 아님, 투입공수",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. ISMP 개념\n- ISMP는 특정 정보시스템 구축사업의 목표·범위·요구사항·이행전략을 구체화하는 정보시스템 마스터플랜이다.\n\nⅡ. ISMP, EA, ISP 비교\n1) EA\n- 조직 전체의 업무·데이터·응용·기술 구조를 체계화하는 정보화 아키텍처\n2) ISP\n- 조직 차원의 중장기 정보화 전략과 실행과제를 수립하는 계획\n3) ISMP\n- 개별 구축사업의 세부 실행계획과 요구사항을 정의하는 계획\n\n비교하면 ISP는 전략, EA는 구조, ISMP는 사업 실행계획에 초점이 있다.\n\nⅢ. ISMP 수립비 산정 절차(투입공수 방식)\n1) 사업범위/과업정의\n2) WBS 및 세부활동 도출\n3) 역할별 인력구성(책임자, 분석가, 아키텍트 등)\n4) 단계별 투입공수 산정(M/M)\n5) 노임단가 적용 및 직접인건비 계산\n6) 제경비·기술료·부가세 등 반영\n7) 최종 사업대가 산정\n\nⅣ. 주요내용 및 산출물\n- 현황분석서, 요구사항정의서\n- 목표모델/업무프로세스 개선안\n- 정보화전략 및 이행계획\n- 구축범위, 추진일정, 예산산정서\n- RFP 초안, 위험관리계획\n\nⅤ. 포인트\n- ISMP는 구축 전 단계에서 실패요인을 줄이고 예산·범위·일정을 구체화하는 사전설계 문서이다."
  },
  "132-2-6": {
    "category": "컴퓨터 통신 및 네트워크",
    "defaultKeywords": "Open RAN, O-RAN, RU DU CU, Open Interface, Disaggregation, RAN Intelligent Controller",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. OpenRAN 개념\n- OpenRAN은 기존 폐쇄형 RAN 장비를 개방형 인터페이스와 분리형 구조로 재구성하여 서로 다른 Vendor 장비 간 상호연동을 가능하게 하는 무선접속망 아키텍처이다.\n\nⅡ. 구성요소\n1) O-RU(Radio Unit)\n- RF 송수신 담당\n2) O-DU(Distributed Unit)\n- 실시간 기저대역 처리\n3) O-CU(Central Unit)\n- 상위 제어 기능\n4) RIC(RAN Intelligent Controller)\n- AI/정책 기반 최적화\n5) Open Fronthaul / Open Interface\n- 장비 간 상호운용성 보장\n\nⅢ. RAN과 OpenRAN 비교\n구분 | 전통적 RAN | OpenRAN\n구조 | 통합형/폐쇄형 | 분리형/개방형\nVendor | 단일 Vendor 의존 | Multi-Vendor 가능\n확장성 | 제한적 | 유연\n운영 | 벤더 종속 | SW 중심 자동화 용이\n\nⅣ. 기대효과와 과제\n- 효과: Vendor Lock-in 완화, 혁신 촉진, 비용절감\n- 과제: 상호운용성 검증, 성능 최적화, 보안, 운영복잡도"
  },
  "132-3-1": {
    "category": "최신 기술 동향",
    "defaultKeywords": "Ambient Computing, Context Awareness, Ubiquitous Computing, Sensor, AI, IoT, Invisible Interface",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 앰비언트 컴퓨팅 개념\n- 앰비언트 컴퓨팅은 인간이 컴퓨터를 직접 조작하지 않아도 주변 환경에 내재된 센서·네트워크·AI가 상황을 인지하고 스스로 적절한 서비스를 제공하는 컴퓨팅 패러다임이다.\n\nⅡ. 개념도 및 기술요소\nHuman / Environment\n   ↓ Sensor, Camera, Voice\nContext Awareness → AI Inference → Actuator/Service\n                ↘ Cloud/Edge ↙\n\n주요 기술요소\n- Sensor/IoT Device\n- Context Awareness\n- AI/ML\n- Edge/Cloud Computing\n- Ubiquitous Network\n- Voice/UI, Automation\n\nⅢ. IoT와 비교\n- IoT: 사물 연결과 데이터 수집 중심\n- Ambient Computing: 연결된 사물이 사용자 개입 없이 상황을 이해하고 능동적으로 동작하는 상위 개념\n\nⅣ. 적용\n- Smart Home, Smart Office, Healthcare, Mobility\n\nⅤ. 포인트\n- IoT가 '연결'이라면 Ambient Computing은 '상황인지 기반의 자연스러운 서비스 제공'이다."
  },
  "132-3-2": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "Virtual Machine, Container, Hypervisor, OS-level Virtualization, Image, Isolation, Kubernetes",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- Virtual Machine과 Container는 모두 격리된 실행환경을 제공하지만 가상화 계층과 자원관리 방식이 다르다.\n\nⅡ. Virtual Machine\n1) 구조\nHW → Hypervisor → Guest OS → App\n2) 특징\n- 각 VM이 독립 Guest OS 보유\n- 강한 격리와 이기종 OS 지원\n- 무겁고 기동시간이 길 수 있음\n\nⅢ. Container\n1) 구조\nHW/Host OS → Container Runtime → Container(App + Lib)\n2) 특징\n- Host Kernel 공유\n- 경량, 빠른 배포·확장\n- 커널 종속성과 격리 한계 존재\n\nⅣ. 공통점\n- Application 격리\n- 자원분배 및 배포 효율 향상\n- Cloud/DevOps 환경에 활용\n\nⅤ. 차이점\n구분 | VM | Container\n가상화 수준 | HW 가상화 | OS 수준 가상화\nOS | Guest OS 필요 | Host Kernel 공유\n기동속도 | 상대적으로 느림 | 빠름\n자원효율 | 낮음 | 높음\n격리수준 | 강함 | 상대적으로 약함\n\nⅥ. 결론\n- VM은 강한 격리, Container는 민첩성과 확장성에 유리하며, 실무에서는 둘을 Hybrid로 많이 사용한다."
  },
  "132-3-3": {
    "category": "컴퓨터 통신 및 네트워크",
    "defaultKeywords": "Manchester Coding, Differential Manchester, Clock Recovery, Mid-bit Transition, Encoding",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 맨체스터 코딩 개념\n- 맨체스터 코딩은 각 비트 구간의 중간에서 반드시 전이(Transition)가 일어나도록 하여 데이터와 Clock 정보를 함께 전달하는 부호화 방식이다.\n\nⅡ. 맨체스터 인코딩 및 디코딩\n- 일반적으로 0과 1을 서로 반대 방향의 중간 전이로 표현\n- 수신측은 중간 전이를 기준으로 Clock Recovery와 데이터 판독 수행\n- 장점: 동기복원 용이, DC 성분 감소\n- 단점: 대역폭 요구 증가\n\nⅢ. 차등(Differential) 맨체스터와 비교\n- Manchester: 중간 전이 방향 자체로 0/1 구분\n- Differential Manchester: 비트 시작 시 전이 유무로 0/1 구분, 중간 전이는 항상 존재\n\nⅣ. 비교\n구분 | Manchester | Differential Manchester\n판단기준 | 전이 방향 | 시작 전이 유무\n장점 | 단순 | 극성 반전 영향 적음\n공통 | Self-clocking, 대역폭 증가\n\nⅤ. 적용\n- Ethernet(초기), 저장장치, RFID 등"
  },
  "132-3-4": {
    "category": "하드웨어 시스템",
    "defaultKeywords": "Control Unit, Microprogrammed, Hardwired, Control Memory, Speed, Flexibility",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- CPU의 제어장치는 명령어를 해독하고 각 처리단계의 제어신호를 생성하는 장치이다.\n\nⅡ. Micro-programmed 구현방법\n1) 원리\n- 제어메모리(Control Store)에 저장된 Microinstruction을 순차 실행하여 제어신호 생성\n2) 특징\n- 구조 유연, 복잡한 ISA 구현 용이\n- 변경/확장 용이\n- 상대적으로 속도 느림\n\nⅢ. Hard-wired 구현방법\n1) 원리\n- 조합회로, FSM 등 고정 논리로 직접 제어신호 생성\n2) 특징\n- 동작속도 빠름\n- 회로 변경 어려움, 복잡 ISA 구현 부담\n\nⅣ. 상호비교\n구분 | Micro-programmed | Hard-wired\n속도 | 느림 | 빠름\n유연성 | 높음 | 낮음\n구현난이도 | 비교적 용이 | 복잡\n적용 | CISC 성향 | RISC 성향\n\nⅤ. 결론\n- 복잡한 명령어와 유지보수에는 Microprogrammed, 고속 처리에는 Hard-wired가 유리하다."
  },
  "132-3-5": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "SOLID, SRP, OCP, LSP, ISP, DIP, Object Oriented Design",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- SOLID는 객체지향 설계의 유지보수성과 확장성을 높이기 위한 5가지 원칙이다.\n\nⅡ. 5가지 원칙\n1) SRP(Single Responsibility Principle)\n- 클래스는 하나의 책임만 가져야 함\n2) OCP(Open Closed Principle)\n- 확장에는 열려 있고 변경에는 닫혀 있어야 함\n3) LSP(Liskov Substitution Principle)\n- 하위 타입은 상위 타입을 대체할 수 있어야 함\n4) ISP(Interface Segregation Principle)\n- 불필요하게 큰 Interface보다 역할별 작은 Interface 분리\n5) DIP(Dependency Inversion Principle)\n- 고수준 모듈이 저수준 구현이 아닌 추상화에 의존해야 함\n\nⅢ. 효과\n- 결합도 감소, 테스트 용이, 변경 파급 최소화, 재사용성 향상\n\nⅣ. 포인트\n- SOLID는 객체지향의 기본원칙이면서 MSA·클린아키텍처 등 현대 설계의 기반이다."
  },
  "132-3-6": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "소프트웨어사업 영향평가, 공공SW, 민간시장 침해, 대상기관, 평가체계, 평가항목",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- 소프트웨어사업 영향평가는 공공기관이 수행하는 SW 사업이 민간 SW 시장을 과도하게 침해하지 않는지, 공공성·필요성·적정성을 검토하는 제도이다.\n\nⅡ. 영향평가 대상기관\n- 국가기관, 지방자치단체, 공공기관 등 공공부문 발주기관\n- 자체 개발 또는 구축 예정인 소프트웨어사업 중 관련 기준에 해당하는 사업\n\nⅢ. 영향평가 체계\n사업계획 수립 → 영향평가 수행 → 결과 공개/확정 → 후속 조치\n- 필요성 검토\n- 민간 대체 가능성 검토\n- 전문가 심의·의견수렴\n\nⅣ. 평가항목\n- 공공성이 높은가\n- 민간시장에서 유사서비스 제공 여부\n- 직접 개발 필요성\n- 사업범위·대상 적정성\n- 중복투자 여부\n- 결과 공개 및 사후관리 계획\n\nⅤ. 의의\n- 공공의 역할과 민간시장 보호 간 균형을 맞추는 제도이다."
  },
  "132-4-1": {
    "category": "하드웨어 시스템",
    "defaultKeywords": "Cache Mapping, Direct Mapped, Associative, Set Associative, Write Through, Write Back, MESI",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- Cache Memory는 CPU와 주기억장치의 속도차를 완화하기 위해 자주 사용하는 Data를 고속 메모리에 저장하는 장치이다.\n\nⅡ. 주소 매핑이 필요한 이유와 방식\n1) 이유\n- 주기억장치의 방대한 Block 중 어떤 Data를 Cache의 어느 위치에 둘지 결정해야 하기 때문\n2) 방식\n가. Direct Mapping\n- 각 Main Memory Block이 Cache의 특정 Line에만 매핑\n- 단순·빠르나 Conflict Miss 증가\n나. Associative Mapping\n- 임의의 Cache Line에 배치 가능\n- Miss 감소, 하드웨어 비용 큼\n다. Set Associative Mapping\n- Cache를 Set으로 나누고 Set 내 임의 Line에 배치\n- 성능과 비용의 절충안\n\nⅢ. 캐시 쓰기 정책(Write Policy)\n1) Write Through\n- Cache와 Main Memory를 동시에 갱신\n- 일관성 단순, 쓰기 비용 큼\n2) Write Back\n- Cache만 먼저 갱신하고 교체 시 Memory 반영\n- 성능 우수, Dirty Bit 관리 필요\n3) Write Allocate / No Write Allocate\n- Miss 시 Cache 적재 여부 정책\n\nⅣ. 다중프로세서의 Cache Coherence 유지기법\n- Snooping 기반 Protocol: MSI, MESI, MOESI\n- Directory 기반 Coherence\n- Invalidate / Update 방식\n\nⅤ. 포인트\n- Cache 설계는 Hit Rate, Access Time, Coherence Trade-off의 문제로 이해해야 한다."
  },
  "132-4-2": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "클라우드 서비스 활용사업 감리, 공공부문, 사업유형, 준비 구축 운영, 검토항목",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 공공부문 클라우드 사업 유형\n- IaaS/PaaS/SaaS 활용형\n- 민간 Cloud 이용형, 전용/Hybrid Cloud 활용형\n- 기존 시스템 전환(Migration)형과 신규 구축형\n\nⅡ. 클라우드 서비스 활용사업 점검 단계·활동·검토항목\n1) 기획/준비 단계\n- 사업목표, 대상 선정, Cloud 적합성, 법·제도 검토\n- 보안등급, 개인정보, 예산·TCO 검토\n\n2) 구축/전환 단계\n- Target Architecture, Network, Data 이전계획\n- 성능·가용성, Backup/DR, 테스트 계획\n- CSP/CSAP, 권한관리, 운영조직 설계\n\n3) 운영 단계\n- SLA, Monitoring, 장애/변경관리\n- 비용관리(FinOps), 보안관제, 지속개선\n\nⅢ. 핵심 검토항목\n- 아키텍처 적정성\n- 보안·개인정보보호\n- 서비스 연속성(RTO/RPO)\n- 데이터 이전/복구 계획\n- 계약·SLA·Exit Plan\n- 운영역량과 역할분담\n\nⅣ. 결론\n- Cloud 감리는 단순 이전 완료가 아니라 기획·구축·운영 전 주기의 위험요소를 점검하는 활동이다."
  },
  "132-4-3": {
    "category": "법규·정책·표준",
    "defaultKeywords": "Digital Twin for Manufacturing, TTAK.KO-11.0284, Framework, Actor Information Table",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 제조를 위한 디지털 트윈 기술개념\n- 제조 디지털 트윈은 설비·공정·제품 등 물리적 제조 대상을 디지털 모델로 복제하고 실시간 Data와 연계하여 모니터링·예측·최적화를 수행하는 기술이다.\n\nⅡ. 제조 디지털 트윈 프레임워크\nPhysical Factory\n  ↕ Sensor/IoT Data\nDigital Model / Simulation / Analytics\n  ↕ Application Service\nOperation · Prediction · Optimization\n\n구성요소\n- Physical Entity(설비·라인·제품)\n- Data Acquisition/IoT\n- Digital Model/Simulation\n- Analytics/AI\n- Visualization/Operation Interface\n\nⅢ. 액터(actor) 정보 테이블의 항목 및 값\n일반적으로 다음과 같은 항목을 관리한다.\n- Actor ID: 고유식별자\n- Actor Type: 작업자, 설비, 로봇, 시스템 등\n- Role: 수행역할\n- Capability/Function: 수행가능 기능\n- State/Status: 가동/정지/장애 등 상태\n- Location: 위치 정보\n- Interface/Relation: 다른 Actor와의 관계\n\nⅣ. 의의\n- 제조 디지털 트윈은 생산성 향상, 예지보전, 품질개선, 공정 최적화를 지원한다."
  },
  "132-4-4": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "Deadlock, Starvation, Coffman Conditions, Prevention, Avoidance, Detection, Recovery",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. deadlock의 개념\n- 둘 이상의 Process/Thread가 서로 상대가 보유한 자원을 기다리며 영구적으로 진행하지 못하는 상태이다.\n\nⅡ. deadlock과 starvation의 차이점\n- Deadlock: 상호 대기로 전체 진행 중단\n- Starvation: 우선순위/스케줄링 문제로 특정 작업만 계속 자원을 못 받음\n- 즉, Starvation은 시스템 일부는 계속 진행 가능하다.\n\nⅢ. deadlock 발생조건 4가지\n1) Mutual Exclusion\n2) Hold and Wait\n3) No Preemption\n4) Circular Wait\n\nⅣ. deadlock 처리 방안\n1) Prevention: 자원 일괄할당, 자원순서 부여 등으로 필요조건 제거\n2) Avoidance: Safe State 유지(Banker’s Algorithm)\n3) Detection: Wait-for Graph 등으로 탐지\n4) Recovery: Process 종료, Rollback, 자원회수\n\nⅤ. 실무 포인트\n- 설계 단계에서 Lock Ordering, Timeout, Resource Hierarchy를 두는 것이 가장 현실적인 대안이다."
  },
  "132-4-5": {
    "category": "최신 기술 동향",
    "defaultKeywords": "SVM, Support Vector Machine, Hyperplane, Margin, Kernel Trick, Classification",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. SVM 개념\n- SVM은 데이터를 가장 잘 구분하는 최적 초평면(Hyperplane)을 찾고, 결정경계와 가장 가까운 Support Vector의 Margin을 최대화하는 지도학습 모델이다.\n\nⅡ. 동작방식\n1) 선형 분리 가능한 경우\n- Margin이 최대가 되는 Hyperplane 탐색\n2) 선형 분리 어려운 경우\n- Kernel Trick(RBF, Polynomial 등)으로 고차원 공간에 매핑하여 분리\n\nⅢ. 장단점\n장점\n- 고차원 데이터에 강함\n- 적은 데이터에서도 우수한 성능 가능\n- Margin 최대화로 일반화 성능 양호\n\n단점\n- 대규모 데이터 학습시간 증가\n- 파라미터와 Kernel 선택 민감\n- 다중분류 처리 복잡\n\nⅣ. 활용사례\n- 문서분류, 얼굴인식, 의료진단, 이상탐지"
  },
  "132-4-6": {
    "category": "최신 기술 동향",
    "defaultKeywords": "MEC, Mobile Edge Computing, Edge Cloud, 5G, Low Latency, UPF, Local Breakout",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 모바일 엣지 컴퓨팅의 개념\n- MEC는 이동통신망의 기지국 또는 접속망 근처 Edge에 Computing/Storage 자원을 배치하여 초저지연 서비스와 Local Data Processing을 제공하는 기술이다.\n\nⅡ. 플랫폼 구조 및 구성요소\nUser Device\n   ↓\n5G RAN → MEC Platform → MEC Application\n          ↘ Local UPF / Edge Cloud ↙\n            Central Cloud/Core\n\n주요 구성요소\n- MEC Host/Platform\n- MEC Application\n- Virtualization/Container Infra\n- Edge Orchestrator\n- 5G Core 연동(UPF, 정책제어)\n\nⅢ. 모바일 5G 적용 방안\n- URLLC, AR/VR, 자율주행, Cloud Gaming, 스마트팩토리\n- Local Breakout으로 지역 Traffic 현지 처리\n- Network Slicing과 연계해 서비스별 SLA 제공\n- Edge AI와 결합하여 실시간 추론 지원\n\nⅣ. 효과와 과제\n- 효과: 지연감소, Backhaul 절감, 위치기반 서비스 향상\n- 과제: 분산운영 복잡도, 보안, 자원배치 최적화"
  }
};
