export function calculateAge(birthdate) {
  // Get the current date
  const today = new Date();

  // Convert the birthdate string to a Date object
  const birthDate = new Date(birthdate);

  // Calculate the difference in years
  let years = today.getFullYear() - birthDate.getFullYear();

  // Calculate the difference in months
  let months = today.getMonth() - birthDate.getMonth();

  // Calculate the difference in days
  let days = today.getDate() - birthDate.getDate();

  // Check if the days difference is negative, indicating we need to adjust
  if (days < 0) {
    // Create a Date object for the last month
    const lastMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      birthDate.getDate()
    );

    // Calculate the correct days by finding the difference between today and the last month
    days = Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24));

    // Adjust the months accordingly
    months--;
  }

  // Check if the months difference is negative, indicating we need to adjust
  if (months < 0) {
    // Adjust the months and decrement the years
    months = 12 + months;
    years--;
  }

  // Return an object with the calculated age components
  return {
    years: years,
    months: months,
    days: days,
  };
}
