import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  TouchableOpacity,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

import * as ImagePicker from "expo-image-picker";

import Icon from "./Icon";
import colors from "../config/colors";

const requestPermision = async () => {
  const { granted } = await ImagePicker.requestCameraPermissionsAsync();
  if (!granted) alert("Sziyendapotu apa tapangani allow fada");
};

function AppUploadButton({ color = colors.medium, background = colors.light }) {
  let images = [];
  const [image, setImage] = useState(images);

  const uploadImage = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync();
      if (!result.canceled) setImage(result.assets[0].uri);
    } catch (error) {
      console.log("failed to upload image", error);
    }
  };

  useEffect(() => {
    requestPermision();
  }, []);

  return (
    <GestureHandlerRootView style={styles.main}>
      <TouchableOpacity>
        {image && <Image style={styles.image} source={{ uri: image }} />}
      </TouchableOpacity>
      <TouchableOpacity onPress={uploadImage}>
        <Icon name={"camera"} iconColor={color} backgroundColor={background} />
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default AppUploadButton;
