import { StyleSheet } from 'react-native';
import { Colors } from '../../styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // paddingHorizontal: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 18,
        borderBottomWidth: 1,
        borderBottomColor: Colors.INPUT_BORDER_COLOR

    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    description: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 15,
        paddingHorizontal: 18,paddingTop:10
    },
    notificationRow: {
        flexDirection: 'row',  
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: '95%',  
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        // backgroundColor:'red',
        alignSelf:"center"
    },
    textWrapper: {
        flex: 1, 
    },
    
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color: 'gray',
        marginTop: 5,
        flexShrink: 1,
        width: '80%',  
    },
    
});
