import { StyleSheet } from "react-native";
import { Colors, Typography } from "../../styles";
import { scaleSize } from "../../styles/mixins";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    header: {
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.INPUT_BORDER_COLOR,
        height: 58,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    iconPadding: {
        paddingRight: 5,
    },
    headerTitle: {
        color: Colors.TEXT_COLOR,
        fontSize: scaleSize(15),
        fontWeight: '700',
        lineHeight: 18,
        letterSpacing: 0.03 * 15,
        textAlign: 'center',
        fontFamily: Typography.FONT_FAMILY_GENERAL_REGULAR,
    },
    closeIcon: {
        padding: 10,
        marginRight: 10,
    },
    logoContainer: {
        padding: 30,
    },
    logo: {
        fontSize: scaleSize(23),
        fontWeight: 'bold',
        color: Colors.PRIMARY,
        fontFamily: Typography.FONT_FAMILY_TITLE_BOLD,
    },
    contentContainer: {
        width: '95%',
        marginTop: 25,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backText: {
        marginLeft: 8,
        fontSize: scaleSize(13),
        color: Colors.TEXT_COLOR,
        fontWeight: '500',
        lineHeight: 18.2,
    },
    title: {
        fontSize: scaleSize(24),
        fontWeight: '700',
        color: Colors.TEXT_COLOR,
        fontFamily: Typography.FONT_FAMILY_TITLE_BOLD,
        lineHeight: 33.6,
        letterSpacing: 0,
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
    emailtext:{
        fontSize: scaleSize(14),
        color: Colors.PRIMARY,
        fontFamily: Typography.FONT_FAMILY_MEDIUM,
        fontWeight:'700',
        lineHeight:19.6,
    },
    label: {
        fontSize: scaleSize(12),
        fontWeight: '500',
        color: Colors.TEXT_COLOR,
        marginBottom: 8,
        lineHeight: 14.4,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
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
})
export default styles;