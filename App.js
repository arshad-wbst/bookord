/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './src/platform/gesture-handler';
import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, View, Platform, useColorScheme,Dimensions} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import Splash from './src/screens/splash/index';
import Login from './src/screens/Login/index';
import Startscreen from './src/screens/splash/startscreen';
import OTPVerification from './src/screens/otp';
import CompleteInfo from './src/screens/complete_info';
import SignUp from './src/screens/signup';
import LoginWoithPassword from './src/screens/Login/loginWoithPassword';
import ForgotPassword from './src/screens/forgotpassword/forgotPassword';
import ForgotResend from './src/screens/forgotpassword/forgotResend';
import Locationpage from './src/screens/complete_info/locationpage';
import MapScreen from './src/screens/address/mapscreen';

const Stack = createStackNavigator();

const App = () => {
  const initialScreen = 'Splash';
  const colorScheme = useColorScheme(); 


  useEffect(() => {
    if (Platform.OS === 'android') {
      // Set StatusBar background for Android based on theme
      StatusBar.setBackgroundColor(colorScheme === 'dark' ? '#641BB4' : '#641BB4');
    }
    // Update content color based on the system theme
    StatusBar.setBarStyle(colorScheme !== 'dark' ? 'light-content' : 'light-content');
  }, [colorScheme]);

  const slideFromRight = ({current, layouts}) => ({
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
      ],
    },
  });

  return (
    <>
    <SafeAreaProvider>
      <SafeAreaInsetsContext.Consumer>
        {insets => (
          <View style={[styles.container, {paddingTop: insets?.top}]}>
            <Stack.Navigator
              initialRouteName={initialScreen}
              screenOptions={{
                headerShown: false,
                cardStyleInterpolator: slideFromRight,
              }}>
              <>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Startscreen" component={Startscreen}/>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name="LoginWoithPassword" component={LoginWoithPassword}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="ForgotResend" component={ForgotResend}/>
                <Stack.Screen name="OTPVerification" component={OTPVerification}/>
                <Stack.Screen name="CompleteInfo"  component={CompleteInfo}/>
                <Stack.Screen name="Locationpage" component={Locationpage}/>
                <Stack.Screen name="MapScreen" component={MapScreen}/>
              </>
            </Stack.Navigator>
          </View>
        )}
      </SafeAreaInsetsContext.Consumer>
    </SafeAreaProvider>
    <FlashMessage
        position={{
          top: Platform.OS === 'ios' ? 80 : 50,
          right: 10,
          left: Dimensions.get('screen').width - 315,
        }}
        style={{zIndex: 999999999999999}}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.select({
      ios: '#641BB4',
      android: '#641BB4',
    }),
  },
});

export default App;


