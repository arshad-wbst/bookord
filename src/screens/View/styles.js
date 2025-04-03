import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../styles";
import { scaleSize } from "../../styles/mixins";


const { width,height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        marginHorizontal: 10,
        marginTop:10,
    },
    card: {
        width: width / 2 - 20,
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        padding: 10,
        margin: 5,
        alignItems: "center",
        // padding: 20,
        marginHorizontal: 10,
    },
    image: {
        width: "100%",
        height: 100,
        borderRadius: 10,
    },
    serviceTitle: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: "bold",
    },
    priceText: {
        fontSize: 12,
        color: Colors.PRIMARY,
        marginTop: 5,
    },
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
    noDataContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      noDataImage: {
        width: 125,
        height: 125,
        // marginBottom: 10,
      },
      noDataText: {
        fontSize: 16,
        color: "#888",
        marginBottom: 10,
      },
      homeButton: {
        backgroundColor: Colors.PRIMARY,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
      },
      homeButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
      },
      heartIcon: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: Colors.WHITE,
        padding: 5,
        borderRadius: 15,
        opacity:0.7
      },

      skeletonContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get("window").width / 3 - 20,
        margin: 10,
      },
      skeletonCircle: {
        width: Dimensions.get("window").width / 3 - 30,
        height: Dimensions.get("window").width / 3 - 30,
        borderRadius: (Dimensions.get("window").width / 3 - 30) / 2,
        backgroundColor: "#E0E0E0", // Light gray for skeleton effect
      },
      skeletonTitle: {
        marginTop: 8,
        width: 60,
        height: 12,
        borderRadius: 5,
        backgroundColor: "#E0E0E0",
      },
      skeletonPrice: {
        marginTop: 5,
        width: 40,
        height: 12,
        borderRadius: 5,
        backgroundColor: "#E0E0E0",
      },
      skeltonRactangle:{
        width: width / 2 - 20,
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        padding: 10,
        margin: 5,
        alignItems: "center",
        height: 120,
        marginHorizontal: 10,
      }
});

export default styles;
