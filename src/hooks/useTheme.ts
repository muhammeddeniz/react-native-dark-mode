import { useColorScheme } from "react-native";
import { themes } from "../theme";

const useTheme = () => {
  let colorScheme = useColorScheme();

  const colors = themes[colorScheme];

  return colors;
};

export default useTheme;
