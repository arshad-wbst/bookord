import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Colors } from '../styles';

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  maxLength,
  placeholderTextColor = Colors.PLACEHOLDER_COLOR,
  onFocus,
  editable = true,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Email validation regex
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Check if it's a number input
  const isNumberInput = keyboardType === 'numeric' || keyboardType === 'phone-pad';

  // Determine if the input is valid based on type
  const isValid = isNumberInput
    ? value.length === maxLength 
    : isValidEmail(value); 

      // Check if the input has a value (not empty)
  const hasValue = value.trim().length > 0;

  return (
    <View style={[styles.container, (isFocused || hasValue) && styles.validBackground, isFocused && styles.focusedBorder]}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        maxLength={maxLength}
        placeholderTextColor={placeholderTextColor}
        onFocus={() => {
          setIsFocused(true);
          if (onFocus) onFocus();
        }}
        onBlur={() => setIsFocused(false)}
        editable={editable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#1D2B3A',
  },
  input: {
    height: 50,
    fontSize: 16,
    color: '#1D2B3A',
  },
  focusedBorder: {
    borderColor: '#641BB450', // Apply border color when focused
  },
  validBackground: {
    backgroundColor: '#DEE0E420', // Apply background color only when valid
  },
});

export default CustomTextInput;
