import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity, ImageBackground, Pressable,
    Keyboard, TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../styles';
import CustomTextInput from '../../componets/CustomTextInput';
import PrimaryButton from '../../componets/PrimaryButton';
import styles from './styles';

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const isValidEmail = email.includes('@') && email.includes('.');
    const [loading, setLoading] = useState(false);

    const handleNext = () => {
        if (isValidEmail) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                navigation.navigate('ForgotResend', { emailID: email });
                console.log('Password reset link sent to:', email);
            }, 2000);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../assets/images/Forgot.png')}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                >
                    {/* Header */}
                    <View style={styles.header}>
                        <View style={styles.headerIcons}>
                            <Pressable onPress={() => alert('Icon pressed! left')} style={styles.iconPadding}>
                                <Icon name="arrow-left" size={22} color={Colors.INPUT_BORDER_COLOR} />
                            </Pressable>
                            <Pressable onPress={() => alert('Icon pressed! right')} style={styles.iconPadding}>
                                <Icon name="arrow-right" size={22} color={Colors.INPUT_BORDER_COLOR} />
                            </Pressable>
                        </View>
                        <Text style={styles.headerTitle}>Forgot Password?</Text>
                        <Pressable onPress={() => navigation.goBack()} style={styles.closeIcon}>
                            <Icon name="close" size={20} color={Colors.ICON_COLOR} />
                        </Pressable>
                    </View>
                    <View style={{ height: 60, width: '90%' }}/>


                    {/* Logo & Title */}
                    <View style={styles.logoContainer}>
                        <Text style={styles.logo}>Bookord</Text>
                    </View>

                    {/* Content */}
                    <View style={styles.contentContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <Icon name="arrow-left" size={24} color={Colors.ICON_COLOR} />
                            <Text style={styles.backText}>Back to login</Text>
                        </TouchableOpacity>

                        <Text style={styles.title}>Let's reset your password.</Text>
                        <Text style={styles.subtitle1}>We will email you a link you can use to reset your password.</Text>

                        <Text style={styles.label}>
                            Email Address <Text style={{ color: 'red' }}>*</Text>
                        </Text>

                        <View style={styles.inputContainer}>
                            <CustomTextInput
                                value={email}
                                onChangeText={setEmail}
                                placeholder="Enter email address"
                                keyboardType="default"
                                onFocus={() => console.log('Input Focused')}
                            />
                        </View>

                        <PrimaryButton
                            title="Next"
                            onPress={handleNext}
                            loading={loading}
                            textColor="white"
                            customStyle={{
                                opacity: loading || !isValidEmail ? 0.5 : 1,
                                backgroundColor: Colors.PRIMARY,
                                marginTop: 20,
                                alignSelf: 'center',
                                width: '100%',
                            }}
                        />
                    </View>

                    {/* Footer */}
                    <View style={styles.footerContainer}>
                        <View style={styles.footerInner}>
                            <Text style={styles.footer}>© 2024, Bookord. All rights reserved</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
};


export default ForgotPassword;
