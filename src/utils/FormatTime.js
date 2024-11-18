export const FormatTime = (
  date,
  locale = navigator.language,
  options = {
    hour: "numeric",
    minute: "numeric",
  },
) => new Intl.DateTimeFormat(locale, options).format(date);
