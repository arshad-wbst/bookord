import React from 'react';
import {showMessage as notify} from 'react-native-flash-message';
import Toast from 'react-native-toast-message';
import { Colors, Typography } from '../styles';
export const showMessage = (msg, type) => {
  if (type === 'success') {
    notify({
      message: 'Message',
      description: msg,
      textStyle: {fontFamily: Typography.FONT_FAMILY_GENERAL_BOLD},
      titleStyle: {fontFamily: Typography.FONT_FAMILY_GENERAL_BOLD},
      type: 'success',
      icon: 'success',
      autoHide: true,
      animated: true,
      backgroundColor: '#51a351',
      animationDuration: 400,
      hideOnPress: true,
      duration: 4000,
      style: {alignItems: 'center', zIndex: 99999999999999},
    });
  } else if (type === 'error') {
    notify({
      message: 'Message',
      description: msg,
      textStyle: {fontFamily: Typography.FONT_FAMILY_GENERAL_BOLD},
      titleStyle: {fontFamily: Typography.FONT_FAMILY_GENERAL_BOLD},
      type: 'danger',
      icon: 'danger',
      autoHide: true,
      animated: true,
      backgroundColor: '#c34944',
      animationDuration: 400,
      hideOnPress: true,
      duration: 4000,
      style: {alignItems: 'center', zIndex: 99999999999},
    });
  } else if (type === 'info') {
    notify({
      message: 'Message',
      description: msg,
      textStyle: {
        fontFamily: Typography.FONT_FAMILY_GENERAL_BOLD,
        color: Colors.BLACK,
      },
      titleStyle: {
        fontFamily: Typography.FONT_FAMILY_GENERAL_BOLD,
        color: Colors.BLACK,
      },
      type: 'info',
      icon: 'info',
      autoHide: true,
      animated: true,
      animationDuration: 400,
      hideOnPress: true,
      duration: 4000,
      style: {alignItems: 'center', zIndex: 99999999999},
    });
  }
};
export const Top_Bottom_toast = (type, text1, text2) => {
  return Toast.show({
    type,
    position: 'bottom',
    text1,
    text2,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
    style: {
      backgroundColor: 'rgba(0, 0, 255, 0.8)',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    textStyle: {
      color: '#ffffff',
      fontSize: 16,
    },
  });
};