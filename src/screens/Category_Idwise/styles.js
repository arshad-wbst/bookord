import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../styles";
import { scaleSize } from "../../styles/mixins";


const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,

    },
    backButton: {
        marginRight: 15,
    },
    sectionTitle: {
        fontSize: scaleSize(15),
        color: Colors.TEXT_COLOR,
        fontWeight: '700',
        lineHeight: 19.6,
        letterSpacing: -0.03 * 15,
        marginBottom: 8
    },
    subText: {
        fontSize: scaleSize(14),
        color: "gray",
        marginBottom: 10,
        fontWeight: '400',
        lineHeight: 19.6,
        letterSpacing: -0.03 * 14,
    },
    mapContainer: {
        width: width,
        height: height / 3.5,
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 25,
        backgroundColor: Colors.WHITE,
        alignSelf: "center",
        alignItems: "center", 
        justifyContent: 'center',
        elevation:3
    },
    map: {
        width: "98%",
        height: "95%",
    },
    lable: {
       paddingVertical:5,
       paddingHorizontal:10,
    },
    categorylist:{
    
        margin:5,
        width:'95%',
        alignSelf:'center',
    },
    serviceCard: {
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "#F5F1FC",
        backgroundColor:Colors.WHITE,
        borderRadius: 10,
        paddingVertical:10,
        paddingHorizontal:5,
        borderWidth:1,
        borderColor:Colors.INPUT_BORDER_COLOR
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
    
      // Skeleton Styles
      skeletonImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#E0E0E0",
        marginRight: 10,
      },
      skeletonText: {
        width: "70%",
        height: 10,
        backgroundColor: "#E0E0E0",
        marginBottom: 6,
      },
      skeletonTextSmall: {
        width: "50%",
        height: 10,
        backgroundColor: "#E0E0E0",
      },
      skeletonButton: {
        width: 80,
        height: 15,
        backgroundColor: "#E0E0E0",
        borderRadius: 5,
      },



  
});

export default styles;
