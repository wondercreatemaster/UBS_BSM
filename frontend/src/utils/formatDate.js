const formatDate = (dateString) =>
{
  // Create a new Date object from the input date string
  const date = new Date(dateString);

  // Get day, month, and year from the date object
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();

  // Return the formatted date string
  return `${day}/${month}/${year}`;
}

export default formatDate;