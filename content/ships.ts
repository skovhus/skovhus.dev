export type Ship = {
  description: string
  linkTo?: string
  title: string
  subTitle?: string
  date: string
}

export const SHIPS: Ship[] = [
  {
    title: 'Time in status',
    description:
      'Extended the system to track the cumulative time spent in each workflow status. Surfaced the data across lists, boards, Insights, and Dashboards to help teams spot blocked work and identify bottlenecks. Backfilled all historical issues with accurate time tracking data.',
    linkTo: 'https://linear.app/changelog/2026-01-29-time-in-status',
    subTitle: 'Linear Changelog',
    date: '2026-01-29',
  },
  {
    title: 'Speeding up the Linear client',
    description:
      'Wrapped up a long-running project to optimize how the Linear client application performs, especially for large workspaces. We re-designed how the client boots and pre-loads data to make interactions as fast as possible.',
    date: '2025-06-01',
  },
  {
    title: 'Pull request preview links',
    description: 'Added pull request preview links as a first-class citizen in Linear.',
    linkTo:
      'https://linear.app/changelog/2024-10-10-document-subscriptions#pull-request-preview-links',
    subTitle: 'Linear Changelog',
    date: '2024-10-10',
  },
  {
    title: 'Linear to Linear importer',
    description:
      'Built a Linear to Linear importer, allowing users to migrate their data from one workspace to another with cross-regional support.',
    date: '2024-08-10',
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
