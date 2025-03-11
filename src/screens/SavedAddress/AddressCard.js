import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const AddressCard = ({ item, selected, onSelect }) => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);

    // Show skeleton for 2 seconds before displaying content
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
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
    }

    return (
        <TouchableOpacity style={styles.card} onPress={onSelect}>
            <View style={styles.cardContent}>
                <View style={{ alignSelf: 'flex-start' }}>
                    <Icon name="home-outline" size={24} color="black" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardAddress}>{item.address}</Text>
                    <Text style={styles.cardCity}>{item.city}</Text>
                    {/* Clickable Edit Address */}
                    <TouchableOpacity onPress={() => navigation.navigate('EditAddress', { address: item })}>
                        <Text style={styles.editText}>Edit Address</Text>
                    </TouchableOpacity>
                </View>
                <Icon 
                    name={selected ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"} 
                    size={24} 
                    color="purple" 
                />
            </View>
        </TouchableOpacity>
    );
};

export default AddressCard;
