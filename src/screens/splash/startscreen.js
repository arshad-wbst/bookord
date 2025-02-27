import React, { useEffect } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import PrimaryButton from '../../componets/PrimaryButton';
import OutlineButton from '../../componets/OutlineButton';
import { userLogin } from '../../services/ServerRequest';
import styles from './style';

const  Startscreen =({ navigation }) => {
  // useEffect(() => {
  //   handleLogin(); 
  // }, []); 
  // const handleLogin = async () => {
  //   try {
  //     const res = await userLogin("muskan@gmail.com", "Muskan1234","email");
  //     console.log(res.data, "login response");
  //   } catch (error) {
  //     console.log(error?.response?.status);
  //   }
  // };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/bg_img.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Bookord</Text>
          <Text style={styles.subtitle}>
            Finding and connecting with trusted local{'\n'}professionals around you.
          </Text>

          <View style={styles.buttonContainer}>
            <PrimaryButton title="Sign up to Bookord" onPress={() => navigation.navigate('SignUp')} />
            <OutlineButton title="Login" onPress={() => navigation.navigate('Login')} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
export default  Startscreen;
