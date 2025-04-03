import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import MapView, { Marker} from "react-native-maps"; 
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";
import ServiceCard from "./ServiceCard";

const sampleServices = [
    {
        id: "1",
        name: "Palmcedar Cleaning",
        rating: "4.7",
        reviews: "115",
        image: require("../../assets/images/cleaning.png"),
        icon: require("../../assets/images/painter.png"),  
        latitude: 6.6018,
        longitude: 3.3510,
    },
    {
        id: "2",
        name: "QuickFix Plumbing",
        rating: "4.5",
        reviews: "87",
        image: require("../../assets/images/plumber.png"),
        icon: require("../../assets/images/painter.png"), 
        latitude: 6.6025,
        longitude: 3.3520,
    },
    {
        id: "3",
        name: "Elite Electricians",
        rating: "4.8",
        reviews: "134",
        image: require("../../assets/images/electrician.png"),
        icon: require("../../assets/images/painter.png"),
        latitude: 6.6032,
        longitude: 3.3530,
    },
];


const CategoryById = ({ navigation }) => {
    const route = useRoute();
    const { pagename } = route.params || { pagename: "Category Page" };
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    

    // Simulate API call
    useEffect(() => {
        setTimeout(() => {
            setServices(sampleServices);
            setLoading(false); 
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{pagename}</Text>
            </View>

            {/* Map Preview */}
            <View style={styles.mapContainer}>
            <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 6.6018,
                        longitude: 3.3515,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.02,
                    }}
                >
                    {/* Render Markers */}
                    {services.map((service) => (
                        <Marker
                            key={service.id}
                            coordinate={{
                                latitude: service.latitude,
                                longitude: service.longitude,
                            }}
                            title={service.name}
                            description={`Rating: ${service.rating} ⭐ (${service.reviews} reviews)`}
                        >
                            {/* Check if icon is loading */}
                            {service.icon ? (
                                <Image
                                    source={service.icon}
                                    style={{ width: 40, height: 40 }}
                                    resizeMode="contain"
                                />
                            ) : (
                                <Icon name="map-marker" size={40} color="red" />
                            )}
                        </Marker>
                    ))}
                </MapView>
            </View>

            <View style={styles.lable}>
                <Text style={styles.sectionTitle}>Available {pagename} Near you</Text>
                <Text style={styles.subText}>Total no of {pagename}: {services.length}</Text>
            </View>
      

            <FlatList
                data={loading ? [1, 2, 3] : services} 
                keyExtractor={(item, index) => (loading ? index.toString() : item.id)}
                renderItem={({ item }) => <ServiceCard item={item} loading={loading} navigation={navigation} />}
            />
            
        </View>
    );
};

export default CategoryById;
