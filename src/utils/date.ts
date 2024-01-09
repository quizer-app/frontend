export const formatDate = (date: Date): string => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const dateStringInUserTimeZone = date.toLocaleString("en-US", {
    timeZone: userTimeZone,
  });

  return dateStringInUserTimeZone;
};
