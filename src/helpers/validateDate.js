export function validateDate(day, month, year) {
  // Convert inputs to numbers
  day = parseInt(day, 10);
  month = parseInt(month, 10);
  year = parseInt(year, 10);

  // Validate day
  if (isNaN(day) || day < 1 || day > 31) {
    return 'Day must be a valid number between 1 and 31.';
  }

  // Validate month
  if (isNaN(month) || month < 1 || month > 12) {
    return 'Month must be a valid number between 1 and 12.';
  }

  // Validate year
  if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
    return 'Year must be a valid number between 1900 and the current year.';
  }

  // Create a Date object
  const inputDate = new Date(year, month - 1, day); // Month is 0-indexed in JavaScript Dates

  // Check if the Date object represents a valid date
  if (
    inputDate.getFullYear() !== year ||
    inputDate.getMonth() !== month - 1 ||
    inputDate.getDate() !== day
  ) {
    return 'Invalid date. Please enter a valid combination of day, month, and year.';
  }

  // Check if the date is in the past
  const currentDate = new Date();
  if (inputDate > currentDate) {
    return 'Date must be in the past.';
  }

  // All validations passed
  return 'Input is valid.';
}
