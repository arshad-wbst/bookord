import { StyleSheet } from "react-native";
import { Colors, Typography } from "../../styles";
import { scaleSize } from "../../styles/mixins";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: Colors.WHITE,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    countryCodeButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 90,
      height: 50,
      borderWidth: 1,
      borderColor:Colors.INPUT_BORDER_COLOR,
      borderRadius: 8,
      backgroundColor: Colors.WND_COLOR,
    },
    header: {
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative', 
      height: 50, 
  },
  
  backButton: {
      position: 'absolute',
      left: 0,
      zIndex: 1,
      // backgroundColor:"red"

  },
  
  headerTitle: {
      fontSize: 18,
      fontWeight: '400',
      textAlign: 'center',
      flex: 1,
      // backgroundColor:"red"

  },
  
    title: {
      fontSize: scaleSize(22),
      fontWeight: 'bold',
      fontFamily: Typography.FONT_FAMILY_GENERAL_BOLD,
      color: Colors.BLACK,
      marginTop: 55,
    },
    subtiltle:{
        fontSize: scaleSize(14),
        fontWeight: '400',
        fontFamily: Typography.FONT_FAMILY_GENERAL_REGULAR,
        color: Colors.TEXT_COLOR,
        marginTop: 10,
    },
    label: {
      fontSize: scaleSize(11),
      fontFamily: Typography.FONT_FAMILY_SEMI_BOLD,
      color: Colors.TEXT_COLOR,
      marginBottom: 8,
      marginTop: 35,
      fontWeight: '500'
    },
    infoBox: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.GRAY_LIGHT,
      borderRadius: 8,
      paddingTop: 14,
      paddingRight: 20,
      paddingBottom: 14,
      paddingLeft: 20,
      gap: 12,
      marginTop: 15,
    },
  
    infoText: {
      marginLeft: 5,
      fontSize: scaleSize(12),
      color: Colors.ICON_COLOR,
      fontWeight: '400',
      lineHeight: 16.8
    },
    dividerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 15,
    },
    divider: {
      flex: 1,
      height: 1,
      backgroundColor: Colors.GRAY_LIGHT,
    },
    orText: {
      marginHorizontal: 10,
      color: Colors.GRAY_DARK,
    },
    forhottext: {
        fontSize: scaleSize(14),
        fontFamily: Typography.FONT_FAMILY_GENERAL_BOLD,
        color: Colors.PRIMARY,
        marginBottom: 8,
        // marginTop: 20,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 19.6,
        letterSpacing: -0.03 * 14,
    },
    contentContainer: {
        width: '95%',
        marginTop: 25,
    },
    subtitle: {
        fontSize: scaleSize(14),
        color: Colors.TEXT_COLOR,
        marginBottom: 15,
        marginTop: 10,
        fontWeight:'400',
        lineHeight:19.6,
        fontFamily:Typography.FONT_FAMILY_MEDIUM
    },
    subtitle1: {
        fontSize: 14,
        color: '#777777',
        marginBottom: 20,
        marginTop: 10,
    },
    footerContainer: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        backgroundColor: '#F7F4FB',
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emailtext:{
        fontSize: scaleSize(14),
        color: Colors.PRIMARY,
        fontFamily: Typography.FONT_FAMILY_MEDIUM,
        fontWeight:'700',
        lineHeight:19.6,
    },
    footerInner: {
        width: '90%',
        paddingVertical: 3,
        alignItems: 'flex-start',
    },
    footer: {
        textAlign: 'center',
        fontSize: scaleSize(12),
        color: '#A0A4A8',
        fontFamily: Typography.FONT_FAMILY_GENERAL_REGULAR,
    },
  });
  export default styles;