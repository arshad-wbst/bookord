import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity ,Text} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './styles';
import BookOrdCard from './BookordCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const savedBookOrders = [
    {
        id: '1',
        name: 'Palmcedar Cleaning',
        location: 'Ikeja, Nigeria',
        status: 'Closed',
        price: '₦6500/hr',
        duration: '1.2 hrs',
        jobsCompleted: 42,
        rating: 4.7,
        reviews: 115,
        image: require("../../assets/images/cleaning.png") 
    },
    {
        id: '2',
        name: 'Opakjeph Plumbing S...',
        location: 'Ikeja, Nigeria',
        status: 'Available',
        price: '₦2300/hr',
        duration: null,
        jobsCompleted: 10,
        rating: 4.6,
        reviews: 28,
        image: require("../../assets/images/cleaning.png") 
    },
];

const SavedBookOrd = () => {
         const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
             {/* Header */}
                    <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <Icon name="arrow-left" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Saved Bookord</Text>
                        <View onPress={() => navigation.navigate('MapScreen') }
                        style={styles.addButton}>
                        </View>
        
                    </View>
                <FlatList
                    data={savedBookOrders}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <BookOrdCard item={item} />}
                />
            
        </View>
    );
};

export default SavedBookOrd;
