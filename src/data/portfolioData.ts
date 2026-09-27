export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  trend?: string;
  icon?: string;
}

export interface IndustryRoleProfile {
  id: string;
  role: string;
  badge: string;
  industryPerception: string;
  summary: string;
  highlights: string[];
  techPillars: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  impactMetrics: { label: string; value: string }[];
  tags: string[];
  architectureHighlights: string[];
  codeSnippet?: { title: string; lang: string; code: string };
  badgeText: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: string; detail: string; isCore?: boolean }[];
}

export interface TimelineItem {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  skillsUsed: string[];
  metrics: string;
}

export interface SystemBenchmark {
  title: string;
  value: string;
  comparison: string;
  detail: string;
}

export interface ADR {
  id: string;
  title: string;
  status: 'ACCEPTED' | 'PROPOSED' | 'DEPRECATED';
  context: string;
  decision: string;
  consequences: string[];
}

export const HERO_METRICS: MetricItem[] = [
  {
    value: "1M+",
    label: "Active Consumer Installs",
    sublabel: "Google Play & App Store Verified (MYCash DFS)",
    trend: "+24% YoY Growth"
  },
  {
    value: "10K+",
    label: "Active Merchant Terminals",
    sublabel: "DGePay Interoperable POS & QR Fleet",
    trend: "99.9% Up-time"
  },
  {
    value: "99.9%+",
    label: "Success In-Pipeline Uptime",
    sublabel: "Zero-Downtime Offline Buffer Engine",
    trend: "24/7 Resilience"
  },
  {
    value: "-30%",
    label: "Latency & Memory Footprint",
    sublabel: "Custom Rust/C++ Native NDK Bridge",
    trend: "Sub-50ms Exec"
  }
];

export const INDUSTRY_ROLE_PROFILES: IndustryRoleProfile[] = [
  {
    id: "mobile-ai-engineer",
    role: "Mobile AI Engineer",
    badge: "Top Recommendation",
    industryPerception: "A senior software engineer who bridges client applications (Android/iOS/Flutter) with AI capabilities—whether via cloud AI APIs, streaming interfaces, or on-device inference (LiteRT/ONNX/CoreML).",
    summary: "Architecting high-throughput mobile runtimes that seamlessly orchestrate edge machine learning models, streaming cloud LLM/VLM tokens, and hardware-accelerated on-device neural engines (NPU/Metal/NNAPI).",
    highlights: [
      "On-device inference pipeline engineering with LiteRT (TFLite), ONNX Runtime Mobile, and Apple CoreML",
      "Low-latency streaming interfaces using Server-Sent Events (SSE), WebSockets, and gRPC token streams",
      "Edge Computer Vision preprocessing, optical receipt & document OCR, and biometric verification",
      "Client-side AI agent orchestration, mobile function calling, and local vector search caching"
    ],
    techPillars: ["LiteRT / TFLite", "ONNX Mobile", "CoreML", "Cloud AI APIs", "SSE / gRPC", "OpenCV", "Kotlin / Swift / Flutter"]
  },
  {
    id: "ai-mobile-developer",
    role: "AI Mobile Developer",
    badge: "Direct & Searchable",
    industryPerception: "Direct and searchable. Clearly tells recruiters you build mobile apps powered by AI features. Slightly more focused on app development than architecture.",
    summary: "Delivering user-centric, high-polish mobile applications directly empowered by intelligent AI features—from generative streaming chat interfaces to real-time image recognition.",
    highlights: [
      "Intuitive streaming generative UI with Markdown rendering, markdown tables, and typewriter animations",
      "In-app multimodal processing: real-time camera viewfinder analysis and voice audio streaming",
      "Resilient edge fallbacks: gracefully degrading AI capabilities when devices lose internet connectivity",
      "Non-blocking background coroutines and thread isolates ensuring steady 60-120 FPS UI response"
    ],
    techPillars: ["Flutter", "Jetpack Compose", "SwiftUI", "Streaming UX", "ML Kit", "Gemini / OpenAI APIs"]
  },
  {
    id: "pos-systems-architect",
    role: "Point of Sale (POS) Systems Architect",
    badge: "Enterprise Hardware Specialist",
    industryPerception: "A specialized systems engineer who architects hardware-integrated Point of Sale (POS) solutions—combining universal hardware abstraction layers (HAL), thermal printing, barcode scanning, EMV/NFC payment processing, and offline-first transactional ledgers.",
    summary: "Engineered interoperable merchant Point of Sale (POS) terminal fleets powering 10,000+ active devices across retail, restaurant, and distribution counters with sub-second checkout speeds.",
    highlights: [
      "Universal Hardware Abstraction Layer (HAL) for multi-vendor POS hardware (Sunmi, Pax, Ingenico, Telpo)",
      "ESC/POS thermal printer driver integration over Bluetooth LE, USB OTG, and Serial RS232",
      "EMVCo QR parsing, dynamic customer-facing mirror displays, and high-speed laser/camera barcode decoding",
      "Guaranteed zero-loss offline store-and-forward transaction queue with SQLite Write-Ahead Logging (WAL)"
    ],
    techPillars: ["Android POS HAL", "ESC/POS Thermal Engine", "EMVCo QR", "BLE / Serial RS232", "SQLite WAL", "PCI-DSS"]
  },
  {
    id: "fintech-systems-architect",
    role: "Fintech Systems Architect",
    badge: "DFS & Core Banking Specialist",
    industryPerception: "A seasoned fintech systems engineer specializing in bank-grade digital financial services (DFS), zero-trust PCI-DSS security enclaves, high-concurrency payment routing, and offline-resilient transactional store-and-forward engines.",
    summary: "Architecting high-concurrency mobile banking and payment engines (such as MYCash DFS serving 1M+ active consumers and 650K+ daily transactions) with hardware-backed key derivation and zero financial record loss.",
    highlights: [
      "Hardware-backed Android Keystore & iOS Secure Enclave AES-GCM 256-bit cryptography with HSM derivation",
      "High-throughput ISO 8583 & ISO 20022 financial message parsers delivering sub-80ms transaction turnaround",
      "Tamper-proof local Write-Ahead Logging (WAL) preventing financial ledger corruption during network drops",
      "Full adherence to PCI-DSS Level 1, OWASP Mobile Security, and central bank financial compliance audits"
    ],
    techPillars: ["PCI-DSS Enclave", "Hardware Keystore / TEE", "ISO 8583 / ISO 20022", "Biometric Vault", "SQLite WAL", "Coroutines"]
  }
];

export const RUNTIME_CODE_SNIPPET = `// OfflinePaymentEngine.kt - Core PCI-DSS Encrypted Store & Forward Engine
package com.mycash.fintech.engine.security

import com.mycash.crypto.KeystoreVault
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow

class OfflinePaymentEngine(
    private val keystoreVault: KeystoreVault,
    private val payloadEnclave: PayloadEnclave
) {
    suspend fun processOfflineTx(payload: PaymentPayload): TxResult {
        val encryptedData = keystoreVault.encryptAESGCM(
            data = payload.serialize(),
            keyAlias = SECURE_ALIAS
        )
        val signedEnvelope = payloadEnclave.signPayload(encryptedData)
        
        // Write to tamper-proof WAL storage
        val walId = LocalStorage.commitToEncryptedWAL(signedEnvelope)
        
        return TxResult.Success(
            transactionId = walId,
            status = TxStatus.QUEUED_OFFLINE,
            estimatedSyncMs = 450
        )
    }
}`;

export const POS_HAL_CODE_SNIPPET = `// PosHardwareHAL.kt - Universal POS Terminal & Thermal Printer Bridge
package com.dgepay.pos.hardware.hal

import com.dgepay.pos.driver.PrinterProtocol
import com.dgepay.pos.driver.BarcodeScannerService

class PosHardwareHAL(
    private val driverRegistry: PosDriverRegistry,
    private val cryptoVault: HardwareKeyEnclave
) {
    suspend fun printReceiptAndDispatch(
        cartPayload: CartEnvelope,
        printerType: PrinterProtocol = PrinterProtocol.ESC_POS
    ): PrintResult {
        // Build optimized bitmap byte-buffer for high-speed thermal head
        val rasterBytes = EscPosBuilder.rasterizeReceipt(
            items = cartPayload.lineItems,
            qrPayload = cartPayload.emvCoQrData,
            signature = cryptoVault.signPayload(cartPayload.hash)
        )
        
        // Execute low-level serial/BLE hardware stream with flow control
        return driverRegistry.getPrinterDriver(printerType).writeBytesDirect(rasterBytes)
    }
}`;

export const FLAGSHIP_PROJECTS: ProjectItem[] = [
  {
    id: "mycash",
    title: "MYCash Mobile Banking Platform",
    category: "Fintech & Mobile Banking",
    badgeText: "1M+ Active Users",
    description: "Architected high-concurrency core mobile banking suite serving over 1M+ active consumers with biometric authentication, dynamic QR payouts, and offline payload integrity.",
    fullDescription: "MYCash is a flagship Digital Financial Service (DFS) handling millions of financial operations. Designed zero-trust mobile client layer, hardware key derivation for user pin protection, instant QR code rendering, and resilient background synchronization over spotty 2G/3G networks.",
    impactMetrics: [
      { label: "Active Installs", value: "1,000,000+" },
      { label: "Daily Transactions", value: "650,000+" },
      { label: "Crash-Free Rate", value: "99.98%" },
      { label: "Sync Latency", value: "<80ms" }
    ],
    tags: ["Kotlin", "Android NDK", "PCI-DSS", "Biometric Vault", "SQLite WAL", "Coroutines"],
    architectureHighlights: [
      "Hardware-backed Android Keystore / iOS Secure Enclave AES-GCM 256-bit encryption",
      "Custom off-line transaction queue with multi-tier retries & idempotency check",
      "High-speed ISO 8583 message parser optimized for mobile runtime",
      "Dynamic background sync fallback to SMS payload relay when data network drops"
    ]
  },
  {
    id: "dgepay",
    title: "DGePay Interoperable Merchant Platform & POS Fleet",
    category: "Merchant & Point of Sale (POS) Systems",
    badgeText: "10K+ POS Terminals",
    description: "Next-gen interoperable merchant ecosystem powering 10K+ point-of-sale terminals with ultra-fast QR scanning, sub-second transaction routing, and settlement ledger.",
    fullDescription: "Built unified merchant ecosystem comprising Tektiti and Saudagor apps. Integrates multi-bank QR standards (EMVCo QR), Bluetooth POS printer hardware abstraction, universal POS terminal fleet management (Sunmi, Pax, Ingenico 45+ models), ESC/POS thermal printing, and merchant real-time settlement dashboard.",
    impactMetrics: [
      { label: "Active POS Terminals", value: "10,000+" },
      { label: "QR Decode Time", value: "60ms" },
      { label: "Settlement Speed", value: "<1.2s" },
      { label: "Hardware Support", value: "45+ POS Models" }
    ],
    tags: ["Flutter", "Dart", "C++ Native", "Point of Sale (POS)", "ESC/POS Printing", "EMVCo QR", "BLE Protocol", "REST/gRPC"],
    architectureHighlights: [
      "Hardware abstraction layer (HAL) for universal thermal printers and barcode scanners across 45+ POS hardware models",
      "Native C++ QR decoding engine delivering sub-60ms recognition speeds",
      "Local audit ledger with cryptographic signature chaining and SQLite Write-Ahead Logging (WAL) for zero-loss offline sales",
      "Dual-display customer mirror support and direct ESC/POS byte streaming via Bluetooth LE & USB OTG"
    ]
  },
  {
    id: "cptu",
    title: "Sarkari Kroy Dorpon (CPTU e-GP)",
    category: "Government Enterprise Systems",
    badgeText: "National Scale",
    description: "Bangladesh Central Procurement Technical Unit (CPTU) e-GP mobile application ('Sarkari Kroy Dorpon') enabling secure tender bidding, encrypted document vaults, and live audit workflows.",
    fullDescription: "Engineered secure mobile client for Bangladesh government's central e-procurement portal. Handles tens of thousands of simultaneous government contractors bidding on multi-million dollar public contracts.",
    impactMetrics: [
      { label: "Active Bidders", value: "100,000+" },
      { label: "Daily Procurement Audits", value: "50,000+" },
      { label: "Payload Compression", value: "-40%" },
      { label: "Security Rating", value: "100% Audit Clean" }
    ],
    tags: ["Kotlin", "Clean Architecture", "Encrypted Vault", "OAuth2 / PKCE", "Jetpack"],
    architectureHighlights: [
      "Zero-trust document storage vault with AES-256 local encryption",
      "Delta sync engine saving 40% bandwidth on large procurement document downloads",
      "Multi-factor biometric approval workflows for high-value tender submissions"
    ]
  },
  {
    id: "unicef",
    title: "UNICEF Health & Field Tech Applications",
    category: "Humanitarian Tech & Offline Field",
    badgeText: "Humanitarian Impact",
    description: "Field tech data collection suite deployed in rural Bangladesh for maternal & adolescent health tracking with guaranteed zero-loss offline sync.",
    fullDescription: "Developed specialized low-power field survey tools used by thousands of healthcare workers in remote regions without internet connectivity. Features compressed data stores and multi-device local p2p syncing.",
    impactMetrics: [
      { label: "Field Workers", value: "25,000+" },
      { label: "Health Records", value: "2.5M+" },
      { label: "Memory Footprint", value: "<15MB" },
      { label: "Data Integrity", value: "100% Zero-Loss" }
    ],
    tags: ["Android", "Room DB", "WorkManager", "Offline-First", "Protobuf", "GZIP"],
    architectureHighlights: [
      "Protocol Buffers binary payload compression reducing field transmission times",
      "Background sync engine capable of queuing 50,000 records without dropping frames",
      "Ultra-low RAM optimization ensuring smooth operation on entry-level $50 smartphones"
    ]
  },
  {
    id: "mobile-edge-ai",
    title: "Mobile Edge AI & Intelligent Vision Suite",
    category: "Mobile AI & On-Device ML Engineering",
    badgeText: "LiteRT & ONNX Runtime",
    description: "On-device intelligence runtime bridging camera feeds and sensor inputs with quantized machine learning models (LiteRT, ONNX, CoreML) and streaming cloud AI interfaces.",
    fullDescription: "Designed high-performance Mobile AI execution engine running real-time optical character recognition (OCR), document perspective correction, biometric liveness verification, and streaming conversational AI interfaces over low-latency SSE/gRPC bridges.",
    impactMetrics: [
      { label: "On-Device Inference", value: "14ms" },
      { label: "Model Size (Quantized)", value: "3.2MB" },
      { label: "Camera Vision FPS", value: "60 FPS" },
      { label: "Cloud Fallback Latency", value: "<180ms" }
    ],
    tags: ["LiteRT (TFLite)", "ONNX Mobile", "CoreML", "Android NDK", "OpenCV", "SSE Streaming", "Function Calling"],
    architectureHighlights: [
      "INT8 quantized neural model execution running directly on mobile NPU / Apple Neural Engine",
      "Streaming token response rendering pipeline with typewriter micro-animations and zero thread stalling",
      "Edge preprocessing pipeline using OpenCV C++ with SIMD vectorization for camera frame binarization",
      "Hybrid fallback architecture seamlessly toggling between on-device LiteRT inference and streaming cloud AI APIs"
    ]
  }
];

export const SKILLS_MATRIX: SkillCategory[] = [
  {
    category: "Mobile Platforms & Languages",
    icon: "smartphone",
    skills: [
      { name: "Kotlin & Android SDK", level: "Expert (11+ yrs)", detail: "NDK, Coroutines, Flow, Jetpack Compose, Memory Leaks, IPC", isCore: true },
      { name: "Flutter & Dart", level: "Senior Architect", detail: "Custom RenderObjects, Isolate pools, FFI, Platform Channels", isCore: true },
      { name: "Java Enterprise", level: "Expert", detail: "JVM Tuning, Concurrency, Legacy Android Migration", isCore: false },
      { name: "Swift & iOS Runtime", level: "Proficient", detail: "SwiftUI, Objective-C FFI, iOS Keystore, BackgroundTasks", isCore: false },
      { name: "C / C++ Native (NDK)", level: "Senior", detail: "JNI Bridges, Cryptographic Primitives, Image Processing", isCore: true },
      { name: "Rust (FFI)", level: "Advanced", detail: "Memory-safe native cores for cross-platform crypto & math", isCore: false }
    ]
  },
  {
    category: "Mobile AI & On-Device ML Engineering",
    icon: "cpu",
    skills: [
      { name: "LiteRT (TFLite) & ONNX Mobile", level: "Expert", detail: "INT8/FP16 quantized model inference, NPU & GPU hardware acceleration", isCore: true },
      { name: "Cloud AI Streaming & APIs", level: "Specialist", detail: "Server-Sent Events (SSE), WebSockets, gRPC token streaming, structured JSON generation", isCore: true },
      { name: "Apple CoreML & Metal", level: "Proficient", detail: "Neural Engine optimization, Vision framework, background audio transcription", isCore: false },
      { name: "Edge Vision & Document OCR", level: "Senior", detail: "OpenCV C++ preprocessing, adaptive binarization, perspective correction, receipt parsing", isCore: true },
      { name: "Client-Side AI Agent Orchestration", level: "Senior", detail: "Mobile tool use, function calling, offline semantic vector embeddings (sqlite-vec)", isCore: false }
    ]
  },
  {
    category: "Point of Sale (POS) Systems & Hardware HAL",
    icon: "terminal",
    skills: [
      { name: "Universal POS Hardware HAL", level: "Architect", detail: "Sunmi, Pax, Ingenico, Verifone, Telpo Android POS SDKs and native driver bridges", isCore: true },
      { name: "ESC/POS Thermal Printing", level: "Expert", detail: "Bluetooth LE, USB OTG, Serial RS232 raw byte streams, bitmap graphics rasterization", isCore: true },
      { name: "EMVCo QR & NFC Tap-to-Pay", level: "Specialist", detail: "Dynamic/Static EMVCo QR generators, ISO/IEC 14443 contactless card handling", isCore: true },
      { name: "Dual-Display & Peripherals", level: "Senior", detail: "Merchant + customer mirror displays, 1D/2D laser scanners, electronic cash drawers", isCore: false }
    ]
  },
  {
    category: "Core Engineering & Security",
    icon: "shield-check",
    skills: [
      { name: "PCI-DSS Payment Security", level: "Expert", detail: "Hardware Keystore, AES-GCM, RSA/ECDSA, HSM integration", isCore: true },
      { name: "Offline-First & WAL Sync", level: "Specialist", detail: "SQLite WAL, Room, Realm, Conflict-free Replicated Data Types (CRDTs)", isCore: true },
      { name: "Clean & MVI Architecture", level: "Architect", detail: "Modular Monoliths, Multi-module Gradle, Hexagonal Architecture", isCore: true },
      { name: "Biometric & Hardware HAL", level: "Specialist", detail: "Fingerprint/Face Biometric Prompt, POS Serial/BLE Printers", isCore: false }
    ]
  },
  {
    category: "DevOps, CI/CD & Infra",
    icon: "server",
    skills: [
      { name: "Automated Build Pipelines", level: "Senior", detail: "Fastlane, GitHub Actions, GitLab CI, App Center", isCore: true },
      { name: "Code Quality & Security", level: "Senior", detail: "SonarQube, Detekt, Lint rule enforcement, OWASP Mobile Top 10", isCore: false },
      { name: "Containers & Cloud", level: "Proficient", detail: "Docker, Kubernetes basics, Firebase, GCP App Engine", isCore: false }
    ]
  },
  {
    category: "In-Device AI & Vision",
    icon: "cpu",
    skills: [
      { name: "On-Device ML & OCR", level: "Advanced", detail: "TensorFlow Lite, ML Kit, OpenCV for instant document scanning", isCore: false },
      { name: "Computer Vision Preprocessing", level: "Advanced", detail: "Adaptive thresholding, perspective transform, dynamic image binarization", isCore: false }
    ]
  }
];

export const OPEN_SOURCE_PACKAGES = [
  {
    name: "chip_radio_button",
    platform: "Pub.dev (Flutter / Dart)",
    stars: "v1.1.3 • MIT",
    downloads: "Pub.dev Package",
    description: "Flutter UI package providing an alternative, modern chip-based presentation for radio button selections with support for horizontal/vertical layouts and unselected/null states.",
    link: "https://pub.dev/packages/chip_radio_button"
  },
  {
    name: "dgepay",
    platform: "Pub.dev (Flutter / Dart)",
    stars: "v1.0.0 • Licensed PSO",
    downloads: "Official Fintech SDK",
    description: "Official merchant payment integration SDK for DGePay—the first licensed Payment System Operator (PSO) in Bangladesh from Bangladesh Bank for White Label Merchant Acquiring (WLMA).",
    link: "https://pub.dev/packages/dgepay"
  },
  {
    name: "english-date-to-bangla-date",
    platform: "Android (Java / JitPack)",
    stars: "JitPack • Open Source",
    downloads: "Calendar Library",
    description: "Reliable and efficient date conversion library translating Gregorian / English calendar dates to the Bengali calendar system with accurate astronomical calculation and leap year handling.",
    link: "https://github.com/filelucker/english-date-to-bangla-date"
  },
  {
    name: "sp-plugin-android",
    platform: "Android (Kotlin / JitPack)",
    stars: "shurjoMukhi Ltd • Open Source",
    downloads: "Payment Gateway Plugin",
    description: "Official shurjoPay Android plugin enabling seamless payment gateway connectivity for merchants, managing automated token acquisition, checkout lifecycle, and transaction verification.",
    link: "https://github.com/shurjopay-plugins/sp-plugin-android"
  }
];

export const CONTACT_INFO = {
  github: "https://github.com/filelucker",
  email: "m.zaman000@gmail.com",
  linkedin: "https://www.linkedin.com/in/mon000",
  phone: "+8801721915013",
  whatsapp: "https://wa.me/8801721915013",
  displayPhone: "+8801721915013"
};

export const WORK_TIMELINE: TimelineItem[] = [
  {
    role: "Lead Software Developer / Mobile Architect",
    company: "DNET (Social Enterprise & Tech Solutions)",
    period: "2021 — PRESENT",
    location: "Dhaka, Bangladesh",
    achievements: [
      "Leading mobile architecture team designing enterprise applications for UNICEF, Government of Bangladesh (CPTU), and national fintech providers.",
      "Architected MYCash DFS and DGePay interoperable payment merchant & Point of Sale (POS) engine serving 1M+ consumers and 10K+ merchant terminals.",
      "Engineered offline-first sync pipelines reducing network drop failures by 98% in remote low-bandwidth deployment areas.",
      "Integrated on-device LiteRT and computer vision preprocessing for instant offline receipt parsing and biometric verification.",
      "Introduced automated Fastlane CI/CD pipelines, reducing app release cycle duration from 3 days to 25 minutes."
    ],
    skillsUsed: ["Kotlin", "Flutter", "Clean Architecture", "PCI-DSS", "Point of Sale (POS)", "Mobile AI", "CI/CD", "Team Leadership"],
    metrics: "1M+ Users Impacted • 10K+ POS Terminals • 99.98% Stability"
  },
  {
    role: "Senior Android Developer",
    company: "Teletalk Bangladesh Ltd. / Enterprise Solutions",
    period: "2018 — 2021",
    location: "Dhaka, Bangladesh",
    achievements: [
      "Developed high-traffic telecom services, customer self-care portals, and digital billing systems.",
      "Spearheaded migration of legacy Java codebase to modular Kotlin Architecture with 100% Jetpack Coroutines & Flow.",
      "Optimized app memory footprint by 45% using strict LeakCanary inspections and heap dump audits."
    ],
    skillsUsed: ["Kotlin", "Java", "Coroutines", "Jetpack", "Retrofit", "Room DB"],
    metrics: "45% RAM Optimization • 3M+ TeleTalk Subscribers"
  },
  {
    role: "Software Engineer",
    company: "Inovace Technologies & Tech Pioneers",
    period: "2015 — 2018",
    location: "Dhaka, Bangladesh",
    achievements: [
      "Built IoT device controller applications, Bluetooth LE hardware integration, and Smart Home Android interfaces.",
      "Implemented real-time sensor charts and custom canvas rendering engine running at smooth 60 FPS."
    ],
    skillsUsed: ["Android SDK", "Java", "Bluetooth LE", "Custom Views", "SQLite"],
    metrics: "15+ Production Apps Delivered"
  }
];

export const BENCHMARKS: SystemBenchmark[] = [
  { title: "EMVCo QR Decode Speed", value: "1.4ms", comparison: "10x faster than default ZXing", detail: "Hand-optimized C++ SIMD vector instructions for camera pixel buffers." },
  { title: "Hardware Keystore Sign", value: "21ms", comparison: "-65% latency vs cloud auth", detail: "Hardware-attested ECDSA secp256r1 signature generation on-chip." },
  { title: "Cold App Launch Time", value: "22ms", comparison: "99th percentile speed", detail: "Lazy module loading + Baseline Profiles + App Startup library." },
  { title: "Idle Memory Footprint", value: "18MB", comparison: "-50% vs typical Flutter apps", detail: "Custom native memory allocators and image cache boundary management." },
  { title: "Offline Sync Reliability", value: "99.8%", comparison: "Zero lost financial records", detail: "Write-Ahead Log (WAL) transaction log with CRC checksum verification." },
  { title: "On-Device AI Inference", value: "14ms", comparison: "Sub-20ms edge latency", detail: "INT8 quantized LiteRT model running on mobile NPU / Qualcomm Hexagon delegate." },
  { title: "POS Print & Cut Latency", value: "320ms", comparison: "3x faster than vendor SDK", detail: "Direct ESC/POS byte streaming via Bluetooth LE/USB OTG with hardware flow control." }
];

export const ARCHITECTURAL_DECISION_RECORDS: ADR[] = [
  {
    id: "ADR-01",
    title: "MVVM + MVI Hybrid State Machine for Financial Transactions",
    status: "ACCEPTED",
    context: "Financial transactions require strict single-source-of-truth state transitions to prevent duplicate payments or unhandled UI states during network timeouts.",
    decision: "Adopted MVI (Model-View-Intent) pattern with immutable state flows for transaction checkout flows, backed by standard MVVM for non-stateful screens.",
    consequences: [
      "Zero probability of invalid concurrent payment button clicks",
      "Deterministic state playback for debugging production crashes",
      "Slightly increased boilerplate mitigated by custom LiveTemplates"
    ]
  },
  {
    id: "ADR-02",
    title: "SQLite Write-Ahead Logging (WAL) for Zero-Loss Offline Engine",
    status: "ACCEPTED",
    context: "Field applications operating under 2G networks frequently lose power or experience OS process kills while syncing pending transactions.",
    decision: "Configured Room DB with Write-Ahead Logging (WAL) and explicit synchronous commit flags, paired with encrypted binary log rotation.",
    consequences: [
      "100% recovery rate after sudden power outage or battery drain",
      "Atomic transaction commits guarantee no half-written JSON payloads"
    ]
  },
  {
    id: "ADR-03",
    title: "Native C++ NDK Engine for High-Throughput Cryptographic Payloads",
    status: "ACCEPTED",
    context: "Processing thousands of batch barcode scans and payload decryption loops on mid-tier mobile hardware caused UI micro-stutters in pure Java/Dart.",
    decision: "Offloaded cryptographical key derivation (PBKDF2) and image binarization to compiled C++ shared libraries via JNI / Dart FFI.",
    consequences: [
      "Frame rate maintained at steady 60 FPS during heavy processing",
      "Reduced CPU thermal throttling during continuous barcode scanning"
    ]
  },
  {
    id: "ADR-04",
    title: "Hybrid On-Device (LiteRT/ONNX) vs Streaming Cloud AI for Mobile & POS Workflows",
    status: "ACCEPTED",
    context: "Real-time merchant scanning and user authentication require immediate latency (<50ms) and must function offline, while complex reasoning queries require deep cloud LLM knowledge.",
    decision: "Deployed dual-tier AI topology: on-device LiteRT / ONNX models handle instant OCR, barcode parsing, and biometric verification locally; cloud AI streaming (SSE / gRPC) is invoked asynchronously for intelligent analytics and summaries.",
    consequences: [
      "Instant sub-20ms feedback on edge camera viewfinders with zero network dependency",
      "Graceful offline operation on low-connectivity POS terminals",
      "Zero unnecessary cloud API costs for basic vision and classification tasks"
    ]
  }
];
