import React from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import { Flow } from 'react-native-animated-spinkit';
import { Colors } from '../styles';

const PrimaryButton = ({ title, onPress, customStyle, textColor, loading }) => {
  return (
    <Pressable onPress={loading ? null : onPress} style={[styles.button, customStyle]}>
      <View style={styles.contentWrapper}>
        {loading ? (
          <Flow size={25} color={"white"} />
        ) : (
          <Text style={[styles.text, { color: textColor || Colors.PRIMARY }]}>{title}</Text>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.WHITE,
    paddingVertical: 14,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  contentWrapper: {
    height: 20,  
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PrimaryButton;
