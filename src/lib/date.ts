/**
 *
 * @param dateString date string in format of "Mon Jul 08 1991 13:19:00 GMT+0800 (Malaysia Time)""
 *
 * @todo have proper parsing logic/library as date parsing is unreliable in browser.
 * Proper solution is not get the data in a more machine-friendly format.
 */
export const parseDate = (dateString: string): Date => new Date(dateString);

export const formatDate = (date: Date) =>
  `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
