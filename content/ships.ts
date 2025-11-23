export type Ship = {
  description: string
  linkTo?: string
  title: string
  subTitle?: string
  date: string
}

export const SHIPS: Ship[] = [
  // {
  //   title: 'Copy entities as markdown for LLMs',
  //   description:
  //     '⌘ ⌥ C. Added the ability to copy entities as markdown, optimized for sharing context with LLMs.',
  //   linkTo: 'https://linear.app/changelog/page/3#copy-issues-as-markdown-for-llms',
  //   subTitle: 'Linear Changelog',
  //   date: '2025-02-13',
  // },
  {
    title: 'Pull request preview links',
    description: 'Added pull request preview links as a first class citizen in Linear.',
    linkTo:
      'https://linear.app/changelog/2024-10-10-document-subscriptions#pull-request-preview-links',
    subTitle: 'Linear Changelog',
    date: '2024-10-10',
  },
  {
    title: 'Triage responsibility integrations',
    description:
      'Extended triage responsibility with OpsGenie and Incident.io integrations, plus API support for custom rotation schedules.',
    linkTo:
      'https://linear.app/changelog/page/5#triage-responsibility-integrations-and-api',
    subTitle: 'Linear Changelog',
    date: '2024-03-19',
  },
  {
    title: 'Project timeframes',
    description:
      'Shipped flexible project timeframes in Linear. A purpose-built tool for developing software needs to support planning project timelines at your current level of certainty, such as next month, quarter, or year.',
    linkTo: 'https://linear.app/changelog/2024-01-17-project-timeframes',
    subTitle: 'Linear Changelog',
    date: '2024-01-17',
  },
  {
    title: 'Linear Demo workspace',
    description:
      'Shipped the Linear Demo workspace, an ephemeral client-side playground for exploring the product and features.',
    linkTo: 'https://linear.app/demo',
    date: '2023-11-16',
  },
  {
    title: 'Triage responsibility',
    description:
      'Shipped triage responsibility to help teams manage incoming issues. You can notify or assign issues to specific people, and integrate with PagerDuty schedules for automatic rotation.',
    linkTo: 'https://linear.app/changelog/2023-10-12-triage-responsibility',
    subTitle: 'Linear Changelog',
    date: '2023-10-12',
  },
]
