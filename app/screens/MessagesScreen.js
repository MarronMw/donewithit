import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Screen from "../components/Screen";

import {
  ListItemSeparator,
  ListItem,
  ListItemDeleteAction,
} from "../components/lists";

import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import colors from "../config/colors";

const initialMessages = [
  {
    id: 1,
    title: "Dr.MarronCode",
    decription:
      "boiz tiyeni tipange zokut tikadye coz njala nde simmene yandichapiramo eeish",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    decription: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

const swipeLeftAction = () => {
  return (
    <View
      style={{
        backgroundColor: colors.primary,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <Text>Left</Text>
    </View>
  );
};
const swipeRightAction = () => {
  return (
    <View
      style={{
        backgroundColor: colors.secondary,
        paddingHorizontal: 30,
        justifyContent: "center",
      }}
    >
      <Text>Right</Text>
    </View>
  );
};

function MessagesScreen(props) {
  //state var
  const [messages, setMessages] = useState(initialMessages); //same as setState in class components
  const [refreshing, setRefreshing] = useState(false); //same as setState in class components

  const handleDelete = (message) => {
    //Delete the message from the messages array or list
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <GestureHandlerRootView>
      <Screen>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <Swipeable
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            >
              <ListItem
                title={item.title}
                subTitle={item.decription}
                image={item.image}
                onPress={() => console.log(`message ${item.title} selected`)}

                // renderLeftActions={() => <ListItemDeleteAction />}
              />
            </Swipeable>
          )}
          ItemSeparatorComponent={<ListItemSeparator />}
          refreshing={refreshing}
          onRefresh={() =>
            setMessages([
              {
                id: 2,
                title: "T2",
                decription: "D2",
                image: require("../assets/mosh.jpg"),
              },
            ])
          }
        />
      </Screen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
export default MessagesScreen;
