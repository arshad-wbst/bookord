import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../styles";

const PasswordInput = ({ value, onChangeText ,isPassword}) => {
  const [secureText, setSecureText] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  // Password validation conditions
  const hasLetter = /[a-zA-Z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
  const hasMinLength = value.length >= 8;

  // Check if all conditions are met
  const isValidPassword = hasLetter && hasNumber && hasSpecialChar || hasMinLength;

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: isValidPassword ? "#DEE0E420" : "#FFFFFF",
            borderColor: isFocused ? "#641BB450" : "#E5E5E5",
          },
        ]}
      >
        <TextInput
          style={styles.input}
          secureTextEntry={secureText}
          placeholder="Password"
          placeholderTextColor={Colors.PLACEHOLDER_COLOR}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Text style={styles.showText}>{secureText ? "Show" : "Hide"}</Text>
        </TouchableOpacity>
      </View>

      {/* Validation List */}
    {isPassword && (
      <View style={styles.validationContainer}>
        <ValidationItem label="One letter (a-z)" isValid={hasLetter} />
        <ValidationItem label="One number (0-9)" isValid={hasNumber} />
        <ValidationItem label="One special character" isValid={hasSpecialChar} />
        <ValidationItem label="8 characters minimum" isValid={hasMinLength} />
      </View>
  )}

    </View>
  );
};

// Validation Item Component
const ValidationItem = ({ label, isValid }) => {
  return (
    <View style={styles.validationItem}>
      <Icon name={"check-circle"} 
            size={20} color={isValid ? "green" : "gray"} />
      <Text style={[styles.validationText, { color: isValid ? "green" : "gray" }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#1D2B3A",
    height: 50,
  },
  showText: {
    color: "gray",
    fontWeight: "600",
  },
  validationContainer: {
    marginTop: 10,
  },
  validationItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },
  validationText: {
    marginLeft: 5,
    fontSize: 14,
  },
});

export default PasswordInput;
