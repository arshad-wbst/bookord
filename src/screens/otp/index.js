import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Flow } from 'react-native-animated-spinkit';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Colors } from '../../styles';
import { showMessage } from '../../componets/Toast';
import { Otp_verify } from '../../services/ServerRequest';

const  OTPVerification = ({route}) => {
  const { mobileNo ,emailID} = route.params || {};
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false); 
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  // Function to handle OTP input
  const handleOtpChange = (text, index) => {
    if (/^[0-9]?$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Move focus to next input if available
      if (text && index < inputs.current.length - 1) {
        inputs.current[index + 1].focus();
      }

      // Check if all 4 digits are entered
      if (newOtp.every(digit => digit !== "")) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('CompleteInfo',{mobileNo:mobileNo,emailID:emailID});
        }, 2000);
      }
    }
  };

  // Function to handle backspace key press
  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const loginType = mobileNo.length === 10 ? 'mobile' : 'email';
  const identifier = mobileNo.length === 10 ? mobileNo : emailID;

  // const handle_Continue = async () => {
  //     if (mobileNo) {
  //         setLoading(true);
  //             try {
  //                 const res = await Otp_verify(identifier, loginType);
  //                 console.log(res.data,'okokokokook')
  //                 if(res.status === 200){
  //                     setTimeout(() => {
  //                     setLoading(false);
  //                     showMessage(res.data.message, "success");   
  //                     }, 2000);
  //                }

  //             } catch (error) {
  //                 setLoading(false);
  //                 console.log(error.response,'error')
  //                 const msg = error?.response?.data?.message || "An error occurred";
  //                 showMessage(msg, "error");
  
  //                 if (error?.response?.status === 500) {
  //                     showMessage("Something went wrong!", "error");
  //                 }
  
  //                 console.error("Otp Error:", error?.response?.status);
  //             }

  //     } else {
  //         showMessage("Enter a valid OTP", "error");
  //     }
  // };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color={Colors.BLACK} />
        </TouchableOpacity>
        <Text style={styles.title}>Verify your phone number</Text>
        <Text style={styles.subtitle}>Enter the code that was sent to your WhatsApp number</Text>
        <Text style={styles.phoneNumber}>{mobileNo ? `+${mobileNo}` : emailID}</Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>
        <View style={styles.resendContainer}>
          <Text style={styles.didNotReceive}>Did not receive the code?</Text>
          <TouchableOpacity style={styles.resendButton}>
            <Text style={styles.resendText}>Resend Code</Text>
          </TouchableOpacity>
        </View>
        {loading && (
          <View style={styles.loaderContainer}>
            <Flow size={40} color={"#23334A"} />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default OTPVerification;


