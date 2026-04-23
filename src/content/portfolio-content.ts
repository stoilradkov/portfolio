import { assetPath, workPath } from '@/lib/paths'

export type NavigationItem = {
  label: string
  sectionId: string
}

export type Service = {
  title: string
  description: string
}

export type Strength = {
  title: string
  summary: string
  detail: string
}

export type ProcessStep = {
  title: string
  description: string
}

export type ExperienceHighlight = {
  period: string
  role: string
  company: string
  summary: string
}

export type Project = {
  slug: string
  title: string
  eyebrow: string
  summary: string
  challenge: string
  solution: string
  impact: string
  role: string
  period: string
  stack: string[]
  categories: string[]
  image: string
  overview: string[]
  responsibilities: string[]
  outcomes: string[]
}

export const navigation: NavigationItem[] = [
  { label: 'Services', sectionId: 'services' },
  { label: 'Work', sectionId: 'work' },
  { label: 'Experience', sectionId: 'experience' },
  { label: 'About', sectionId: 'about' },
]

export const siteContent = {
  name: 'Stoil Radkov',
  role: 'Senior JavaScript Full-Stack Developer',
  hero: {
    title:
      "I'm Stoil, I build web applications that make complex workflows easier to run.",
    description:
      'Senior JavaScript full-stack developer working across frontend and backend delivery for dashboards, workflow systems, internal platforms, and larger business applications. I work best with teams that need reliable software for real operations.',
    meta: 'Bulgaria. Available remotely.',
    primaryCta: {
      label: 'Book a call',
      href: 'https://calendar.app.google/BCNP85WCxaPAt2bg9',
    },
    secondaryCta: {
      label: 'Email',
      href: 'mailto:stoilradkov11@gmail.com',
    },
    proof: {
      title: 'Best fit for teams building useful software, not brochure sites.',
      description:
        'I work best on products and internal systems where workflows matter, permissions matter, data matters, and the software has to stay maintainable after the first release.',
    },
  },
  avatar: {
    src: assetPath('/assets/me.png'),
    alt: 'Avatar placeholder for Stoil Radkov',
  },
  about: {
    title: 'About me',
    paragraphs: [
      'Most of my work has been in business-facing software where the hard part is not just building screens. It is understanding how people operate, how permissions and data flow through the system, and how the product needs to behave when the workflow gets messy.',
      'That has taken me across workflow portals, analytical platforms, pricing dashboards, configuration-heavy business software, and backend services that support real operational use. I work across frontend and full-stack delivery, and I care about making systems clear, dependable, and maintainable.',
    ],
    note: 'AWS Certified Developer - Associate. 7+ years building production software.',
  },
  services: [
    {
      title: 'End-to-end product delivery',
      description:
        'I can take ownership across frontend and full-stack implementation, helping teams ship substantial product functionality without unnecessary handoff overhead.',
    },
    {
      title: 'Workflow and operations systems',
      description:
        'I design and build tools that bring structure to review flows, approvals, permissions, evidence handling, and the operational logic behind day-to-day work.',
    },
    {
      title: 'Dashboards and data-heavy interfaces',
      description:
        'I build applications that make large or changing data sets easier to explore, manage, and act on without losing clarity.',
    },
    {
      title: 'Long-term engineering support',
      description:
        'I work well in ongoing delivery setups where teams need someone reliable to improve systems, extend features, reduce technical debt, and stay close to product needs.',
    },
  ] satisfies Service[],
  credentials: [
    'React, TypeScript, Node.js, NestJS',
    'PostgreSQL, DynamoDB, REST APIs',
    'AWS, serverless architecture, Terraform',
    'Dashboards, workflows, permissions, audit trails',
  ],
  contact: {
    title: "Tell me what you're building. Let's see if it's a fit.",
    description:
      "If your team needs a reliable engineer for a product, workflow system, dashboard, or internal application, I'd be glad to take a look.",
    email: 'stoilradkov11@gmail.com',
    linkedin: 'https://www.linkedin.com/in/stoil-radkov-822470405/',
    github: 'https://github.com/stoilradkov',
    calendar: 'https://calendar.app.google/BCNP85WCxaPAt2bg9',
    resume: assetPath('/assets/Stoil_Radkov_CV.pdf'),
  },
}

export const experienceHighlights: ExperienceHighlight[] = [
  {
    period: '2021 - Present',
    role: 'Full-stack cloud application developer',
    company: 'Global technology company',
    summary:
      'Working across workflow portals, analytical platforms, and pricing operations software, with responsibilities spanning frontend delivery, backend structure, architecture decisions, and cloud implementation.',
  },
  {
    period: '2019 - 2021',
    role: 'Full-stack software engineer',
    company: 'Enterprise software consultancy',
    summary:
      'Built cloud software for configuration-heavy business products, including migration of older data models, product catalog logic, and end-to-end setup flows used by enterprise customers.',
  },
  {
    period: '2019',
    role: 'Backend software engineer',
    company: 'Early-stage product team',
    summary:
      'Worked on backend services for receipt image upload, preprocessing, storage, and early data modeling in a product focused on extracting structured data from real-world purchase records.',
  },
]

export const projects: Project[] = [
  {
    slug: 'insurance-workflow-portal',
    title: 'Insurance Data Quality Workflow Portal',
    eyebrow: 'Workflow system / compliance-aware operations',
    summary:
      'A portal for managing data-quality issues, document evidence, multi-role review flows, and audit-ready resolution history in an insurance operations context.',
    challenge:
      'The work required translating a complex issue-resolution process into software that could coordinate multiple operational roles, preserve traceability, and stay aligned with strict reporting and compliance expectations.',
    solution:
      'I helped design and build the core full-stack foundation: workflow orchestration, role-based permissions, evidence and document handling, reassignment logic, peer review paths, and audit history tracking across the issue lifecycle.',
    impact:
      'The result was a more structured and reliable system for handling high-impact data-quality work, with clearer ownership, better evidence management, and a stronger operational base for reporting readiness.',
    role: 'Founding full-stack engineer',
    period: '2021 - Present',
    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'AWS', 'REST APIs'],
    categories: ['Workflow systems', 'Operations tooling'],
    image: assetPath('/assets/projects/insurance-workflow-portal.svg'),
    overview: [
      'Anonymized case study based on NDA-bound work.',
      'Built around multi-stage fail and query management, review handling, arbitration logic, and evidence tracking.',
      'Designed to support operational clarity as well as audit and compliance needs.',
    ],
    responsibilities: [
      'Shaped core backend and frontend functionality as a founding engineer on the system.',
      'Worked closely with business stakeholders to model domain workflows and edge cases.',
      'Built reliable role-aware behavior across issue management, reviews, reassignments, and reporting support.',
    ],
    outcomes: [
      'Multi-stage workflow automation for issue review and resolution.',
      'Audit-history and evidence handling aligned with operational reporting needs.',
      'A scalable product foundation for business-critical data-quality processes.',
    ],
  },
  {
    slug: 'analytical-data-workspace',
    title: 'Analytical Data Workspace Platform',
    eyebrow: 'Data platform / dashboard workspace',
    summary:
      'A workspace-style platform for retrieving, organizing, and analyzing large volumes of changing data through a structured, permissions-aware interface.',
    challenge:
      'The platform had to deal with shifting data sources, multiple integration points, and access rules that needed to stay clear for different organizations and workspace contexts.',
    solution:
      'I owned many of the key technical decisions across frontend and backend structure, API communication, end-to-end testing, and the AWS-based architecture supporting querying, processing, and access control.',
    impact:
      'The application gave users a more usable environment for exploring large data sets while improving control over organizations, workspaces, and user-level permissions.',
    role: 'Full-stack engineer with broad technical ownership',
    period: '2021 - Present',
    stack: [
      'React',
      'TypeScript',
      'Redux',
      'Node.js',
      'AWS Lambda',
      'API Gateway',
      'DynamoDB',
      'PostgreSQL',
      'Terraform',
    ],
    categories: ['Data platforms', 'Dashboards'],
    image: assetPath('/assets/projects/analytical-data-workspace.svg'),
    overview: [
      'Anonymized case study based on NDA-bound work.',
      'Focused on querying and analyzing large, changing data sources in a usable business interface.',
      'Built on AWS services with infrastructure managed through Terraform.',
    ],
    responsibilities: [
      'Made key architecture and implementation decisions across the stack.',
      'Designed organization and workspace concepts to support safer permissions and clearer usability.',
      'Handled backend service structure, frontend delivery, integrations, and test strategy.',
    ],
    outcomes: [
      'A dashboard-style workspace users could rely on for querying and analysis.',
      'Safer access control through organizations and workspaces.',
      'A flexible foundation for ongoing data-source and product changes.',
    ],
  },
  {
    slug: 'energy-pricing-dashboard',
    title: 'Energy Pricing Operations Dashboard',
    eyebrow: 'Operational dashboard / multi-country pricing',
    summary:
      'A web application used by pricing analysts to track, compare, and manage site and product pricing across more than a dozen countries.',
    challenge:
      'This type of product depends on accurate information, clear country-level context, and dependable workflows for pricing changes, product setup, and day-to-day analyst operations.',
    solution:
      'As a frontend developer and tech lead, I worked on new product functionality, bug fixes, technical debt reduction, code coverage improvements, and one of the key flows for broader price changes across sites.',
    impact:
      'The system supported pricing teams with clearer visibility into own and competitor prices, better product management flows, and a more maintainable frontend for continued delivery.',
    role: 'Frontend developer and tech lead',
    period: '2021 - Present',
    stack: ['React', 'TypeScript', 'Redux', 'MUI', 'Cypress', 'AWS'],
    categories: ['Dashboards', 'Operations tooling'],
    image: assetPath('/assets/projects/energy-pricing-dashboard.svg'),
    overview: [
      'Anonymized case study based on NDA-bound work.',
      'Centered on pricing visibility and operational actions across multiple countries.',
      'Built on AWS-backed microservices with a React and TypeScript frontend.',
    ],
    responsibilities: [
      'Led development on a major pricing-change flow.',
      'Built dashboard features for price comparison and product management.',
      'Improved code quality through issue resolution, technical debt reduction, and stronger coverage.',
    ],
    outcomes: [
      'Better support for general price changes across sites.',
      'Operational dashboards for analysts managing products and prices.',
      'A sturdier frontend codebase for ongoing enhancements.',
    ],
  },
]

export const projectFilters = [
  'All',
  'Workflow systems',
  'Dashboards',
  'Data platforms',
  'Operations tooling',
]

export function projectCaseStudyHref(project: Project) {
  return workPath(project.slug)
}
