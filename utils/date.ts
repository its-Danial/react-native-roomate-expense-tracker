export const getFormattedDate = (data: Date) => {
  return `${data.getDate()}-${data.getMonth() + 1}-${data.getFullYear()}`;
};

export const getDateMinusDays = (date: Date, days: number) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};
