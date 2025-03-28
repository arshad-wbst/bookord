import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import styles from "./styles"; // Adjust path as needed

// Skeleton Circle Component
export const SkeletonCircle = () => (
    <SkeletonPlaceholder>
        <View style={styles.skeletonContainer}>
            <View style={styles.skeletonCircle} />
            <View style={styles.skeletonTitle} />
            <View style={styles.skeletonPrice} />
        </View>
    </SkeletonPlaceholder>
);


// Skeleton Ractangle Component
export const SkeletoRactangle = () => (
    <SkeletonPlaceholder>
     <View style={styles.skeltonRactangle} />
    </SkeletonPlaceholder>
);

// No Data Component
export const NoData = ({ navigation }) => (
    <View style={styles.noDataContainer}>
        <Image source={require("../../assets/images/noService.png")} style={styles.noDataImage} />
        <Text style={styles.noDataText}>No services available</Text>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate("Dashboard")}>
            <Text style={styles.homeButtonText}>Go to Dashboard</Text>
        </TouchableOpacity>
    </View>
);
