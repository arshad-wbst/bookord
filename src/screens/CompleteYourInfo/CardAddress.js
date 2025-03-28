import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { SkeletonAddress } from './UIComponent';

const CardAddress = ({ item, selected, onSelect }) => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);

    // Show skeleton for 2 seconds before displaying content
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
         <SkeletonAddress />
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

export default CardAddress;
