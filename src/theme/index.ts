export type Theme = {
  primary: string;
  text: string;
  background: string;
};

type AllThemes = {
  dark: Theme;
  light: Theme;
};

export const themes: AllThemes = {
  dark: {
    primary: "#fac300",
    text: "#ffffff",
    background: "#111111",
  },
  light: {
    primary: "#fac300",
    text: "#111111",
    background: "#ffffff",
  },
};
