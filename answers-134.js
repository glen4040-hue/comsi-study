window.ANSWERS_134 = {
  "134-1-1": {
    "category": "컴퓨터 통신 및 네트워크",
    "defaultKeywords": "Wi-Fi 7, IEEE 802.11be, 320MHz, 4096-QAM, Multi-Link Operation, Multi-RU, Preamble Puncturing",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- Wi-Fi 7은 IEEE 802.11be(EHT, Extremely High Throughput) 기반의 차세대 WLAN 기술로, 초고속·저지연·고신뢰 무선 서비스를 목표로 한다.\n\nⅡ. 핵심기술\n- 320 MHz 초광대역 채널\n- 4096-QAM(4K-QAM) 고차 변조\n- Multi-Link Operation(MLO): 복수 대역/링크 동시 활용\n- Multi-RU: 하나의 단말에 복수 Resource Unit 할당\n- Preamble Puncturing: 간섭 채널 일부를 제외하고 넓은 채널 활용\n- 최대 16 Spatial Stream, 향상된 MU-MIMO/OFDMA\n\nⅢ. 기대효과\n- Wi-Fi 6/6E 대비 처리량 증가, 지연 및 간섭 감소\n- AR/VR, 8K 영상, Cloud Gaming, 산업용 실시간 서비스에 적합\n\nⅣ. 기술사 포인트\nWi-Fi 7 = Wider Channel + Higher Modulation + Multi-Link의 조합으로 이해하면 된다."
  },
  "134-1-2": {
    "category": "시스템보안",
    "defaultKeywords": "Zero Day, Vulnerability, Exploit, Patch Gap, EDR, WAF, IPS, Virtual Patching, Threat Intelligence",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- Zero Day 취약점은 제조사 또는 사용자가 인지하지 못했거나 공식 보안패치가 제공되기 전에 악용 가능한 보안 취약점이다.\n\nⅡ. 위험성\n- Signature 기반 보안장비가 탐지하기 어려움\n- 공개 후 Patch 배포까지 공격 가능성이 급증\n- APT, Ransomware, 공급망 공격의 초기 침투수단으로 활용\n\nⅢ. 대응\n1) 예방: 최소권한, Attack Surface 축소, Secure Coding, 자산/버전관리\n2) 탐지: EDR/XDR, 행위기반 탐지, Sandbox, Threat Hunting\n3) 차단: WAF/IPS Rule, Application Allow-list, Network Segmentation\n4) 임시조치: Virtual Patching, 취약 기능 비활성화\n5) 복구: Incident Response, IOC 확산점검, Patch 신속 적용\n\nⅣ. Best Practice\n- '취약점이 없다고 가정'하기보다 침해를 전제로 Zero Trust와 Defense-in-Depth를 적용한다."
  },
  "134-1-3": {
    "category": "최신 기술 동향",
    "defaultKeywords": "On-device AI, Edge AI, NPU, Quantization, Pruning, Knowledge Distillation, Privacy, Low Latency",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- On-device AI는 Cloud 서버가 아닌 스마트폰·PC·차량·IoT Device 내부에서 AI 모델의 추론 또는 일부 학습을 수행하는 기술이다.\n\nⅡ. 구조\nSensor/Input → Preprocess → NPU/GPU → AI Model → Local Decision\n                         ↘ 필요 시 Cloud 연계\n\nⅢ. 핵심기술\n- NPU/GPU AI Accelerator\n- Quantization, Pruning, Knowledge Distillation\n- TinyML/Small Language Model\n- Federated Learning, Secure Enclave\n\nⅣ. 장점\n- Low Latency, 네트워크 단절 상황 대응\n- 개인정보 외부 전송 최소화\n- Cloud 비용 및 Traffic 감소\n\nⅤ. 한계\n- 제한된 메모리·전력·연산능력, 모델 업데이트/보안관리 부담\n→ Cloud AI와 On-device AI의 Hybrid Architecture가 실무적으로 효과적이다."
  },
  "134-1-4": {
    "category": "컴퓨터 통신 및 네트워크",
    "defaultKeywords": "Tactile Internet, URLLC, 1ms, Haptic, Edge Computing, 5G, 6G, Teleoperation",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- Tactile Internet은 사람의 촉각·제어 정보를 네트워크로 실시간 전달하여 원격 대상과 상호작용하도록 하는 초저지연·고신뢰 통신 개념이다.\n\nⅡ. 요구특성\n- Ultra-low Latency: End-to-End 지연 최소화\n- Ultra-high Reliability\n- 높은 Availability와 Jitter 제어\n- 양방향 실시간 Feedback\n\nⅢ. 구성\nHaptic Device ↔ 5G/6G URLLC ↔ Edge/MEC ↔ Remote Robot\n        Control Data           Prediction     Haptic Feedback\n\nⅣ. 적용\n- 원격수술, 원격로봇, 산업자동화, 자율주행, XR\n\nⅤ. 핵심\n단순 '빠른 인터넷'이 아니라 Communication + Control + Edge Computing을 결합해 사람의 촉각 피드백 수준의 실시간성을 확보하는 기술이다."
  },
  "134-1-5": {
    "category": "시스템보안",
    "defaultKeywords": "Zero Trust, Never Trust Always Verify, Least Privilege, Assume Breach, PDP, PEP, Continuous Verification",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- Zero Trust는 네트워크 위치나 내부/외부 구분만으로 사용자를 신뢰하지 않고 모든 접근을 지속적으로 검증하는 보안 모델이다.\n\nⅡ. 핵심원칙\n- Never Trust, Always Verify\n- Least Privilege Access\n- Assume Breach\n- Continuous Monitoring & Verification\n\nⅢ. 구조\nUser/Device → PEP → Resource\n                ↑\n             PDP/Policy\n      Identity · Device · Risk · Context\n\nⅣ. 구현기술\n- IAM/MFA, Device Posture, Micro-segmentation\n- ZTNA, EDR/XDR, SIEM/SOAR\n- Context-aware ABAC, Continuous Authentication\n\nⅤ. 효과\n- 내부자·계정탈취·Lateral Movement 위험을 감소시키며, Hybrid Cloud 환경에서 경계형 보안을 보완한다."
  },
  "134-1-6": {
    "category": "시스템보안",
    "defaultKeywords": "Dynamic WEP Key, WEP, 802.1X, RADIUS, RC4, IV, Per-user Key, Wireless Security",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- Dynamic WEP Key는 고정된 WEP 공유키 대신 802.1X/EAP 인증과 RADIUS 등을 이용해 사용자/세션별 WEP 키를 동적으로 배포하는 방식이다.\n\nⅡ. 동작\nSTA → 802.1X/EAP → AP/Authenticator → RADIUS\n      인증 성공 → Dynamic Session Key 배포 → WEP 암호화\n\nⅢ. 장점\n- Static WEP보다 키 노출 범위 감소\n- 사용자별 인증·키 관리 가능\n- 주기적 키 변경 가능\n\nⅣ. 한계\n- WEP 자체의 RC4/짧은 IV 등 구조적 취약점은 제거하지 못함\n- 현대 WLAN에서는 WPA2/WPA3가 권고됨\n\nⅤ. 기술사 포인트\nDynamic WEP은 'WEP의 키관리 개선'이지 'WEP 암호 알고리즘의 근본 취약점 해결'은 아니다."
  },
  "134-1-7": {
    "category": "시스템보안",
    "defaultKeywords": "SBOM, Software Bill of Materials, SPDX, CycloneDX, Supply Chain Security, CVE, Dependency, SCA",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- SBOM은 소프트웨어 제품을 구성하는 Open Source·상용 Component, Library, Version, Dependency 등의 목록을 구조화한 Software 자재명세서이다.\n\nⅡ. 주요정보\n- Component/Package 명칭과 Version\n- Supplier/License\n- Dependency Relationship\n- Hash/Identifier(PURL, CPE 등)\n\nⅢ. 활용\nSBOM 생성 → Component 식별 → CVE/Vulnerability Mapping → 영향분석 → Patch/교체\n- 공급망 공격 대응\n- License Compliance\n- 취약 Component 신속 식별\n\nⅣ. 표준\n- SPDX, CycloneDX 등이 대표 Format\n\nⅤ. Best Practice\nCI/CD에서 SCA와 SBOM 생성을 자동화하고, 납품 후에도 Vulnerability Feed와 연결하여 지속 관리해야 한다."
  },
  "134-1-8": {
    "category": "하드웨어 시스템",
    "defaultKeywords": "NPU, Neural Processing Unit, Tensor, MAC, Matrix Multiplication, AI Accelerator, Low Power, Heterogeneous Computing",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- NPU는 Neural Network의 Matrix/Tensor 연산을 고속·저전력으로 처리하도록 설계된 AI 전용 Processor이다.\n\nⅡ. 구조적 특징\nCPU(Control) + GPU(Parallel) + NPU(AI Tensor)\n- 대량의 MAC(Multiply-Accumulate) Unit\n- On-chip SRAM 및 고대역폭 Data Path\n- INT8/FP16/BF16 등 AI 연산 최적화\n\nⅢ. 장점\n- CPU 대비 높은 AI 처리 효율\n- GPU 대비 전력효율 향상\n- On-device AI에 적합\n\nⅣ. 적용\n- Smartphone AI, ADAS, Vision, Voice, LLM Inference\n\nⅤ. 추세\nCPU·GPU·NPU를 역할별로 조합하는 Heterogeneous Computing이 일반적이다."
  },
  "134-1-9": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "Platform Engineering, Internal Developer Platform, IDP, Golden Path, Self-service, DevOps, CI/CD, IaC",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- Platform Engineering은 개발자가 Infra·배포·관측도구를 직접 복잡하게 다루지 않고 표준화된 Self-service 환경을 이용하도록 Internal Developer Platform(IDP)을 구축·운영하는 활동이다.\n\nⅡ. 구성\nDeveloper Portal → Golden Path → CI/CD → IaC/Kubernetes → Observability\n                          ↘ Security/Policy\n\nⅢ. 핵심기능\n- Self-service Environment\n- 표준 Pipeline/Template\n- IaC 및 Container Platform\n- Secret/Policy 관리\n- Monitoring/Logging\n\nⅣ. 효과\n- Developer Experience 향상\n- 운영표준화·보안 내재화\n- Cognitive Load 감소 및 Delivery Lead Time 단축\n\nⅤ. 관계\nDevOps가 문화·협업 원칙이라면 Platform Engineering은 이를 조직 규모에서 재사용 가능한 Product 형태로 제공한다."
  },
  "134-1-10": {
    "category": "법규·정책·표준",
    "defaultKeywords": "Cloud Safety Review, Service Operation, Monitoring, Emergency Contact, Real-time Monitoring, Incident Response, Account Security",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- 「행정기관 및 공공기관의 클라우드컴퓨팅서비스 이용 기준 및 안전성 확보 등에 관한 고시」는 공공기관의 Cloud 이용 시 안정성과 운영역량을 검토하기 위한 항목을 제시한다.\n\nⅡ. 서비스 운영 분야 주요 검토항목\n1) 자체 관제체계\n- 24×365 운영방안, 관제인력, 관제장소·환경\n\n2) 비상연락체계\n- 기관 담당자·유지보수·협력업체 연락망 및 현행화\n\n3) 실시간 모니터링\n- CPU/Memory/Disk/Network/URL/Process/Log\n- APM, CSP 서비스 모니터링, 임계치·알람·운영보고\n\n4) 장애대응 및 위험관리\n- 고객 대응조직, 사전예방, 모의훈련, Backup/Recovery\n\n5) 계정 및 보안관리\n- 서버 접속권한·기록, Console 계정, F/W·VPN·IPS, PC/인력보안\n\nⅢ. 핵심\n공공 Cloud는 기능뿐 아니라 '지속적인 운영·관제·복구·접근통제 능력'을 함께 평가해야 한다."
  },
  "134-1-11": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "Agile, Iteration, Incremental, Customer Collaboration, Continuous Feedback, Scope Change, Technical Debt",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- Agile은 짧은 Iteration을 반복하면서 Working Software를 점진적으로 제공하고 고객 Feedback을 지속 반영하는 개발방식이다.\n\nⅡ. 장점\n- 요구변경 대응력 우수\n- 조기 Working Software 제공\n- 고객 참여·Feedback 강화\n- Risk 조기 식별\n- Team 자율성과 품질 개선\n\nⅢ. 단점\n- Scope/일정 예측이 어려울 수 있음\n- 고객의 지속 참여가 필요\n- 대규모·규제산업은 문서화/거버넌스 부담\n- Architecture 부채·Technical Debt 위험\n- 숙련된 Team이 필요\n\nⅣ. 적용전략\nAgile은 '문서 없음'이 아니라 필요한 Governance를 유지하며 Iterative Delivery를 수행하는 것이다."
  },
  "134-1-12": {
    "category": "법규·정책·표준",
    "defaultKeywords": "전자정부 성과관리, 정보시스템 운영 성과, 비용 측면, 업무 측면, 운영비, 기능 활용성, 유지관리유형",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- 전자정부 정보시스템 운영 성과측정은 시스템을 지속 운영할 가치가 있는지 판단하기 위해 투입비용과 업무 활용성을 정해진 지표로 측정하는 활동이다.\n\nⅡ. 측정 관점\n1) 비용 측면\n- 운영·유지관리비 적정성\n- 전체 IT 비용 대비 비용수준\n- 비용 절감 및 자원효율\n\n2) 업무 측면\n- 시스템 기능 활용도\n- 업무수행 기여도 및 사용자 활용성\n- 중복/미사용 기능 여부\n\nⅢ. 활용\n성과측정 → 유지관리유형 결정 → 유지/개선/통폐합/재개발 등 후속조치\n\nⅣ. 기술사 포인트\n성과측정 자체보다 결과를 정보화 투자 의사결정과 후속 개선으로 연결하는 것이 핵심이다."
  },
  "134-1-13": {
    "category": "컴퓨터 시스템 평가",
    "defaultKeywords": "소프트웨어 품질성능 평가시험, 상용SW, 기능성, 성능효율성, 호환성, 사용성, 신뢰성, 보안성, 유지보수성",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 정의\n- 소프트웨어 품질·성능 평가시험은 상용SW 구매 시 발주기관이 요구한 품질과 성능을 객관적인 시험기준으로 평가하여 적정 제품을 선정하기 위한 제도이다.\n\nⅡ. 평가 관점\n- 기능 적합성\n- 성능 효율성\n- 호환성/상호운용성\n- 사용성\n- 신뢰성/가용성\n- 보안성\n- 유지보수성·이식성\n※ 실제 평가항목은 사업 특성과 관련 지침에 맞게 구성한다.\n\nⅢ. 절차\n평가계획/기준수립 → 시험환경 구축 → 제품별 동일조건 시험 → 결과 기록 → 평가/선정\n\nⅣ. 기대효과\n- 제품선정의 객관성·투명성 향상\n- 과도한 기능경쟁 방지\n- 요구 성능 미충족 Risk 감소"
  },
  "134-2-1": {
    "category": "컴퓨터 통신 및 네트워크",
    "defaultKeywords": "PoE, Power over Ethernet, PSE, PD, IEEE 802.3af, 802.3at, 802.3bt, Mode A, Mode B",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- PoE(Power over Ethernet)는 Ethernet Data Cable을 이용해 Data와 DC 전력을 동시에 전달하는 기술이다.\n- 문제의 영문 표기는 Power of Ethernet이나, IEEE에서 일반적으로 사용하는 명칭은 Power over Ethernet이다.\n\nⅡ. 구성 및 동작\nPSE(Power Sourcing Equipment) ── UTP ── PD(Powered Device)\n       Switch/Injector                AP, CCTV, IP Phone\n\n1) Detection: PD 존재 확인\n2) Classification: 전력 Class 협상\n3) Power On: 전원 인가\n4) Maintain/Disconnect: 상태 감시 및 차단\n\nⅢ. IEEE 표준\n- IEEE 802.3af(Type 1): 약 15.4 W PSE\n- IEEE 802.3at(Type 2, PoE+): 약 30 W\n- IEEE 802.3bt(Type 3/4, 4-pair PoE): 고전력 장치 지원\n- Data Pair를 활용하는 End-span, 별도 Injector를 쓰는 Mid-span 방식이 존재한다.\n\nⅣ. 국내 기술기준 관점\n- 국내 구내통신설비 기술기준은 통신선과 전력선의 이격·접촉 안전을 규정하며, PoE와 같이 통신선/전선을 통해 직류전원을 공급하는 경우 전압·전력과 설치조건에 따라 예외 및 이격기준 적용 여부를 판단한다.\n- 따라서 설계 시 IEEE 전력 Class뿐 아니라 국내 배선, 접지, 이격, 발열·Bundle 조건을 함께 검토해야 한다.\n\nⅤ. 장단점 및 적용\n- 장점: 전원공사 단순화, UPS 일원화, 원격 전원제어\n- 고려: Cable 발열, 전력 Budget, Switch 장애영향\n- 적용: Wi-Fi AP, CCTV, VoIP Phone, IoT Gateway"
  },
  "134-2-2": {
    "category": "최신 기술 동향",
    "defaultKeywords": "초거대 AI, Foundation Model, 생성형 AI, 공공부문, 책임성, 안전성, 데이터보호, Hallucination, PoC",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 초거대 AI 개념\n- 대규모 Data와 초대형 Parameter를 학습한 Foundation Model을 기반으로 Text·Image·Code 등 다양한 Task를 수행하는 범용 AI이다.\n- Prompt, Fine-tuning, RAG 등을 통해 공공업무에 특화할 수 있다.\n\nⅡ. 공공부문 도입 원칙\n1) 공공가치 중심: 국민 편익·행정효율 등 명확한 목적\n2) 안전·신뢰: 결과 검증, Human-in-the-loop, 책임주체 명확화\n3) 개인정보·보안 보호: 민감정보 입력통제, 데이터 등급·접근권한\n4) 공정·투명: 편향·차별 최소화, AI 활용 사실과 한계 설명\n5) 효율성: 기존 서비스/민간 API/공통기반과 중복투자 검토\n\nⅢ. 사전 고려사항\n- Use Case와 KPI, AI가 필요한 문제인지 검토\n- Data 확보·품질·저작권·개인정보\n- On-premise/Private Cloud/API 등 배치모델\n- Hallucination·Prompt Injection·Data Leakage 대응\n- Model 성능평가와 지속 Monitoring\n- 비용(TCO, GPU/API), Vendor Lock-in, SLA\n- 법·제도·감사·민원 발생 시 책임체계\n\nⅣ. 도입 절차 제안\nProblem 정의 → Data/Risk Assessment → PoC → Security/Privacy Review → Pilot → 운영 KPI Monitoring\n\nⅤ. Best Practice\n- 공공 AI는 정확도만 평가하지 말고 '업무효과 + 안전 + 보안 + 설명가능성 + 지속비용'을 함께 평가해야 한다."
  },
  "134-2-3": {
    "category": "시스템보안",
    "defaultKeywords": "ISMS-P 간편인증, 중소기업, 인증의 특례, 별표 7의2, 별표 7의3, 경량화, 관리체계, 보호대책",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 목적\n- ISMS-P 간편인증은 영세·중소기업이 기존 인증의 심사범위·비용·행정부담 때문에 인증 취득이 어려운 문제를 완화하고, 핵심 보안통제를 유지하면서 인증 참여를 확대하기 위한 경량화 제도이다.\n\nⅡ. 대상\n- 「정보보호 및 개인정보보호 관리체계 인증 등에 관한 고시」가 정한 인증 특례 대상 중소기업을 중심으로 적용한다.\n- 소기업 및 일정 규모 미만의 중기업, 자체 주요 정보통신설비 보유 여부 등 조건에 따라 적용되는 간편기준이 구분된다.\n- 실제 신청 시 기업 규모·매출·서비스 및 인프라 보유형태를 기준으로 해당 별표를 확인해야 한다.\n\nⅢ. 인증기준\n- 기존 ISMS-P의 관리체계 수립·운영, 보호대책, 개인정보 처리단계 요구사항 중 위험도가 높은 핵심항목을 유지하면서 세부 점검항목을 간소화한다.\n- 간편인증 기준은 고시 별표 7의2·7의3 및 KISA 세부점검항목을 기준으로 적용한다.\n\nⅣ. 핵심 관리영역\nManagement System → Access Control → Encryption → Development/Operation Security\n                    → Incident Response → Personal Data Lifecycle\n\nⅤ. 기대효과/유의점\n- 인증 진입장벽과 비용 감소\n- 중소기업 Security Baseline 향상\n- 단, 간편인증은 보안책임의 완화를 의미하지 않으며 Risk 기반 통제와 지속 운영이 필요하다."
  },
  "134-2-4": {
    "category": "시스템보안",
    "defaultKeywords": "Spoofing, ARP Spoofing, IP Spoofing, DNS Spoofing, MITM, DAI, uRPF, DNSSEC",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개념\n- Spoofing은 공격자가 신뢰받는 사용자·Host·Address·Name 등의 식별정보를 위조하여 인증을 우회하거나 Traffic을 탈취·변조하는 공격이다.\n\nⅡ. ARP Spoofing\n1) 공격\nAttacker가 위조 ARP Reply 전송 → Victim/Gateway ARP Cache 오염 → MITM\n2) 대응\n- Static ARP(중요장비), DHCP Snooping + Dynamic ARP Inspection\n- Port Security, VLAN Segmentation, TLS/VPN\n\nⅢ. IP Spoofing\n1) 공격\n- Packet Source IP를 신뢰 Host 또는 Victim IP로 위조\n- Reflection DDoS, ACL 우회 등에 악용\n2) 대응\n- Ingress/Egress Filtering, uRPF\n- Stateful Firewall, IPsec, Anti-spoof ACL\n\nⅣ. DNS Spoofing\n1) 공격\n- 위조 DNS Response 또는 Cache Poisoning으로 악성 IP를 반환\n2) 대응\n- DNSSEC, Source Port/Transaction ID Randomization\n- Secure Resolver, DoT/DoH, Cache 관리\n\nⅤ. 종합대책\nIdentity Verification + Encryption + Network Validation + Monitoring을 다계층으로 적용해야 한다."
  },
  "134-2-5": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "Deadlock, Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait, Prevention, Avoidance, Detection, Recovery",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개념\n- Deadlock은 둘 이상의 Process/Task가 서로 상대방이 보유한 자원을 기다리며 영구적으로 진행하지 못하는 상태이다.\n\nⅡ. 필요조건(Coffman Conditions)\n1) Mutual Exclusion: 자원을 한 번에 하나만 사용\n2) Hold and Wait: 자원을 보유한 채 다른 자원 대기\n3) No Preemption: 자원을 강제로 회수할 수 없음\n4) Circular Wait: P1→P2→…→Pn→P1 순환대기\n→ 4조건이 동시에 성립해야 Deadlock 가능\n\nⅢ. 해결방법\n1) Prevention\n- 필요조건 중 하나를 구조적으로 제거\n- 자원 일괄할당, Resource Ordering 등\n\n2) Avoidance\n- Safe State를 유지하도록 동적 할당\n- Banker’s Algorithm\n\n3) Detection\n- Wait-for Graph 또는 자원할당 그래프를 주기적으로 분석\n\n4) Recovery\n- Process 종료, Rollback, 자원 선점/재할당\n\nⅣ. 비교\nPrevention은 단순하지만 Resource Utilization이 낮고, Avoidance는 사전 최대요구량 정보가 필요하다. Detection/Recovery는 활용률은 높지만 복구비용이 발생한다.\n\nⅤ. Best Practice\n실시간/Embedded System에서는 Lock Ordering, Timeout, Priority Ceiling/Inheritance 등으로 설계 단계에서 Deadlock과 Priority Inversion을 동시에 관리한다."
  },
  "134-2-6": {
    "category": "컴퓨터 통신 및 네트워크",
    "defaultKeywords": "OSI 7 Layer, Physical, Data Link, Network, Transport, Session, Presentation, Application, PDU",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- OSI 7 Layer는 통신기능을 계층화하여 각 계층의 역할과 Interface를 표준화함으로써 상호운용성과 문제분리를 지원한다.\n\nⅡ. 계층별 정리\n7 Application\n- 기능: 사용자 Network Service\n- Protocol: HTTP, FTP, SMTP, DNS\n- Data: Data\n- 장비: Proxy, Application Gateway\n\n6 Presentation\n- 기능: Encoding, Compression, Encryption\n- 예: TLS 표현기능, JPEG/ASN.1 등\n- Data: Data\n\n5 Session\n- 기능: Session 수립·유지·동기화\n- 예: RPC, NetBIOS Session\n- Data: Data\n\n4 Transport\n- 기능: End-to-End 전송, 신뢰성·Flow Control\n- Protocol: TCP, UDP, SCTP\n- Data: Segment/Datagram\n- 장비: L4 Load Balancer\n\n3 Network\n- 기능: Logical Addressing, Routing\n- Protocol: IP, ICMP, OSPF\n- Data: Packet\n- 장비: Router, L3 Switch\n\n2 Data Link\n- 기능: Frame, MAC, Error Detection, Media Access\n- Protocol: Ethernet, PPP, HDLC, 802.1Q\n- Data: Frame\n- 장비: Bridge, L2 Switch\n\n1 Physical\n- 기능: Bit 신호 전송, 전기/광 특성\n- 표준: Ethernet PHY, RS-232 등\n- Data: Bit\n- 장비: Hub, Repeater, Cable\n\nⅢ. Encapsulation\nData → Segment → Packet → Frame → Bit\n수신측에서는 역순으로 Decapsulation한다.\n\nⅣ. 실무 활용\n장애분석 시 Physical → Link → Network → Transport → Application 순의 계층별 Troubleshooting이 효과적이다."
  },
  "134-3-1": {
    "category": "법규·정책·표준",
    "defaultKeywords": "EA, Enterprise Architecture, Meta Model, PRM, BRM, DRM, SRM, TRM, Maturity Model",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- EA(Enterprise Architecture)는 조직의 업무·Data·Application·Technology 현황과 목표구조를 체계적으로 관리하여 정보화 중복투자 방지와 상호운용성을 확보하는 관리체계이다.\n\nⅡ. 범정부 EA Meta Model\n- 범정부 차원에서 공통으로 정의·공유해야 하는 EA 필수정보와 그 구조·관계를 정의한다.\n- 개별기관은 범정부 Meta Model을 적용하되 기관의 목적에 맞는 세부 속성을 확장할 수 있다.\n\nⅢ. 범정부 EA 참조모형\n1) PRM(성과참조모형)\n- 정보화 성과요소 분류·정의\n\n2) BRM(업무참조모형)\n- 조직과 독립적으로 정부 업무를 분류\n\n3) DRM(데이터참조모형)\n- 데이터 표준화·재사용을 위한 분류와 표준구조\n\n4) SRM(서비스참조모형)\n- 재사용 가능한 Application Service/Component 분류\n\n5) TRM(기술참조모형)\n- 정보시스템 구현에 필요한 Technology와 Standard 분류\n\nⅣ. EA 성숙도 Model\n- 기관의 EA 기반 정보화 추진역량과 정보자원 관리수준을 자체 진단해 개선방향을 도출하는 모델이다.\n- 진단영역: EA 수립 → 관리 → 활용 → 성과/개선의 지속적 성숙\n- 진단결과를 Gap Analysis와 개선 Roadmap에 연결한다.\n\nⅤ. 활용 Architecture\nBusiness Strategy\n      ↓\n[BRM] ↔ [PRM]\n  ↓       ↑\n[SRM] - [DRM]\n   ↓\n [TRM]\n      → Meta Model/Repository → Portfolio & Investment Decision\n\nⅥ. 효과\n- 중복 System 제거, 공동활용·표준화, 투자성과 향상, Cloud/Data/AI 전환 시 As-Is/To-Be 의사결정 근거를 제공한다."
  },
  "134-3-2": {
    "category": "컴퓨터 시스템 평가",
    "defaultKeywords": "지능정보기술 감리, Big Data Audit, Cloud Audit, 분석단계, Data Quality, Model Validation, Cloud Planning, SLA, Security",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- 지능정보기술 감리는 기존 정보시스템 감리관점에 Big Data·AI·Cloud 특유의 Data 품질, Model 타당성, Elasticity, 보안·서비스 관리 요소를 추가하여 사업 위험을 점검한다.\n\nⅡ. Big Data 분석단계 주요 점검항목\n1) 분석목표/요구사항\n- 업무문제와 분석목표·KPI 정합성\n- 분석대상과 활용 시나리오 명확성\n\n2) Data\n- Source 적정성, 수집·정제·결측/이상치 처리\n- Data 품질·대표성·Bias\n- 개인정보/저작권·접근권한\n\n3) 분석 Model\n- Algorithm 선정근거\n- Train/Validation/Test 분리\n- 성능지표와 검증방법\n- Overfitting, 재현성, 설명가능성\n\n4) 결과 활용\n- 분석결과 업무 적용가능성\n- Model/Version/Experiment 관리\n- 운영 Monitoring 및 재학습 계획\n\nⅢ. Cloud 계획수립 주요 점검항목\n- Cloud 도입 타당성·대상업무 선정\n- IaaS/PaaS/SaaS 및 Public/Private/Hybrid 전략\n- As-Is 자원/Dependency 및 Migration 난이도\n- Target Architecture, Network/Identity/Data 구조\n- Security/Privacy/법규/CSAP 등 준거성\n- SLA, Availability, RTO/RPO, Backup/DR\n- Capacity/Auto Scaling, Performance\n- TCO/FinOps 및 Vendor Lock-in/Exit Plan\n- 운영조직, 역할, Monitoring/Incident/Change 관리\n\nⅣ. 감리 관점\nPlan → Data/Architecture → Build → Validation → Operation\n각 단계에서 '절차 적정성 + 산출물 완전성 + 사업성과 충족성'을 연계하여 판단한다.\n\nⅤ. Best Practice\n- Big Data는 Accuracy만, Cloud는 이전 완료만 보는 것이 아니라 Data Governance·운영가능성·Exit 전략까지 점검해야 한다."
  },
  "134-3-3": {
    "category": "컴퓨터 통신 및 네트워크",
    "defaultKeywords": "Digital Hierarchy, PDH, SDH, SONET, STM, STS, Synchronous Multiplexing, Add Drop Multiplexer",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- Digital Hierarchy는 다수의 저속 Digital Signal을 계층적으로 다중화하여 고속 전송하기 위한 전송체계이다.\n\nⅡ. PDH(Plesiochronous Digital Hierarchy)\n- 서로 거의 같지만 완전히 동기화되지 않은 Clock 사용\n- Bit Stuffing으로 Clock 차이를 보정\n- 저속 Channel 추출 시 단계별 Demultiplexing 필요\n- 지역별 Hierarchy 표준 차이 존재\n\nⅢ. SDH(Synchronous Digital Hierarchy)\n- 공통 동기 Clock 기반 국제 표준 Digital 전송계층\n- 기본 전송단위 STM-1(155.52 Mbps)\n- Pointer 기반 Multiplexing\n- ADM(Add-Drop Multiplexer)으로 저속 신호 직접 Add/Drop\n- 강력한 OAM 및 Ring Protection\n\nⅣ. SONET\n- 북미 중심의 Synchronous Optical Network\n- 기본 단위 STS-1/OC-1(51.84 Mbps)\n- SDH와 상호 호환 가능한 동기식 광전송 체계\n\nⅤ. 비교\n구분 | PDH | SDH | SONET\n동기 | Plesiochronous | Synchronous | Synchronous\n기본 | 지역별 | STM-1 | STS-1/OC-1\n운용 | 복잡 | OAM/보호 우수 | OAM/보호 우수\n추출 | 단계적 Demux | Add/Drop 용이 | Add/Drop 용이\n\nⅥ. 발전\nCarrier Network는 이후 OTN, Packet Transport, Ethernet 기반으로 고도화되었으나 SDH/SONET의 동기·보호개념은 전송망 설계의 기초이다."
  },
  "134-3-4": {
    "category": "시스템 SW 및 응용 SW",
    "defaultKeywords": "Database Integrity, Domain Integrity, Entity Integrity, Referential Integrity, User-defined Integrity, Constraint",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개념\n- Database 무결성 제약조건은 Data가 정의된 Business Rule과 관계 규칙을 지속적으로 만족하도록 DBMS가 강제하는 조건이다.\n\nⅡ. 종류\n1) Domain Integrity\n- Column의 Data Type, Range, Format\n- NOT NULL, CHECK 등\n\n2) Entity Integrity\n- 각 Tuple을 유일하게 식별\n- PRIMARY KEY는 Unique + NOT NULL\n\n3) Referential Integrity\n- FOREIGN KEY가 유효한 Parent Key를 참조\n- INSERT/UPDATE/DELETE 시 관계 일관성 유지\n\n4) Key/Unique Integrity\n- Candidate/Unique Key의 중복 방지\n\n5) User-defined/Business Integrity\n- 업무 Rule을 CHECK, Trigger, Procedure 등으로 구현\n\nⅢ. 구현\nApplication\n    ↓\nDB Constraint\nPK / FK / UNIQUE / NOT NULL / CHECK\n    ↓\nConsistent Data\n\nⅣ. 생성 시 고려사항\n- Business Rule을 DB Constraint와 Application Rule 중 어디에서 강제할지 결정\n- FK Cascade/Delete Policy\n- NULL 의미 정의\n- Bulk Load/ETL 성능과 Index 비용\n- Legacy Data 정합성 사전검증\n- 분산 DB/Microservice 환경의 Transaction Boundary\n\nⅤ. Best Practice\n가능한 핵심 무결성은 DBMS Constraint로 강제하고, 복잡한 업무규칙은 Domain Service와 병행하여 Single Source of Truth를 유지한다."
  },
  "134-3-5": {
    "category": "컴퓨터 통신 및 네트워크",
    "defaultKeywords": "Protocol, Syntax, Semantics, Timing, Encapsulation, Addressing, Flow Control, Error Control, Routing",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개념\n- Network Protocol은 서로 다른 System/Device 간 통신을 위해 Message Format, 의미, 전송절차를 합의한 규칙의 집합이다.\n\nⅡ. 3가지 요소\n1) Syntax\n- Data Format, Frame/Packet Structure, Field Length\n\n2) Semantics\n- 각 Field와 Control Message의 의미\n- Error/ACK/Control 동작\n\n3) Timing\n- 전송순서, 속도, Timeout, Synchronization\n\nⅢ. 주요 기능\n- Encapsulation/Framing\n- Addressing\n- Segmentation/Reassembly\n- Connection Control\n- Flow Control\n- Error Detection/Recovery\n- Sequence Control\n- Multiplexing/Demultiplexing\n- Routing\n- Synchronization\n\nⅣ. 예: TCP\nApplication Data\n→ TCP Header(Port/Seq/Ack/Flag)\n→ Flow/Congestion/Error Control\n→ IP Packet\nTCP는 Syntax(Header), Semantics(SYN/ACK/FIN), Timing(RTO/Window)을 모두 포함한다.\n\nⅤ. 의의\nProtocol 표준화는 Heterogeneous System 간 Interoperability와 Vendor-independent Network를 가능하게 한다."
  },
  "134-3-6": {
    "category": "시스템보안",
    "defaultKeywords": "WAF, IDS, IPS, Signature, Anomaly Detection, Inline, Out-of-band, OWASP, Defense in Depth",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- WAF, IDS, IPS는 모두 침해위협을 탐지·차단하지만 보호대상, 배치위치, 분석계층이 다르다.\n\nⅡ. WAF(Web Application Firewall)\n- L7 HTTP/HTTPS Web Traffic 보호\n- SQL Injection, XSS, File Upload, Bot 등 Web Attack 차단\n- Positive/Negative Security Model, Virtual Patching\n\nⅢ. IDS(Intrusion Detection System)\n- Traffic/Host Event를 탐지하고 Alert\n- NIDS/HIDS\n- Signature/Anomaly 기반\n- 일반적으로 Out-of-band 배치 → 직접차단보다 탐지·분석 중심\n\nⅣ. IPS(Intrusion Prevention System)\n- Network 경로 Inline 배치\n- IDS 기능 + Drop/Reset/Block\n- 알려진 Exploit, Scan, Malicious Traffic 실시간 차단\n\nⅤ. 비교\nWAF: Web App / L7 / App Rule\nIDS: Detection / Out-of-band / 가시성\nIPS: Prevention / Inline / Network Attack 차단\n\nⅥ. Architecture\nInternet → NGFW/IPS → WAF → Web/App\n               ↘ IDS/SIEM Monitoring\n\nⅦ. Best Practice\n단일장비가 모든 공격을 해결하지 못하므로 EDR, IAM, SIEM/SOAR와 연계한 Defense-in-Depth가 필요하다."
  },
  "134-4-1": {
    "category": "법규·정책·표준",
    "defaultKeywords": "SP 품질인증, Software Process, Project Management, Development, Support, Organization Management, Process Improvement, 2등급, 3등급",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- 소프트웨어프로세스(SP) 품질인증은 SW 개발·관리 조직이 표준화된 Process를 수립하고 실제 Project에 체계적으로 적용·개선하는지를 심사하여 Process 역량을 인증하는 제도이다.\n\nⅡ. 품질인증 기준 영역\n1) Project Management\n- 계획수립, Monitoring/Control, 위험·협력업체 관리\n\n2) Development\n- 요구사항, 분석·설계, 구현, 시험, Integration 등 개발 Life Cycle\n\n3) Support\n- 품질보증, 형상관리, 측정·분석, 검토 등\n\n4) Organization Management\n- 조직표준 Process, 교육, 조직단위 자산관리\n\n5) Process Improvement\n- Process 성과 측정, 개선과제 도출·확산\n\nⅢ. 제134회 출제시점의 인증등급\n- 2등급(Project Level): 영역 1~3 중심\n  → 개별 Project를 일관된 Process로 관리·개발·지원할 수 있는 수준\n- 3등급(Organization Level): 영역 1~5\n  → 조직 표준 Process를 정의·전사 적용하고 지속 개선하는 수준\n\nⅣ. 심사 개념\n신청 → 문서/Process 준비 → 현장심사 → 부적합 개선 → 인증심의 → 인증 → 사후관리\n\nⅤ. 최신 제도 변화\n- 제134회 시험 당시에는 2·3등급 체계였으나, 2025년 제도 개정으로 1등급이 추가되어 현재는 1~3등급 체계가 되었다.\n- 따라서 시험 답안에서는 '출제시점 기준'과 '최신 개정사항'을 구분해 제시하면 차별화가 가능하다."
  },
  "134-4-2": {
    "category": "법규·정책·표준",
    "defaultKeywords": "ISO 26262, Functional Safety, Safety Lifecycle, HARA, ASIL, QM, ASIL A B C D, V-model",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- ISO 26262는 Road Vehicle의 E/E(Electrical/Electronic) System 오동작으로 발생할 수 있는 Hazard를 체계적으로 관리하는 자동차 Functional Safety 국제표준이다.\n\nⅡ. ISO 26262 주요 구성\n1) Vocabulary\n2) Management of Functional Safety\n3) Concept Phase\n- Item Definition, HARA, Functional Safety Concept\n4) Product Development at System Level\n5) Product Development at Hardware Level\n6) Product Development at Software Level\n7) Production, Operation, Service, Decommissioning\n8) Supporting Processes\n- Configuration, Change, Verification, Tool Qualification 등\n9) ASIL-oriented and Safety-oriented Analysis\n10) Guideline\n11) Semiconductor 관련 Guidance\n12) Motorcycle 적용\n\nⅢ. Safety Lifecycle\nItem Definition → HARA → Safety Goal\n→ Functional Safety Concept\n→ Technical Safety Concept\n→ System/HW/SW Development\n→ Verification & Validation\n→ Production/Operation\n\nⅣ. ASIL\n- Automotive Safety Integrity Level은 Hazard의 위험도에 따라 Safety Requirement의 엄격성을 구분한다.\n- 평가요소: Severity(S), Exposure(E), Controllability(C)\n- 등급: QM < ASIL A < B < C < D\n- ASIL D가 가장 높은 Safety Integrity 요구수준\n\nⅤ. ASIL 적용\n- Safety Goal에 ASIL 부여\n- Requirement Decomposition 가능\n- ASIL이 높을수록 Independence, Verification, Diagnostic Coverage, Development Rigor 강화\n\nⅥ. 실무 포인트\nFunctional Safety는 '고장이 안 나게 하는 것'만이 아니라, Random HW Failure와 Systematic Failure를 분석하고 고장 발생 시 안전상태로 전환하도록 설계하는 것이다."
  },
  "134-4-3": {
    "category": "하드웨어 시스템",
    "defaultKeywords": "Parallel Computing, Flynn Taxonomy, SISD, SIMD, MISD, MIMD, Shared Memory, Distributed Memory, GPU",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- Parallel Computing은 하나의 문제를 여러 연산 Unit이 동시에 처리하도록 Task/Data를 분할하여 처리시간 단축과 처리량 향상을 달성하는 Computing 방식이다.\n\nⅡ. 기본 구조\nProblem\n  ↓ Decomposition\nTask1 ─ CPU/Core1\nTask2 ─ CPU/Core2\nTask3 ─ GPU/Accelerator\n  ↓ Synchronization\nResult\n\nⅢ. Flynn의 병렬 Processor 분류\n1) SISD\n- Single Instruction, Single Data\n- 전통적 단일 Processor\n\n2) SIMD\n- Single Instruction, Multiple Data\n- 동일 연산을 다수 Data에 병렬 적용\n- Vector Processor, GPU에 적합\n\n3) MISD\n- Multiple Instruction, Single Data\n- 일반적 활용은 드물며 Fault-tolerant/특수 Pipeline 등에 개념적으로 사용\n\n4) MIMD\n- Multiple Instruction, Multiple Data\n- Multi-core, SMP, Cluster, Distributed System\n\nⅣ. Memory 구조 관점\n- Shared Memory: Programming 용이, Cache Coherence/Contention 문제\n- Distributed Memory: 확장성 우수, Message Passing/Network 비용\n- Hybrid: Node 내부 Shared + Node 간 MPI\n\nⅤ. 병렬성 유형\n- Data Parallelism\n- Task Parallelism\n- Pipeline Parallelism\n- Model Parallelism(AI)\n\nⅥ. 성능 고려\nSpeedup = Ts/Tp\n- Amdahl's Law에 따라 Serial Portion이 전체 Speedup을 제한\n- Synchronization, Communication, Load Balance, Memory Bandwidth가 핵심 병목이다."
  },
  "134-4-4": {
    "category": "시스템보안",
    "defaultKeywords": "PET, Privacy Enhancing Technology, Encryption, Homomorphic Encryption, MPC, Differential Privacy, Federated Learning, Pseudonymization",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- PET(Privacy Enhancing Technology)는 개인정보의 수집·전송·저장·분석 과정에서 개인 식별·노출 위험을 최소화하면서 필요한 Data 활용을 가능하게 하는 기술의 총칭이다.\n\nⅡ. 주요 유형\n1) Data Minimization/De-identification\n- Masking, Pseudonymization, Anonymization, Tokenization\n\n2) Cryptographic PET\n- Encryption, Homomorphic Encryption\n- Secure Multi-Party Computation(MPC)\n- Private Set Intersection\n\n3) Statistical PET\n- Differential Privacy\n- Synthetic Data\n\n4) Distributed Learning\n- Federated Learning\n- Secure Aggregation\n\n5) Execution/Access Protection\n- Trusted Execution Environment(TEE)\n- Attribute/Policy-based Access Control\n\nⅢ. Architecture\nRaw Personal Data\n → Minimize/Pseudonymize\n → Encrypt/TEE/MPC\n → Analysis\n → Differential Privacy Output\n\nⅣ. 적용사례\n- 금융기관 공동 Fraud 분석: MPC/PSI\n- 의료기관 다기관 AI: Federated Learning\n- 통계 공개: Differential Privacy\n- Cloud 민감Data 분석: Homomorphic Encryption/TEE\n\nⅤ. 비교 포인트\n- HE: Data를 암호화한 채 계산, 강한 Privacy / 연산비용 큼\n- MPC: 여러 기관이 원본을 공유하지 않고 공동계산 / 통신비용\n- DP: 결과에 Noise를 추가해 개인 재식별 억제 / 정확도 Trade-off\n- FL: Data는 Local에 두고 Model Update 공유 / Gradient Leakage 대응 필요\n\nⅥ. Best Practice\nPET는 단일기술이 아니라 Data Lifecycle과 Risk에 따라 조합해야 하며, Privacy-by-Design과 법적 가명/익명 처리요건을 함께 검토해야 한다."
  },
  "134-4-5": {
    "category": "컴퓨터 통신 및 네트워크",
    "defaultKeywords": "HDLC, Flag, Address, Control, FCS, I-frame, S-frame, U-frame, NRM, ARM, ABM",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- HDLC(High-level Data Link Control)는 Bit-oriented 방식의 동기식 Data Link Protocol로, Frame 전송·오류제어·흐름제어·Link 관리를 제공한다.\n\nⅡ. 주요 기능\n- Framing 및 Transparency(Bit Stuffing)\n- Error Detection(FCS/CRC)\n- Flow Control\n- Sequence/ACK 기반 Reliable Delivery\n- Link Establishment/Release\n\nⅢ. Frame 구조\nFlag | Address | Control | Information | FCS | Flag\n01111110                                  01111110\n\n1) Flag\n- Frame 경계\n\n2) Address\n- Secondary Station 식별\n\n3) Control\n- Frame 유형, Sequence, ACK, Command/Response\n\n4) Information\n- 상위계층 Data\n\n5) FCS\n- CRC Error Detection\n\nⅣ. Frame 종류\n- I-frame: 사용자 Data + Sequence/ACK\n- S-frame: RR, RNR, REJ, SREJ 등 Supervisory Control\n- U-frame: Link 설정·해제·관리\n\nⅤ. 동작 Mode\n1) NRM(Normal Response Mode)\n- Primary가 Secondary의 전송을 제어\n\n2) ARM(Asynchronous Response Mode)\n- Secondary가 일부 비동기 응답 가능\n\n3) ABM(Asynchronous Balanced Mode)\n- 양 Station이 동등한 Combined Station으로 독립 송신\n- Point-to-Point에서 가장 유연\n\nⅥ. 의의\nHDLC의 Framing·Sequence·Flow/Error Control 개념은 PPP 등 후속 Data Link Protocol 이해의 기초가 된다."
  },
  "134-4-6": {
    "category": "최신 기술 동향",
    "defaultKeywords": "Multimodal AI, Text, Image, Audio, Video, Encoder, Fusion, Alignment, Cross Attention, Foundation Model, CLIP",
    "defaultAnswer": "[학습용 예시답안 · 공식 모범답안 아님]\nⅠ. 개요\n- Multimodal AI는 Text, Image, Audio, Video, Sensor 등 서로 다른 Modal의 정보를 공동으로 이해·추론·생성하는 AI이다.\n\nⅡ. 구성요소\n1) Modal Input\n- Text, Image, Audio, Video, Sensor\n\n2) Modality-specific Encoder\n- Text Transformer\n- Vision Transformer/CNN\n- Audio Encoder\n\n3) Common Representation/Embedding Space\n- 서로 다른 Modal을 공통 의미공간에 정렬\n\n4) Fusion/Reasoning\n- Early/Late/Intermediate Fusion\n- Cross Attention\n\n5) Decoder/Generator\n- Text/Image/Audio/Video Output\n\nⅢ. 구조\nText ─ Encoder ┐\nImage─ Encoder ├→ Alignment/Fusion → Multimodal LLM → Output\nAudio─ Encoder ┘\n\nⅣ. 핵심기술\n- Transformer/Attention\n- Vision Transformer\n- Contrastive Learning(CLIP 계열)\n- Cross-modal Alignment\n- Multimodal Instruction Tuning\n- Retrieval-Augmented Generation\n- Diffusion/Generative Model\n\nⅤ. 활용\n- Visual Question Answering\n- Document AI/OCR\n- Medical Image + Clinical Text\n- Autonomous Driving Sensor Fusion\n- AI Assistant/Robot\n\nⅥ. 기술적 난제\n- Modal 간 시간·공간 Alignment\n- Data 품질/편향\n- Hallucination과 Grounding\n- 높은 GPU/Memory 비용\n- 개인정보·저작권\n\nⅦ. 발전방향\nMultimodal Foundation Model은 Perception → Reasoning → Action을 연결하는 Embodied AI/AI Agent 방향으로 발전하고 있다."
  }
};
