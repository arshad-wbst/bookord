import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProgressBar } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import CustomDropdown from "../../componets/CustomDropdown";
import { Colors } from "../../styles";
import CustomRBSheet from "../../componets/CustomRBSheet";
import PrimaryButton from "../../componets/PrimaryButton";

const services = [
    "2 Hours",
    "3 Hours",
    "4 Hours",
    "5 Hours",
];

const BookingDetails = ({ route }) => {
    const navigation = useNavigation();
    const refRBSheet = useRef(null);
    const [SheetType, setSheetType] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedHow, setselectedHow] = useState(null)

    const progress = route.params?.progress || 0.5;
    const hoursData = [
        { label: "1 Hour", value: "1" },
        { label: "2 Hours", value: "2" },
        { label: "3 Hours", value: "3" },
        { label: "4 Hours", value: "4" },
        { label: "5 Hours", value: "5" },

    ];
    const homeSizeData = [
        { label: "Less than 1,000 sq ft", value: "1" },
        { label: "1,000 - 3,000 sq ft", value: "2" },
        { label: "3,000 - 5,000 sq ft", value: "3" },
        { label: "5000+ sq ft", value: "4" },

    ];
    const HowManyBook = [
        { label: "1 Bookords", value: "1" },
        { label: "2 Bookords", value: "2" },
        { label: "3 Bookords", value: "3" },
        { label: "4 Bookords", value: "4" },
        { label: "5 Bookords", value: "5" },

    ];


    const openSheet = (type) => {
        setSheetType(type); // Set the type first
        setTimeout(() => {
            if (refRBSheet.current) {
                refRBSheet.current.open(); // Open sheet after setting type
            }
        }, 100);
    };

    const handleNextPress = () => {
        if (!selectedService || !selectedSize || !selectedHow) {
            Alert.alert("Error", "Please fill in all fields before proceeding.");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigation.navigate("PeopleAdded", { progress: 1.0 });
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Book details</Text>
                <View style={{ width: 24 }} />
            </View>
            <View style={styles.formContainer}>
                {/* Service Provider Card */}
                <View style={styles.serviceCard}>
                    <Image
                        source={require("../../assets/images/cleaning.png")}
                        style={styles.serviceImage}
                    />
                    <View style={styles.serviceInfo}>
                        <Text style={styles.serviceName}>Palmcedar Cleaning <Icon name="check-decagram" size={14} color={Colors.PRIMARY} /></Text>
                        <View style={styles.ratingRow}>
                            <Icon name="star" size={16} color="black" />
                            <Text style={styles.ratingText}>4.7</Text>
                            <Text style={styles.reviewCount}>(115)</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DescriptionScreen')}
                        style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Text style={styles.viewProfile}>View Profile</Text>
                        <Icon name={"chevron-right"} size={24} color="#313131" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.label}>How many hours do you need your Bookord to stay?*</Text>
                <Pressable
                    onPress={() => openSheet("Hours")}
                    style={[styles.dropdown, { backgroundColor: selectedService && "#DEE0E433" }]}>

                    <Text style={selectedService ? styles.selectedText : styles.placeholder}>
                        {selectedService ? selectedService.label : "Choose one"}
                    </Text>
                    <Icon name="chevron-down" size={24} color="black" />
                </Pressable>

                {/* <CustomDropdown label="How many hours do you need your skillr to stay?*" data={hoursData} onSelect={setSelectedHours} /> */}
                <View style={styles.infoContainer}>
                    <Icon name="information-outline" size={18} color="#333" />
                    <Text style={styles.infoText}>
                        Unsure about the hours to choose,{" "}
                        <TouchableOpacity
                            onPress={() => openSheet("InfoHours")}>
                            <Text style={styles.linkText}>Click here.</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
                <Text style={styles.label}>What is the size of your home?*</Text>
                <Pressable
                    onPress={() => openSheet("Size")}

                    style={[styles.dropdown, { backgroundColor: selectedSize && "#DEE0E433" }]}>
                    <Text style={selectedSize ? styles.selectedText : styles.placeholder}>
                        {selectedSize ? selectedSize.label : "Choose one"}
                    </Text>
                    <Icon name="chevron-down" size={24} color="black" />
                </Pressable>
                <Text style={styles.label}>How many Bookord’s do you need?*</Text>
                <Pressable
                    onPress={() => openSheet("HowBook")}
                    style={[styles.dropdown, { backgroundColor: selectedHow && "#DEE0E433" }]}>
                    <Text style={selectedHow ? styles.selectedText : styles.placeholder}>
                        {selectedHow ? selectedHow.label : "Choose one"}
                    </Text>
                    <Icon name="chevron-down" size={24} color="black" />
                </Pressable>
                {/* <CustomDropdown label="What is the size of your home?*" data={homeSizeData} onSelect={setSelectedHomeSize} />
                <CustomDropdown label="How many skillr’s do you need?*" data={skillrsData} onSelect={setSelectedSkillrs} /> */}
            </View>
            <View style={styles.footerContainer}>
                <ProgressBar progress={progress} color="#6A1B9A" style={styles.progressBar} />
                <View style={styles.footerContent}>
                    <TouchableOpacity
                        onPress={() => openSheet("Summary")}
                        style={styles.feeContainer}>
                        <Text style={styles.totalFeeLabel}>Total fee</Text>
                        <View style={styles.feeRow}>
                            <Text style={styles.totalFeeAmount}>₦6,500.00</Text>
                            <Icon name="chevron-up" size={20} color="black" style={styles.expandIcon} />
                        </View>
                    </TouchableOpacity>
                    <PrimaryButton
                    title="Next"
                    onPress={handleNextPress}
                    loading={loading}
                    textColor="white"
                    customStyle={{
                        opacity:loading ? 0.5 : progress ? 1 : 0.5,
                        backgroundColor: Colors.PRIMARY,
                        marginTop: 20,
                        alignSelf: 'center',
                        width: '47%',
                    }}
                    disabled={progress !== 1.0 || loading}
                />
                    {/* <TouchableOpacity
                     disabled={progress !== 1.0 || loading}
                        style={[styles.nextButton, { opacity: progress === 1.0 ? 1 : 0.5 }]}
                        onPress={handleNextPress}
                    >
                        <Text style={styles.nextText}>Next</Text>
                    </TouchableOpacity> */}
                </View>
            </View>

            <CustomRBSheet ref={refRBSheet} content={SheetType === "InfoHours" ? "veryHigh" : "medium"}>

                {SheetType === 'Hours' && (
                    <>
                        <View style={styles.sheetTitle}>
                            <Text style={styles.summaryTitle
                            }>
                                Choose hours you need the Bookord’s ?
                            </Text>
                        </View>
                        <FlatList
                            data={hoursData}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => setSelectedService(item)}
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingVertical: 10,
                                        width: '100%'
                                    }}
                                >
                                    <View style={{ flexDirection: "row" }}>
                                        <Icon name="clock-alert-outline" size={20} color={Colors.ICON_COLOR} />
                                        <Text style={{ fontSize: 16, paddingLeft: 5 }}>{item.label}</Text>

                                    </View>
                                    <Icon name={selectedService?.value === item.value ? "check-circle" : "checkbox-blank-circle-outline"} size={20} color={Colors.PRIMARY} />

                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity
                            style={styles.ApplyButton}
                            onPress={() => {
                                refRBSheet.current?.close();
                            }}>
                            <Text style={styles.applyText}>Apply</Text>
                        </TouchableOpacity>
                    </>
                )}

                {SheetType === 'Size' && (
                    <>
                        <View style={styles.sheetTitle}>
                            <Text style={styles.summaryTitle}>What is the size of your home?</Text>

                        </View>
                        <FlatList
                            data={homeSizeData}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => setSelectedSize(item)}
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingVertical: 10,
                                        width: '100%'
                                    }}
                                >
                                    <View style={{ flexDirection: "row" }}>
                                        <Icon name="clock-alert-outline" size={20} color={Colors.ICON_COLOR} />
                                        <Text style={{ fontSize: 16, paddingLeft: 5 }}>{item.label}</Text>

                                    </View>
                                    <Icon name={selectedSize?.value === item.value ? "check-circle" : "checkbox-blank-circle-outline"} size={20} color={Colors.PRIMARY} />

                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity
                            style={
                                styles.ApplyButton
                            }
                            onPress={() => {
                                refRBSheet.current?.close();
                            }}>
                            <Text style={styles.applyText}>Apply</Text>
                        </TouchableOpacity>
                    </>
                )}
                {SheetType === 'HowBook' && (
                    <>
                        <View style={styles.sheetTitle}>
                            <Text style={styles.summaryTitle}>How many Bookord’s do you need?</Text>
                        </View>
                        <FlatList
                            data={HowManyBook}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => setselectedHow(item)}
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingVertical: 10,
                                        width: '100%'
                                    }}
                                >
                                    <View style={{ flexDirection: "row" }}>
                                        <Icon name="account-outline" size={20} color={Colors.ICON_COLOR} />
                                        <Text style={{ fontSize: 16, paddingLeft: 5 }}>{item.label}</Text>

                                    </View>
                                    <Icon name={selectedHow?.value === item.value ? "check-circle" : "checkbox-blank-circle-outline"} size={20} color={Colors.PRIMARY} />

                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity
                            style={
                                styles.ApplyButton
                            }
                            onPress={() => {
                                refRBSheet.current?.close();
                            }}>
                            <Text style={styles.applyText}>Apply</Text>
                        </TouchableOpacity>
                    </>
                )}

                {SheetType === 'Summary' && (
                    <>
                        <View style={styles.summaryContainer}>
                            <View style={styles.dragIndicator} />
                            <Text style={styles.summaryTitle}>Summary</Text>
                            <View style={styles.serviceContainer}>
                                <Text style={styles.serviceTitle}>Indoor Cleaning</Text>
                                <Text style={styles.servicePrice}>₦6,500</Text>
                            </View>
                            <View style={styles.divider} />
                            <View style={styles.paymentSummaryContainer}>
                                <Text style={styles.paymentSummaryTitle}>Payment Summary</Text>
                                <View style={styles.paymentRow}>
                                    <Text style={styles.paymentLabel}>Total (inc. Vat)</Text>
                                    <Text style={styles.paymentAmount}>₦6,500</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.footerContent}>
                            <TouchableOpacity style={styles.feeContainer}>
                                <Text style={styles.totalFeeLabel}>Total fee</Text>
                                <View style={styles.feeRow}>
                                    <Text style={styles.totalFeeAmount}>₦6,500.00</Text>
                                    <Icon name="chevron-down" size={20} color="black" style={styles.expandIcon} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.nextButton, { opacity: progress === 1.0 ? 1 : 0.5 }]}
                                onPress={() => navigation.navigate("NextScreen", { progress: 1.0 })}
                                disabled={progress !== 1.0}
                            >
                                <Text style={styles.nextText}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}

                {SheetType === 'InfoHours' && (
                    <>
                        <View style={{
                            padding: 15,
                            backgroundColor: "#fff",
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: "bold",
                                textAlign: "center",
                                marginBottom: 10,
                            }}>
                                Choosing the number of hours {'\n'} for your house cleaning
                            </Text>
                            <Text style={styles.description}>
                                Every house is different, but as a general rule of thumb; each bedroom you have will mean an extra hour of cleaning. You can refer to the table below:
                            </Text>
                            <View style={styles.table}>
                                <View style={[styles.row, styles.headerTable]}>
                                    <View style={[styles.cell, styles.borderRight]}>
                                        <Text style={[styles.headerText]}>Size of your home</Text>
                                    </View>
                                    <View style={styles.cell}>
                                        <Text style={[styles.headerText]}>Duration of Cleaning*</Text>
                                    </View>
                                </View>
                                {[
                                    { size: "Less than 1,000 sq ft", duration: "2 hours" },
                                    { size: "1000 - 3000 sq ft", duration: "2-3 hours" },
                                    { size: "3,000 - 5,000 sq ft", duration: "3-4 hours" },
                                    { size: "5000+ sq ft", duration: "4-5 hours" },
                                ].map((item, index) => (
                                    <View key={index} style={styles.row}>
                                        <View style={[styles.cell, styles.borderRight]}>
                                            <Text style={styles.cellText}>{item.size}</Text>
                                        </View>
                                        <View style={styles.cell}>
                                            <Text style={styles.cellText}>{item.duration}</Text>
                                        </View>
                                    </View>
                                ))}
                            </View>

                            <Text style={styles.footer}>
                                Indoor Cleaning includes general cleaning, wiping surfaces, dusting, sweeping, mopping, and vacuuming services from the Add-Ons section. Please speak with the Skillr’s about your requests and home’s needs.
                            </Text>
                        </View>
                    </>
                )}

            </CustomRBSheet>

        </View>
    );
};




export default BookingDetails;
