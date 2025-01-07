import React from "react";
import { Image, StyleSheet, View } from "react-native";
import {GestureHandlerRootView} from 'react-native-gesture-handler'

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen({route}) {
  const item=route.params.item;
  return (
    <GestureHandlerRootView>
      <View>
        <Image style={styles.image} source={item.image} />
        <View styles={styles.detailsContainer}></View>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{item.title?item.title:'Failed to Load Listing  Title'}</AppText>
          <AppText style={styles.price}>{item?`$${item.price}`:"$Failed To Load Listing Price"}</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/mosh.jpg")}
              title="Mosh Hamedani"
              subTitle="5 Listings"
            />
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    marginVertical: 40,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
    marginVertical: 10,
  },
});
export default ListingDetailsScreen;
