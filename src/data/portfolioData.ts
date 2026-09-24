export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  trend?: string;
  icon?: string;
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
    title: "DGePay Interoperable Merchant Platform",
    category: "Merchant & Payment Gateway",
    badgeText: "10K+ Terminals",
    description: "Next-gen interoperable merchant ecosystem powering 10K+ point-of-sale terminals with ultra-fast QR scanning, sub-second transaction routing, and settlement ledger.",
    fullDescription: "Built unified merchant ecosystem comprising Tektiti and Saudagor apps. Integrates multi-bank QR standards (EMVCo QR), Bluetooth POS printer hardware abstraction, and merchant real-time settlement dashboard.",
    impactMetrics: [
      { label: "Active Merchants", value: "10,000+" },
      { label: "QR Decode Time", value: "60ms" },
      { label: "Settlement Speed", value: "<1.2s" },
      { label: "Hardware Support", value: "45+ POS Models" }
    ],
    tags: ["Flutter", "Dart", "C++ Native", "EMVCo QR", "BLE Protocol", "REST/gRPC"],
    architectureHighlights: [
      "Hardware abstraction layer (HAL) for universal thermal printers and barcode scanners",
      "Native C++ QR decoding engine delivering sub-60ms recognition speeds",
      "Local audit ledger with cryptographic signature chaining for tamper detection"
    ]
  },
  {
    id: "cptu",
    title: "CPTU e-GP National Procurement System",
    category: "Government Enterprise Systems",
    badgeText: "National Scale",
    description: "Bangladesh Central Procurement Technical Unit e-GP mobile application enabling secure tender bidding, encrypted document vaults, and live audit workflows.",
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
    name: "dge_radio_button",
    platform: "Pub.dev (Flutter / Dart)",
    stars: "Featured",
    downloads: "15,000+ Downloads",
    description: "Highly customizable, ultra-fluid animated radio button and toggle selection engine built for high-end Fintech and e-commerce mobile interfaces.",
    link: "https://pub.dev/packages/dge_radio_button"
  },
  {
    name: "flutter_biometric_vault",
    platform: "Pub.dev / GitHub",
    stars: "Open Source",
    downloads: "8,500+ Downloads",
    description: "Unified wrapper around Android Keystore and iOS Keychain providing hardware-attested key creation and biometric authentication prompts.",
    link: "https://github.com/moniruzzaman/flutter_biometric_vault"
  },
  {
    name: "offline_sync_queue",
    platform: "Kotlin Multiplatform / Android",
    stars: "GitHub Enterprise",
    downloads: "Internal Core Component",
    description: "Resilient priority queue for storing transactions locally when offline with exponential backoff sync and crash protection.",
    link: "https://github.com/moniruzzaman/offline_sync_queue"
  }
];

export const WORK_TIMELINE: TimelineItem[] = [
  {
    role: "Lead Software Developer / Mobile Architect",
    company: "DNET (Social Enterprise & Tech Solutions)",
    period: "2021 — PRESENT",
    location: "Dhaka, Bangladesh",
    achievements: [
      "Leading mobile architecture team designing enterprise applications for UNICEF, Government of Bangladesh (CPTU), and national fintech providers.",
      "Architected MYCash DFS and DGePay interoperable payment merchant engine serving 1M+ consumers and 10K+ merchants.",
      "Engineered offline-first sync pipelines reducing network drop failures by 98% in remote low-bandwidth deployment areas.",
      "Introduced automated Fastlane CI/CD pipelines, reducing app release cycle duration from 3 days to 25 minutes."
    ],
    skillsUsed: ["Kotlin", "Flutter", "Clean Architecture", "PCI-DSS", "CI/CD", "Team Leadership"],
    metrics: "1M+ Users Impacted • 99.98% Stability"
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
  { title: "Offline Sync Reliability", value: "99.8%", comparison: "Zero lost financial records", detail: "Write-Ahead Log (WAL) transaction log with CRC checksum verification." }
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
  }
];
