import { StyleSheet } from "react-native";
import { Colors } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    // paddingHorizontal: 15,
    // paddingTop: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  chipText: {
    fontSize: 14,
    color: "#333",
    marginRight: 5,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    // backgroundColor: "cyan",
    width:'100%'
  },

  backButton: {
    padding: 10,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1, 
    borderColor: "#ddd",
    borderRadius: 24, 
    paddingHorizontal: 12,
    height: 44,
  },

  searchIcon: {
    marginRight: 8, 
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },

  clearButton: {
    padding: 5,
  },
  resultText:{
    fontSize: 13,
    color: "#333",
  },
    header: { flexDirection:'column', 
      backgroundColor:"#fff",
      paddingHorizontal: 25,
      padding: 15,
      justifyContent:"center",
      alignItems:'flex-start',
      margin:5
    },
    title: { 
      fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10, fontWeight: "bold",
  color:Colors.TEXT_COLOR,

       },
    filterButton: { flexDirection: "row", 
      alignItems: "center",
       padding: 8,
        borderWidth: 1,
        borderRadius: 15,
        marginTop:5,
        borderColor:Colors.INPUT_BORDER_COLOR },
});

export default styles;
