import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../styles";

const ManageProject = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Project</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Content */}
      <Text style={styles.subTitle}>Make changes to your project...</Text>

      {/* Options */}
      <TouchableOpacity
        style={styles.optionRow}
        onPress={() => navigation.navigate("CancelBooking")}
      >
        <Text style={styles.optionText}>Cancel Booking</Text>
        <Icon name="chevron-right" size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionRow}>
        <Text style={styles.optionText}>Change booking date or time</Text>
        <Icon name="chevron-right" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    // paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.INPUT_BORDER_COLOR,
    paddingHorizontal: 20
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
    color: "#6D6D6D",
    marginBottom: 20,
    paddingHorizontal: 20,
    marginTop: 10
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#D3D3D3",
    paddingHorizontal: 10,
    width: '95%', alignSelf: "center"
  },
  optionText: {
    fontSize: 16,
  },
});

export default ManageProject;