import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
} from 'react-native';
import { Colors } from '../../styles';
import PrimaryButton from '../../componets/PrimaryButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomTextInput from '../../componets/CustomTextInput';
import PasswordInput from '../../componets/PasswordInput';
import styles from './styles';
import { showMessage } from '../../componets/Toast';
import { userRegister } from '../../services/ServerRequest';

const  CompleteInfo = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false);
    const [mobileNumber, setMobileNumber] = useState(route.params?.mobileNo || '');
    const [email, setEmail] = useState(route.params?.emailID || '');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    // Refs for navigation between inputs
    const lastNameRef = useRef(null);
    const passwordRef = useRef(null);

    // Validate if all required fields are filled
    const validateFields = () => {
        return firstName.trim() !== '' && lastName.trim() !== '' && password.length >= 8;
    };

    // Handle form submission
    const handleNext = () => {
        if (validateFields()) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                // handle_Continue()
                navigation.navigate('Locationpage');
            }, 2000);
        } else {
            alert('Please fill all fields correctly.');
        }
    };

    const loginType = mobileNumber.length === 10 ? 'mobile' : 'email';
    const identifier = mobileNumber.length === 10 ? mobileNumber : email;

    const handle_Continue = async () => {
                try {
                    const res = await userRegister(firstName,lastName,identifier, password, loginType);
                    console.log(res.data,'okokokokook')
                    if(res.status === 200){
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
    
                    console.error("Info Error:", error?.response?.status);
                }

       
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            // style={{ flex:1}}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-left" size={24} color={Colors.BLACK} />
                </TouchableOpacity>

                <Text style={styles.title}>Complete your info</Text>
                <Text style={styles.label}>First Name</Text>
                
                <CustomTextInput
                    value={firstName}
                    onChangeText={(text) => setFirstName(text)}
                    placeholder="Enter first name"
                    keyboardType="default"
                    onSubmitEditing={() => lastNameRef.current?.focus()}
                    returnKeyType="next"
                />
                <Text style={styles.label}>Last Name</Text>
                <CustomTextInput
                    ref={lastNameRef}
                    value={lastName}
                    onChangeText={(text) => setLastName(text)}
                    placeholder="Enter last name"
                    keyboardType="default"
                    onSubmitEditing={() => passwordRef.current?.focus()}
                    returnKeyType="next"
                />

                {mobileNumber !== '' && (
                    <>
                        <Text style={styles.label}>Mobile Number</Text>
                        <CustomTextInput
                            editable={false}
                            value={mobileNumber}
                            placeholder="Enter mobile number"
                            keyboardType="numeric"
                            maxLength={10}
                        />
                    </>
                )}
                {email !== '' && (
                    <>
                        <Text style={styles.label}>Email Address</Text>
                        <CustomTextInput
                            editable={false}
                            value={email}
                            placeholder="Enter email address"
                            keyboardType="default"
                        />
                    </>
                )}

                <Text style={styles.label}>Create Password</Text>
                <PasswordInput
                   isPassword={true}
                    ref={passwordRef}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Enter password"
                    keyboardType="default"
                    returnKeyType="done"
                />
                <View style={styles.infoBox}>
                <Text style={styles.text}>
                By selecting <Text style={styles.boldText}>Next</Text>, I agree to Bookord’s{' '}
                <Text style={styles.boldText}>Terms of Service</Text>,{' '}
                <Text style={styles.boldText}>Payment Terms of Service</Text> &{' '}
                <Text style={styles.boldText}>Privacy Policy</Text>.
                </Text>

                </View>

                {/* Continue Button with Loading */}
                <PrimaryButton
                    title="Next"
                    onPress={handleNext}
                    loading={loading}
                    disabled={!validateFields()}
                    textColor="white"
                    customStyle={{
                        opacity: validateFields() ? 1 : 0.5,
                        backgroundColor: Colors.PRIMARY,
                        marginTop: 20,
                        alignSelf: 'center',
                        width: '100%',
                    }}
                />
            </ScrollView>
        </KeyboardAvoidingView>
        </View>
    );
}

export default CompleteInfo;

