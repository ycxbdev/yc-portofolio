export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: 'pentest' | 'web-sec' | 'ctf' | 'tool' | 'dev';
  status: 'active' | 'completed' | 'wip';
  github?: string;
  demo?: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'WebVuln Scanner',
    description:
      'Automated web vulnerability scanner that detects SQLi, XSS, CSRF, open redirects and misconfigured headers. Built with Python and async requests.',
    tags: ['Python', 'SQLi', 'XSS', 'CSRF', 'Async'],
    category: 'tool',
    status: 'active',
    github: 'https://github.com/a1akamsi',
    year: 2026,
  },
  {
    id: 2,
    title: 'Cryptocurrency Price Prediction use Rule-Based and Sentiment Analysis Social Media Twitter (X) & SMA indicator',
    description:
      ' a simple web for newbie traders to invest and trading.',
    tags: ['Python', 'Flask', 'Golang', 'Rest-API/Static', 'Crypto','Bachelors thesis'],
    category: "dev",
    status: 'active',
    github: 'https://github.com/a1akamsi',
    year: 2026,
  },
  {
    id: 3,
    title: 'Web e-commerce YOOVIA',
    description:
      'website new local brand for selling hoodie and t-shirt. And CRM, apply google Ads for monetizing.',
    tags: ['Pyton', 'Flask', 'SupaBase'],
    category: "dev",
    status: 'completed',
    github: 'https://github.com/a1akamsi',
    year: 2023,
  },
  {
    id: 4,
    title: 'JWT Forge',
    description:
      'JWT vulnerability testing tool. Tests algorithm confusion (RS256→HS256), none algorithm bypass, weak secret bruteforce and claim tampering.',
    tags: ['JWT', 'Python', 'Auth Bypass', 'HS256', 'RS256'],
    category: 'web-sec',
    status: 'completed',
    github: 'https://github.com/a1akamsi',
    year: 2023,
  },
  {
    id: 5,
    title: 'Network IDS Monitor',
    description:
      'Lightweight intrusion detection system for home labs. Monitors network packets, detects port scans, ARP spoofing and brute-force patterns.',
    tags: ['Python', 'Scapy', 'IDS', 'Network', 'Alerts'],
    category: 'tool',
    status: 'wip',
    github: 'https://github.com/a1akamsi',
    year: 2024,
  },
  {
    id: 6,
    title: 'Phishing Awareness Lab',
    description:
      'Controlled environment to simulate phishing campaigns for security awareness training. Generates reports on user behavior and click rates.',
    tags: ['GoPhish', 'Docker', 'HTML', 'SMTP', 'Reports'],
    category: 'pentest',
    status: 'completed',
    github: 'https://github.com/a1akamsi',
    year: 2026,
  },
];

export const categoryLabels: Record<Project['category'], string> = {
  pentest: 'Pentesting',
  'web-sec': 'Web Security',
  ctf: 'ctf',
  tool: 'Tool',
  dev: 'Development',
};

export const statusColors: Record<Project['status'], string> = {
  active: 'text-[#00ff9f] border-[#00ff9f44]',
  completed: 'text-[#00ff9faa] border-[#00ff9f22]',
  wip: 'text-[#febc2e] border-[#febc2e44]',
};
