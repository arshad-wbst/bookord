import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import { Colors } from '../styles';

const OutlineButton = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: Colors.WHITE,
    paddingVertical: 14,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OutlineButton;

