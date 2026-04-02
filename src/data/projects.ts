export const PROJECTS_DATA: Record<string, any> = {
  'soc-analysis-platform': {
    title: 'SOC Analysis Platform',
    category: 'SecOps Architecture',
    year: '2025',
    client: 'Open Source / Enterprise',
    description: 'A comprehensive security operations center dashboard for real-time threat analysis and incident response orchestration.',
    challenge: 'Security teams often struggle with tool sprawl and alert fatigue, making it difficult to correlate logs and respond to critical incidents in real-time.',
    solution: 'Built a centralized platform that aggregates telemetry from multiple sources, using automated correlation rules to highlight high-fidelity threats.',
    results: [
      'Centralized 15+ disparate security tool feeds',
      'Reduced mean-time-to-respond (MTTR) by 40%',
      'Automated 60% of tier-1 triage tasks'
    ],
    image: '/project_1.png',
    accent: 'emerald',
    githubRepo: 'https://github.com/pangerlkr/SOC-Analysis-platform',
    process: [
      { step: '01', title: 'Data Ingestion', desc: 'Setting up high-throughput pipelines for SIEM/EDR logs.' },
      { step: '02', title: 'Correlation', desc: 'Engineering rules to identify adversarial patterns across streams.' },
      { step: '03', title: 'Visualization', desc: 'Developing the glassmorphism dashboard for clear oversight.' },
      { step: '04', title: 'Response', desc: 'Integrating SOAR playbooks for automated remediation.' }
    ]
  },
  'secure-comm': {
    title: 'SecureComm',
    category: 'Cryptography Suite',
    year: '2025',
    client: 'Private Communication',
    description: 'An end-to-end encrypted messaging protocol designed for absolute privacy and perfect forward secrecy.',
    challenge: 'Standard messaging apps often fall short in verifiable privacy or rely on centralized servers that can be compromised.',
    solution: 'Implemented the Double Ratchet Algorithm with X3DH for asynchronous key exchange, ensuring every message is uniquely encrypted.',
    results: [
      'Perfect Forward Secrecy guaranteed for every session',
      'Zero-knowledge architecture — server sees nothing',
      'Identified and patched 3 cryptographic edge cases'
    ],
    image: '/project_2.png',
    accent: 'purple',
    githubRepo: 'https://github.com/pangerlkr/SecureComm',
    process: [
      { step: '01', title: 'Protocol Design', desc: 'Drafting the Signal-inspired cryptographic handshake.' },
      { step: '02', title: 'Implementation', desc: 'Writing the encryption engine in performance-tuned Rust/TS.' },
      { step: '03', title: 'Audit', desc: 'Performing formal verification on the key exchange logic.' },
      { step: '04', title: 'Deployment', desc: 'Containerizing the relay nodes for decentralized use.' }
    ]
  },
  'proximity-sense': {
    title: 'Proximity Sense',
    category: 'Embedded Security',
    year: '2024',
    client: 'Hardware Security Project',
    description: 'Advanced hardware-layer security module utilizing proximity sensors and biometric triggers for physical access control.',
    challenge: 'Software security is only as strong as physical entry points; legacy proximity systems are easily spoofed or bypassed.',
    solution: 'Developed a dual-factor proximity system that combines encrypted signal analysis with physical motion verification.',
    results: [
      '99.9% accuracy in physical presence detection',
      'Sub-20ms latency for real-time authentication',
      'Integrated with enterprise IoT standard protocols'
    ],
    image: '/project_3.png',
    accent: 'blue',
    githubRepo: 'https://github.com/pangerlkr/proximity-sense',
    process: [
      { step: '01', title: 'Hardware Audit', desc: 'Selecting tamper-resistant sensors and microcontrollers.' },
      { step: '02', title: 'Firmware Build', desc: 'Writing the encrypted communication layer for the module.' },
      { step: '03', title: 'Signal Tuning', desc: 'Calibrating proximity waves for varying environments.' },
      { step: '04', title: 'Integration', desc: 'Bridge testing with existing digital security dashboards.' }
    ]
  },
  'red-team-orchestrator': {
    title: 'Red Team Orchestrator',
    category: 'Offensive Security',
    year: '2025',
    client: 'Security Assessment',
    description: 'A Command and Control (C2) framework for orchestrating complex offensive security operations and penetration tests.',
    challenge: 'Managing multiple implants and data exfiltration streams during a red team engagement can become chaotic without a central brain.',
    solution: 'Engineered a highly extensible C2 server with a modular agent system, supporting custom payloads and stealthy callbacks.',
    results: [
      'Orchestrated 5 concurrent full-spectrum engagements',
      'Developed 10+ custom post-exploitation modules',
      'Automated report generation for vulnerability findings'
    ],
    image: '/project_4.png',
    accent: 'red',
    githubRepo: 'https://github.com/pangerlkr/red-team-orchestrator',
    process: [
      { step: '01', title: 'Infrastructure', desc: 'Setting up stealthy redirection and listener nodes.' },
      { step: '02', title: 'Agent Dev', desc: 'Writing polymorphic implants to evade EDR detection.' },
      { step: '03', title: 'Command Hub', desc: 'Building the real-time terminal for operative control.' },
      { step: '04', title: 'Reporting', desc: 'Aggregating raw logs into actionable risk assessments.' }
    ]
  },
  'mcp-rep': {
    title: 'MCP Rep',
    category: 'Protocol Engineering',
    year: '2024',
    client: 'Standards Committee',
    description: 'A reference implementation for a new Model Context Protocol, enabling seamless AI-to-tool integration.',
    challenge: 'Existing protocols for AI agents are often proprietary and lack a standardized way to share tool capabilities across servers.',
    solution: 'Designed a lightweight, JSON-RPC based protocol that allows agents to discover and execute tools securely across any host.',
    results: [
      'Reduced integration time for new tools by 80%',
      'Support for 100+ concurrent tool registrations',
      'Adopted as a reference for cross-platform agent logic'
    ],
    image: '/project_2.png',
    accent: 'emerald',
    githubRepo: 'https://github.com/pangerlkr/mcp-rep',
    process: [
      { step: '01', title: 'Spec Draft', desc: 'Defining the core handshake and primitive tool types.' },
      { step: '02', title: 'Reference Build', desc: 'Implementing the server and client in Node/TypeScript.' },
      { step: '03', title: 'Security Audit', desc: 'Ensuring tool execution paths are sandboxed and safe.' },
      { step: '04', title: 'SDK Release', desc: 'Publishing the core library for community adoption.' }
    ]
  },
  'windows-11-portfolio': {
    title: 'Windows 11 Portfolio',
    category: 'UI/UX Engineering',
    year: '2024',
    client: 'Personal Experiment',
    description: 'A meticulously replicated Windows 11 OS UI/UX environment built for the web using modern React components.',
    challenge: 'Replicating complex OS behaviors like window snapping, translucency, and start-menu logic using vanilla CSS and React.',
    solution: 'Leveraged Framer Motion for window physics and Backdrop-blur filters for authentic glassmorphism effects.',
    results: [
      'Pixel-perfect replication of Win11 shell',
      'Fully interactive windowing system',
      'Viral reach in the developer community'
    ],
    image: '/project_4.png',
    accent: 'blue',
    githubRepo: 'https://github.com/pangerlkr/Windows-11-portfolio',
    process: [
      { step: '01', title: 'UI Audit', desc: 'Deconstructing Windows 11 design tokens.' },
      { step: '02', title: 'Shell Build', desc: 'Implementing the taskbar and start menu.' },
      { step: '03', title: 'Window System', desc: 'Creating the draggable component library.' },
      { step: '04', title: 'Polish', desc: 'Adding animations and acrylic textures.' }
    ]
  },
  'git-to-app': {
    title: 'Git to App',
    category: 'DevOps Automation',
    year: '2024',
    client: 'Developer Productivity',
    description: 'An automated pipeline that transforms raw GitHub repositories into production-ready web applications with zero configuration.',
    challenge: 'Developers waste hours on boilerplate infra setup, CI/CD configuration, and environment mapping for simple apps.',
    solution: 'Built a container-orchestrated system that auto-detects stack requirements and deploys to edge clusters instantly.',
    results: [
      'Zero-to-deploy in under 120 seconds',
      'Automated SSL and CDN configuration',
      'Support for 20+ frontend and backend frameworks'
    ],
    image: '/project_3.png',
    accent: 'blue',
    githubRepo: 'https://github.com/pangerlkr/Git-to-app',
    process: [
      { step: '01', title: 'Detection', desc: 'Building the stack analyzer for repository scanning.' },
      { step: '02', title: 'Containerize', desc: 'Developing the auto-Dockerization engine.' },
      { step: '03', title: 'Orchestration', desc: 'Mapping deployments to Kubernetes/Edge nodes.' },
      { step: '04', title: 'Feedback', desc: 'Integrating real-time build logs for developers.' }
    ]
  },
  'ctias-lab': {
    title: 'CTIAS Lab',
    category: 'Threat Intelligence',
    year: '2025',
    client: 'Cyber Research',
    description: 'A Cyber Threat Intelligence Analysis System (CTIAS) laboratory for studying adversarial TTPs and malware behavior.',
    challenge: 'Studying modern threats requires a sandbox that is both isolated from the world and connected to intelligence feeds.',
    solution: 'Created a virtualized lab environment with automated OSINT collection and sandbox execution capabilities.',
    results: [
      'Analyzed 500+ novel malware samples',
      'Real-time feed integration with 10+ OSINT sources',
      'Automated TTP mapping to the MITRE ATT&CK framework'
    ],
    image: '/project_1.png',
    accent: 'emerald',
    githubRepo: 'https://github.com/pangerlkr/ctias-lab',
    process: [
      { step: '01', title: 'Lab Setup', desc: 'Architecting the network-isolated capture nodes.' },
      { step: '02', title: 'Capture Engine', desc: 'Setting up high-fidelity telemetry for runtime analysis.' },
      { step: '03', title: 'OSINT Feed', desc: 'Integrating API hooks for real-time threat data.' },
      { step: '04', title: 'Analysis', desc: 'Mapping findings to MITRE ATT&CK for final reports.' }
    ]
  }
};
