import { StyleSheet, Text, View } from "react-native";
import App from "./src/app";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
