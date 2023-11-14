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

const getLatestNotification = () => {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}

module.exports = {
  getFullYear,
  getFooterCopy,
  getLatestNotification
}