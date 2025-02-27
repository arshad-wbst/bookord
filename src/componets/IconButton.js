import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Colors } from '../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scaleSize } from '../styles/mixins';
import { Typography } from '../styles';

export default function IconButton({ title, icon, textColor, onPress, borderColor }) {
  return (
    <TouchableOpacity
      style={[styles.button, { borderColor }]}
      onPress={onPress}
    >
      <View style={styles.content}>
        <Icon name={icon} size={24} color={textColor} style={styles.icon} />
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 10,
    position: 'absolute',
    left: 20,
  },
  text: {
    fontSize: scaleSize(14),
    fontFamily: Typography.FONT_FAMILY_MEDIUM,
    textAlign: 'center',
    fontWeight: '700', 
    lineHeight: 19.6,
    letterSpacing:0,
    flex: 1,
  },
});
