import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from 'react-native-paper';
import styles from './styles';
import CardAddress from './CardAddress';
import PrimaryButton from '../../componets/PrimaryButton';
import { Colors } from '../../styles';
import { showMessage } from '../../componets/Toast';

const HomeAddress = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null); 

    const addresses = [
        { id: 1, title: 'Home', address: '29, Olowu Street, Ikeja', city: 'Lagos' },
        { id: 2, title: 'Home', address: '3 Bale Close Ifako, Gbagada', city: 'Lagos' },
    ];

    const handleNext = () => {
        if (!selectedAddress) {
            showMessage('Please select an address before proceeding.');
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigation.navigate("BookingDetails", { progress: 0.2 });
        }, 1500);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Home Address</Text>
                <TouchableOpacity onPress={() => navigation.navigate('MapScreen')} style={styles.addButton}>
                    <Icon name="plus-circle-outline" size={20} color="#1B2431" />
                    <Text style={styles.addText}>Add</Text>
                </TouchableOpacity>
            </View>

            {/* Address List */}
            <FlatList
                data={addresses}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CardAddress
                        item={item}
                        selected={selectedAddress === item.id}
                        onSelect={() => setSelectedAddress(item.id)}
                    />
                )}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
            <View style={styles.footerContainer}>
                <ProgressBar 
                    progress={selectedAddress ? 0.1 : 0.05}
                    color="#1B2431" 
                    style={styles.progressBar} 
                />
                <PrimaryButton
                    title="Select Address"
                    onPress={handleNext}
                    loading={loading}
                    textColor="white"
                    customStyle={{
                        opacity:loading ? 0.5 : selectedAddress ? 1 : 0.5,
                        backgroundColor: Colors.PRIMARY,
                        marginTop: 20,
                        alignSelf: 'center',
                        width: '90%',
                    }}
                    disabled={!selectedAddress} 
                />
            </View>
        </View>
    );
};

export default HomeAddress;
