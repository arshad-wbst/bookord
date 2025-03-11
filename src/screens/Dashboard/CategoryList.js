import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../styles";


const categories = [
  { id: "1", title: "Plumbing", image: require("../../assets/images/cleaning.png") },
  { id: "2", title: "Carpentry", image: require("../../assets/images/cleaning.png") },
  { id: "3", title: "Painting", image: require("../../assets/images/cleaning.png") },
  { id: "4", title: "Cleaning", image: require("../../assets/images/cleaning.png") },
  { id: "5", title: "Plumbing", image: require("../../assets/images/cleaning.png") },

];

const CategoryList = () => {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
       <Text style={styles.title}>Browse all categories</Text>
              <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}}>
                <Text style={styles.viewAll}>View all</Text>
                 <Icon name="chevron-right" size={20} color={Colors.BLACK} />
              </TouchableOpacity>
            </View>
     
      <FlatList
      showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 15, marginBottom: 25, marginLeft:10},
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  categoryItem: { alignItems: "center", marginRight: 25 },
  image: { width: 60, height: 60, borderRadius: 30 },
  text: { marginTop: 5, fontSize: 14 },
  viewAll: {
    color: Colors.PRIMARY,
    fontSize: 14,
    paddingRight:3
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
});

export default CategoryList;
