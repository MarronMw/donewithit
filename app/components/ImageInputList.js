import React, { useRef } from "react";
import { StyleSheet, View ,ScrollView} from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {

  const scrollView=useRef();

  return (
    <View>
      <ScrollView  ref={scrollView}  horizontal onContentSizeChange={()=>scrollView.current.scrollToEnd()} >
      <View style={styles.container}>
        {imageUris.map((uri) => (
          <View key={uri} style={styles.imageContainer}>
            <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
          </View>
        ))}
        <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
      </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  imageContainer: {
    padding: 5,
  },
});

export default ImageInputList;
