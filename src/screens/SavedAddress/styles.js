import { StyleSheet } from 'react-native';
import { Colors } from '../../styles';
import { scaleSize } from '../../styles/mixins';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // paddingHorizontal: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
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
    saveText: {
        color: '#777777',
        fontSize: scaleSize(15),
        // color:Colors.TEXT_COLOR,
        fontWeight: '400',
        lineHeight: 19.6,
        letterSpacing: -0.03 * 15,
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F4FB',
        // right:5,
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
        marginTop: 4,
    },
    cardCity: {
        fontSize: 14,
        color: '#777',
    },
    editText: {
        fontSize: 14,
        color: 'purple',
        marginTop: 8,
    },
});
