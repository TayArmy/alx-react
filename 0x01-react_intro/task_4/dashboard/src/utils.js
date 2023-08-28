const getFullYear = () => {
  return new Date().getFullYear();
};

const getFooterCopy = (isIndex) => {
  if (isIndex) {
    return "Holberton School";
  } else {
    return "Holberton School";
  }
};

const getLatestNotification = () => {
  return "<strong>Urgent requirement</strong> - complete by EOD";
};

module.exports = {
  getFooterCopy,
  getFullYear,
  getLatestNotification,
};
