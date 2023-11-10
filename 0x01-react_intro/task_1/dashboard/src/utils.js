const getFullYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear;
}

const getFooterCopy = (isIndex) => {
  if (isIndex) {
    return "Holberton School";
  } 
    return "Holberton School main dashboard";
}

module.exports = {
  getFullYear,
  getFooterCopy
}