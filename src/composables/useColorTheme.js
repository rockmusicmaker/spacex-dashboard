import { ref, watch } from "vue";

export const useColorTheme = (colorThemKey = "color-theme") => {
  const theme = ref();

  const setColorTheme = (color) => {
    theme.value = color;
    document.documentElement.setAttribute(colorThemKey, color);
    window.localStorage.setItem(colorThemKey, color);
  };

  const listenToPrefrenceChanges = () => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setColorTheme(event.matches ? "dark" : "light");
      });
  };

  setColorTheme(
    window.localStorage.getItem(colorThemKey) ??
      (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "light"
        : "dark"),
  );

  return {
    setColorTheme,
    theme: theme,
    listenToPrefrenceChanges,
  };
};
