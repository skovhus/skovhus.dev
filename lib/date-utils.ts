import { format, parseISO } from 'date-fns'

/**
 * Formats a date string to a human-readable format.
 * @param dateString - ISO date string (e.g., '2023-10-12')
 * @returns Formatted date string (e.g., 'October 12, 2023')
 */
export function formatDate(dateString: string): string {
  return format(parseISO(dateString), 'MMMM dd, yyyy')
}

