import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SkeletonLoader = () => (
  <View style={styles.card}>
    <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
        <View style={styles.skeletoncircle}></View>
    <View style={styles.skeletonTitle} />
    <View style={styles.skeletonStatus}></View>
    </View>
    <View style={styles.skeletonRow} />
    <View style={styles.skeletonRow} />
    <View style={styles.skeletonRow} />

  </View>
);



const ServiceCard = ({ item }) => (
  <View style={styles.card}>
    {/* Top Section: Logo & Business Name */}
    <View style={styles.header}>
      <Image source={item.logo} style={styles.logo} />
      <Text style={styles.name}>
        {item.name} <Icon name="check-decagram" size={16} color="#6A0DAD" />
      </Text>
      <View style={styles.ratingContainer}>
        <Icon name="star" size={16} color="#FFD700" />
        <Text style={styles.rating}>{item.rating} ({item.reviews})</Text>
      </View>
    </View>

    {/* Middle Section: Location & Availability */}
    <Text style={styles.info}>
      <Icon name="map-marker" size={14} /> {item.location} • {item.availability}
    </Text>

    {/* Pricing & Duration */}
    <Text style={styles.info}>
      <Icon name="currency-ngn" size={14} /> {item.price}  •  
      <Icon name="clock-time-five-outline" size={14} /> {item.duration}
    </Text>

    {/* Similar Jobs */}
    <Text style={styles.similarJobs}>
      <Icon name="briefcase-check-outline" size={14} color="#6A0DAD" />{" "}
      {item.similarJobs} similar jobs completed near you
    </Text>
  </View>
);

const AvailableList = () => {
      const [loading, setLoading] = useState(true);
      const [inProgressProjects, setInProgressProjects] = useState([]);

       useEffect(() => {
          setTimeout(() => {
            setInProgressProjects([
                {
                    id: "1",
                    name: "Palmcedar Cleaning",
                    logo: require("../../assets/images/cleaning.png"),// Add actual logo image
                    rating: 4.7,
                    reviews: 115,
                    location: "Ikeja, Nigeria",
                    availability: "Closed",
                    price: "₦6500/hr",
                    duration: "1.2 hrs",
                    similarJobs: 42,
                  },
                  {
                    id: "2",
                    name: "James Janitorial Services",
                    logo: require("../../assets/images/cleaning.png"),
                    rating: 4.0,
                    reviews: 24,
                    location: "Ikeja, Nigeria",
                    availability: "Available",
                    price: "₦4000/hr",
                    duration: "2 hrs",
                    similarJobs: 5,
                  },
                  {
                    id: "3",
                    name: "Signature Integrated Ge...",
                    logo: require("../../assets/images/cleaning.png"),
                    rating: 3.9,
                    reviews: 32,
                    location: "Ikeja, Nigeria",
                    availability: "Available",
                    price: "₦5000/hr",
                    duration: "2 hrs",
                    similarJobs: 32,
                  },
            ]);
            setLoading(false);
          }, 3000); 
        }, []);

  return (
    <FlatList
    data={loading ? [1, 2, 3] : inProgressProjects}
    keyExtractor={(item, index) => (loading ? index.toString() : item.id)}
      renderItem={({ item }) =>
        loading ? (
            <SkeletonLoader />
          ) : (
      <ServiceCard item={item} />
    )
}
    
      contentContainerStyle={styles.container}
    />
  );
};

const styles = {
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    color: "#333",
  },
  info: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  similarJobs: {
    fontSize: 14,
    color: "#6A0DAD",
    marginTop: 8,
  },

    // Skeleton styles
    skeletonTitle: { width: "40%", height: 20, backgroundColor: "#F7F4FB", borderRadius: 10, marginBottom: 10 },
    skeletonStatus: { width: "30%", height: 20, backgroundColor: "#F7F4FB", borderRadius: 10, marginBottom: 10 },
  skeletoncircle:{
    width: 30,
    height: 30,
    borderRadius: 15,
   backgroundColor: "#F7F4FB",
   marginBottom: 10
  },
    skeletonRow: { width: "80%", height: 15, backgroundColor: "#F7F4FB", borderRadius: 10, marginBottom: 8 },
    skeletonButton: { width: "50%", height: 30, backgroundColor: "#F7F4FB", borderRadius: 20, marginTop: 10 },
};

export default AvailableList;
