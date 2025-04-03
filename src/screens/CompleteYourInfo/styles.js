import { StyleSheet } from 'react-native';
import { Colors } from '../../styles';
import { scaleSize } from '../../styles/mixins';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 18,
        borderBottomWidth: 1,
        borderBottomColor: Colors.INPUT_BORDER_COLOR,
    },
    headerTitle: {
        fontSize: scaleSize(15),
        color: Colors.TEXT_COLOR,
        fontWeight: '700',
        lineHeight: 19.6,
        letterSpacing: -0.03 * 15,
    },
    saveText: {
        color: '#777777',
        fontSize: scaleSize(15),
        fontWeight: '400',
        lineHeight: 19.6,
        letterSpacing: -0.03 * 15,
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F4FB',

        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    addText: {
        fontSize: 14,
        color: '#1B2431',
        marginLeft: 5,
        fontWeight: '500'
    },
    card: {
        width: '90%',
        height: 136,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ddd',
        padding: 16,
        marginVertical: 12,
        alignSelf: 'center',
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardAddress: {
        fontSize: 14,
        color: '#555',
        marginTop: 8,
    },
    cardCity: {
        fontSize: 14,
        color: '#777',
        marginTop: 8,

    },
    continueButton: {
        backgroundColor: '#1B2431',
        paddingVertical: 14,
        alignItems: 'center',
        borderRadius: 8,
    },
    continueText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    // bookdetails 
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colors.INPUT_BORDER_COLOR,
        paddingHorizontal: 20
    },
    formContainer: { flex: 1, padding: 16 },
    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        marginTop: -10,
    },
    infoText: {
        fontSize: 14,
        color: "#333",
        marginLeft: 6,
    },
    linkText: {
        color: "#0056b3",
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#333",
    },
    dropdown: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: "white",
    },
    placeholder: {
        color: "#888",
    },
    newCardText: {
        color: '#777777',
        fontSize: scaleSize(10),
        fontWeight: '500',
        // lineHeight: 12.0,
        letterSpacing: -0.03 * 10,
        marginBottom: 8
    },
    selectedText: {
        color: "#000",
    },

    footerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        paddingBottom: 25,
        paddingTop: 10,
    },

    progressBar: {
        height: 5,
        borderRadius: 5,
        width: '100%',
        backgroundColor: '#eee',
    },

    footerContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 15,
        paddingHorizontal: 16
    },

    feeContainer: {
        flexDirection: 'column',
        width: '47%',
    },

    feeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    totalFeeLabel: {
        fontSize: 12,
        color: '#666',
    },

    totalFeeAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },

    expandIcon: {
        marginLeft: 5,
    },

    nextButton: {
        backgroundColor: "#7B8592",
        // paddingVertical: 14,
        // paddingHorizontal: 32,
        alignItems: "center",
        borderRadius: 25,
        width: '47%',
        height: 48,
        justifyContent: 'center'
    },

    nextText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },

    serviceCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5F1FC",
        // backgroundColor:Colors.WHITE,
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: Colors.INPUT_BORDER_COLOR,
        marginBottom: 20,
    },
    serviceImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    serviceInfo: {
        flex: 1,
    },
    serviceName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    ratingText: {
        fontSize: 14,
        marginLeft: 5,
        fontWeight: "500",
    },
    reviewCount: {
        fontSize: 12,
        color: "#666",
        marginLeft: 5,
    },
    viewProfile: {
        fontWeight: "500",
        color: "#1B2431",
        fontSize: 12,
    },
    //bottonsheet 
    summaryContainer: {
        paddingHorizontal: 16,
        paddingTop: 10,
        // backgroundColor:'cyan',
        width: '95%'
    },
    dragIndicator: {
        width: 40,
        height: 4,
        backgroundColor: "#E0E0E0",
        borderRadius: 2,
        alignSelf: "center",
        marginBottom: 10,
    },
    summaryTitle: {
        textAlign: "center",
        marginBottom: 16,
        fontSize: scaleSize(16),
        color: Colors.TEXT_COLOR,
        fontWeight: '700',
        lineHeight: 19.6,
        letterSpacing: -0.03 * 18,
    },
    serviceContainer: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "flex-start",
        paddingBottom: 10,

    },
    serviceTitle: {
        fontSize: 16,
        color: "#191D23",
        fontWeight: "500",
        paddingBottom: 5
    },
    servicePrice: {
        fontSize: 16,
        fontWeight: "600",
        color: "#191D23",
    },
    divider: {
        height: 1,
        backgroundColor: "#E0E0E0",
        marginVertical: 10,
    },
    paymentSummaryContainer: {
        backgroundColor: "#F8F6FC",
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    paymentSummaryTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#191D23",
        marginBottom: 10,
    },
    paymentRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    paymentLabel: {
        fontSize: 14,
        color: "#555",
    },
    paymentAmount: {
        fontSize: 14,
        fontWeight: "600",
    },
    ApplyButton: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        borderRadius: 25,
        marginTop: 10,
        alignItems: "center",
        width: '100%'
    },
    applyText: {
        color: "#fff", fontSize: 16, fontWeight: "bold"
    },
    sheetTitle: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.INPUT_BORDER_COLOR,
        paddingVertical: 3,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    description: {
        fontSize: 14,
        color: "#555",
        textAlign: "left",
        marginBottom: 20,
    },
    table: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        overflow: "hidden",
    },
    row: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        backgroundColor: "#fff",
    },
    headerTable: {
        backgroundColor: "#F5F5F5",
    },
    cell: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 10,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    borderRight: {
        borderRightWidth: 1,
        borderRightColor: "#ddd",
    },
    headerText: {
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
    },
    cellText: {
        fontSize: 14,
        color: "#333",
        textAlign: "center",
    },
    footer: {
        fontSize: 13,
        color: "#666",
        marginTop: 20,
        textAlign: "left",
    },

    // Bottom Sheet Styles
    sheetContent: {
        alignItems: "center",
        width: "100%",
        backgroundColor: "#F5F5F5",
        justifyContent: "center"
    },
    sheetImage: {
        width: "100%",
        height: 150,
        borderRadius: 10,
        marginBottom: 10
    },
    sheetTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 5,
        paddingHorizontal: 10
    },
    sheetDescription: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
        marginVertical: 5,
        paddingHorizontal: 10

    },
    sheetPrice: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
    closeButton: {
        marginTop: 20,
        paddingVertical: 10,
        borderRadius: 20,
        width: "95%",
        borderWidth: 1,
        alignItems: "center",
        alignSelf: 'center'
    },
    closeText: {
        fontSize: 16,
        color: "#333",
    },
    priceRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        width: "100%",
        backgroundColor: Colors.WHITE,
        paddingVertical: 10,
        paddingHorizontal: 10

    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
    },
    additionalText: {
        fontSize: 14,
        color: "#333",
        textAlign: "center",
        marginVertical: 10,
        paddingHorizontal: 10

    },

    includeTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
        paddingHorizontal: 10

    },

    bulletContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        paddingHorizontal: 15,
    },

    bulletPoint: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: "#333",
        marginRight: 8,
    },

    includeText: {
        fontSize: 14,
        color: "#555",
    },



    addButtonsheet: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#6A0DAD", // Purple
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: "#6A0DAD",
    },

    addedButton: {
        backgroundColor: "white",
        borderColor: "#6A0DAD",
    },

    addButtonText: {
        color: "white",
        fontSize: 16,
        marginRight: 5,
    },

    addedText: {
        color: "#6A0DAD",
        fontSize: 16,
        marginRight: 5,
    },

    addButtonIcon: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },

    checkIcon: {
        width: 18,
        height: 18,
        backgroundColor: Colors.PRIMARY,
        // borderRadius: 9,
        alignItems: "center",
        justifyContent: "center",
    },

    checkText: {
        color: "red", // Ensure text is red
        fontSize: 14,
        fontWeight: "bold",
        zIndex: 10, // Bring text above background
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    // job date and time page 

    slotButton: {
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 5,
        backgroundColor: "white"
    },
    slotText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black"
    },
    selectedButton: {
        backgroundColor: Colors.PRIMARY,
        borderColor: "#6A1B9A",

    },
    slotSlectedtext: {
        color: "white",
        // textDecorationLine: "underline"
    },
    InfoBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F3F4F6",
        padding: 18,
        borderRadius: 10,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        fontSize: 16,
        color: "#1F2D3D",
        fontWeight: "500",
        flexShrink: 1
    },
    dateBox: {
        width: '100%',
        // backgroundColor:"cyan",
        paddingVertical: 10,
        marginBottom: 10
    },
    question: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#1F2D3D",
    },
    required: {
        color: "red",
    },
    navContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    month: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#313131",
    },
    dateContainer: {
        alignItems: "center",
        marginHorizontal: 8,
    },
    dayOfWeek: {
        fontSize: 14,
        color: "#000",
        marginBottom: 5,
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0F0F0",
    },
    selectedCircle: {
        backgroundColor: Colors.PRIMARY
    },
    dayNumber: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#313131",
    },
    selectedDayText: {
        color: Colors.PRIMARY,
        fontWeight: "bold",
    },
    selectedDateText: {
        color: "white",

    },
    oftenBox: {
        width: "100%",
        padding: 15,
        backgroundColor: "#FFF",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        marginTop: 20,
    },
    selectedOften: {
        borderColor: "#6A1B9A",
    },
    oftenBoxHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: Colors.INPUT_BORDER_COLOR,
        paddingVertical: 8
    },
    oftenTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    oftendescription: {
        fontSize: 14,
        color: "#666",
        paddingVertical: 5
    },
    sheetOften: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.INPUT_BORDER_COLOR,
        paddingVertical: 3,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    // summary page 
    CardTextplaceholder: {
        color: Colors.TEXT_COLOR,
        fontSize: scaleSize(13),
        fontWeight: '500',
        lineHeight: 19.6,
        letterSpacing: -0.03 * 13,
        paddingLeft: 5
    },
    ServiceTable: {
        // backgroundColor: "cyan",s
        // borderRadius: 10,
        padding: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    serviceHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    sectionTitle: {
        fontSize: scaleSize(14),
        fontWeight: "bold",
        color: Colors.TEXT_COLOR,
        fontWeight: '700',
        lineHeight: 19.6,
        letterSpacing: -0.03 * 15,
        marginBottom: 10
    },
    serviceContent: {
        // backgroundColor: "red",
        borderWidth: 1,
        borderColor: Colors.INPUT_BORDER_COLOR,
        padding: 15,
        borderRadius: 8,
        width: '100%'
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    serviceIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    titleText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#313131"
    },
    serviceDivider: {
        height: 1,
        backgroundColor: "#ddd",
        marginVertical: 10,

    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
    },
    column: {
        flex: 1,
        alignItems: 'flex-start'
    },
    verticalDivider: {
        width: 1,
        height: "100%",
        backgroundColor: "#ddd",
        marginHorizontal: 10,
    },
    boldText: {
        fontWeight: "400",
        color: '#777777',
        fontSize: scaleSize(12),
    },
    serviceBottom: {
        // backgroundColor: "cyan",
        padding: 10,
        borderBottomWidth: 1, borderBottomColor: Colors.INPUT_BORDER_COLOR
    },
    subtotal_txt: {
        fontWeight: "400",
        color: '#1B2431',
        fontSize: scaleSize(14),
        lineHeight: Math.round(scaleSize(14) * 1.2),
        letterSpacing: -0.03 * 14,
    },
    bottomContent: {
        paddingVertical: 3,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    booking_cost: {
        fontWeight: "500",
        color: '#1B2431',
        fontSize: scaleSize(15),
        lineHeight: Math.round(scaleSize(15) * 1.2),
        letterSpacing: -0.03 * 15,
    },
    bottomtxt: {
        fontWeight: "400",
        color: '#777777',
        fontSize: scaleSize(12),
        lineHeight: Math.round(scaleSize(14) * 1.4),
        letterSpacing: -0.03 * 12,
        marginTop: 15
    },
    addPromoText: {
        fontWeight: "400",
        color: Colors.TEXT_COLOR,
        fontSize: scaleSize(14),
        lineHeight: Math.round(scaleSize(14) * 1.4),
        letterSpacing: -0.03 * 14,
        textAlign: "center"
    },
    labelPromo: {
        fontWeight: "500",
        color: Colors.TEXT_COLOR,
        fontSize: scaleSize(12),
        lineHeight: Math.round(scaleSize(14) * 1.2),
        letterSpacing: -0.03 * 12,
        marginBottom: 8
    },
    promoContent: {
        alignItems: "center",
        justifyContent: 'center',
        paddingVertical: 5,
    },
    form: {
        flex: 1,
        // backgroundColor:'cyan',
        marginBottom: 10
    },
    cardrow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    halfInputContainer: {
        width: "48%",
        paddingVertical: 10
    },
    cardContainer: {
        padding: 12,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        // backgroundColor: "red",
        borderBottomWidth: 1, borderBottomColor: Colors.INPUT_BORDER_COLOR
    },
    cardText: {
        fontWeight: "bold",
        color: Colors.TEXT_COLOR,
        fontSize: scaleSize(15),
        lineHeight: Math.round(scaleSize(15) * 1.2),
        letterSpacing: -0.03 * 15,
        //   marginBottom:8,
    },
    cardNameText: {
        fontWeight: "500",
        color: '#777777',
        fontSize: scaleSize(14),
        lineHeight: Math.round(scaleSize(14) * 1.2),
        letterSpacing: -0.03 * 14,
        marginBottom: 8,
        textTransform: 'uppercase'
    },
    link: {
        textDecorationLine: "underline",
        color: "#007BFF", // Blue color for links
    },
    bookingconfirmtitle:{
        fontWeight: "400",
        color: Colors.TEXT_COLOR,
        fontSize: scaleSize(14),
        lineHeight: Math.round(scaleSize(14) * 1.2),
        letterSpacing: -0.03 * 14,
        marginBottom: 8,
    },
    bookingconfirmlable:{
        fontWeight: "700",
        color: Colors.TEXT_COLOR,
        fontSize: scaleSize(20),
        lineHeight: Math.round(scaleSize(20) * 1.2),
        letterSpacing: -0.03 * 20,
        marginBottom: 8,
    }

});
