import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, StatusBar, RefreshControl,View } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import listingsAPI from "./../api/listings";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadListings = async () => {
    try {
      setRefreshing(true);
      setError(false);
      const response = await listingsAPI.getListings();
      
      if (response.ok && response.data) {
        setListings(response.data);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Failed to load listings:", error);
      setError(true);
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadListings();
  }, []);

  const handleRefresh = () => {
    loadListings();
  };

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
            onImageTap={() =>
              navigation.navigate(routes.LISTING_DETAILS, { item })
            }
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={[colors.primary]} // Android
            tintColor={colors.primary} // iOS
          />
        }
        ListEmptyComponent={
          !loading && (
            <View style={styles.emptyContainer}>
              <AppText style={styles.emptyText}>
                {error ? "Couldn't load listings" : "No listings found"}
              </AppText>
              <AppButton 
                title="Try Again" 
                onPress={loadListings} 
                color={colors.primary}
              />
            </View>
          )
        }
        contentContainerStyle={styles.listContent}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    color: colors.medium,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default ListingsScreen;