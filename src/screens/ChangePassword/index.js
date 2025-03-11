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
// import { useContext } from 'react';

const ChangePassword = ({ navigation }) => {
    const passwordRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const { showToast } = useToast(); 
    // const { showToast } = useContext(ToastContext); 
    const isValid = password.length >= 8 && newpassword.length >= 8;

    const handle_Change = async () => {
        if (!isValid) {
            showMessage("Enter a valid Password", "error");
            return;
        }


        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            showToast("Password Updated! ✅");
            // showMessage("Password changed successfully!", "success");
        }, 2000);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                {/* Back Button */}
                <View style={styles.header}>
                    {/* Back Button (Left Side) */}
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Icon name="arrow-left" size={24} color={Colors.BLACK} />
                    </TouchableOpacity>

                    {/* Centered Title */}
                    <Text style={styles.headerTitle}>Password</Text>
                </View>


                <Text style={styles.title}>Change Password</Text>
                <Text style={[styles.label, { marginTop: 25 }]}>Current Password</Text>
                <PasswordInput
                    isPassword={true}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter password"
                    keyboardType="default"
                    returnKeyType="done"
                />
                <Text style={[styles.label, { marginTop: 25 }]}>New Password</Text>
                <PasswordInput
                    isPassword={false}
                    ref={passwordRef}
                    value={newpassword}
                    onChangeText={setNewPassword}
                    placeholder="Enter new password"
                    keyboardType="default"
                    returnKeyType="done"
                />
                <PrimaryButton
                    title="Change"
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

export default ChangePassword;
