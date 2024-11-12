export const FormatDate = (
  date,
  locales = "en-US",
  options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  },
) => new Intl.DateTimeFormat(locales, options).format(date);
