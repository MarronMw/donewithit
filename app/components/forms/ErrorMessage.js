import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../AppText";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";

function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "tomato",
    fontSize: 14,
    paddingLeft: 25,
  },
});
export default ErrorMessage;
