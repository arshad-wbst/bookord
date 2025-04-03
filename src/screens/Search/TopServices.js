import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

// Dummy data for top services
const topServices = [
  { name: "Cleaning", image: require("../../assets/images/cleaner.png") },
  { name: "Plumbing", image: require("../../assets/images/plumbings.jpg") },
  { name: "Painting", image: require("../../assets/images/images.jpeg")  },
  { name: "Babysitting", image: require("../../assets/images/babysitting.png")  },
];

const TopServices = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Top services on Skillr</Text>
      <FlatList
        data={topServices}
        horizontal
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.serviceItem}>
            <Image source={item.image} style={styles.serviceImage} />
            <Text style={styles.serviceText}>{item.name}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  serviceItem: {
    alignItems: "center",
    marginRight: 25,
  },
  serviceImage: {
    width: 65,
    height: 65,
    borderRadius: 35,
  },
  serviceText: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },
});

export default TopServices;
