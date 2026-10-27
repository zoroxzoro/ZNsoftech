export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  status: string;
  link: string;
}

export const productsData: ProductItem[] = [
  {
    id: 'omnidash',
    name: 'OmniDash Telemetry',
    category: 'Enterprise Observability',
    description: 'Autonomous cloud infrastructure monitor and live metric dashboard with real-time anomaly detection.',
    features: ['Zero-overhead agent', 'Sub-millisecond aggregation', 'Predictive incident mitigation'],
    status: 'Live Enterprise',
    link: '/products',
  },
  {
    id: 'agentflow',
    name: 'AgentFlow Studio',
    category: 'Agentic AI Orchestrator',
    description: 'Visual multi-agent workflow designer that coordinates goal-driven LLM and SLM agents across legacy APIs.',
    features: ['Dynamic task graphs', 'Human-in-the-loop governance', 'Self-healing workflows'],
    status: 'Public Beta',
    link: '/products',
  },
  {
    id: 'scalevault',
    name: 'ScaleVault Core',
    category: 'Compliance & Storage',
    description: 'Zero-knowledge encrypted multi-tenant storage system meeting ISO 27001, HIPAA, and GDPR standards.',
    features: ['Deterministic encryption', 'Geo-distributed sharding', 'Automated audit trail'],
    status: 'Enterprise Ready',
    link: '/products',
  },
];
