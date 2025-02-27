import React, { useState } from 'react';
import {View, Text, ImageBackground, Pressable, 
    Keyboard, TouchableWithoutFeedback ,Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../styles';
import PrimaryButton from '../../componets/PrimaryButton';
import styles from './styles';


const ForgotResend = ({ navigation,route }) => {
    const [email, setEmail] = useState(route.params?.emailID || '');
    const [loading, setLoading] = useState(false);

    const handleResend = () => {
        setLoading(true);
            setTimeout(() => {
                setLoading(false);
                Linking.openURL(`mailto:${email}`);
                console.log('Password reset link sent to:', email);
            }, 2000);
        
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../assets/images/Forgot.png')}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                >
                    <View style={styles.header}>
                        <View style={styles.headerIcons}>
                            <Pressable onPress={() => navigation.goBack()} style={styles.iconPadding}>
                                <Icon name="arrow-left" size={22} color={Colors.ICON_COLOR} />
                            </Pressable>
                            <Pressable onPress={() => alert('Icon pressed! right')} style={styles.iconPadding}>
                                <Icon name="arrow-right" size={22} color={Colors.INPUT_BORDER_COLOR} />
                            </Pressable>
                        </View>
                        <Text style={styles.headerTitle}>Forgot Password?</Text>
                        <Pressable onPress={() => navigation.replace('ForgotPassword')} style={styles.closeIcon}>
                            <Icon name="close" size={20} color={Colors.ICON_COLOR} />
                        </Pressable>
                    </View>
                    <View style={{height:60,width:'90%'}}></View>


                    <View style={styles.logoContainer}>
                        <Text style={styles.logo}>Bookord</Text>
                    </View>
                    <View style={{height:150,width:'90%'}}></View>

                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>Check your inbox</Text>
                        <Text style={styles.subtitle}>We sent a link to{' '}
                        <Text style={styles.emailtext}>{email}</Text>{' '}
                             to help set up a new password if you have an account with us.</Text>
                        <Text style={styles.subtitle}>
                        Check your spam folder if you don’t see the email.
                        </Text>

                        <PrimaryButton
                            title="Resend Link"
                            onPress={handleResend}
                            loading={loading}
                            textColor="white"
                            customStyle={{
                                opacity: loading ? 0.5 : 1,
                                backgroundColor: Colors.PRIMARY,
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

export default ForgotResend;
