import React from "react";
import { FlatList, StyleSheet, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Screen from "../components/Screen";
import ListingDetailsScreen from "./ListingDetailsScreen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 400,
    image: require("../assets/couch.jpg"),
  },
];



function ListingsScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            image={item.image}
            onImageTap={()=>navigation.navigate("ListingDetail",{item})}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    marginTop: 10,
    backgroundColor: colors.light,
  },
});
export default ListingsScreen;
