import { StyleSheet } from "react-native";
import { Colors } from "../../styles";
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      contentContainer: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
      },
      title: {
        color: Colors.WHITE,
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      subtitle: {
        color: Colors.WHITE,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 40,
      },
      buttonContainer: {
        width: '100%',
        alignItems: 'center',
      },
})
export default styles;