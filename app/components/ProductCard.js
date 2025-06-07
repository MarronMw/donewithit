import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { Ionicons } from "@expo/vector-icons";

function ProductCard({ 
  title, 
  price, 
  originalPrice, 
  image, 
  rating, 
  onPress,
  onFavoritePress,
  isFavorite 
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        {/* Image with overlay elements */}
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: image}} resizeMode="cover" />
          
          {/* Sale badge */}
          {originalPrice && (
            <View style={styles.saleBadge}>
              <AppText style={styles.saleBadgeText}>
                {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
              </AppText>
            </View>
          )}
          
          {/* Favorite button */}
          <TouchableOpacity 
            style={styles.favoriteButton} 
            onPress={onFavoritePress}
            activeOpacity={0.8}
          >
            <Ionicons 
              name={isFavorite ? "heart" : "heart-outline"} 
              size={24} 
              color={isFavorite ? colors.primary : colors.white} 
            />
          </TouchableOpacity>
        </View>

        {/* Product details */}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={2}>{title}</AppText>
          
          {/* Rating row */}
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color={colors.warning} />
            <AppText style={styles.ratingText}>{rating}</AppText>
          </View>
          
          {/* Price row */}
          <View style={styles.priceContainer}>
            <AppText style={styles.price}>${price}</AppText>
            {originalPrice && (
              <AppText style={styles.originalPrice}>${originalPrice}</AppText>
            )}
          </View>
          
          {/* Add to cart button */}
          <TouchableOpacity style={styles.addToCartButton} activeOpacity={0.8}>
            <AppText style={styles.addToCartText}>Add to Cart</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    // width: 160,
    borderRadius: 12,
    backgroundColor: colors.white,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginHorizontal: 8,
  },
  imageContainer: {
    height: 200,
    // flex:2,
    width: '100%',
    position: 'relative',
},
image: {
      objectFit:"cover",
    width: "100%",
    height: "100%",
    backgroundColor: colors.light,
  },
  saleBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: colors.danger,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
  },
  saleBadgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 20,
    padding: 4,
  },
  detailsContainer: {
    padding: 12,
  },
  title: {
    fontWeight: "500",
    fontSize: 14,
    color: colors.dark,
    marginBottom: 6,
    height: 36, // Ensures consistent height for 2 lines
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratingText: {
    color: colors.medium,
    fontSize: 12,
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  price: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  originalPrice: {
    color: colors.medium,
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
  addToCartButton: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ProductCard;