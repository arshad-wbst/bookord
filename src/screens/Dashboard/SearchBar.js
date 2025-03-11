import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../styles";

const SearchBar = ({visible,showTooltip,onClose,onFocus}) => {
  // const [showTooltip, setShowTooltip] = useState(true);

  // useEffect(() => {

  //   const timer = setTimeout(() => {
  //     setShowTooltip(false);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (

    <View style={styles.wrapper}>

      <View style={styles.container}>
        <Icon name="magnify" size={20} color={Colors.GRAY} />
        <TextInput
          placeholder='Search for "Indoor Cleaning"'
          style={styles.input}
          // onKeyPress={onKeyPress}
          onFocus={onFocus}
        />
      </View>
      {showTooltip && (
        <View style={styles.tooltipWrapper}>

          <View style={styles.arrow} />

          <View style={styles.tooltipContainer}>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={onClose}
            >
              <Icon name="close" size={18} color={Colors.GRAY} />
            </TouchableOpacity>
            <Text style={styles.tooltipTitle}>
              We’ll match you with a professional.
            </Text>
            <Text style={styles.tooltipMessage}>
              We’re here to help get the chore off your list, affordably and
              stress free.
            </Text>
            <TouchableOpacity
              style={styles.tooltipButton}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Start searching</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>

  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    alignItems: "center",

  },
  container: {
    flexDirection: "row",
    backgroundColor: Colors.WHITE,
    width: "90%",
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    marginBottom:10
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },

  tooltipWrapper: {
    position: "absolute",
    top: 55, 
    width: "90%", 
    alignItems: "flex-start", 
  },
  arrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
    marginLeft: 30, 
    marginBottom: -1,
  },
  tooltipContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    width: "100%", 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10,
    padding: 5,
  },
  tooltipTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 5,
  },
  tooltipMessage: {
    fontSize: 14,
    color: "#555",
    textAlign: "left",
    marginBottom: 15,
  },
  tooltipButton: {
    backgroundColor: "#1E2A3D",
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default SearchBar;
