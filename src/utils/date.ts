export const formatDate = (date: string): string => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const dateObject = new Date(date);

  const dateStringInUserTimeZone = dateObject.toLocaleString("en-US", {
    timeZone: userTimeZone,
  });

  return dateStringInUserTimeZone;
};
