import { StyleSheet } from "react-native";
import { Colors, Typography } from "../../styles";
import { scaleSize } from "../../styles/mixins";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.WHITE,
      },
      backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
      },
      title: {
        fontSize: scaleSize(24),
        fontFamily: Typography.FONT_FAMILY_GENERAL_BOLD,
        fontWeight: '700',
        lineHeight: 33.6,
        color: Colors.TEXT_COLOR,
        textAlign: "left",
        marginTop: 60,
      },
      subtitle: {
        fontSize: scaleSize(14),
        color: '#777777',
        fontWeight: '400',
        lineHeight: 19.6,
        marginTop: 8,
      },
      phoneNumber: {
        fontSize: scaleSize(14),
        fontWeight: '500',
        lineHeight: 19.6,
        color: '#1B2431',
        marginTop: 5,
      },
      otpContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 25,
      },
      otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: Colors.INPUT_BORDER_COLOR,
        borderRadius: 8,
        fontSize: scaleSize(18),
        fontFamily: Typography.FONT_FAMILY_MEDIUM,
        textAlign: 'center',
        marginRight: 10,
        color: '#23334A',
        fontWeight: '700',
      },
      resendContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 20,
      },
      didNotReceive: {
        color: '#1B2431',
        fontSize: scaleSize(14),
        fontWeight: '400',
        lineHeight: 19.6,
      },
      resendButton: {
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#1B2431',
        borderRadius: 25,
      },
      resendText: {
        color: '#1B2431',
        fontSize: scaleSize(13),
        fontWeight: '700',
      },
      loaderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 20,
      },

})
export default styles;