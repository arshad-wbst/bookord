import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { Animated, Text, View, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../styles';

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [message, setMessage] = useState('');
    const [visible, setVisible] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const showToast = (msg) => {
        setMessage(msg);
        setVisible(true);

        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();

        setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                setVisible(false);
                setMessage('');
            });
        }, 2000);
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <Animated.View style={[styles.toastContainer, { opacity: fadeAnim }]}>
                {visible && (
                    <>
                        <Icon name="check-circle" size={20} color="white" />
                        <Text style={styles.toastText}>{message}</Text>
                    </>
                )}
            </Animated.View>
        </ToastContext.Provider>
    );
};


const styles = StyleSheet.create({
    toastContainer: {
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center', 
        flexDirection: 'row',
        backgroundColor: Colors.PRIMARY,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        zIndex: 9999,
        elevation: 10,
        pointerEvents: 'none',
    
        // ✅ Dynamic width based on content
        minWidth: 100, // Prevents it from being too small
        maxWidth: '90%', // Allows wrapping for long text
    },
    toastText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center', // ✅ Ensures text is centered inside
        flexWrap: 'wrap', // ✅ Allows wrapping for long messages
        maxWidth: '100%', // ✅ Prevents overflow
    },   
});

export default ToastProvider;
