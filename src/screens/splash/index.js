import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {SimpleAnimation} from 'react-native-simple-animations';
import { Colors } from '../../styles';


export default function Splash({navigation}) {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Startscreen');
    }, 5000);

  }, [navigation]);
  return (
    <View style={styles.container}>
      <SimpleAnimation delay={500} duration={5000}  movementType="spring" fade staticType="zoom">
        <Text style={{fontSize:24,fontStyle:'normal',fontWeight:'bold',color:Colors.WHITE}}>BookOrd</Text>
        {/* <Image
          source={require('../../assets/images/newlogo.png')}
          style={styles.img_style}
        /> */}
      </SimpleAnimation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img_style: {
    height: 134,
    width: 267,
    flexShrink: 0,
  },
});