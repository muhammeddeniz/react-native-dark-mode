import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Theme } from "./theme";
import MainWrapper from "./HOC/mainWrapper";

type Props = {
  styles: any;
};

const App: React.FC<Props> = ({ styles }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>App</Text>
      </TouchableOpacity>
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
