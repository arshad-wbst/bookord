import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, Pressable,PermissionsAndroid ,Platform,Alert} from 'react-native';
import PrimaryButton from '../../componets/PrimaryButton';
import { Colors } from '../../styles';
import SkeletonLoader from '../../componets/SkeletonLoader';
import styles from './styles';
import Geolocation from 'react-native-geolocation-service';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const Locationpage =({ navigation })=> {
    const [location, setLocation] = useState(null);

    const [isDisplay, setDisplay] = useState(false)
    const onDisplay = () => {
        setDisplay(false);
    };

    useEffect(() => {
        if (!isDisplay) {
            const timer = setTimeout(() => {
                setDisplay(true);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [isDisplay]);


    const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } else {
            const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            return result === RESULTS.GRANTED;
        }
    };

    const getLocation = async () => {
        const hasPermission = await requestLocationPermission();
        if (!hasPermission) {
            Alert.alert("Permission Denied", "Enable location access to use this feature.");
            return;
        }

        Geolocation.getCurrentPosition(
            (position) => {
                setLocation(position.coords);
            },
            (error) => {
                console.log(error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    return (
        <View style={styles.container}>
            {!isDisplay ? (
                <SkeletonLoader />
            ) : (

                <ImageBackground
                    source={require('../../assets/images/location.png')}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                >
                    <View style={styles.contentContainer}>
                        <View style={{ height: 100, width: '90%', }}></View>
                        <View style={{ height: 100, width: '90%' }}></View>
                        <View style={{ width: '95%', paddingVertical: 3, alignItems: 'center' }}>
                            <Text style={styles.allow_text}>Allow location access?</Text>
                            <Text style={styles.subtitle}>
                                We need your location access to easily find Bookord professionals around you.
                            </Text>
                        </View>
                        <PrimaryButton
                            title="Allow location access"
                            // onPress={()=>navigation.navigate('MapScreen') }
                            onPress={getLocation}
                            // loading={loading}
                            textColor="white"
                            customStyle={{
                                // opacity: loading || !isValidEmail ? 0.5 : 1,
                                backgroundColor: Colors.PRIMARY,
                                alignSelf: 'center',
                                width: '100%',
                                marginTop: 30,

                            }}
                        />
                        <Pressable onPress={() => onDisplay()}>
                            <Text style={styles.underlinetext}>
                                Skip this step
                            </Text>
                        </Pressable>
                        {location && (
                <Text>Latitude: {location.latitude}, Longitude: {location.longitude}</Text>
            )}

                    </View>

                </ImageBackground>
            )}
        </View>
    );
}

export default Locationpage;
