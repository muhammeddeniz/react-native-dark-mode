import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { Theme } from "./theme";
import MainWrapper from "./HOC/mainWrapper";
import { changeTheme } from "./store/settings.slice";

type Props = {
  styles: any;
};

const Button = ({ text, styles, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const App: React.FC<Props> = ({ styles }) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Button
        text="Light"
        styles={styles}
        onPress={() => dispatch(changeTheme("light"))}
      />
      <Button
        text="Dark"
        styles={styles}
        onPress={() => dispatch(changeTheme("dark"))}
      />

      <Button
        text="System"
        styles={styles}
        onPress={() => dispatch(changeTheme("system"))}
      />
    </SafeAreaView>
  );
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: theme.text,
      fontSize: 20,
      textAlign: "center",
      margin: 10,
    },
  });

export default MainWrapper(App, styles);
