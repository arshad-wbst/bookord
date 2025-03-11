import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity ,Dimensions} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../styles";

const services = [
  { id: "1", title: "Cleaning the house", image: require("../../assets/images/cleaning.png")},
  { id: "2", title: "Painting the house", image: require("../../assets/images/cleaning.png") },
];

const ServiceList = () => {
  return (
    <View style={styles.container}>
      {/* Header Row */}
      <View style={styles.header}>
        <Text style={styles.title}>Popular Services on Bookord</Text>
        <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}}>
          <Text style={styles.viewAll}>View all</Text>
           <Icon name="chevron-right" size={20} color={Colors.BLACK} />
        </TouchableOpacity>
      </View>

      {/* List of Services */}
      <FlatList
        data={services}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{height:height/7,width:'100%'}}>
            <Image source={item.image} style={styles.image} />
            </View>
            <TouchableOpacity style={styles.heartIcon}>
              <Icon name="heart-outline" size={20} color={Colors.BLACK} />
            </TouchableOpacity>
            <Text style={styles.serviceTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 25 

  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAll: {
    color: Colors.PRIMARY,
    fontSize: 14,
    paddingRight:3
  },
  card: {
    width: width/2,
    marginRight: 15,
    borderRadius: 10,
    overflow: "hidden",
    // backgroundColor: Colors.WHITE,
  },
  image: {
    width: "100%",
    height: '100%',
    borderRadius: 10,
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: Colors.WHITE,
    padding: 5,
    borderRadius: 15,
    opacity:0.7
  },
  serviceTitle: {
    textAlign: "left",
    marginTop: 8,
    fontSize: 14,
  },
});

export default ServiceList;
