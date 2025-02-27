import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Colors, } from '../../styles';
import PrimaryButton from '../../componets/PrimaryButton';
import IconButton from '../../componets/IconButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomTextInput from '../../componets/CustomTextInput';
import CountryPickerComponent from '../../componets/CountryPickerComponent';
import styles from './styles';


const Login = ({ navigation }) => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [countryData, setCountryData] = useState({ code: '+234', flag: '🇳🇬' });
  const [isEnabled, setIsEnabled] = useState(false);

  const handleInputChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setMobileNumber(numericText);
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handle_Continue = () => {
    if (mobileNumber.length === 10 || isValidEmail(email)) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);

        navigation.navigate('LoginWoithPassword', { mobileNo: mobileNumber, emailID: email });
      }, 2000);
    }
  };

  const changeSignupMode = (value) => {
    if (value === 'email') {
      setIsEnabled(true);
      setEmail('')
      setMobileNumber('')

    } else {
      setMobileNumber('')
      setEmail('')
      setIsEnabled(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="arrow-left" size={24} color={Colors.BLACK} />
        </TouchableOpacity>

        <Text style={styles.title}>Login to your account</Text>
        {!isEnabled ? (
          <>
            <Text style={styles.label}>Mobile Number</Text>
            <View style={styles.inputContainer}>
              <TouchableOpacity onPress={() => setPickerVisible(true)}
                style={styles.countryCodeButton}>
                <CountryPickerComponent
                  setPickerVisible={setPickerVisible}
                  isPickerVisible={isPickerVisible}
                  onSelect={(data) => setCountryData(data)} />
                {/* <Text style={styles.flagText}>{countryData.flag}</Text> */}
                <Text style={styles.callingCode}>{countryData.code}</Text>
                <Icon name="chevron-down" size={18} color="#3C4759" />
              </TouchableOpacity>

              <CustomTextInput
                value={mobileNumber}
                onChangeText={handleInputChange}
                placeholder="Enter mobile number"
                keyboardType="numeric"
                maxLength={10}
              />

            </View>
          </>
        ) : (
          <>
            <Text style={styles.label}>Email Address</Text>
            <View style={styles.inputContainer}>
              <CustomTextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Enter email address"
                keyboardType="default"
                onFocus={() => console.log('Input Focused')}
              />
            </View>
          </>
        )}
        <PrimaryButton
          title="Continue"
          onPress={handle_Continue}
          loading={loading}
          textColor="white"
          customStyle={{
            opacity: (mobileNumber.length === 10 || isValidEmail(email)) ? 1 : 0.5,
            backgroundColor: Colors.PRIMARY,
            marginTop: 30,
            alignSelf: 'center',
            width: '100%',
          }}
        />
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.divider} />
        </View>

        <IconButton
          title="Continue with WhatsApp"
          icon="whatsapp"
          textColor={Colors.ICON_COLOR}
          onPress={() => alert('WhatsApp button pressed')}
          borderColor={Colors.ICON_COLOR}
        />
        <IconButton
          title={isEnabled ? "Continue with Phone" : "Continue with Email"}
          icon="email"
          textColor={Colors.ICON_COLOR}
          onPress={() => changeSignupMode(isEnabled ? 'phone' : 'email')}
          borderColor={Colors.ICON_COLOR}
        />
      </View>

    </TouchableWithoutFeedback>
  );
}

export default Login;

