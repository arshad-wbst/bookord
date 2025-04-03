import React from "react";
import { View, Text, FlatList, Image, StyleSheet ,Dimensions,TouchableOpacity} from "react-native";
import { Colors } from "../../styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const handymanServices = [
  { id: "1", title: "House Cleaners", price: "NGN5,000/hr", image: require("../../assets/images/cleaners.jpg") },
  { id: "2", title: "Electrical Help", price: "NGN3,000/hr", image: require("../../assets/images/electrician.png") },
];

const HandymanList =({ onPress })=> {
  return (
    <View style={styles.container}>
      {/* Header Row */}
      <View style={styles.header}>
        <Text style={styles.title}>Handyman Services</Text>
        <TouchableOpacity 
         onPress={onPress} 
        style={{flexDirection:"row",alignItems:"center"}}>
          <Text style={styles.viewAll}>View all</Text>
           <Icon name="chevron-right" size={20} color={Colors.BLACK} />
        </TouchableOpacity>
      </View>

      {/* List of Services */}
      <FlatList
        data={handymanServices}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{height:height/7,width:'100%'}}>
            <Image source={item.image} style={styles.image} />
            </View>
            <TouchableOpacity style={styles.heartIcon}>
            <Text style={styles.pricetext}>Start @NGN300/hr</Text>
            </TouchableOpacity>
            <Text style={styles.serviceTitle}>{item.title}</Text>
            <Text style={styles.descText}>{item.title}</Text>

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
  },
  image: {
    width: "100%",
    height: '100%',
    borderRadius: 10,
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    left:10,
    backgroundColor: Colors.PRIMARY,
    padding: 5,
    borderRadius: 25,
  },
  serviceTitle: {
    textAlign: "left",
    marginTop: 8,
    fontSize: 14,
  },
  pricetext:{
   padding:5,
    fontSize: 12,
    color:"#fff",fontWeight:'400'
  },
  descText:{
   padding:5,
fontSize: 12,
    color:"#9c9c9c",fontWeight:'300'
  }
});

export default HandymanList;
