import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import styles from "./styles"; // Adjust path as needed

// Skeleton address Component
export const SkeletonAddress = () => (
    <SkeletonPlaceholder backgroundColor="#E0E0E0" highlightColor="#F5F5F5">
    <View style={styles.card}>
        <View style={styles.cardContent}>
            <View style={{ alignSelf: 'flex-start', width: 30, height: 30, borderRadius: 15 }} />
            <View style={{ flex: 1, marginLeft: 10 }}>
                <View style={{ width: 100, height: 16, borderRadius: 50, marginBottom: 6 }} />
                <View style={{ width: 200, height: 14, borderRadius: 50, marginBottom: 4 }} />
                <View style={{ width: 150, height: 14, borderRadius: 50 }} />
            </View>
            <View style={{ width: 24, height: 24, borderRadius: 12 }} />
        </View>
    </View>
</SkeletonPlaceholder>
);

