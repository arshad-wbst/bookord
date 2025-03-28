import React, { useRef, useState } from "react";
import {
    View, Text, TouchableOpacity, Image, FlatList, Pressable, Alert, KeyboardAvoidingView,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProgressBar } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { Colors } from "../../styles";
import CustomRBSheet from "../../componets/CustomRBSheet";
import PrimaryButton from "../../componets/PrimaryButton";
import PeopleAlsoAdd from "./peopleAlsoAdd";
import CustomTextInput from "../../componets/CustomTextInput";

const services = [
    {
        id: "1",
        title: "Cupboard Cleaning",
        description: "Messy cupboards? We will clean and arrange the...",
        price: "1,200",
        image: require("../../assets/images/plumbings.jpg"),
    },
    {
        id: "2",
        title: "Fridge Cleaning",
        description: "We will clean the refrigerator inside out.",
        price: "1,100",
        image: require("../../assets/images/cleaner.png"),
    },
    {
        id: "3",
        title: "Balcony Cleaning",
        description: "Messy balconies? We will clean and organize...",
        price: "2,100",
        image: require("../../assets/images/images.jpeg"),
    },
];

const PeopleAdded = ({ route }) => {
    const navigation = useNavigation();
    const refRBSheet = useRef(null);
    const [SheetType, setSheetType] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [added, setAdded] = useState(false);
    const [anything, setanything] = useState('');
    const [addedItems, setAddedItems] = useState({});

    const progress = route.params?.progress || 0.5;
    const hoursData = [
        { label: "1 Hour", value: "1" },
        { label: "2 Hours", value: "2" },
        { label: "3 Hours", value: "3" },
        { label: "4 Hours", value: "4" },
        { label: "5 Hours", value: "5" },

    ];
    const handleAddPress = (id) => {

        setAddedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));

    };

    const openSheet = (type, service) => {
        console.log("Opening Sheet:", type, service);

        if (!service) {
            console.warn("No service passed to openSheet");
            return;
        }

        setSheetType(type);
        setSelectedService(service);

        setTimeout(() => {
            if (refRBSheet.current) {
                console.log("Opening Sheet with Service:", selectedService);
                refRBSheet.current.open();
            }
        }, 200);
    };





    const handleNextPress = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            // navigation.navigate("NextScreen", { progress: 1.0 });
        }, 1000);
    };

    return (
  
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Popular Add-Ons</Text>
                <View style={{ width: 24 }} />
            </View>
            <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        style={{ flex: 1 }}
    >
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

                    <Text style={styles.label}>People also added</Text>
                    <View>
                        <FlatList
                            data={services}
                            renderItem={({ item }) => <PeopleAlsoAdd item={item} onPress={() => openSheet("Hours", item)} addedItems={addedItems} handleAddPress={handleAddPress} />}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                    <View style={{ paddingVertical: 10, marginTop: 20 }}>
                        <Text style={styles.label}>Anything else we should know?</Text>
                        <View style={styles.inputContainer}>
                        <CustomTextInput
                                value={anything}
                                onChangeText={setanything}
                                placeholder="Example: Ironing, window cleaning, etc"
                                keyboardType="default"
                                multiline={true} // Enable multiline
                                onFocus={() => console.log('Input Focused')}
                                style={{ minHeight: 80, textAlignVertical: 'top' }} // Adjust height
                            />
                        </View>
                    </View>
                </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <View style={styles.footerContainer}>
                <ProgressBar progress={progress} color="#6A1B9A" style={styles.progressBar} />
                <View style={styles.footerContent}>
                    <TouchableOpacity
                        onPress={() => openSheet("Summary", {})}
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
                            opacity: loading ? 0.5 : progress ? 1 : 0.5,
                            backgroundColor: Colors.PRIMARY,
                            marginTop: 20,
                            alignSelf: 'center',
                            width: '47%',
                        }}
                        disabled={progress !== 1.0 || loading}
                    />

                </View>
            </View>

            <CustomRBSheet ref={refRBSheet} content={SheetType === "Hours" ? "veryHigh" : "medium"}>
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

                {SheetType === "Hours" && selectedService && (
                    <View style={styles.sheetContent}>
                        <View style={{
                            backgroundColor: "#FFFFFF",
                            width: '100%',
                            alignItems: 'flex-start',
                            borderTopRightRadius: 15,
                            borderTopLeftRadius: 15
                        }}>
                            <Image source={selectedService.image} style={styles.sheetImage} />
                            <Text style={styles.sheetTitle}>{selectedService.title}</Text>
                            <Text style={styles.sheetDescription}>{selectedService.description}</Text>
                        </View>
                        <View style={styles.priceRow}>
                            <Text style={styles.sheetPrice}>₦ {selectedService.price}</Text>

                            <TouchableOpacity
                                onPress={() => handleAddPress(selectedService.id)}
                                style={[styles.addButton, {
                                    backgroundColor: addedItems[selectedService.id] ? 'white' : Colors.PRIMARY,
                                    borderWidth: addedItems[selectedService.id] ? 1 : 0,
                                    borderColor: addedItems[selectedService.id] ? Colors.PRIMARY : '',

                                }]}>
                                <Text style={[styles.addText, {
                                    color: addedItems[selectedService.id] ? Colors.PRIMARY : Colors.WHITE
                                }]}>{addedItems[selectedService.id] ? "Added" : "Add"}</Text>
                                <Icon name={addedItems[selectedService.id] ? "check-circle" : "plus"} size={20} color={addedItems[selectedService.id] ? Colors.PRIMARY : Colors.WHITE} />
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            backgroundColor: "#FFFFFF",
                            width: '100%',
                            alignItems: 'flex-start',
                            marginTop: 10
                        }}>
                            <Text style={styles.additionalText}>Additional 30 mins added to your booking.</Text>
                            <Text style={styles.includeTitle}>What’s included:</Text>
                            <View style={styles.bulletContainer}>
                                <View style={styles.bulletPoint} />
                                <Text style={styles.includeText}>Cleaning/wiping of interior and exterior cupboard surfaces.</Text>
                            </View>
                            <View style={styles.bulletContainer}>
                                <View style={styles.bulletPoint} />
                                <Text style={styles.includeText}>Arranging and organising storage/containers.</Text>
                            </View>
                            <TouchableOpacity style={styles.closeButton} onPress={() => refRBSheet.current.close()}>
                                <Text style={styles.closeText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </CustomRBSheet>
        </View>
    );
};




export default PeopleAdded;
