import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProgressBar } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { Colors } from "../../styles";
import CustomRBSheet from "../../componets/CustomRBSheet";
import PrimaryButton from "../../componets/PrimaryButton";
import moment from "moment";

const JobDateTime = ({ route }) => {
    const navigation = useNavigation();
    const refRBSheet = useRef(null);
    const [SheetType, setSheetType] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [startDate, setStartDate] = useState(moment());
    const [selectedDate, setSelectedDate] = useState(moment().format("YYYY-MM-DD"));

    const progress = route.params?.progress || 0.6;

    const services = [
        {
            label: "Continuous Service",
            value: "continuous",
            description: [
                "This service would run every week.",
                "Pause/cancel subscription at your convenience."
            ]
        },
        {
            label: "One-Time Service",
            value: "one-time",
            description: [
                "This service would run once."
            ]
        }
    ];

    const timeSlots = [
        { id: 1, label: "Morning 9 - 11 AM" },
        { id: 2, label: "Afternoon 12 - 3 PM" },
        { id: 3, label: "Evening 4 - 6 PM" }
    ];

    // Generate 7-day range from startDate
    const generateDates = () => {
        let dates = [];
        for (let i = 0; i < 7; i++) { 
            let day = moment(startDate).add(i, 'days');
            dates.push({
                dayOfWeek: day.format("ddd"),
                dayNumber: day.date(), 
                fullDate: day.format("YYYY-MM-DD")
            });
        }
        return dates;
    };


    const openSheet = (type) => {
        setSheetType(type);
        setTimeout(() => {
            if (refRBSheet.current) {
                refRBSheet.current.open();
            }
        }, 100);
    };

    const isValid = selectedService && selectedSlot && selectedDate;

    const handleNextPress = () => {
        if (!isValid) {
            Alert.alert("Error", "Please fill in all fields before proceeding.");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigation.navigate("SummaryScreen", { progress: 1.0 });
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Job Date and Time</Text>
                <View style={{ width: 24 }} />
            </View>

              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                <Text style={styles.label}>How often do you need this?*</Text>
                <Pressable
                    onPress={() => openSheet("Hours")}
                    style={[styles.dropdown, { backgroundColor: selectedService && "#DEE0E433" }]}>

                    <Text style={selectedService ? styles.selectedText : styles.placeholder}>
                        {selectedService ? selectedService.label : "Choose one"}
                    </Text>
                    <Icon name="chevron-down" size={24} color="black" />
                </Pressable>

                <Text style={styles.label}>When will you like your service? <Text style={styles.required}>*</Text></Text>
                <View style={styles.dateBox}>
                    {/* Month Navigation */}
                    <View style={styles.navContainer}>
                        <TouchableOpacity onPress={() => setStartDate(prev => moment(prev).subtract(7, "days"))}>
                            <Icon name="chevron-left" size={28} color="#313131" />
                        </TouchableOpacity>
                        <Text style={styles.month}>{moment(startDate).format("MMMM YYYY")}</Text>
                        <TouchableOpacity onPress={() => setStartDate(prev => moment(prev).add(7, "days"))}>
                            <Icon name="chevron-right" size={28} color="#313131" />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={generateDates()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.fullDate}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[
                                    styles.dateContainer,
                                    selectedDate === item.fullDate && styles.selectedDateText
                                ]}
                                onPress={() => setSelectedDate(item.fullDate)}
                            >
                                <Text style={[
                                    styles.dayOfWeek,
                                    selectedDate === item.fullDate && styles.selectedDayText
                                ]}>{item.dayOfWeek}</Text>

                                <View style={[
                                    styles.circle,
                                    selectedDate === item.fullDate && styles.selectedCircle
                                ]}>
                                    <Text style={[
                                        styles.dayNumber,
                                        selectedDate === item.fullDate && styles.selectedDateText
                                    ]}>{item.dayNumber}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <Text style={styles.label}>What time do you want us to start?*</Text>
                {timeSlots.map((slot) => (
                    <TouchableOpacity
                        key={slot.id}
                        style={[
                            styles.slotButton,
                            selectedSlot === slot.id && styles.selectedButton
                        ]}
                        onPress={() => setSelectedSlot(slot.id)}
                    >
                        <Text
                            style={[
                                styles.slotText,
                                selectedSlot === slot.id && styles.slotSlectedtext
                            ]}
                        >
                            {slot.label}
                        </Text>
                    </TouchableOpacity>
                ))}

                <View style={styles.InfoBox}>
                    <Icon name="information" size={20} color="#1F2D3D" style={styles.icon} />
                    <Text style={styles.text}>
                        Free cancellation until 12 hours before the start of the booking.
                    </Text>
                </View>
            </View>
            </ScrollView>
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
                        title="Checkout"
                        onPress={handleNextPress}
                        loading={loading}
                        textColor="white"
                        customStyle={{
                            opacity: !isValid || loading ? 0.5 : progress ? 1 : 0.6,
                            backgroundColor: Colors.PRIMARY,
                            marginTop: 20,
                            alignSelf: 'center',
                            width: '47%',
                        }}
                        disabled={progress !== 1.0 || loading}
                    />
                </View>
            </View>

            <CustomRBSheet ref={refRBSheet} content={SheetType === "Hours" ? "high" : "medium"}>

                {SheetType === 'Hours' && (
                    <>
                        <View style={{
                            width:'100%',
                            flexDirection:'column',
                            paddingVertical:10,
                        }}>
                            <View style={styles.sheetOften}>
                                <Text style={styles.summaryTitle
                                }>
                                    How often do you need this?
                                </Text>
                            </View>
                            <FlatList
                                data={services}
                                keyExtractor={(item) => item.value}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        onPress={() => setSelectedService(item)}
                                        style={[
                                            styles.oftenBox,
                                            selectedService?.value === item.value && styles.selectedOften
                                        ]}
                                    >
                                        <View style={styles.oftenBoxHeader}>
                                            <Text style={styles.oftenTitle}>{item.label}</Text>
                                                  <Icon name={selectedService?.value === item.value ? "check-circle" : "checkbox-blank-circle-outline"} size={20} color={Colors.PRIMARY} />
                                       
                                        </View>
                                        {item.description.map((desc, index) => (
                                            <Text key={index} style={styles.oftendescription}>• {desc}</Text>
                                        ))}
                                    </TouchableOpacity>
                                )}
                            />
                     
                      
                        </View>
                          <TouchableOpacity
                            style={[styles.ApplyButton,{opacity: selectedService ?  1 : 0.5}]}
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
                                // onPress={() => navigation.navigate("NextScreen", { progress: 1.0 })}
                                disabled={progress !== 1.0}
                            >
                                <Text style={styles.nextText}>Checkout</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}

            </CustomRBSheet>

        </View>
    );
};




export default JobDateTime;
