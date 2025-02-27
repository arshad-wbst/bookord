import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet,Text } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

const getFlagEmoji = (countryCode) => {
  return countryCode
    .toUpperCase()
    .split('')
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt()))
    .join('');
};

export default function CountryPickerComponent({ onSelect,isPickerVisible,setPickerVisible }) {
  // const [isPickerVisible, setPickerVisible] = useState(false);

  const handleSelectCountry = (country) => {
    let callingCode = country.callingCode && country.callingCode.length > 0 
      ? `+${country.callingCode[0]}` 
      : "N/A"; 
  
    // Manually set Antarctica's code if missing
    if (country.cca2 === "AQ") {
      callingCode = "+672";
    }
  
    const newCountryData = { 
      code: callingCode, 
      flag: getFlagEmoji(country.cca2)
    };
  
    setPickerVisible(false);
  
    if (onSelect) {
      onSelect(newCountryData);
    }
  };
  

  return (
    <View>
        <CountryPicker
        withCallingCode
        withFilter
        // withCountryNameButton={false}
        visible={isPickerVisible}
        // withFlagButton={false}
        onSelect={handleSelectCountry}
        onClose={() => setPickerVisible(false)}
        renderFlagButton={() => null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
});
