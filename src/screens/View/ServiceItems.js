import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../styles";

const ServiceItems = ({ item }) => {
    return (
        <View style={[styles.card, { backgroundColor: getRandomColor() }]}>
       
                <Image source={item.image} style={styles.image} />
     
            <TouchableOpacity style={styles.heartIcon}>
                <Icon name="heart-outline" size={20} color={Colors.BLACK} />
            </TouchableOpacity>
            <Text style={styles.serviceTitle}>{item.title}</Text>
            <Text style={styles.priceText}>{item.price}</Text>
        </View>
    );
};

// Function to generate random card colors
const getRandomColor = () => {
    const colors = [
        "#DEE0E450",
        // "#FFD700", 
        // "#FFB6C1", 
        // "#87CEEB", 
        // "#FFA07A", 
        // "#98FB98", 
        // "#FF69B4", 
        // "#40E0D0", 
        // "#FF6347", 
        // "#FFDAB9", 
        // "#00FA9A", 
        // "#E6E6FA", 
        // "#F0E68C" 
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};


export default ServiceItems;
