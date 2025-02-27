import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native';
import { Colors } from '../../styles';
import PrimaryButton from '../../componets/PrimaryButton';
import IconButton from '../../componets/IconButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomTextInput from '../../componets/CustomTextInput';
import PasswordInput from '../../componets/PasswordInput';
import { showMessage } from '../../componets/Toast';
import { setTokens } from '../../LocalStorage';
import { userLogin } from '../../services/ServerRequest';
import styles from './styles';



const LoginWoithPassword = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false);
    const [mobileNumber, setMobileNumber] = useState(route.params?.mobileNo || '');
    const [email, setEmail] = useState(route.params?.emailID || '');
    console.log(mobileNumber,email,'paramsdata')
    const [isEnabled, setIsEnabled] = useState(false);
    const [password, setPassword] = useState('');

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const loginType = mobileNumber.length === 10 ? 'mobile' : 'email';
    const identifier = mobileNumber.length === 10 ? mobileNumber : email;

    const handle_Continue = async () => {
        console.log(mobileNumber,password)
        if (mobileNumber.length === 10 || isValidEmail(email) && password.length >= 8) {
            setLoading(true);
            if (password) {
                try {
                    const res = await userLogin(identifier, password, loginType);
                    console.log(res.data,'okokokokook')
                    if(res.status === 200){
                        setTokens(res.data.token)
                        setTimeout(() => {
                        setLoading(false);
                        showMessage(res.data.message, "success");   
                        }, 2000);
                   }

                } catch (error) {
                    setLoading(false);
                    console.log(error.response,'error')
                    const msg = error?.response?.data?.message || "An error occurred";
                    showMessage(msg, "error");
    
                    if (error?.response?.status === 500) {
                        showMessage("Something went wrong!", "error");
                    }
    
                    console.error("Login Error:", error?.response?.status);
                }
            } else {
                setLoading(false);
            }
        } else {
            showMessage("Enter a valid mobile number or email", "error");
        }
    };

    // const changeSignupMode = (value) => {
    //     if (value === 'email') {
    //         setIsEnabled(true);
    //         setEmail('')
    //     } else {
    //         setMobileNumber('')
    //         setIsEnabled(false);
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
                <Text style={styles.title}>Login to your account</Text>

                {mobileNumber && (
                    <>
                        <Text style={styles.label}>Mobile Number</Text>
                        <View style={styles.inputContainer}>
                            <CustomTextInput
                                editable={false}
                                value={mobileNumber}
                                placeholder="Enter mobile number"
                                keyboardType="numeric"
                                maxLength={10}
                            />
                        </View>
                    </>
                )}
                {email && (
                    <>
                        <Text style={styles.label}>Email Address</Text>
                        <View style={styles.inputContainer}>
                            <CustomTextInput
                                editable={false}
                                value={email}
                                placeholder="Enter email address"
                                keyboardType="default"
                            />
                        </View>
                    </>
                )}
                <Text style={[styles.label, { marginTop: 25 }]}>Password</Text>
                <PasswordInput
                    isPassword={false}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Enter password"
                    keyboardType="default"
                    returnKeyType="done"
                />

                <PrimaryButton
                    title="Continue"
                    onPress={handle_Continue}
                    loading={loading}
                    textColor="white"
                    customStyle={{ 
                        opacity: (mobileNumber.length === 10 || isValidEmail(email)) && password.length >= 8 ? 1 : 0.5,
                        backgroundColor: Colors.PRIMARY,
                        marginTop: 30,
                        alignSelf: 'center',
                        width: '100%',
                    }}
                />
                <Pressable style={{alignSelf:'center',marginTop: 20,}}
                onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forhottext}>Forgot Password?</Text>
                </Pressable>

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
                    // onPress={() => changeSignupMode(isEnabled ? 'phone' : 'email')}
                    borderColor={Colors.ICON_COLOR}
                />

            </View>

        </TouchableWithoutFeedback>
    );
}

export default LoginWoithPassword;
