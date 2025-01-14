import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={Platform.select({
      //set platform specific definitions
      ios: {
        presentation: "modal",
        headerShown: false,
      },
    })}
  >
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      options={{
        // headerShown: false,
        headerTitleAlign: "center",
      }}
    />
    <Stack.Screen name="ListingDetail" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
