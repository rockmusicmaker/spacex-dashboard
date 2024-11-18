export const FormatDate = (
  date,
  locales = navigator.language,
  options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  },
) => new Intl.DateTimeFormat(locales, options).format(date);
