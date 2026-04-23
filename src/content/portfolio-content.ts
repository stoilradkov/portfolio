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
    note: 'AWS Certified Developer - Associate (WBW00GBJHEREQB3N). 6+ years building production software.',
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
    'React, TypeScript, Next.js, Node.js, NestJS',
    'PostgreSQL, DynamoDB, REST APIs',
    'AWS, serverless architecture, Terraform',
    'Dashboards, workflows, permissions, audit trails',
  ],
  contact: {
    title: 'What are you building, and how can I help?',
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
    company: 'IBM',
    summary:
      'Working across workflow portals, analytical platforms, and pricing operations software, with responsibilities spanning frontend delivery, backend structure, architecture decisions, and cloud implementation.',
  },
  {
    period: '2019 - 2021',
    role: 'Full-stack software engineer',
    company: 'Novarto Ltd.',
    summary:
      'Built cloud software for configuration-heavy business products, including migration of older data models, product catalog logic, and end-to-end setup flows used by enterprise customers.',
  },
  {
    period: '2019',
    role: 'Backend software engineer',
    company: 'x8academy',
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
      'A role-based workflow portal that replaced email and spreadsheets for running data-quality task batches, reviews, and operational follow-ups across an insurance organization.',
    challenge:
      'Before the portal existed, teams coordinated a few hundred data-quality tasks per day through emails and shared spreadsheets. With no enforced roles, permissions, or workflow state, work was hard to route, easy to lose track of, and difficult to monitor as tasks moved between operations and reviewers.',
    solution:
      'I owned the frontend architecture and delivery: a structured, role-aware UI built around a clear task lifecycle. Daily task batches are imported from Excel, operations users work through assigned tasks, and two levels of SMEs review and either approve or reject outcomes (returning tasks when needed). The product also includes dashboards, admin statistics, and automated email notifications and reminders. I contributed to the backend APIs and data model to support the workflow and reporting.',
    impact:
      'Replaced email + spreadsheets with a role-based workflow portal and clear visibility across the full lifecycle.',
    role: 'Frontend lead / full-stack engineer',
    period: '2021 - Present',
    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'AWS', 'REST APIs'],
    categories: ['Workflow systems', 'Operations tooling'],
    image: assetPath('/assets/projects/workflow.png'),
    overview: [
      'Anonymized case study based on NDA-bound work.',
      'Built around a multi-role workflow: Excel import → operations work → expert review → SME review.',
      'Designed for clear permissions, visibility into progress, and audit-friendly traceability.',
    ],
    responsibilities: [
      'Owned the frontend structure and delivery: pages, navigation, and role-aware flows.',
      'Built dashboards and statistics views for admins and operational visibility across status and throughput.',
      'Collaborated on backend APIs and data modeling for task lifecycle, review decisions, and notifications.',
    ],
    outcomes: [
      'End-to-end task state machine with approvals, rejections, and return loops back to operations.',
      'Clear permission boundaries across five roles, plus audit-friendly history of status changes and decisions.',
      'Automated email notifications and reminders to keep daily batches moving without manual follow-ups.',
    ],
  },
  {
    slug: 'analytical-data-workspace',
    title: 'Analytical Data Workspace Platform',
    eyebrow: 'Data platform / dashboard workspace',
    summary:
      'A multi-tenant analytical workspace where teams query, save, and analyze data pulled from constantly changing internal sources, with organization and workspace permissions.',
    challenge:
      'The platform had to stay fast and usable while data sources changed daily, and it needed a clear permission model so analysts and managers could work safely across multiple organizations and workspaces.',
    solution:
      'I owned the query builder/editor experience and the organization/workspace model. I built and iterated on the role-aware UX for querying and saving work, contributed to backend APIs for retrieving and processing data, and helped shape caching so common workloads stayed responsive. The system used an AWS serverless architecture (API Gateway + Lambdas), DynamoDB for document-style storage, PostgreSQL for relational data, and Terraform for repeatable deployments.',
    impact:
      'Gave teams a secure, workspace-based way to explore and process data with clear access boundaries and reliable day-to-day querying, even as sources evolved.',
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
      'S3',
      'Terraform',
    ],
    categories: ['Data platforms', 'Dashboards'],
    image: assetPath('/assets/projects/media.png'),
    overview: [
      'Anonymized case study based on NDA-bound work.',
      'A multi-tenant workspace used by analysts and managers across organizations.',
      'Query builder/editor with saved queries, backed by caching for responsive analysis.',
      'Ingested and queried data from internal databases, APIs, and files that changed daily.',
    ],
    responsibilities: [
      'Owned the query builder/editor UX and the underlying query configuration model.',
      'Designed and implemented organization/workspace entities for multi-tenant permissions and safer access control.',
      'Contributed to backend APIs and performance work (caching + responsiveness) across a serverless AWS setup.',
    ],
    outcomes: [
      'A permissions-aware analytical workspace where teams can query, save, and reuse analysis safely.',
      'Clear multi-tenant separation through organizations and workspaces, supporting both usability and security.',
      'A flexible foundation that handled daily source changes without losing performance or clarity.',
    ],
  },
  {
    slug: 'energy-pricing-dashboard',
    title: 'Energy Pricing Operations Dashboard',
    eyebrow: 'Operational dashboard / multi-country pricing',
    summary:
      'An internal platform for managing multi-country site and product pricing: scheduled price changes, offset tactics, competitor comparisons, and role-based control.',
    challenge:
      'Pricing operations spanned 13+ countries with legal rules, currencies, and time zones, and the software needed to prevent invalid or out-of-bounds price changes while giving pricing managers clear visibility and control.',
    solution:
      'I led frontend architecture and implementation for two core workflows: General Pricing Change (scheduled price updates scoped by sites, time, products, and target prices) and Offset Tactics (live filtering and applying offsets across selected sites and products). These flows included validations against price endings, rule boundaries, and competitor context, with optional approvals, publish steps, and a history of changes. The platform integrated with a legacy pricing system and a third-party ingestion pipeline, and I contributed to backend rules around products, product groups, and pricing logic.',
    impact:
      'Enabled pricing teams to run day-to-day pricing operations through structured workflows and guardrails, with clearer auditability and significantly faster performance on key pages after targeted frontend work.',
    role: 'Frontend developer and tech lead',
    period: '2021 - Present',
    stack: ['React', 'TypeScript', 'Redux', 'MUI', 'Cypress', 'AWS'],
    categories: ['Dashboards', 'Operations tooling'],
    image: assetPath('/assets/projects/dashboard.png'),
    overview: [
      'Anonymized case study based on NDA-bound work.',
      'Internal pricing operations platform used across a global energy organization.',
      'Guests, pricing analysts, and country/global admins with view-only and edit permissions.',
      'Automated and manual pricing management with competitor comparison across 13+ countries.',
    ],
    responsibilities: [
      'Owned frontend architecture and implementation for Offset Tactics and General Pricing Change workflows.',
      'Built role-aware UI behavior and validation feedback for legal, currency, timezone, and boundary constraints.',
      'Improved reliability and maintainability through technical debt reduction, unit/integration testing, and targeted refactors.',
      'Delivered ~3x performance improvements on key pages through focused frontend optimization.',
    ],
    outcomes: [
      'Scheduled bulk price changes with scope selection, optional approvals, publishing, and full change history.',
      'Offset tactics allowing fast filtering and application of pricing strategies across sites and product groups.',
      'Guardrails that reduce invalid changes (price endings, out-of-bounds updates, and timezone/currency conflicts).',
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
