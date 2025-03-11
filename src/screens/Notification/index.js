import React, { useState } from 'react';
import { View, Text, Switch, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const NotificationSettings = () => {
    const navigation = useNavigation();
    const [notifications, setNotifications] = useState({
        inboxMessages: true,
        ratingsReminders: true,
        promotionsTips: true,
        accountUpdates: true,
    });

    const toggleSwitch = (key) => {
        setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >

                    <Icon name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifications</Text>
                <View onPress={() => navigation.navigate('MapScreen')}
                    style={styles.addButton}>
                </View>
            </View>
            <Text style={styles.description}>Get push notifications about...</Text>

            {[
                { key: 'inboxMessages', title: 'Inbox messages', desc: 'Receive notifications when a Skillr responds.' },
                { key: 'ratingsReminders', title: 'Ratings reminders', desc: 'Get notifications on rating a Skillr after service has been provided.' },
                { key: 'promotionsTips', title: 'Promotions and tips', desc: 'There are discounts, coupons and tips you might like.' },
                { key: 'accountUpdates', title: 'Your account', desc: 'We have updates about your account and security matters.' },
            ].map((item) => (
                <View key={item.key} style={styles.notificationRow}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.subtitle}>
                            {item.desc}
                        </Text>
                    </View>
                    <Switch
                        value={notifications[item.key]}
                        onValueChange={() => toggleSwitch(item.key)}
                        trackColor={{ false: '#ccc', true: 'green' }}
                        thumbColor="white"
                    />
                </View>
            ))}
        </ScrollView>
    );
};

export default NotificationSettings;
