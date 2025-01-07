import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" color="white" size={35} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color="white"
            size={35}
          />
        </View>
      </View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
export default ViewImageScreen;
