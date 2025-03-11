import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../componets/PrimaryButton";
import { Colors } from "../../styles";
import BookingCancelleddModal from "../../componets/modals/bookingCancelledModal";

const CancelBooking = () => {
    const navigation = useNavigation();
    const [selectedReason, setSelectedReason] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);


    const reasons = [
        "Don’t need the service anymore",
        "Not available at this time",
        "Found a better rate elsewhere",
        "Placed the request by mistake",
        "Other",
    ];

    const handleCancel = () => {
        if(selectedReason){
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setModalVisible(true)
        }, 2000);
    }

    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Cancel Booking</Text>
                <View style={{ width: 24 }} />
            </View>

            {/* Image */}
            <Image
                source={require("../../assets/images/feeling_soeey.png")}
                style={styles.image}
            />

            {/* Title */}
            <Text style={styles.title}>
                Please let us know why you’re canceling your booking. We would really appreciate your feedback.
            </Text>

            {/* Options */}
            {reasons.map((reason, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.option}
                    onPress={() => setSelectedReason(reason)}
                >
                    <Icon
                        name={selectedReason === reason ? "radiobox-marked" : "radiobox-blank"}
                        size={20}
                        color={selectedReason === reason ? Colors.PRIMARY : "#999"}
                    />
                    <Text style={styles.optionText}>{reason}</Text>
                </TouchableOpacity>
            ))}

            {/* Buttons */}
            <View style={styles.buttonContainer}>

                <PrimaryButton
                    title="Don’t Cancel"
                    // onPress={handleResend}
                    textColor="black"
                    customStyle={{
                        width: '48%',
                        borderWidth: 1,
                        borderColor: "#000",
                    }}
                />
                <PrimaryButton
                    title="Cancel Booking"
                    onPress={handleCancel}
                    loading={loading}
                    textColor="white"
                    customStyle={{
                        opacity: loading ? 0.5 : 1,
                        backgroundColor: Colors.PRIMARY,
                        width: '48%'
                    }}
                />
            </View>
            <BookingCancelleddModal
                visible={isModalVisible}
                onClose={() => setModalVisible(false)}
                onNewBooking={() => {
                    setModalVisible(false);
                    navigation.navigate("BookingScreen");
                }}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        // paddingHorizontal: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colors.INPUT_BORDER_COLOR,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    image: {
        width: "100%",
        height: 220,
        resizeMode: "contain",
        marginBottom: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        marginBottom: 15,
        paddingHorizontal: 20,

    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,

    },
    optionText: {
        fontSize: 14,
        marginLeft: 10,
        color: "#333",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        paddingHorizontal: 20,

    },
    cancelButton: {
        borderWidth: 1,
        borderColor: "#000",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    cancelButtonText: {
        fontSize: 16,
        color: "#000",
    },
    confirmButton: {
        backgroundColor: "#0D47A1",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    confirmButtonText: {
        fontSize: 16,
        color: "#fff",
    },
});

export default CancelBooking;
