import { StyleSheet } from 'react-native';
import { Colors } from '../../styles';
import { scaleSize } from '../../styles/mixins';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

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
        card: {
            backgroundColor: 'white',
            marginHorizontal: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            // elevation: 2,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: Colors.INPUT_BORDER_COLOR,

            width: '90%',
            padding: 16,
            marginVertical: 12,
            alignSelf: 'center',
        },
        /* 🔹 Top Section */
        topSection: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 8, 
        },
        logoContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        logo: {
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 10,
        },
        title: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        ratingContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        ratingText: {
            fontSize: 14,
            fontWeight: 'bold',
            marginLeft: 3,
        },
        reviewText: {
            fontSize: 12,
            color: 'gray',
            marginLeft: 3,
        },
        separator: {
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
            marginVertical: 8,
        },
        detailsContainer: {
            paddingTop: 10,
            // backgroundColor:'cyan'
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
        },
        text: {
            fontSize: 14,
            color: 'black',
            marginLeft: 5,
        },
        cardContent: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
});

export default styles;
