export type Ship = {
  description: string
  linkTo: string
  title: string
  subTitle: string
  date: string
}

export const SHIPS: Ship[] = [
  {
    description:
      '⌘ ⌥ C. Added the ability to copy issues as markdown, optimized for sharing context with LLMs.',
    linkTo: 'https://linear.app/changelog/page/3#copy-issues-as-markdown-for-llms',
    title: 'Copy issues as markdown for LLMs',
    subTitle: 'Linear Changelog',
    date: '2025-02-13',
  },
  {
    description: 'Added pull request preview links as a first class citizen in Linear.',
    linkTo:
      'https://linear.app/changelog/2024-10-10-document-subscriptions#pull-request-preview-links',
    title: 'Pull request preview links',
    subTitle: 'Linear Changelog',
    date: '2024-10-10',
  },
  {
    description:
      'Extended triage responsibility with OpsGenie and Incident.io integrations, plus API support for custom rotation schedules.',
    linkTo:
      'https://linear.app/changelog/page/5#triage-responsibility-integrations-and-api',
    title: 'Triage responsibility integrations',
    subTitle: 'Linear Changelog',
    date: '2024-03-19',
  },
  {
    description:
      'Shipped flexible project timeframes — plan with months, quarters, or years instead of exact dates.',
    linkTo: 'https://linear.app/changelog/2024-01-17-project-timeframes',
    title: 'Project timeframes',
    subTitle: 'Linear Changelog',
    date: '2024-01-17',
  },
  {
    description:
      'Shipped triage responsibility to help teams manage incoming issues. You can notify or assign issues to specific people, and integrate with PagerDuty schedules for automatic rotation.',
    linkTo: 'https://linear.app/changelog/2023-10-12-triage-responsibility',
    title: 'Triage responsibility',
    subTitle: 'Linear Changelog',
    date: '2023-10-12',
  },
]
