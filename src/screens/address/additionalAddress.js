import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Switch } from "react-native";
import MapView from "react-native-maps";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from "../../styles";
import PrimaryButton from "../../componets/PrimaryButton";
import CustomTextInput from "../../componets/CustomTextInput";


const AdditionalAddressScreen = ({ navigation, route }) => {
    const [address, setAddress] = useState(route.params?.address || '');
    const [loading, setLoading] = useState(false);
    const [building, setBuilding] = useState('');
    const [apartment, setApartment] = useState('');
    const [floor, setFloor] = useState('');
    const [street, setStreet] = useState('');
    const [isCurrentHome, setIsCurrentHome] = useState(false);

    const handleNext = () => {
        if (address) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                navigation.navigate('Dashboard');
                // console.log('Password reset link sent to:', email);
            }, 2000);
        }
    };

    return (
        <View style={styles.container}>
            {/* Header with Back Button */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-left" size={22} color={Colors.BLACK} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Confirm your home address</Text>
            </View>


            <Text style={styles.sectionTitle}>Additional information</Text>
            <Text style={styles.subText}>Tisco Plaza House, Ikeja</Text>

            {/* Map Preview */}
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 6.6018,
                        longitude: 3.3515,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                    scrollEnabled={false}
                    zoomEnabled={false}
                />
            </View>

            {/* Input Fields */}
            <View style={styles.form}>
                <Text style={styles.label}>Building*</Text>
                <View style={styles.inputContainer}>
                    <CustomTextInput
                        value={building}
                        onChangeText={setBuilding}
                        placeholder="Enter building"
                        keyboardType="default"
                        onFocus={() => console.log('Input Focused')}
                    />
                </View>

                <View style={styles.row}>
                    <View style={styles.halfInputContainer}>
                        <Text style={styles.label}>Apartment</Text>
                        <View style={styles.inputContainer}>
                    <CustomTextInput
                        value={apartment}
                        onChangeText={setApartment}
                        placeholder="Enter apartment"
                        keyboardType="default"
                        onFocus={() => console.log('Input Focused')}
                    />
                </View>
                    </View>
                    <View style={styles.halfInputContainer}>
                        <Text style={styles.label}>Floor</Text>
                        <View style={styles.inputContainer}>
                    <CustomTextInput
                        value={floor}
                        onChangeText={setFloor}
                        placeholder="Enter floor"
                        keyboardType="default"
                        onFocus={() => console.log('Input Focused')}
                    />
                </View>
                    </View>
                </View>

                <Text style={styles.label}>Street*</Text>
                <View style={styles.inputContainer}>
                    <CustomTextInput
                        value={street}
                        onChangeText={setStreet}
                        placeholder="Enter street"
                        keyboardType="default"
                        onFocus={() => console.log('Input Focused')}
                    />
                </View>

                <View style={styles.toggleContainer}>
                    <TouchableOpacity
                        onPress={() => setIsCurrentHome(!isCurrentHome)}
                        style={[styles.checkbox, isCurrentHome && styles.checkboxSelected]}
                    >
                        {isCurrentHome && <Icon name="check" size={16} color="white" />}
                    </TouchableOpacity>
                    <Text style={styles.toggleText}>Set as current home address</Text>
                </View>
                <View style={{height:50,width:'90%'}}/>

                <PrimaryButton
                    title="Save Changes"
                    onPress={handleNext}
                    loading={loading}
                    textColor="white"
                    customStyle={{
                        opacity: loading ? 0.5 : 1,
                        backgroundColor: Colors.PRIMARY,
                        alignSelf: 'center',
                        width: '100%',
                        marginTop: 30,

                    }}
                />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,

    },
    backButton: {
        marginRight: 15,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
    },
    subText: {
        fontSize: 14,
        color: "gray",
        marginBottom: 20,
    },
    mapContainer: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 25,
    },
    map: {
        width: "100%",
        height: "100%",
    },
    form: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
    },
    input: {
        width: "100%",
        height: 45,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    halfInputContainer: {
        width: "48%",
        paddingVertical:10
    },
    toggleContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
    },
    toggleText: {
        fontSize: 16,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: Colors.PRIMARY,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },

    checkboxSelected: {
        backgroundColor: Colors.PRIMARY
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }

});

export default AdditionalAddressScreen;
