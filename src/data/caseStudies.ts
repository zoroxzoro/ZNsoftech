export interface CaseStudyMetric {
  label: string;
  value: string;
  subtext: string;
  highlight?: boolean;
}

export interface CaseStudyChallengeItem {
  number: string;
  title: string;
  description: string;
  impact: string;
}

export interface CaseStudySolutionItem {
  number: string;
  title: string;
  description: string;
  metricLabel?: string;
  metricValue?: string;
  subtext?: string;
}

export interface CaseStudyHighlightItem {
  number: string;
  title: string;
  description: string;
  badge: string;
}

export interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  location: string;
  category: string;
  flagshipLabel: string;
  heroImage: string;
  heroImageAlt: string;
  tags: string[];
  externalUrl?: string;
  timeline: string;
  services: string[];

  // Hero Quick Metrics
  heroMetrics: {
    label: string;
    value: string;
  }[];

  // Live Telemetry Feed
  telemetryFeed: {
    source: string;
    time: string;
    color: string;
    message: string;
  }[];

  // At a Glance (Contextual Synthesis)
  glance: {
    eyebrow: string;
    title: string;
    lead: string;
    bullets: string[];
    paragraphs: string[];
    bottleneck: {
      title: string;
      description: string;
    };
    conclusion: string;
  };

  // Challenges
  challenges: {
    eyebrow: string;
    title: string;
    items: CaseStudyChallengeItem[];
  };

  // Solutions
  solutions: {
    eyebrow: string;
    title: string;
    items: CaseStudySolutionItem[];
  };

  // System Highlights
  highlights: CaseStudyHighlightItem[];

  // Technical Architecture
  architecture: {
    eyebrow: string;
    title: string;
    description: string;
    features: { title: string; description: string; icon: string }[];
    apiSnippet: {
      endpoint: string;
      payload: string;
      response: string;
    };
    stats: { label: string; value: string }[];
  };

  // Measurable Outcomes
  results: {
    eyebrow: string;
    title: string;
    description: string;
    metrics: {
      type: string;
      value: string;
      description: string;
      color?: string;
    }[];
  };

  // Endorsement Quote
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    initials: string;
  };

  // Next Project
  nextProject: {
    slug: string;
    title: string;
    category: string;
    description: string;
    stat: string;
  };
}

export const caseStudiesRegistry: Record<string, CaseStudyData> = {
  'omnia-performance': {
    slug: 'omnia-performance',
    title: 'Omnia Performance',
    subtitle: 'Adaptive Training & Hybrid Athlete Ecosystem',
    client: 'Omnia Performance Ltd.',
    location: 'United Kingdom & Global',
    category: 'Health & Hybrid Athletics',
    flagshipLabel: 'FLAGSHIP 01 // HEALTH & HYBRID ATHLETICS',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW8N5jEnWaqTrBBWna6i0QQicr5aVyVN-Mddb9fkGBtcAsmCuYMaGSFhjohWSyofPih0-PEpC2i2hUe6lvkpcVZi56OPre6_wCYDWMXrw4S3CZEmDK4wU4f4ErseItwbFWAzZps4_hfWq2jK9VTH6oScDfJRknux-xnV0fZVq4COjrRq62vswIaSyvgQT1-P9hC0VaLtdAUqfwtt4OPOUk93OLsB0AC6s81HvQ3c1gUw18cvCTkjkUKA',
    heroImageAlt: 'Modern fitness analytics web dashboard on dark glass UI displaying athlete workout programming, live heart rate recovery curves, progress trackers, and coach communications.',
    tags: ['Web Application', 'PWA Mobile', 'Real-Time Telemetry', 'Agentic Workflows'],
    externalUrl: 'https://www.omnia-performance.com',
    timeline: '10 Months Engineering',
    services: ['Architecture Design', 'Custom Web Application', 'Offline-First PWA', 'Wearable Ingestion'],
    heroMetrics: [
      { label: 'SUBSCRIPTION GROWTH', value: '+280%' },
      { label: 'TELEMETRY COMPUTE', value: '< 1s' },
      { label: 'PLATFORM UPTIME', value: '99.98%' }
    ],
    telemetryFeed: [
      {
        source: 'COACH J. FERGUSON',
        time: '14:02 UTC',
        color: '#6789ff',
        message: 'HRV suppression observed post-Tuesday lifting block. Auto-adjusted Thursday morning cadence run from 18km to 12km recovery pace.'
      },
      {
        source: 'TELEMETRY BOT (EDGE)',
        time: '13:58 UTC',
        color: '#BAE6FD',
        message: 'Garmin FIT file parsed. 4,210 data points ingested in 420ms. Zero packet drop.'
      },
      {
        source: 'ATHLETE LOGGED // M. REID',
        time: '12:30 UTC',
        color: '#c8bfff',
        message: 'Session completed: Hyrox Simulation 58:12. RPE 8.5. Sled push felt lighter than week 3 baseline.'
      }
    ],
    glance: {
      eyebrow: 'Contextual Synthesis',
      title: 'The Project at a Glance',
      lead: 'Deconstructing the complexities of hybrid athletic training at global scale.',
      bullets: [
        'Multi-Discipline Training Logic',
        'Sub-second Wearable Ingestion',
        'Unified High-Concurrency Portals'
      ],
      paragraphs: [
        'Omnia Performance is the premier high-performance authority for hybrid athletes worldwide—individuals who refuse to compromise, simultaneously pursuing extreme strength standards alongside world-class cardiovascular endurance.',
        'Whether an athlete is preparing for a sub-3 hour marathon while maintaining a 500lb deadlift, or dominating international Hyrox competitions, their physiology defies generic fitness methodologies. Training in conflicting energy pathways induces the classic "interference effect"—where excessive endurance training blunts muscular hypertrophy and neuromuscular recruitment if not micro-managed with mathematical precision.',
        'Prior to partnering with ZNSoftech, Omnia’s world-class coaching staff operated across a tangled web of disconnected platforms: static Google Spreadsheets, WhatsApp groups, manual email check-ins, and fragmented CSV exports from GPS running watches and biometric rings.'
      ],
      bottleneck: {
        title: 'The Operational Bottleneck',
        description: 'Coaches spent up to 65% of their working hours manually transcribing data, calculating weekly load volumes, and retroactively altering spreadsheets whenever an athlete encountered travel fatigue, illness, or schedule conflicts. This limited total athlete capacity per coach to just 30 individuals.'
      },
      conclusion: 'ZNSoftech intervened to replace this disjointed workflow with an enterprise-grade digital coaching ecosystem: a proprietary, high-availability web platform engineered with reactive algorithms, automated load recalibration, and real-time biometric ingestion.'
    },
    challenges: {
      eyebrow: 'Friction Breakdown',
      title: '01 // The Challenge — The Algorithmic Dilemma of Hybrid Training',
      items: [
        {
          number: 'CHALLENGE 01',
          title: 'Multi-Discipline Fatigue Modeling',
          description: 'Standard commercial fitness applications operate on single-variable logic: running or powerlifting. In hybrid athletics, eccentric muscle damage from heavy barbell complexes heavily diminishes subsequent running VO2 economy. The system needed algorithmic interference management to model systemic nervous system exhaustion across conflicting modalities.',
          impact: 'IMPACT: Slower adaptations & elevated injury risk'
        },
        {
          number: 'CHALLENGE 02',
          title: 'Disconnected Biometric Data Streams',
          description: 'Athletes utilized heterogeneous device ecosystems—Garmin GPS, Polar chest straps, Apple Health, and WHOOP trackers. Ingesting these dense, time-series telemetry streams with varying schemas without latency or database locking during peak global morning workout windows was critical.',
          impact: 'IMPACT: 12-hour data lag & manual CSV parsing'
        },
        {
          number: 'CHALLENGE 03',
          title: 'Coach Scaling Constraints',
          description: 'Every time an athlete missed a target session, head coaches were forced to spend 45 minutes manually recalculating the remaining six weeks of linear periodization. This administrative overhead capped coach rosters at 30 athletes, limiting Omnia’s recurring business revenue.',
          impact: 'IMPACT: Inflexible operational bottleneck'
        }
      ]
    },
    solutions: {
      eyebrow: 'Architectural Blueprint',
      title: '02 // The Solution — An Adaptive, Closed-Loop Coaching Ecosystem',
      items: [
        {
          number: '01',
          title: 'Dynamic Workout Sequencing Engine',
          description: 'ZNSoftech engineered an algorithmic workload engine that tracks rolling 7-day, 28-day acute-to-chronic workload ratios (ACWR). If an athlete reports an elevated Rate of Perceived Exertion (RPE) or low nocturnal HRV, the engine dynamically recalculates upcoming running volume and strength sets in real time—eliminating overtraining syndrome automatically.',
          metricLabel: 'ACWR MODEL',
          metricValue: '1.04 BALANCED',
          subtext: 'Endurance: 48.2 km / 50.0 km • Strength: 18,400 kg / 19,000 kg'
        },
        {
          number: '02',
          title: 'High-Concurrency Coach Control Center',
          description: 'We developed a single-pane-of-glass command center enabling coaches to oversee over 150 athletes concurrently. Head coaches can spot anomalies across 100+ athletes simultaneously through real-time sorting by recovery deficit, compliance rate, and personal record progression.',
          metricLabel: 'ATHLETE CAPACITY',
          metricValue: '150+ Athletes / Coach',
          subtext: 'Bulk programming templates deployed in 4.2 seconds across cohorts.'
        },
        {
          number: '03',
          title: 'Frictionless Athlete Experience',
          description: 'Engineered with strict token ergonomics, a high-contrast dark visual system optimized for dimly lit gym floors, sub-second route parsing, and seamless offline logging. Athletes can execute workouts without friction, whether on a rainy UK track or subterranean gym floor.',
          metricLabel: 'OFFLINE SYNC',
          metricValue: 'PWA IndexedDB Ready',
          subtext: 'Zero data lost during offline workouts with auto-reconnect synchronization.'
        }
      ]
    },
    highlights: [
      {
        number: '01.',
        title: 'Closed-Loop Telemetry Sync',
        description: 'Sub-second synchronization of biometric flags and completed workouts directly into coach command queues via WebSocket pipelines.',
        badge: '< 400ms Pipeline Latency'
      },
      {
        number: '02.',
        title: 'Deterministic Load Balancing',
        description: 'High-availability architecture designed for zero data loss during high-volume spikes when thousands of athletes log runs at dawn.',
        badge: 'Zero Queue Stalls'
      },
      {
        number: '03.',
        title: 'Granular Role Permissions',
        description: 'Role-based access control protecting sensitive health profiles, biometric biomarkers, and enterprise subscription billing records.',
        badge: 'RBAC & GDPR Compliant'
      },
      {
        number: '04.',
        title: 'Offline-First Caching',
        description: 'Progressive web architecture enabling athletes to complete logging in subterranean training spaces with deterministic auto-reconnect.',
        badge: 'Local IndexedDB Persistence'
      }
    ],
    architecture: {
      eyebrow: 'Core Infrastructure',
      title: 'Built with Purpose & Rigorous Engineering',
      description: 'ZNSoftech selected an architecture engineered for immense write-throughput and dynamic computation. We opted against heavyweight generic CMS tools in favor of bespoke time-series data structures and ultra-fast microservices.',
      features: [
        {
          title: 'Distributed Time-Series Data Lake',
          description: 'High-frequency biometric ticks stored with microsecond timestamps for precise cadence alignment.',
          icon: 'database'
        },
        {
          title: 'Edge-Distributed Computing',
          description: 'Global low-latency content distribution ensuring athletes in the UK, USA, and Australia experience identical response times.',
          icon: 'zap'
        },
        {
          title: 'UK & EU GDPR Medical Grade Compliance',
          description: 'Anonymized telemetry IDs, client-side encryption of biometric records, and zero non-consensual data sharing.',
          icon: 'shield-check'
        }
      ],
      apiSnippet: {
        endpoint: 'POST /api/v1/telemetry/stream',
        payload: `{\n  "athlete_id": "usr_9921_uk",\n  "session_type": "HYBRID_ENDURANCE_LIFT",\n  "acute_load_tss": 142.4,\n  "hrv_rmssd_delta": -12.4,\n  "auto_recalibration_flag": true\n}`,
        response: '// Response: 200 OK (38ms) - Periodization re-balanced across Next 4 Microcycles'
      },
      stats: [
        { label: 'API Ingestion', value: '38ms' },
        { label: 'IP Ownership', value: '100%' },
        { label: 'Vendor Lock-in', value: '0' }
      ]
    },
    results: {
      eyebrow: 'Commercial & Technical Verification',
      title: 'The Measurable Impact',
      description: 'Rigorous engineering translated immediately into global subscriber growth and extraordinary coaching efficiency.',
      metrics: [
        {
          type: 'GROWTH',
          value: '+280%',
          description: 'Active subscription growth within the first 6 months of platform rollout across UK, US, and EU markets.',
          color: '#b6c4ff'
        },
        {
          type: 'SPEED',
          value: '< 1s',
          description: 'End-to-end telemetry ingestion, calculation, and UI synchronization for wearers globally.',
          color: '#BAE6FD'
        },
        {
          type: 'RELIABILITY',
          value: '99.98%',
          description: 'Production uptime SLA maintained continuously since initial deployment, across high-peak training hours.',
          color: '#c8bfff'
        },
        {
          type: 'SCALE',
          value: '5x',
          description: 'Increase in active athlete capacity per head coach without increasing administrative overhead or fatigue.',
          color: '#6789ff'
        }
      ]
    },
    testimonial: {
      quote: '"ZNSoftech did not just build software—they deconstructed sports science mechanics and rebuilt them into a robust, high-performance digital engine. Their technical discipline, zero-vendor-lockin approach, and ability to translate complex athletic algorithms into clean, instant interfaces transformed our business from a coaching agency into a world-class hybrid sports tech platform."',
      author: 'Leadership & Sports Science Team',
      role: 'Omnia Performance Ltd.',
      company: 'United Kingdom',
      initials: 'OP'
    },
    nextProject: {
      slug: 'oil-recycling-association',
      title: 'Oil Recycling Association (ORA UK)',
      category: 'UK Environmental Sustainability',
      description: 'UK National Environmental Compliance & Hazardous Waste Tracking Portal. Built with 100% Nationwide Audit Pass Rate under strict DEFRA standard compliance.',
      stat: '100% Audit Compliance Pass Rate | DEFRA Standard'
    }
  },

  'oil-recycling-association': {
    slug: 'oil-recycling-association',
    title: 'Oil Recycling Association (ORA UK)',
    subtitle: 'National Hazardous Waste Compliance & Audit Infrastructure',
    client: 'Oil Recycling Association UK',
    location: 'United Kingdom (Nationwide)',
    category: 'Environmental Compliance & Enterprise Directory',
    flagshipLabel: 'CASE STUDY // UK STATUTORY PLATFORM',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7Q7Mv0HMFeJQhA7A_MYzKUsDCEYKqWBGLWQJ0rJXs2a_9J42PoeNDjI3bc_S0nfp0_j8_YEyA2wM32M7m-wZHs7TOXHdlbbOBL8nT7xMKReYbm684Qr4FkRHmSUEJqnPYA63D5465Lw0ytw7RHvVX2h-BUSWu3alVUU0sDMU8dYiKjBscKEzD4zTXAqLKaZb7MIMmuEF8kUnFFFSxmKtTp_skBrnQQB8pRwiRL3Htj5a1fMYRBV8EQA',
    heroImageAlt: 'Industrial environmental analytics and compliance management platform showing waste recycling metrics, regulatory reports, and green sustainability audit indices.',
    tags: ['Next.js', 'Cloud Microservices', 'SQL Registry', 'DEFRA Compliance'],
    externalUrl: 'https://stage.ora.org.uk',
    timeline: '8 Months Engineering',
    services: ['Statutory Compliance Architecture', 'Enterprise Directory', 'Chain of Custody Tracking'],
    heroMetrics: [
      { label: 'COMPLIANCE AUDIT', value: '100%' },
      { label: 'CHAIN OF CUSTODY', value: 'Verifiable' },
      { label: 'REGULATORY STANDARD', value: 'DEFRA Mandate' }
    ],
    telemetryFeed: [
      {
        source: 'DEFRA AUDIT SYSTEM',
        time: '11:15 UTC',
        color: '#10b981',
        message: 'Annual national hazardous waste collector verification cycle completed with 100% certified status.'
      },
      {
        source: 'ORA REGISTRY SYNC',
        time: '09:40 UTC',
        color: '#6789ff',
        message: '1,420 operator chain-of-custody consignment notes cryptographically verified and filed.'
      }
    ],
    glance: {
      eyebrow: 'Contextual Synthesis',
      title: 'The Project at a Glance',
      lead: 'Architecting the official statutory compliance portal and tracking engine for UK waste oil recovery.',
      bullets: [
        'Automated National Operator Certification',
        'Cryptographic Waste Transfer Notes',
        'DEFRA & Environment Agency Alignment'
      ],
      paragraphs: [
        'The Oil Recycling Association (ORA) represents the UK’s leading collectors, processors, and re-refiners of used lubricants and hazardous industrial oils.',
        'With strict environmental legislation under the Environment Agency and DEFRA, waste handlers must maintain immutable paper trails for hazardous materials from site collection through refinery re-processing.',
        'ZNSoftech developed the central compliance infrastructure, verifying legal custody, providing instant public registry lookups, and certifying nationwide operators against statutory standards.'
      ],
      bottleneck: {
        title: 'The Compliance Challenge',
        description: 'Prior paper and spreadsheet workflows created friction for local authorities, fuel buyers, and transport logistics teams attempting to verify licensed collectors in real time.'
      },
      conclusion: 'The deployed platform operates as the trusted national single-source-of-truth for sustainable oil recovery and statutory environmental compliance.'
    },
    challenges: {
      eyebrow: 'Friction Breakdown',
      title: '01 // The Challenge — Regulatory Traceability & Trust',
      items: [
        {
          number: 'CHALLENGE 01',
          title: 'Immutable Chain of Custody',
          description: 'Preventing illegal dumping and unverified handling required auditable validation of every step in the used oil collection lifecycle.',
          impact: 'IMPACT: Elimination of uncertified rogue operators'
        },
        {
          number: 'CHALLENGE 02',
          title: 'Statutory DEFRA Mandates',
          description: 'The platform had to strictly conform to UK government environmental reporting guidelines with zero data variance.',
          impact: 'IMPACT: 100% regulatory audit pass rate achieved'
        }
      ]
    },
    solutions: {
      eyebrow: 'Architectural Blueprint',
      title: '02 // The Solution — Cloud-Native Compliance Registry',
      items: [
        {
          number: '01',
          title: 'Automated Collector Verification',
          description: 'Real-time license validity queries against Environment Agency registries ensure only compliant operators can issue documentation.',
          metricLabel: 'AUDIT PASS RATE',
          metricValue: '100% Nationwide',
          subtext: 'Statutory compliance status continuously validated.'
        },
        {
          number: '02',
          title: 'High-Integrity Member Portal',
          description: 'Clean Next.js architecture with dedicated member areas, document vaults, and automated renewal triggers.',
          metricLabel: 'DOCUMENT ACCURACY',
          metricValue: 'Zero Discrepancies',
          subtext: 'Centralized repository of verified industry compliance records.'
        }
      ]
    },
    highlights: [
      {
        number: '01.',
        title: 'Statutory Verification Engine',
        description: 'Direct verification routines confirming collector certifications and valid insurance covenants.',
        badge: 'DEFRA Compliant'
      },
      {
        number: '02.',
        title: 'Role-Segregated Document Vault',
        description: 'Secure multi-tier access allowing operators, auditors, and governing councils dedicated interfaces.',
        badge: 'Zero Breach Record'
      }
    ],
    architecture: {
      eyebrow: 'Core Infrastructure',
      title: 'Reliable Cloud Architecture for National Infrastructure',
      description: 'Built on Next.js, distributed PostgreSQL with cryptographic hashing, and automated blue/green cloud pipelines.',
      features: [
        {
          title: 'Cryptographic Document Hashing',
          description: 'Consignment notes stamped with tamper-evident checksums.',
          icon: 'lock'
        },
        {
          title: 'High-Availability Public Directory',
          description: 'Sub-100ms lookup speeds for industrial clients verifying local collector credentials.',
          icon: 'search'
        }
      ],
      apiSnippet: {
        endpoint: 'GET /api/v1/compliance/verify?operator_id=ORA_UK_8492',
        payload: '// Verification query for statutory hazardous waste carrier credentials',
        response: '// Response: 200 OK - Status: CERTIFIED_ACTIVE | DEFRA Tier 1 Passed'
      },
      stats: [
        { label: 'Audit Record', value: '100%' },
        { label: 'Uptime', value: '99.99%' },
        { label: 'UK Coverage', value: 'National' }
      ]
    },
    results: {
      eyebrow: 'Measured Outcomes',
      title: 'The Measurable Impact',
      description: 'Streamlined statutory compliance across all ORA member organizations nationwide.',
      metrics: [
        {
          type: 'COMPLIANCE',
          value: '100%',
          description: 'Nationwide audit pass rate across all member operators under DEFRA criteria.',
          color: '#10b981'
        },
        {
          type: 'LOOKUP SPEED',
          value: '< 80ms',
          description: 'Instant credential verification for commercial transport and refinery dispatchers.',
          color: '#6789ff'
        }
      ]
    },
    testimonial: {
      quote: '"ZNSoftech delivered a rock-solid compliance architecture that protects our industry members and ensures strict adherence to UK statutory standards. Their responsiveness and technical clarity have been exemplary throughout."',
      author: 'Executive Committee',
      role: 'Oil Recycling Association (UK)',
      company: 'United Kingdom',
      initials: 'ORA'
    },
    nextProject: {
      slug: 'indemand-tickets',
      title: 'Indemand Tickets',
      category: 'High-Concurrency Event & Logistics',
      description: 'High-throughput queuing architecture and resilient transaction gateways absorbing sudden peak stadium ticket dropouts.',
      stat: '25,000+ Req/s Concurrency | < 320ms Checkout'
    }
  },

  'indemand-tickets': {
    slug: 'indemand-tickets',
    title: 'Indemand Tickets',
    subtitle: 'High-Concurrency Global Ticketing & Logistics Infrastructure',
    client: 'Indemand Tickets Ltd.',
    location: 'United Kingdom & International',
    category: 'High-Concurrency Event & Logistics',
    flagshipLabel: 'CASE STUDY // PEAK CONCURRENCY TICKETING',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBofAaXFEx7L6-mau8Q7ENOc6Lgq4VyYovxayXiixGIjYoiPod5VXO23wXbZd5PWcqk7EdgikuVTltbqoK4QAgiLOdmaSicVhctb_igsgFVj6m63el4c8a12P9DGBC3Sc01Jf2Xaflj4AwefkUUaT28hyrRSbud5Tfcm90-pJpvEAMKgWy33SjFMvf0WXBKS67k-kENUjDd6pDWFtdkt55cno_5TnvpzFlo-MUVdsa8nh2mLdWdy7boVg',
    heroImageAlt: 'Ultra modern illuminated arena arena stage with massive holographic displays, synchronized digital crowd telemetry screens, and dynamic stage lighting.',
    tags: ['Distributed Redis', 'Stripe Connect', 'Queue Management', 'Zero Dropouts'],
    externalUrl: 'https://www.indemandtickets.co.uk',
    timeline: '6 Months Engineering',
    services: ['Distributed Queue Architecture', 'High-Speed Payment Gateway', 'Seat Locking Engine'],
    heroMetrics: [
      { label: 'PEAK CONCURRENCY', value: '25,000+ Req/s' },
      { label: 'CHECKOUT LATENCY', value: '< 320ms' },
      { label: 'DROPOUT RATE', value: '0 Stalls' }
    ],
    telemetryFeed: [
      {
        source: 'QUEUE GATEWAY',
        time: '18:00 UTC',
        color: '#6789ff',
        message: 'On-sale launch: 42,000 concurrent virtual waiting room participants allocated within 1.2 seconds.'
      },
      {
        source: 'TRANSACTION ENGINE',
        time: '18:03 UTC',
        color: '#10b981',
        message: '8,500 stadium seat reservations confirmed simultaneously via distributed Redis locks.'
      }
    ],
    glance: {
      eyebrow: 'Contextual Synthesis',
      title: 'The Project at a Glance',
      lead: 'Engineering bulletproof queueing and checkout infrastructure for high-demand entertainment events.',
      bullets: [
        '25,000+ Requests Per Second Concurrency',
        'Deterministic Seat Locking Engine',
        'Zero Payment Collisions'
      ],
      paragraphs: [
        'High-profile stadium concerts, festivals, and sporting events generate sudden, violent traffic spikes. Traditional ticketing platforms frequently experience timeout cascades, double-booked seats, and frustrated fans.',
        'ZNSoftech architected an elastic queueing engine and distributed Redis seat-locking pipeline capable of handling tens of thousands of simultaneous checkouts without dropping a single transaction.'
      ],
      bottleneck: {
        title: 'The Concurrency Bottleneck',
        description: 'When tickets drop, thousands of users click the exact same seat within milliseconds. Preventing race conditions while maintaining sub-second checkout speeds requires world-class database locking strategies.'
      },
      conclusion: 'The deployed system has successfully powered major nationwide tours with zero dropouts and flawless transaction integrity.'
    },
    challenges: {
      eyebrow: 'Friction Breakdown',
      title: '01 // The Challenge — Extreme Concurrency & Race Conditions',
      items: [
        {
          number: 'CHALLENGE 01',
          title: 'Flash-Crowd Traffic Spikes',
          description: 'Absorbing 25,000+ requests per second at the exact on-sale second without upstream database overload or server crashing.',
          impact: 'IMPACT: Resilient virtual waiting room architecture'
        },
        {
          number: 'CHALLENGE 02',
          title: 'Zero Double-Booking Guarantee',
          description: 'Milliseconds-level seat locking with automatic rollback if a buyer abandons checkout.',
          impact: 'IMPACT: 100% reservation integrity achieved'
        }
      ]
    },
    solutions: {
      eyebrow: 'Architectural Blueprint',
      title: '02 // The Solution — Distributed Locking & Resilient Pipelines',
      items: [
        {
          number: '01',
          title: 'Distributed Redis Mutex Locks',
          description: 'Atomic lock acquisition ensures that as soon as a user selects a seat, it is temporarily reserved across all global clusters instantly.',
          metricLabel: 'LOCK LATENCY',
          metricValue: '< 15ms',
          subtext: 'Deterministic reservation mutex prevents collisions.'
        },
        {
          number: '02',
          title: 'Stripe Connect High-Volume Integration',
          description: 'Direct tokenized payment processing achieving sub-320ms transaction finalization.',
          metricLabel: 'TRANSACTION SPEED',
          metricValue: '< 320ms',
          subtext: 'High-throughput payment orchestration with zero timeouts.'
        }
      ]
    },
    highlights: [
      {
        number: '01.',
        title: 'Elastic Virtual Queue',
        description: 'Gracefully throttles traffic into the checkout flow based on real-time server load readouts.',
        badge: '25,000+ Req/s'
      },
      {
        number: '02.',
        title: 'Atomic Inventory Allocation',
        description: 'Zero database deadlocks during simultaneous multi-seat basket additions.',
        badge: 'Zero Collisions'
      }
    ],
    architecture: {
      eyebrow: 'Core Infrastructure',
      title: 'Engineered for Unforgiving Peak Concurrency',
      description: 'Distributed microservices on AWS with Redis clusters, edge routing, and automated container auto-scaling.',
      features: [
        {
          title: 'Distributed Redis Cluster',
          description: 'In-memory seat locking with millisecond TTL expiration.',
          icon: 'layers'
        },
        {
          title: 'Edge Caching & Cloud CDN',
          description: 'Static assets and seat maps served directly from edge locations.',
          icon: 'globe'
        }
      ],
      apiSnippet: {
        endpoint: 'POST /api/v1/queue/reserve-seat',
        payload: `{\n  "event_id": "arena_london_2026",\n  "seats": ["A12", "A13"],\n  "buyer_session": "sess_88319"\n}`,
        response: '// Response: 200 OK (22ms) - Seats locked for 480 seconds'
      },
      stats: [
        { label: 'Throughput', value: '25,000/s' },
        { label: 'Checkout Time', value: '< 320ms' },
        { label: 'Dropouts', value: '0' }
      ]
    },
    results: {
      eyebrow: 'Measured Outcomes',
      title: 'The Measurable Impact',
      description: 'Flawless execution during major stadium and arena on-sale events.',
      metrics: [
        {
          type: 'CAPACITY',
          value: '25,000+',
          description: 'Requests per second handled effortlessly during peak flash-crowd moments.',
          color: '#6789ff'
        },
        {
          type: 'SPEED',
          value: '< 320ms',
          description: 'End-to-end checkout completion speed from payment submission to barcode issuance.',
          color: '#BAE6FD'
        }
      ]
    },
    testimonial: {
      quote: '"When thousands of fans hit our site at once, downtime is unacceptable. ZNSoftech built an infrastructure that simply does not break. Our on-sales have been smooth, predictable, and stress-free ever since."',
      author: 'Operations Director',
      role: 'Indemand Tickets Ltd.',
      company: 'United Kingdom',
      initials: 'IT'
    },
    nextProject: {
      slug: 'omnia-performance',
      title: 'Omnia Performance',
      category: 'Health & Hybrid Athletics',
      description: 'Adaptive training and bio-telemetry coaching platform engineered for elite endurance and hybrid athletes.',
      stat: '+280% Subscriptions | < 1s Telemetry'
    }
  }
};

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  return caseStudiesRegistry[slug];
}

export function getAllCaseStudies(): CaseStudyData[] {
  return Object.values(caseStudiesRegistry);
}
