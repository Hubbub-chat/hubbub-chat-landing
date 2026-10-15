export const translations = {
  en: {
    nav: {
      brandName: 'Hubbub Chat',
      shortName: 'Hubbub',
      versionBadge: 'v0.1.0',
      subtitle: 'Personal Multi-Agent AI Studio',
      agents: 'Agent Team',
      features: 'Features',
      security: 'Rust Security',
      architecture: 'Architecture',
      compare: 'Compare',
      faq: 'FAQ',
      download: 'Download for Windows',
      downloadShort: 'Download',
      starOnGithub: 'Star on GitHub'
    },
    hero: {
      pillTag: 'v0.1.0 is out · Open source',
      pillDesc: 'Open Source • Native Rust Core',
      title1: 'A team of AI agents, ',
      titleHighlight: 'on your desktop',
      title2: '.',
      subtitle:
        'A local-first desktop workspace where a team of AI agents researches, reads and writes for you. Built in Rust. Your data stays on your machine.',
      ctaDownload: 'Download for Windows',
      ctaDownloadSub: 'v0.1.0 • 64-bit • Windows 10/11',
      ctaDemo: 'Explore Agent Team',
      ctaGithub: 'View on GitHub',
      quote: '"Built in Rust. Your data never leaves your machine without explicit permission."',
      metrics: {
        local: {
          title: '100% Local-First',
          desc: 'Zero telemetry & zero lock-in'
        },
        security: {
          title: 'Rust Policy Engine',
          desc: 'PathGuard & UrlGuard gating'
        },
        ram: {
          title: '< 30MB RAM Footprint',
          desc: 'Native speed with Tauri 2'
        }
      },
      mockup: {
        windowTitle: 'Hubbub Chat v0.1.0 — Desktop AI Studio',
        workspaceTitle: 'Workspace: Research / Small Language Models (SLMs)',
        tabChat: 'Agent Chat View',
        tabReport: 'Milkdown Report',
        agentTeamTitle: 'Coordinated Agents',
        agentReady: '4 Ready',
        vaultPath: 'Local Vault Path',
        policyActive: 'Rust Policy Engine: Enforced',
        userRole: 'You (Research Lead)',
        userPrompt:
          'Compare current 3B-parameter reasoning architectures (e.g. DeepSeek-R1-Distill, Qwen2.5-Math). Verify local benchmark logs from our workspace and pull paper citations.',
        orchestratorPlan:
          'Dispatched concurrent sub-tasks: Researcher querying arXiv papers, while Librarian reads local benchmark files.',
        urlApproved: 'UrlGuard: arxiv.org (Approved)',
        pathApproved: 'PathGuard: /benchmarks.json (Approved)',
        tutorArtifact: 'Milkdown Artifact Generated',
        openInEditor: 'Open in Editor →',
        tutorSummary:
          'Key insight: DeepSeek-R1-Distill-Qwen-1.5B outperforms 7B baselines on GSM8K (82.3%) while running locally at 68 tokens/s with under 2.1GB VRAM.',
        inputPlaceholder: 'Ask your agent team or command /search, /read, /synthesize...'
      }
    },
    agents: {
      badge: 'Interactive Multi-Agent Runtime',
      title: 'Coordinated Agents. Zero Chaos.',
      subtitle:
        'An Orchestrator plans each step and delegates to specialist agents. Every action passes through Rust security guards.',
      orchestrator: {
        role: 'Supervisor',
        name: 'Orchestrator',
        tagline: 'Decomposition & Execution Loops',
        desc: 'Breaks goals into steps and enforces a step budget.',
        meta: 'Bounded Step Budget'
      },
      researcher: {
        role: 'Web & arXiv',
        name: 'Researcher',
        tagline: 'Literature & External Evidence',
        desc: 'Searches the web and arXiv. Every request is filtered by UrlGuard.',
        meta: 'UrlGuard Protection'
      },
      librarian: {
        role: 'Local Vault',
        name: 'Librarian',
        tagline: 'Filesystem & SQLite FTS5',
        desc: 'Indexes and searches your local files with SQLite FTS5.',
        meta: 'PathGuard Sandboxing'
      },
      tutor: {
        role: 'Synthesis',
        name: 'Tutor',
        tagline: 'Socratic Teaching & Reports',
        desc: 'Turns findings into Markdown reports with citations.',
        meta: 'Milkdown Artifacts'
      },
      simulation: {
        badge: 'Live Orchestration Simulation',
        title: 'Inspect Real-time Run & Trace Execution',
        reset: 'Reset',
        simulatedGoal: 'Simulated Research Goal',
        step: 'Step',
        of: 'of',
        back: 'Back',
        next: 'Next Step',
        guardEnforcement: 'Rust Capability Guard Enforcement',
        gateBlocked: 'GATE BLOCKED',
        verifiedSafe: 'VERIFIED SAFE',
        runtimeTrace: 'Runtime Trace Log (Sub-process stream)',
        resolution: 'Step Resolution & Output'
      }
    },
    bento: {
      badge: 'Engineered for Deep Work',
      title: 'Built Like a Precision Instrument',
      subtitle:
        'Fast, private and transparent by design.',
      card1: {
        badge: 'Core Security',
        tag: 'Hard Boundary in Rust',
        title: 'Capability-Based Policy Engine',
        desc: 'The LLM is never a security authority. Every disk and network access passes through a native Rust Policy Engine.',
        sub1Title: 'PathGuard Sandboxing',
        sub1Desc: 'Blocks directory traversal and access outside granted folders.',
        sub2Title: 'UrlGuard & SSRF Shield',
        sub2Desc: 'Blocks internal IP ranges and enforces domain allowlists.'
      },
      card2: {
        badge: 'Zero Bloat',
        title: '< 30MB RAM Footprint',
        desc: 'Built on Tauri 2 and Rust instead of Electron, leaving your RAM for AI models.',
        hubbubLabel: 'Hubbub Chat (Tauri 2)',
        electronLabel: 'Typical Electron Apps'
      },
      card3: {
        badge: 'Artifact Studio',
        title: 'Milkdown WYSIWYG',
        desc: 'Research lives in documents, not chat streams. Edit Markdown in a built-in WYSIWYG editor.',
        subTitle: 'Zero Context Waste',
        subDesc: 'Export to Obsidian, GitHub or PDF.'
      },
      card4: {
        badge: 'Execution Guarantees',
        tag: 'Deterministic DAG',
        title: 'Deterministic Run / Step / Trace Loop',
        desc: 'Every action runs within a step budget and is fully traceable.',
        sub1Title: 'Step Budget Cap',
        sub1Val: 'Hard-coded bounds',
        sub1Desc: 'Stops run-away token burn',
        sub2Title: 'Full Trace History',
        sub2Val: 'Every Prompt & Output',
        sub2Desc: 'Exportable audit trail',
        sub3Title: 'Supervisor Approval',
        sub3Val: 'Human-in-the-Loop',
        sub3Desc: 'Click to authorize actions'
      },
      card5: {
        badge: 'Offline Intelligence',
        title: 'SQLite + FTS5',
        desc: 'Chats and reports are stored locally in SQLite with full-text search.',
        subTitle: 'Sub-5ms Query Latency',
        subDesc: 'Instant full-corpus recall'
      },
      card6: {
        badge: 'Open & Sovereign',
        title: 'Bring Your Own Keys or Run Offline',
        desc: 'Use local models via Ollama or llama.cpp, or add your own API keys. Keys are stored in the OS keyring.'
      }
    },
    security: {
      badge: 'Rust-Enforced Threat Modeling',
      title: 'Security Is an Architectural Invariant',
      subtitle:
        'The LLM is never granted authority over your computer.',
      interactiveTitle: 'Interactive Architecture Pipeline',
      interactiveHint: 'Click any layer to inspect',
      layers: {
        ui: { num: 'LAYER 01', name: 'Desktop UI', desc: 'React 19 + Tauri 2 IPC' },
        core: { num: 'LAYER 02', name: 'Rust Core', desc: 'Agent Loop & Tokio' },
        policy: { num: 'LAYER 03 • SECURITY GATE', name: 'Policy Engine', desc: 'Capability Tokens & Auth' },
        tools: { num: 'LAYER 04', name: 'Tool Gateway', desc: 'PathGuard & UrlGuard' },
        storage: { num: 'LAYER 05', name: 'Local Vault', desc: 'SQLite FTS5 + Workspace' }
      },
      rules: {
        rule1: { num: 'RULE #1', title: 'No LLM Security Authority', desc: 'Permissions are enforced in native Rust.' },
        rule2: { num: 'RULE #2', title: 'No Direct OS Shell Access', desc: 'Agents use verified tool gateways only.' },
        rule3: { num: 'RULE #3', title: 'Markdown as First-Class Data', desc: 'Research is kept as living documents.' },
        rule4: { num: 'RULE #4', title: 'Complete Traceability', desc: 'Every action is recorded as a Run, Step and Trace.' }
      }
    },
    compare: {
      badge: 'Honest Evaluation',
      title: 'How Hubbub Chat Compares',
      subtitle:
        'Built for researchers who need privacy, performance and control.',
      colFeature: 'Capability / Architecture',
      colHubbub: 'Hubbub Chat',
      colWeb: 'Cloud Web Chatbots',
      colElectron: 'Electron AI Wrappers',
      rows: [
        {
          feature: 'Data Sovereignty & Local Storage',
          hubbub: '100% Local (SQLite FTS5 & Markdown files)',
          webChat: 'Closed cloud servers (Zero local ownership)',
          electron: 'Fragmented cache / Remote cloud sync'
        },
        {
          feature: 'Multi-Agent Coordinated Runtime',
          hubbub: 'Deterministic DAG (Supervisor ➔ 3 Specialists)',
          webChat: 'Single linear chat thread',
          electron: 'Single model prompt or simple tool calls'
        },
        {
          feature: 'System Security Boundaries',
          hubbub: 'Rust Policy Engine (PathGuard & UrlGuard)',
          webChat: 'No local OS access at all',
          electron: 'Broad Node.js permissions or shell access'
        },
        {
          feature: 'RAM & Resource Footprint',
          hubbub: '< 30 MB Baseline (Tauri 2 + Rust)',
          webChat: '300 MB+ (Heavy browser tab)',
          electron: '500 MB – 1.2 GB (Chromium runtime)'
        },
        {
          feature: 'Offline Operation & Local Models',
          hubbub: 'Native Ollama & llama.cpp (100% offline)',
          webChat: 'Requires active cloud internet',
          electron: 'Often requires cloud login & telemetry'
        }
      ]
    },
    download: {
      badge: 'Free Download',
      title: 'Download Hubbub Chat',
      subtitle:
        'Free and open source. Available for Windows 10 and 11.',
      cardTitle: 'Hubbub Chat for Windows',
      cardSub: 'Supports Windows 10 & 11 (64-bit Architecture)',
      msiBtn: 'Download Installer (.msi)',
      msiSub: 'Recommended for Windows 10/11',
      zipBtn: 'Download Portable Edition (.zip)',
      zipSub: 'Standalone Executable',
      shaLabel: 'SHA-256 Release Checksum',
      copied: 'Copied!',
      copy: 'Copy',
      sysReqTitle: 'System Requirements',
      osReq: 'OS: Windows 10 (1903+) or 11',
      osSub: 'WebView2 runtime pre-installed',
      ramReq: 'RAM: 4 GB Minimum',
      ramSub: 'Hubbub baseline uses < 30 MB',
      ollamaReq: 'Optional: Ollama for Local AI',
      ollamaSub: 'Zero cloud API costs when run locally',
      macLinux: 'macOS & Linux',
      roadmapTag: 'Phase 2 Roadmap',
      steps: {
        step1Title: 'Install Hubbub Chat',
        step1Desc: 'Run the installer. It takes seconds.',
        step2Title: 'Connect Your LLMs',
        step2Desc: 'Detect local Ollama models or add an API key.',
        step3Title: 'Start Deep Research',
        step3Desc: 'Give your agent team a goal and get a report.'
      }
    },
    faq: {
      badge: 'Got Questions?',
      title: 'Frequently Asked Questions',
      subtitle: 'Quick answers about Hubbub Chat.',
      items: [
        {
          q: 'Is Hubbub Chat open source?',
          a: 'Yes. It is released under the Apache License 2.0, so you can inspect, modify and use it freely, including commercially.'
        },
        {
          q: 'Is my data private?',
          a: 'Yes. Conversations, traces and reports are stored on your computer. Hubbub Chat collects no telemetry.'
        },
        {
          q: 'Do I need a GPU?',
          a: 'No. Run small local models through Ollama or llama.cpp, or connect your own API key for cloud models.'
        },
        {
          q: 'How is it different from web chatbots?',
          a: 'Hubbub Chat runs locally, coordinates a team of agents, can work with your files safely, and produces editable reports instead of chat bubbles.'
        },
        {
          q: 'How does it keep my computer safe?',
          a: 'Every file and network action goes through a Rust Policy Engine. PathGuard and UrlGuard restrict access, and sensitive actions need your approval.'
        }
      ]
    },
    footer: {
      brandName: 'Hubbub Chat',
      shortName: 'Hubbub',
      tagline: 'Personal Multi-Agent AI Studio for deep research and sovereign learning.',
      zeroTelemetry: 'Local-first • Zero telemetry',
      colProduct: 'Product',
      colSecurity: 'Security',
      colEcosystem: 'Ecosystem',
      copyright: 'Hubbub Chat contributors. Licensed under Apache-2.0.',
      builtWith: 'Built with Rust, Tauri 2 & React 19'
    }
  },
  vi: {
    nav: {
      brandName: 'Hubbub Chat',
      shortName: 'Hubbub',
      versionBadge: 'v0.1.0',
      subtitle: 'Không Gian AI Đa Tác Tử',
      agents: 'Đội Ngũ Agent',
      features: 'Tính Năng',
      security: 'Bảo Mật Rust',
      architecture: 'Kiến Trúc',
      compare: 'So Sánh',
      faq: 'Hỏi Đáp',
      download: 'Tải cho Windows',
      downloadShort: 'Tải về',
      starOnGithub: 'Star trên GitHub'
    },
    hero: {
      pillTag: 'v0.1.0 đã phát hành · Mã nguồn mở',
      pillDesc: 'Mã Nguồn Mở • Lõi Rust Bản Địa',
      title1: 'Đội ngũ AI agent, ',
      titleHighlight: 'ngay trên máy bạn',
      title2: '.',
      subtitle:
        'Ứng dụng desktop local-first, nơi đội ngũ AI agent nghiên cứu, đọc tài liệu và viết báo cáo cho bạn. Xây dựng bằng Rust. Dữ liệu luôn ở trên máy của bạn.',
      ctaDownload: 'Tải cho Windows',
      ctaDownloadSub: 'v0.1.0 • 64-bit • Windows 10/11',
      ctaDemo: 'Trải Nghiệm Điều Phối',
      ctaGithub: 'Xem trên GitHub',
      quote: '"Xây dựng bằng Rust. Dữ liệu không bao giờ rời khỏi máy của bạn nếu chưa có sự cho phép."',
      metrics: {
        local: {
          title: '100% Cục Bộ (Local-First)',
          desc: 'Không gửi dữ liệu telemetry'
        },
        security: {
          title: 'Rust Policy Engine',
          desc: 'Kiểm duyệt PathGuard & UrlGuard'
        },
        ram: {
          title: '< 30MB RAM',
          desc: 'Tốc độ bản địa với Tauri 2'
        }
      },
      mockup: {
        windowTitle: 'Hubbub Chat v0.1.0 — Desktop AI Studio',
        workspaceTitle: 'Không gian: Nghiên Cứu / Mô Hình Suy Luận Nhỏ (SLM)',
        tabChat: 'Hội Thoại Agent',
        tabReport: 'Báo Cáo Milkdown',
        agentTeamTitle: 'Agent Hoạt Động',
        agentReady: '4 Sẵn sàng',
        vaultPath: 'Đường Dẫn Vault Cục Bộ',
        policyActive: 'Rust Policy Engine: Đang Giám Sát',
        userRole: 'Bạn (Trưởng Nhóm Nghiên Cứu)',
        userPrompt:
          'Hãy so sánh các kiến trúc suy luận cỡ 3B (như DeepSeek-R1-Distill, Qwen2.5-Math). Đối chiếu số liệu đo lường trong thư mục của tôi và trích dẫn bài báo mới nhất.',
        orchestratorPlan:
          'Phân bổ tác vụ đồng thời: Researcher quét bài báo arXiv, Librarian đọc file điểm chuẩn cục bộ.',
        urlApproved: 'UrlGuard: arxiv.org (Đã duyệt)',
        pathApproved: 'PathGuard: /benchmarks.json (Đã duyệt)',
        tutorArtifact: 'Đã tạo tài liệu Milkdown',
        openInEditor: 'Mở trong trình soạn thảo →',
        tutorSummary:
          'Điểm cốt lõi: DeepSeek-R1-Distill-Qwen-1.5B vượt mốc 82.3% trên GSM8K và chạy mượt mà tại máy với dưới 2.1GB VRAM.',
        inputPlaceholder: 'Giao việc cho đội Agent hoặc gõ lệnh /search, /read, /synthesize...'
      }
    },
    agents: {
      badge: 'Cơ Chế Điều Phối Đa Tác Tử',
      title: 'Đội Ngũ Agent Phối Hợp. Không Hỗn Loạn.',
      subtitle:
        'Orchestrator lập kế hoạch và giao việc cho các agent chuyên biệt. Mọi hành động đều qua cổng bảo mật Rust.',
      orchestrator: {
        role: 'Supervisor',
        name: 'Orchestrator',
        tagline: 'Phân rã mục tiêu & Điều phối chu trình',
        desc: 'Chia mục tiêu thành các bước và giới hạn ngân sách bước.',
        meta: 'Giới hạn bước xác định'
      },
      researcher: {
        role: 'Web & arXiv',
        name: 'Researcher',
        tagline: 'Tìm kiếm & Bằng chứng bên ngoài',
        desc: 'Tra cứu web và arXiv. Mọi truy vấn đều được UrlGuard lọc.',
        meta: 'Bảo vệ bởi UrlGuard'
      },
      librarian: {
        role: 'Local Vault',
        name: 'Librarian',
        tagline: 'Quản thư & SQLite FTS5',
        desc: 'Lập chỉ mục và tìm kiếm file cục bộ bằng SQLite FTS5.',
        meta: 'Sandbox hóa bởi PathGuard'
      },
      tutor: {
        role: 'Tổng Hợp Tri Thức',
        name: 'Tutor',
        tagline: 'Phương pháp Socratic & Soạn thảo',
        desc: 'Biến kết quả thành báo cáo Markdown kèm trích dẫn.',
        meta: 'Tạo tài liệu Milkdown'
      },
      simulation: {
        badge: 'Giả Lập Thực Thi Thời Gian Thực',
        title: 'Theo Dõi Từng Bước Thực Thi & Dấu Vết (Trace)',
        reset: 'Làm lại',
        simulatedGoal: 'Mục Tiêu Mô Phỏng',
        step: 'Bước',
        of: 'trên',
        back: 'Quay lại',
        next: 'Bước tiếp theo',
        guardEnforcement: 'Cổng Kiểm Duyệt Khả Năng Thực Thi (Rust Policy Guard)',
        gateBlocked: 'ĐÃ CHẶN CỔNG',
        verifiedSafe: 'KIỂM DUYỆT AN TOÀN',
        runtimeTrace: 'Nhật Ký Thực Thi (Sub-process trace stream)',
        resolution: 'Kết Quả & Đầu Ra Của Bước'
      }
    },
    bento: {
      badge: 'Thiết Kế Cho Công Việc Chuyên Sâu',
      title: 'Chế Tác Tỉ Mỉ Như Một Nhạc Cụ Cơ Khí',
      subtitle:
        'Nhanh, riêng tư và minh bạch ngay từ thiết kế.',
      card1: {
        badge: 'Bảo Mật Cốt Lõi',
        tag: 'Cột mốc Rust nghiêm ngặt',
        title: 'Policy Engine Dựa Trên Năng Quyền',
        desc: 'AI không bao giờ là cơ quan an ninh. Mọi truy cập đĩa và mạng đều qua Policy Engine Rust.',
        sub1Title: 'Cách Ly PathGuard',
        sub1Desc: 'Chặn vượt thư mục và truy cập ngoài vùng được cấp.',
        sub2Title: 'Lá Chắn UrlGuard & SSRF',
        sub2Desc: 'Chặn dải IP nội bộ, áp dụng danh sách tên miền cho phép.'
      },
      card2: {
        badge: 'Siêu Tinh Gọn',
        title: 'RAM Dưới 30MB',
        desc: 'Xây dựng trên Tauri 2 và Rust thay vì Electron, nhường RAM cho mô hình AI.',
        hubbubLabel: 'Hubbub Chat (Tauri 2)',
        electronLabel: 'Ứng dụng Electron thông thường'
      },
      card3: {
        badge: 'Xưởng Tri Thức',
        title: 'Milkdown WYSIWYG',
        desc: 'Nghiên cứu nằm trong tài liệu, không phải dòng chat. Soạn Markdown trong trình soạn thảo WYSIWYG tích hợp.',
        subTitle: 'Không Thất Thoát Ngữ Cảnh',
        subDesc: 'Xuất sang Obsidian, GitHub hoặc PDF.'
      },
      card4: {
        badge: 'Cam Kết Thực Thi',
        tag: 'Đồ thị DAG xác định',
        title: 'Chu Trình Run / Step / Trace',
        desc: 'Mỗi hành động nằm trong ngân sách bước và có thể truy vết đầy đủ.',
        sub1Title: 'Hạn Mức Bước',
        sub1Val: 'Giới hạn ngặt nghèo',
        sub1Desc: 'Không lo Agent lặp vô tận gây tốn token',
        sub2Title: 'Dấu Vết Đầy Đủ',
        sub2Val: 'Mọi câu lệnh & kết quả',
        sub2Desc: 'Lưu vết kiểm toán có thể xuất ra file',
        sub3Title: 'Phê Duyệt Người Dùng',
        sub3Val: 'Human-in-the-Loop',
        sub3Desc: 'Chủ động bấm cấp quyền các tác vụ'
      },
      card5: {
        badge: 'Trí Tuệ Cục Bộ',
        title: 'SQLite + FTS5',
        desc: 'Hội thoại và báo cáo lưu cục bộ trong SQLite, có tìm kiếm toàn văn.',
        subTitle: 'Độ Trễ Dưới 5ms',
        subDesc: 'Tìm kiếm toàn bộ kho tri thức tức thì'
      },
      card6: {
        badge: 'Mã Nguồn Mở Tự Do',
        title: 'Dùng Khóa Riêng Hoặc Chạy Ngoại Tuyến',
        desc: 'Dùng mô hình cục bộ qua Ollama hoặc llama.cpp, hoặc nhập API key riêng. Khóa được lưu trong OS keyring.'
      }
    },
    security: {
      badge: 'Mô Hình Đe Dọa Kiểm Soát Bằng Rust',
      title: 'Bảo Mật Là Bất Biến Kiến Trúc',
      subtitle:
        'AI không bao giờ được nắm quyền kiểm soát máy tính của bạn.',
      interactiveTitle: 'Ống Dẫn Kiến Trúc 5 Tầng',
      interactiveHint: 'Nhấp vào từng tầng để xem chi tiết mã nguồn',
      layers: {
        ui: { num: 'TẦNG 01', name: 'Desktop UI', desc: 'React 19 + Tauri 2 IPC' },
        core: { num: 'TẦNG 02', name: 'Rust Core', desc: 'Vòng lặp Agent & Tokio' },
        policy: { num: 'TẦNG 03 • CỔNG AN NINH', name: 'Policy Engine', desc: 'Capability Tokens & Thẩm Quyền' },
        tools: { num: 'TẦNG 04', name: 'Tool Gateway', desc: 'Bộ lọc PathGuard & UrlGuard' },
        storage: { num: 'TẦNG 05', name: 'Local Vault', desc: 'SQLite FTS5 + Workspace' }
      },
      rules: {
        rule1: { num: 'NGUYÊN TẮC 1', title: 'LLM Không Có Quyền Bảo Mật', desc: 'Quyền được thực thi bởi Rust.' },
        rule2: { num: 'NGUYÊN TẮC 2', title: 'Không Cấp Shell Trực Tiếp', desc: 'Agent chỉ dùng Tool Gateway đã kiểm duyệt.' },
        rule3: { num: 'NGUYÊN TẮC 3', title: 'Markdown Là Dữ Liệu Loại 1', desc: 'Nghiên cứu được lưu thành tài liệu sống.' },
        rule4: { num: 'NGUYÊN TẮC 4', title: 'Dấu Vết Minh Bạch 100%', desc: 'Mọi hành động đều ghi lại thành Run, Step, Trace.' }
      }
    },
    compare: {
      badge: 'Đánh Giá Khách Quan',
      title: 'Vì Sao Hubbub Chat Khác Biệt',
      subtitle:
        'Dành cho người nghiên cứu cần quyền riêng tư, hiệu năng và khả năng kiểm soát.',
      colFeature: 'Năng Lực / Kiến Trúc',
      colHubbub: 'Hubbub Chat',
      colWeb: 'Chatbot Web Đám Mây',
      colElectron: 'Ứng Dụng Bọc Electron',
      rows: [
        {
          feature: 'Chủ Quyền Dữ Liệu & Lưu Trữ',
          hubbub: '100% Cục bộ (SQLite FTS5 & Markdown files)',
          webChat: 'Máy chủ đóng trên đám mây (Không làm chủ dữ liệu)',
          electron: 'Lưu bộ nhớ tạm / Phải đồng bộ đám mây'
        },
        {
          feature: 'Cơ Chế Phối Hợp Đa Agent',
          hubbub: 'Đồ thị DAG xác định (Supervisor ➔ 3 Chuyên gia)',
          webChat: 'Hội thoại tuyến tính 1 luồng',
          electron: 'Tự động hoàn thành code hoặc gọi 1 prompt'
        },
        {
          feature: 'Ranh Giới An Ninh Hệ Thống',
          hubbub: 'Rust Policy Engine (PathGuard & UrlGuard)',
          webChat: 'Không thể truy cập máy tính',
          electron: 'Quyền Node.js rộng hoặc chạy shell tùy ý'
        },
        {
          feature: 'Tiêu Thụ RAM & Tài Nguyên Máy',
          hubbub: '< 30 MB Baseline (Tauri 2 + Rust)',
          webChat: '300 MB+ (Tab trình duyệt nặng)',
          electron: '500 MB – 1.2 GB (Môi trường Chromium)'
        },
        {
          feature: 'Hoạt Động Ngoại Tuyến & Model Cục Bộ',
          hubbub: 'Hỗ trợ bản địa Ollama & llama.cpp (100% offline)',
          webChat: 'Bắt buộc kết nối Internet liên tục',
          electron: 'Thường bắt buộc đăng nhập tài khoản đám mây'
        }
      ]
    },
    download: {
      badge: 'Tải Miễn Phí',
      title: 'Tải Hubbub Chat Cho Máy Tính',
      subtitle:
        'Miễn phí và mã nguồn mở. Hỗ trợ Windows 10 và 11.',
      cardTitle: 'Hubbub Chat cho Windows',
      cardSub: 'Hỗ trợ Windows 10 & 11 (Kiến trúc 64-bit)',
      msiBtn: 'Tải Bộ Cài Đặt (.msi)',
      msiSub: 'Khuyên dùng cho Windows 10/11',
      zipBtn: 'Tải Bản Portable (.zip)',
      zipSub: 'Chạy trực tiếp không cần cài',
      shaLabel: 'Mã băm kiểm tra tính toàn vẹn SHA-256',
      copied: 'Đã copy!',
      copy: 'Sao chép',
      sysReqTitle: 'Yêu Cầu Hệ Thống',
      osReq: 'Hệ điều hành: Windows 10 (1903+) hoặc Windows 11',
      osSub: 'Tích hợp sẵn WebView2 runtime',
      ramReq: 'RAM: Tối thiểu 4 GB',
      ramSub: 'Bản thân Hubbub Chat chỉ dùng dưới 30 MB RAM',
      ollamaReq: 'Tùy chọn: Ollama để chạy mô hình ngoại tuyến',
      ollamaSub: 'Không mất chi phí API khi chạy cục bộ',
      macLinux: 'macOS & Linux',
      roadmapTag: 'Lộ trình Giai đoạn 2',
      steps: {
        step1Title: 'Cài Đặt Hubbub Chat',
        step1Desc: 'Chạy bộ cài đặt, chỉ mất vài giây.',
        step2Title: 'Kết Nối Mô Hình AI',
        step2Desc: 'Nhận diện Ollama cục bộ hoặc nhập API key.',
        step3Title: 'Bắt Đầu Nghiên Cứu',
        step3Desc: 'Giao mục tiêu cho đội agent và nhận báo cáo.'
      }
    },
    faq: {
      badge: 'Thắc Mắc Phổ Biến',
      title: 'Câu Hỏi Thường Gặp',
      subtitle: 'Giải đáp nhanh về Hubbub Chat.',
      items: [
        {
          q: 'Hubbub Chat có phải mã nguồn mở không?',
          a: 'Có. Hubbub Chat phát hành theo giấy phép Apache License 2.0, bạn có thể xem, sửa đổi và sử dụng tự do, kể cả thương mại.'
        },
        {
          q: 'Dữ liệu của tôi có riêng tư không?',
          a: 'Có. Hội thoại, nhật ký và báo cáo đều lưu trên máy của bạn. Hubbub Chat không thu thập telemetry.'
        },
        {
          q: 'Tôi có cần GPU không?',
          a: 'Không. Chạy mô hình nhỏ cục bộ qua Ollama hoặc llama.cpp, hoặc nhập API key riêng để dùng mô hình đám mây.'
        },
        {
          q: 'Khác gì so với chatbot web?',
          a: 'Hubbub Chat chạy cục bộ, điều phối đội agent, làm việc an toàn với file của bạn và tạo báo cáo có thể chỉnh sửa thay vì bong bóng chat.'
        },
        {
          q: 'Hubbub bảo vệ máy tính của tôi thế nào?',
          a: 'Mọi thao tác file và mạng đều qua Policy Engine Rust. PathGuard và UrlGuard giới hạn truy cập, tác vụ nhạy cảm cần bạn xác nhận.'
        }
      ]
    },
    footer: {
      brandName: 'Hubbub Chat',
      shortName: 'Hubbub',
      tagline: 'Không gian chat AI đa tác tử cá nhân cho học tập và nghiên cứu chuyên sâu.',
      zeroTelemetry: 'Local-first • Không telemetry',
      colProduct: 'Sản Phẩm',
      colSecurity: 'Bảo Mật',
      colEcosystem: 'Hệ Sinh Thái',
      copyright: 'Cộng đồng Hubbub Chat. Phát hành theo giấy phép Apache-2.0.',
      builtWith: 'Xây dựng với Rust, Tauri 2 & React 19'
    }
  }
}
