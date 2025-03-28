import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import styles from "./styles";

const ServiceCard = ({ item, loading, navigation }) => {
    if (loading) {
        return (
            <SkeletonPlaceholder>
                <View style={styles.serviceCard}>
                    <View style={styles.skeletonImage} />
                    <View style={styles.serviceInfo}>
                        <View style={styles.skeletonText} />
                        <View style={styles.skeletonTextSmall} />
                    </View>
                    <View style={styles.skeletonButton} />
                </View>
            </SkeletonPlaceholder>
        );
    }

    return (
              <View style={styles.categorylist}>
        <View style={styles.serviceCard}>
            <Image source={item.image} style={styles.serviceImage} />
            <View style={styles.serviceInfo}>
                <Text style={styles.serviceName}>
                    {item.name} <Icon name="check-decagram" size={14} color="green" />
                </Text>
                <View style={styles.ratingRow}>
                    <Icon name="star" size={16} color="black" />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                    <Text style={styles.reviewCount}>({item.reviews})</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("DescriptionScreen")} style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.viewProfile}>View Profile</Text>
                <Icon name={"chevron-right"} size={24} color="#313131" />
            </TouchableOpacity>
        </View>
        </View>
    );
};

export default ServiceCard;
