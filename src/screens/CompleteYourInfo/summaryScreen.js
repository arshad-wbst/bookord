import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList, Pressable, Alert, TextInput, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProgressBar } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { Colors } from "../../styles";
import CustomRBSheet from "../../componets/CustomRBSheet";
import PrimaryButton from "../../componets/PrimaryButton";
import moment from "moment";
import CustomTextInput from "../../componets/CustomTextInput";

const getCardType = (number) => {
    if (!number) return null;

    const visaRegex = /^4/;
    const masterCardRegex = /^5[1-5]/;

    if (visaRegex.test(number)) return "visa";
    if (masterCardRegex.test(number)) return "mastercard";

    return "default";
};

const SummaryScreen = ({ route }) => {
    const navigation = useNavigation();
    const refRBSheet = useRef(null);
    const [SheetType, setSheetType] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState(moment().format("YYYY-MM-DD"));
    const [showServiceDetails, setShowServiceDetails] = useState(true);
    const [promoCode, setPromoCode] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expdate, setExpDate] = useState('');
    const [cvvNumber, setCvvNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardField, setCardField] = useState('EmptyCard');
    const [cardType, setCardType] = useState(null);
    const progress = route.params?.progress || 1.0;

    const handleCardNumberChange = (text) => {
        let cleaned = text.replace(/\D/g, "").substring(0, 16);
        let formatted = cleaned.replace(/(\d{4})/g, "$1 ").trim();

        setCardNumber(formatted);
        setCardType(getCardType(cleaned));
    };

    const formatExpiryDate = (text) => {
        let cleaned = text.replace(/\D/g, ""); // Remove non-numeric characters

        if (cleaned.length > 4) {
            cleaned = cleaned.substring(0, 4); // Limit to MMYY
        }

        // Auto-insert "/" after first two digits (Month)
        if (cleaned.length >= 3) {
            cleaned = `${cleaned.substring(0, 2)}/${cleaned.substring(2)}`;
        }

        return cleaned;
    };

    const handleExpiryDateChange = (text) => {
        if (text.length < expdate.length) {
            // If user is deleting, update without formatting
            setExpDate(text);
        } else {
            setExpDate(formatExpiryDate(text));
        }
    };

    const openSheet = (type) => {
        setSheetType(type);
        setTimeout(() => {
            if (refRBSheet.current) {
                refRBSheet.current.open();
            }
        }, 100);
    };

    const closedSheet = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);

            if (refRBSheet.current) {
                refRBSheet.current?.close();
            }
        }, 2000);
    };

    const isValid =   cardNumber && expdate && cvvNumber && cardName;

    const handleNextPress = () => {
        if (!isValid) {
            Alert.alert("Error", "Please fill in all fields before proceeding.");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigation.navigate("ConfirmBooking", { progress: 1.0 });
        }, 1000);
    };

    const isCardValid = cardNumber && expdate && cvvNumber && cardName

    const handleCardVerify = () => {
        if (!isCardValid) {
            Alert.alert("Error", "Please fill in the valid card derails");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setCardField("CardData")
            // navigation.navigate("PeopleAdded", { progress: 1.0 });
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.headerTitle}>Summary</Text>
                    <Text style={{ color: '#ddd', fontWeight: '400' }}>Indoor Cleaning</Text>
                </View>

                <View style={{ width: 24 }} />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>

                <View style={styles.formContainer}>
                    <Text style={styles.label}>Reserve payment</Text>
                    <View style={styles.InfoBox}>
                        <Icon name="information" size={20} color="#1F2D3D" style={styles.icon} />
                        <Text style={styles.text}>
                            Pay nothing for this job today. You will be charged until after the job is completed.
                        </Text>
                    </View>


                    {cardField === "EmptyCard" ? (
                        <>
                            <Text style={styles.newCardText}>ADD NEW CARD</Text>
                            <Pressable
                                onPress={() => setCardField("CardField")}

                                style={styles.dropdown}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name="credit-card" size={24} color="black" />
                                    <Text style={styles.CardTextplaceholder}>
                                        Credit or Debit Card
                                    </Text>
                                </View>
                            </Pressable>
                        </>
                    ) : cardField === "CardField" ? (
                        <View style={styles.form}>
                            <Text style={styles.label}>Card Number <Text style={styles.required}>*</Text></Text>
                            <View style={styles.inputContainer}>
                                <CustomTextInput
                                    onChangeText={handleCardNumberChange}
                                    maxLength={19}
                                    value={cardNumber}
                                    placeholder="Enter card number"
                                    keyboardType="numeric"
                                    onFocus={() => console.log('Input Focused')}
                                    style={{
                                        flex: 1,
                                        fontSize: 16,
                                        letterSpacing: 1,
                                    }}
                                />
                                {cardType && (
                                    <Image
                                        source={
                                            cardType === "visa"
                                                ? require("../../assets/images/visacard.png")
                                                : cardType === "mastercard"
                                                    ? require("../../assets/images/mastercard.png")
                                                    : require("../../assets/images/defaultcard.png") // Default card icon
                                        }
                                        style={{
                                            width: 30,
                                            height: 20,
                                            position: "absolute",
                                            right: 10,
                                        }}
                                        resizeMode="contain"
                                    />
                                )}
                            </View>

                            <View style={styles.cardrow}>
                                <View style={styles.halfInputContainer}>
                                    <Text style={styles.label}>Expiry Date <Text style={styles.required}>*</Text></Text>
                                    <View style={styles.inputContainer}>
                                        <CustomTextInput
                                            value={expdate}
                                            onChangeText={handleExpiryDateChange}
                                            placeholder="MM/YY"
                                            keyboardType="numeric"
                                            maxLength={5}
                                            onFocus={() => console.log('Input Focused')}
                                            style={{ fontSize: 16, letterSpacing: 1 }}
                                        />
                                    </View>
                                </View>
                                <View style={styles.halfInputContainer}>
                                    <Text style={styles.label}>CVV <Text style={styles.required}>*</Text></Text>
                                    <View style={styles.inputContainer}>
                                        <CustomTextInput
                                            value={cvvNumber}
                                            onChangeText={(text) => {
                                                const cleanedText = text.replace(/[^0-9]/g, "");
                                                setCvvNumber(cleanedText);
                                            }}
                                            placeholder="Enter CVV"
                                            keyboardType="numeric"
                                            maxLength={3}
                                            secureTextEntry={true}
                                            onFocus={() => console.log("Input Focused")}
                                        />

                                    </View>
                                </View>
                            </View>
                            <Text style={styles.label}>Name on Card? <Text style={styles.required}>*</Text></Text>
                            <View style={styles.inputContainer}>
                                <CustomTextInput
                                    value={cardName}
                                    onChangeText={setCardName}
                                    placeholder="Enter Name Card"
                                    keyboardType="default"
                                    onFocus={() => console.log('Input Focused')}
                                />
                            </View>
                            <View style={{ height: 5, width: '90%' }} />
                            <PrimaryButton
                                title="Verify Card"
                                onPress={handleCardVerify}
                                loading={loading}
                                textColor="white"
                                customStyle={{
                                    opacity: !isCardValid || loading ? 0.5 : progress ? 1 : 0.6,
                                    backgroundColor: Colors.PRIMARY,
                                    alignSelf: 'center',
                                    width: '100%',
                                }}
                            />
                        </View>
                    ) : cardField === "CardData" ? (
                        <>
                            <Text style={styles.newCardText}>ADD NEW CARD</Text>
                            <Pressable
                                onPress={() => setCardField("CardField")}

                                style={styles.cardContainer}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    {cardType && (
                                        <Image
                                            source={
                                                cardType === "visa"
                                                    ? require("../../assets/images/visacard.png")
                                                    : cardType === "mastercard"
                                                        ? require("../../assets/images/mastercard.png")
                                                        : require("../../assets/images/defaultcard.png") // Default card icon
                                            }
                                            style={{
                                                width: 50,
                                                height: 40,
                                                right: 10,
                                            }}
                                            resizeMode="contain"
                                        />
                                    )}
                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={styles.cardText}>**** **** **** {cardNumber.slice(-4)}</Text>
                                        <Text
                                            style={styles.cardNameText}>
                                            {cardName}
                                        </Text>
                                    </View>

                                </View>
                                <Icon name="radiobox-marked" size={24} color={Colors.PRIMARY} />

                            </Pressable></>
                    ) : null}



                    {/* Service Provider Card */}
                    <View style={styles.serviceCard}>
                        <View style={[styles.serviceImage, { alignItems: "center", justifyContent: 'center' }]}>
                            <Icon name="tag-multiple" size={30} color={Colors.PRIMARY} />
                        </View>
                        <View style={styles.serviceInfo}>
                            <Text style={styles.serviceName}>Have a voucher or promo code? </Text>
                            <View style={styles.ratingRow}>
                                <Text style={styles.reviewCount}>
                                    Add promo code or voucher to enjoy discount on your booking.
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => openSheet("PromoCode")}
                            style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Icon name={"chevron-right"} size={24} color="#313131" />
                        </TouchableOpacity>
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
                        <View style={styles.serviceBottom}>
                            <View style={styles.bottomContent}>
                                <Text style={styles.subtotal_txt}>Sub Total</Text>
                                <Text style={styles.subtotal_txt}>₦ 12,300</Text>
                            </View>
                            <View style={styles.bottomContent}>
                                <Text style={styles.subtotal_txt}>Processing fee</Text>
                                <Text style={styles.subtotal_txt}>₦ 2,300</Text>
                            </View>
                            {promoCode && (
                                <View style={styles.bottomContent}>
                                    <Text style={[styles.subtotal_txt, { color: "#777777" }]}>Promo code (20% OFF)</Text>
                                    <Text style={[styles.subtotal_txt, { color: "#777777" }]}>- ₦ 2,100</Text>
                                </View>
                            )}
                            <View style={styles.bottomContent}>
                                <Text style={[styles.booking_cost]}>Booking Cost</Text>
                                <Text style={[styles.booking_cost, { color: "#1B2431" }]}>₦ 2,100</Text>
                            </View>
                        </View>
                        <Text style={styles.bottomtxt}>
                            By confirming booking, I agree to the{" "}
                            <Text style={styles.link} onPress={() => Linking.openURL("https://example.com/service-policy")}>
                                service policy
                            </Text>{" "}
                            and{" "}
                            <Text style={styles.link} onPress={() => Linking.openURL("https://example.com/refund-policy")}>
                                refund policy
                            </Text>
                            , I also agree to pay the full amount of the booking.
                        </Text>
                    </View>
                </View>
            </ScrollView >
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
                        title="Complete"
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

            <CustomRBSheet ref={refRBSheet} content={SheetType === "PromoCode" ? "high" : "medium"}>

                {SheetType === 'PromoCode' && (
                    <>
                        <View style={{
                            width: '95%',
                            paddingVertical: 10,
                        }}>
                            <View style={styles.sheetOften}>
                                <Text style={styles.summaryTitle}>Apply promo code</Text>
                            </View>
                            <View style={styles.promoContent}>
                                <Icon name="tag-multiple" size={50} color={Colors.PRIMARY} />
                            </View>
                            <View style={styles.promoContent}>
                                <Text style={styles.addPromoText}>Add promo code or voucher to enjoy discount on your bookings.</Text>
                            </View>
                            <View style={{ paddingVertical: 10, marginTop: 25 }}>
                                <Text style={styles.labelPromo}>Promo Code</Text>
                                <View style={styles.inputContainer}>
                                    <CustomTextInput
                                        value={promoCode}
                                        onChangeText={setPromoCode}
                                        placeholder="Enter Promo Code"
                                        keyboardType="default"
                                        multiline={true}
                                        onFocus={() => console.log('Input Focused')}
                                        // style={{ minHeight: 80, textAlignVertical: 'top' }}
                                    />
                                </View>
                            </View>
                            <PrimaryButton
                                title="Apply promo code"
                                onPress={() => {
                                    if (!loading && promoCode.trim()) {
                                        closedSheet();
                                    }
                                }}
                                loading={loading}
                                textColor="white"
                                customStyle={{
                                    opacity: loading || !promoCode.trim() ? 0.5 : 1,
                                    backgroundColor: Colors.PRIMARY,
                                    marginTop: 20,
                                    alignSelf: 'center',
                                    width: '100%',
                                }}
                            />
                        </View>

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
                                <Text style={styles.nextText}>Complete</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}

            </CustomRBSheet>

        </View >
    );
};

const DetailRow = ({ label, value }) => (
    <View style={styles.detailRow}>
        <Text style={styles.boldText}>{label}</Text>
        <Text>{value}</Text>
    </View>
);


export default SummaryScreen
