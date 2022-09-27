const dtfUK = new Intl.DateTimeFormat('UK', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const getFormattedDate = (date: Date): string => {
  return dtfUK.format(date);
};

export { getFormattedDate };
