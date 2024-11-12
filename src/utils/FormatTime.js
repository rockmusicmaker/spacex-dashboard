export const FormatTime = (
  date,
  locales = "en-US",
  options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  },
) =>
  new Intl.DateTimeFormat(locales, {
    hour: "numeric",
    minute: "numeric",
  }).format(date);
