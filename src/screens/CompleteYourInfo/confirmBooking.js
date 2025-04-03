import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { Colors } from "../../styles";


const ConfirmBooking = ({ route }) => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [showServiceDetails, setShowServiceDetails] = useState(true);
 
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ width: 24 }} />
                <View>
                    <Text style={styles.headerTitle}>Booking Confirmation</Text>
                    <Text style={{ color: '#ddd', fontWeight: '400' }}>3 Bale Close Ifako, Gbagada</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="close" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.formContainer}>
                    <View style={{ marginBottom: 20 }}>
                        <Icon name="check-circle" size={50} color="green" />
                    </View>
                    <Text style={styles.bookingconfirmlable}>Thanks, your booking has been confirmed.</Text>
                    <View style={{ paddingVertical: 10, alignItems: "center", justifyContent: "center",}}>
                        <Text style={styles.bookingconfirmtitle}>
                            Please check your email for receipt and booking details {" "} or visit{" "}
                            <Text style={styles.link} onPress={() => Linking.openURL("https://example.com/service-policy")}>
                            Projects{" "}
                            </Text>{" "}
                            to review your booking.
                        </Text>
                    </View>

                    {/* Service Details */}
                    <View style={styles.ServiceTable}>
                        <TouchableOpacity onPress={() => setShowServiceDetails(!showServiceDetails)} style={styles.serviceHeader}>
                            <Text style={styles.sectionTitle}>Service Details</Text>
                        </TouchableOpacity>
                        {showServiceDetails && (
                            <View style={styles.serviceContent}>
                                <View style={styles.titleContainer}>
                                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                                        <Image source={require("../../assets/images/cleaning.png")} style={styles.serviceIcon} />
                                        <Text style={styles.titleText}>Indoor Cleaning</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => setShowServiceDetails(!showServiceDetails)} >
                                        <Icon name={showServiceDetails ? "chevron-up" : "chevron-down"} size={24} color="#313131" />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.serviceDivider} />
                                <View style={styles.rowContainer}>
                                    <View style={styles.column}>
                                        <Text style={styles.boldText}>Date</Text>
                                        <Text>Wed, March 7</Text>
                                    </View>
                                    <View style={styles.verticalDivider} />
                                    <View style={styles.column}>
                                        <View style={{ marginLeft: 5 }}>
                                            <Text style={styles.boldText}>Start time</Text>
                                            <Text>9:00 - 11:00 AM</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.serviceDivider} />
                                <DetailRow label="Bookord" value={<Text>Palmcedar Cleaning <Icon name="check-decagram" size={14} color="purple" /></Text>} />
                                <View style={styles.serviceDivider} />
                                <View style={styles.rowContainer}>
                                    <View style={styles.column}>
                                        <Text style={styles.boldText}>You selected</Text>
                                        <Text>2 Bookord’s | 2 hours</Text>
                                    </View>
                                    <View style={styles.verticalDivider} />
                                    <View style={styles.column}>
                                        <View style={{ marginLeft: 5 }}>
                                            <Text style={styles.boldText}>Additional Service</Text>
                                            <Text>Cupboard Cleaning</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.serviceDivider} />
                                <DetailRow label="Size of home" value={<Text>1,000 - 3,000 sq ft </Text>} />
                                <View style={styles.serviceDivider} />
                                <DetailRow label="Address" value={<Text>3 Bale Close Ifako, Gbagada</Text>} />
                            </View>
                        )}
                        <View style={[styles.serviceBottom, { borderBottomWidth: 0 }]}>
                            <View style={styles.bottomContent}>
                                <Text style={[styles.booking_cost]}>Booking Cost</Text>
                                <Text style={[styles.booking_cost, { color: "#1B2431" }]}>₦ 2,100</Text>
                            </View>
                        </View>
                        <Text style={styles.bottomtxt}>
                            You won’t be charged until the job is completed.
                        </Text>
                    </View>
                </View>
            </ScrollView >

        </View >
    );
};

const DetailRow = ({ label, value }) => (
    <View style={styles.detailRow}>
        <Text style={styles.boldText}>{label}</Text>
        <Text>{value}</Text>
    </View>
);


export default ConfirmBooking
