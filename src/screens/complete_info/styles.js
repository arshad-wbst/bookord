import { StyleSheet } from "react-native";
import { Colors, Typography } from "../../styles";
import { scaleSize } from "../../styles/mixins";
const styles = StyleSheet.create({

    scrollContainer: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: Colors.WHITE,
    },
    text: {
        fontFamily: 'Basis Grotesque Pro',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16.8,
        letterSpacing: -0.03 * 12, // -3% letter spacing
        color: '#1D2B3A',
    },
    boldText: {
        fontWeight: '500',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: Typography.FONT_FAMILY_GENERAL_BOLD,
        color: Colors.BLACK,
        marginTop: 50,
    },
    label: {
        fontSize: 12,
        fontFamily: Typography.FONT_FAMILY_MEDIUM,
        color: Colors.TEXT_COLOR,
        marginBottom: 8,
        marginTop: 25,
        fontWeight: '500',
    },
    infoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.GRAY_LIGHT,
        borderRadius: 8,
        padding: 14,
        marginTop: 25,
    },
    infoText: {
        fontSize: scaleSize(12),
        color: Colors.ICON_COLOR,
        fontWeight: '500',
        fontFamily:Typography.FONT_FAMILY_SEMI_BOLD_ITALIC
    },
    underlinetext: {
        fontSize: scaleSize(13),
        fontWeight: '700',
        color: '#313131',
        fontFamily: Typography.FONT_FAMILY_GENERAL_REGULAR,
        lineHeight: 18.2,
        letterSpacing: 0,
        textDecorationLine: 'underline',
        marginTop: 25,

    },
    subtitle: {
        fontSize: scaleSize(14),
        fontWeight: '400',
        color: '#777777',
        fontFamily: Typography.FONT_FAMILY_GENERAL_REGULAR,
        lineHeight: 19.6,
        letterSpacing: 0,
        marginTop: 20,
        textAlign: "center"

    },
    allow_text:{
        fontSize: scaleSize(26),
        fontWeight: '700',
        color: Colors.TEXT_COLOR,
        fontFamily: Typography.FONT_FAMILY_TITLE_BOLD,
        lineHeight: 33.6,
        letterSpacing: 0,
    },
    contentContainer: {
        width: '95%',
        paddingHorizontal: 20,
        // backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
    },
})
export default styles;