import { StyleSheet } from 'react-native';
import { Colors } from '../../styles';
import { scaleSize } from '../../styles/mixins';

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F5F5F5" },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        //  backgroundColor:"cyan",
        paddingHorizontal: 18,
        borderBottomWidth: 1,
        borderBottomColor: Colors.INPUT_BORDER_COLOR
    },
    headerTitle: {
        fontSize: scaleSize(15),
        color: Colors.TEXT_COLOR,
        fontWeight: '700',
        lineHeight: 19.6,
        letterSpacing: -0.03 * 15,
    },
    headerTextContainer: { marginLeft: 10 },
    headerSubtitle: { fontSize: 12, color: "gray" },
    title: { fontSize: 18, fontWeight: "bold" },
    projectId: { fontSize: 14, color: "gray", marginBottom: 10,paddingTop:5 },
    description: { fontSize: 14, fontWeight: "bold" },
    subText: { fontSize: 14, color: "gray", marginBottom: 10 ,paddingTop:5},
    buttonContainer: { flexDirection: "row", justifyContent: "space-between",marginTop:10},
    button: { backgroundColor: "#FFFFFF", padding: 10, borderRadius: 20, width: "48%", alignItems: "center",borderWidth:1 ,borderColor:Colors.INPUT_BORDER_COLOR},
    buttonText: { fontSize: 14, fontWeight: "bold" },
    fullWidthCard: { backgroundColor: "#FFF", padding: 15, marginVertical: 5 },
    addButton:{},
    card: {
        backgroundColor: "white",
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
        color:Colors.TEXT_COLOR,
        fontWeight:'700',
        lineHeight: 19.6,
        letterSpacing: -0.03 * 15,
        marginBottom:10
      },
      serviceContent:{
        // backgroundColor: "cyan",
        borderWidth:1,
        borderColor:Colors.INPUT_BORDER_COLOR,
        padding: 15,
        borderRadius:8
      },
      titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        justifyContent:'space-between'
      },
      icon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
      },
      titleText: {
        fontSize: 18,
        fontWeight: "bold",
        color:"#313131"
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
      divider: {
        height: 1,
        backgroundColor: "#ddd",
        marginVertical: 10,
      },
      boldText: {
        fontWeight: "400",
        color:'#777777',
        fontSize: scaleSize(12),
      },
      serviceBottom:{
        // backgroundColor: "cyan",
        padding: 10,
        borderBottomWidth:1,borderBottomColor:Colors.INPUT_BORDER_COLOR
      },
      subtotal_txt:{
        fontWeight: "400",
        color: '#1B2431',
        fontSize: scaleSize(14),
        lineHeight: Math.round(scaleSize(14) * 1.2),
        letterSpacing: -0.03 * 14,
      },
      bottomContent:{
        paddingVertical:3,
        flexDirection: "row",
         alignItems: "center",
         justifyContent:'space-between'
      },
      booking_cost:{
        fontWeight: "500",
        color:'#1B2431',
        fontSize: scaleSize(15),
        lineHeight: Math.round(scaleSize(15) * 1.2),
        letterSpacing: -0.03 * 15,
      },
      bottomtxt:{
        fontWeight: "400",
        color:'#777777',
        fontSize: scaleSize(12),
        lineHeight: Math.round(scaleSize(14) * 1.4),
        letterSpacing: -0.03 * 12,
        marginTop:15
      },

      confirmationBox: {
        padding: 16,
        backgroundColor: "#fff",
      },
      heading: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 16,
      },
      progressContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
      },
      step: {
        alignItems: "center",
  // backgroundColor:'cyan'
      },
      activeStep: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor:Colors.PRIMARY,
        justifyContent: "center",
        alignItems: "center",
      },
      inactiveStep: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#E0E0E0",
      },
      activeText: {
        color: Colors.PRIMARY,
        fontSize: 12,
        marginTop: 5,
      },
      inactiveText: {
        color: "#B0B0B0",
        fontSize: 12,
        marginTop: 5,
      },
      line: {
        flex: 1,
        height: 5,
        backgroundColor: "#E0E0E0",
        // marginHorizontal: 5,
        borderRadius:15,
        marginBottom:15
      },
      bookingText: {
        fontSize: 14,
        color: "#333",
        marginBottom: 16,
      },
      divider: {
        height: 1,
        backgroundColor: "#E0E0E0",
        marginVertical: 16,
      },
      serviceCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5F1FC",
        padding: 12,
        borderRadius: 10,
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
        color:'#1B2431',
        fontSize: scaleSize(12),
        lineHeight: Math.round(scaleSize(14) * 1.2),
        letterSpacing: -0.03 * 12,
      },
});

export default styles;
