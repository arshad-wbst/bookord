import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Colors } from '../../styles';
import PrimaryButton from '../../componets/PrimaryButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PasswordInput from '../../componets/PasswordInput';
import { showMessage } from '../../componets/Toast';
import styles from './styles';
// import { ToastContext } from '../../componets/ToastProvider';
import { useToast } from '../../hook/useToast';
import CustomTextInput from '../../componets/CustomTextInput';
// import { useContext } from 'react';

const VerfiEmail = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(route.params?.emailID || '');
    const { showToast } = useToast();
    const isValid = password.length >= 8 && email;

    const handle_Change = async () => {
        if (!isValid) {
            showMessage("Enter a valid Password", "error");
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            showToast("email Updated! ✅");
            navigation.navigate('CheckInbox',{
                emailID: email
            })
        }, 2000);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Icon name="arrow-left" size={24} color={Colors.BLACK} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Email Address</Text>
                </View>
                <Text style={styles.title}>Verify email address</Text>
                <Text style={styles.subtiltle}>You need to input your details inorder to verify your email address.</Text>

                <Text style={[styles.label, { marginTop: 25 }]}>Email Address</Text>
                <View style={styles.inputContainer}>
                    <CustomTextInput
                        editable={false}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Enter email address"
                        keyboardType="default"
                        onFocus={() => console.log('Input Focused')}
                    />
                </View>
                <Text style={[styles.label, { marginTop: 25 }]}>Password</Text>
                <PasswordInput
                    isPassword={false}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter password"
                    keyboardType="default"
                    returnKeyType="done"
                />
                <PrimaryButton
                    title="Send Verification Email"
                    onPress={handle_Change}
                    loading={loading}
                    disabled={!isValid || loading}
                    textColor="white"
                    customStyle={{
                        opacity: loading ? 0.5 : isValid ? 1 : 0.5,
                        backgroundColor: Colors.PRIMARY,
                        marginTop: 30,
                        alignSelf: 'center',
                        width: '100%',
                    }}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default VerfiEmail;
