import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const BookOrdCard = ({ item }) => {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);

  
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <SkeletonPlaceholder backgroundColor="#E0E0E0" highlightColor="#F7F4FB">
                <View style={styles.card}>
                    <View style={styles.topSection}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={{  width: 30, height: 30, borderRadius: 15 }} />
                        <View style={{ width: 150, height: 16, borderRadius: 15,left:10 }} />
                        </View>
                        <View style={{width: 50, height: 16, borderRadius: 15 }} />
                    </View>
                    <View style={styles.separator} />
                        <View style={{ width: 120, height: 16, borderRadius: 50, marginBottom: 6 }} />
                        <View style={{ width: 170, height: 14, borderRadius: 50, marginBottom: 4 }} />
                        <View style={{ width: 190, height: 14, borderRadius: 50 }} />
                </View>
            </SkeletonPlaceholder>
        );
    }

    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.topSection}>
                <View style={styles.logoContainer}>
                    <Image source={item.image} style={styles.logo} />
                    <Text style={styles.title}>{item.name}</Text>
                    <Icon name="check-decagram" size={18} color="purple" style={{ marginLeft: 5 }} />
                </View>
                <View style={styles.ratingContainer}>
                    <Icon name="star" size={16} color="black" />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                    <Text style={styles.reviewText}>({item.reviews})</Text>
                </View>
            </View>
            <View style={styles.separator} />
            <View style={styles.detailsContainer}>
                <View style={styles.row}>
                    <Icon name="map-marker" size={16} color="gray" />
                    <Text style={styles.text}>{item.location} • </Text>
                    <Text style={[styles.text, { color: item.status === 'Closed' ? 'gray' : 'green' }]}>
                        {item.status}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Icon name="cash" size={16} color="gray" />
                    <Text style={styles.text}>Starts @ {item.price}</Text>
                    {item.duration && (
                        <>
                            <Icon name="clock-outline" size={16} color="gray" style={{ marginLeft: 5 }} />
                            <Text style={styles.text}>{item.duration}</Text>
                        </>
                    )}
                </View>
                <View style={styles.row}>
                    <Icon name="check-circle" size={16} color="purple" />
                    <Text style={styles.text}>{item.jobsCompleted} similar jobs completed near you</Text>
                </View>
            </View>
        </TouchableOpacity>

    );
};

export default BookOrdCard;
