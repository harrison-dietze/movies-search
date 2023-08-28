const formatDate = (date) =>
  date ? new Date(date).toLocaleDateString("pt-BR") : "";

const formatStringArray = (list) => {
  let string = list.join(", ");
  return string.substr(0, string.length);
};

export const displayUtils = {
  formatStringArray: formatStringArray,
  formatDate: formatDate,
};
