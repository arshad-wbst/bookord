import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, Pressable } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const { width } = Dimensions.get("window");
const ITEM_SIZE = width / 3 - 20;

const CategoryItems = ({ item, loading,onPress }) => {
    return (
      <Pressable 
      onPress={onPress} 
      style={styles.container}>
        <View style={styles.circle}>
          <Image source={item.image} style={styles.image} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </Pressable>
    );
  };

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
     width: ITEM_SIZE,
    marginVertical: 5, 
    margin:10,
    // backgroundColor:"cyan"
  },
  circle: {
    width: ITEM_SIZE - 10,
    height: ITEM_SIZE - 10,
    borderRadius: (ITEM_SIZE - 10) / 2,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    overflow: "hidden",
},
image: {
  width: "100%", 
  height: "100%",
  resizeMode: "cover",
},
  title: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  priceContainer: {
    position: "absolute",
    bottom: 25, 
    backgroundColor: "#FFF",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#FF5733",
    paddingVertical: 5,
    paddingHorizontal: 10,
    elevation: 3,
  },
  price: {
    color: "#FF5733",
    fontSize: 12,
    fontWeight: "bold",
  },
   // Skeleton Placeholder Styles
   skeletonTitle: {
    width: 80,
    height: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  skeletonPrice: {
    width: 60,
    height: 12,
    borderRadius: 5,
    marginTop: 5,
  },
});

export default CategoryItems;
