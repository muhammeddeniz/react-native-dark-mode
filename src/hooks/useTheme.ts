import { useColorScheme } from "react-native";
import { useSelector } from "react-redux";
import { themes } from "../theme";

const useTheme = () => {
  const colorScheme = useColorScheme();
  const { theme } = useSelector((state: any) => state.settingsReducer);
  let colors;

  if (theme === "system") colors = themes[colorScheme];
  else colors = themes[theme];

  return colors;
};

export default useTheme;
