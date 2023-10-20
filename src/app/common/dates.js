/**
 * Formats the given date into the 'yyyy-mm-dd' format.
 *
 * @param {Date} date - The date to be formatted.
 * @returns {string} - The formatted date string.
 */
export function formatDate(date) {
  return date
    .toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-");
}

/**
* Checks if the provided start date is before or equal to the end date.
*
* @param {Date} startDate - The start date to check.
* @param {Date} endDate - The end date to check against.
* @returns {boolean} - Returns true if the start date is before or equal to the end date, false otherwise.
*/
export const isValidDateRange = (startDate, endDate) => {
return startDate <= endDate;
};
