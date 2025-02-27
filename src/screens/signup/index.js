import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Colors } from '../../styles';
import PrimaryButton from '../../componets/PrimaryButton';
import IconButton from '../../componets/IconButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomTextInput from '../../componets/CustomTextInput';
import CountryPickerComponent from '../../componets/CountryPickerComponent';
import styles from './styles';
import { send_otp } from '../../services/ServerRequest';
import { showMessage } from '../../componets/Toast';

const  SignUp = ({ navigation }) => {
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
//   const identifier = mobileNumber.length === 10 ? mobileNumber : email;

  const handle_Continue = () => {
        if (mobileNumber.length === 10 || isValidEmail(email)) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);

                navigation.navigate('OTPVerification', { mobileNo: mobileNumber,emailID:email });
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

    //   const handle_Continue = async () => {
    //     if (mobileNumber.length === 10 || isValidEmail(email)) {
    //         setLoading(true);
    //             try {
    //                 const res = await send_otp(identifier);
    //                 console.log(res.data,'okokokokook')
    //                 if(res.status === 200){
    //                     setTimeout(() => {
    //                     setLoading(false);
    //                     showMessage(res.data.message, "success");   
    //                     }, 2000);
    //                     navigation.navigate('OTPVerification', { mobileNo: mobileNumber,emailID:email });
    //                }

    //             } catch (error) {
    //                 setLoading(false);
    //                 console.log(error.response,'error')
    //                 const msg = error?.response?.data?.message || "An error occurred";
    //                 showMessage(msg, "error");
    
    //                 if (error?.response?.status === 500) {
    //                     showMessage("Something went wrong!", "error");
    //                 }
    
    //                 console.error("Login Error:", error?.response?.status);
    //             }

    //     } else {
    //         showMessage("Enter a valid mobile number or email", "error");
    //     }
    // };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}>
                    <Icon name="arrow-left" size={24} color={Colors.BLACK} />
                </TouchableOpacity>

                <Text style={styles.title}>Sign up to Bookord</Text>
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
                            onFocus={() => console.log('Input Focused')}
                        />

                    </View>
                </>
                ):(
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

                <View style={styles.infoBox}>
                    <Icon name="information" size={18} color={Colors.ICON_COLOR} />
                    <Text style={styles.infoText}>
                        You will receive an OTP code from Bookord  to confirm your number.
                    </Text>
                </View>

                <PrimaryButton
                    title="Continue"
                    onPress={handle_Continue}
                    loading={loading}
                    textColor="white"
                    customStyle={{
                        opacity: (mobileNumber.length === 10 || isValidEmail(email)) ? 1 : 0.5,
                        backgroundColor: Colors.PRIMARY,
                        marginTop: 20,
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
export default SignUp;

