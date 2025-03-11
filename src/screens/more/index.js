import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const MoreScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>More</Text>
      <View style={styles.profileContainer}>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Hello, Ayomide</Text>
          <Text style={styles.profileEmail}>ayomideusman606@yahoo.com</Text>
        </View>
        <TouchableOpacity 
          style={styles.avatarContainer} 
          onPress={() => navigation.navigate('EditAccountInfoScreen')}
        >
          <Icon name="account-circle" size={40} color="#fff" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.inviteCard}>
        <Text style={styles.inviteTitle}>Invite your friends & get up to NGN 2,000</Text>
        <Text style={styles.inviteDescription}>
          Introduce your friends to the easiest{'\n'} way to find and hire professionals{'\n'} for your needs.
        </Text>
      </TouchableOpacity>

      {/* Menu Items */}
      <View style={styles.menu}>
        <MenuItem icon="credit-card" text="Payment Methods" color="#4285F4" />
        <MenuItem  onPress={() => navigation.navigate('SavedAddresses')}
        icon="map-marker" text="Saved Addresses" color="#3B5998" />
        <MenuItem
        onPress={()=> navigation.navigate('NotificationSettings')}
         icon="bell" text="Notifications" color="#FF5733" />
        <MenuItem 
        onPress={()=> navigation.navigate('SavedBookOrd')}
        icon="heart" text="Saved Bookord's" color="#8E44AD" />
        <MenuItem icon="star" text="Rate our app" color="#F1C40F" />
        <MenuItem icon="information" text="About Us" color="#00BCD4" />
      </View>

      <Text style={styles.version}>Version 1.0.0</Text>
    </ScrollView>
  );
};

/* Menu Item Component */
const MenuItem = ({ icon, text, color,onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.menuItem}>
    <View style={[styles.iconCircle, { backgroundColor: color }]}>
      <Icon name={icon} size={20} color="#fff" />
    </View>
    <Text style={styles.menuText}>{text}</Text>
  </TouchableOpacity>
);

export default MoreScreen;
