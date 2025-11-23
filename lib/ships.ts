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
      'Preview links from PRs are now accessible directly from Linear issues.',
    linkTo:
      'https://linear.app/changelog/2024-10-10-document-subscriptions#pull-request-preview-links',
    title: 'Pull request preview links',
    subTitle: 'Linear Changelog',
    date: '2024-10-10',
  },
  {
    description:
      'Use broad date ranges as project start and target dates instead of specific ones. Plan project timelines at your current level of certainty, such as next month, quarter, or year, when they more accurately reflect product timelines.',
    linkTo: 'https://linear.app/changelog/2024-01-17-project-timeframes',
    title: 'Project timeframes',
    subTitle: 'Linear Changelog',
    date: '2024-01-17',
  },
  {
    description:
      'Define how incoming issues and requests are handled in Triage. When an issue is added to Triage, you can either notify or assign the issue to specific workspace members. Connect a PagerDuty schedule to automatically rotate who is responsible for triage.',
    linkTo: 'https://linear.app/changelog/2023-10-12-triage-responsibility',
    title: 'Triage responsibility',
    subTitle: 'Linear Changelog',
    date: '2023-10-12',
  },
]

