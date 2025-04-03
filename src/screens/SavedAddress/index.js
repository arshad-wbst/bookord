import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AddressCard from './AddressCard';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const SavedAddresses = () => {
     const navigation = useNavigation();
    const [selectedAddress, setSelectedAddress] = useState(1);

    const addresses = [
        { id: 1, title: 'Home', address: '29, Olowu Street, Ikeja', city: 'Lagos' },
        { id: 2, title: 'Home', address: '3 Bale Close Ifako, Gbagada', city: 'Lagos' },
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Saved Addresses</Text>
                <TouchableOpacity onPress={() => navigation.navigate('MapScreen') }
                style={styles.addButton}>
                    <Icon name="plus-circle-outline" size={20} color="#1B2431" />
                    <Text style={styles.addText}>Add</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={addresses}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <AddressCard
                        item={item}
                        selected={selectedAddress === item.id}
                        onSelect={() => setSelectedAddress(item.id)}
                    />
                )}
            />
        </View>
    );
};

export default SavedAddresses;
