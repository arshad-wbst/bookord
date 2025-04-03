import React, { useEffect } from "react";
import { View, Platform, StatusBar, useColorScheme, Dimensions, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from "react-native-safe-area-context";
import FlashMessage from "react-native-flash-message";

// Import Screens
import Splash from "../screens/splash";
import Startscreen from "../screens/splash/startscreen";
import Login from "../screens/Login";
import SignUp from "../screens/signup";
import LoginWoithPassword from "../screens/Login/loginWoithPassword";
import ForgotPassword from "../screens/forgotpassword/forgotPassword";
import ForgotResend from "../screens/forgotpassword/forgotResend";
import OTPVerification from "../screens/otp";
import CompleteInfo from "../screens/complete_info";
import Locationpage from "../screens/complete_info/locationpage";
import MapScreen from "../screens/address/mapscreen";
import AdditionalAddressScreen from "../screens/address/additionalAddress";
import BottomTabNavigator from "./BottomTabNavigator";
import SearchScreen from "../screens/Search";
import EditAccountInfoScreen from "../screens/EditAccountInfo";
import ChangePassword from "../screens/ChangePassword";
import ToastProvider from "../componets/ToastProvider";
import VerfiEmail from "../screens/VerifyEmail";
import CheckInbox from "../screens/VerifyEmail/checkInbox";
import SavedAddresses from "../screens/SavedAddress";
import SavedBookOrd from "../screens/SavedBookord";
import NotificationSettings from "../screens/Notification";
import DescriptionScreen from "../screens/Description";
import ViewAll from "../screens/View";
import CategoryById from "../screens/Category_Idwise";
import CompleteScreen from "../screens/CompleteYourInfo";


const Stack = createStackNavigator();

const AppNavigator = () => {
  const initialScreen = "Splash";
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(colorScheme === 'dark' ? '#641BB4' : '#641BB4');
    }
    StatusBar.setBarStyle(colorScheme !== 'dark' ? 'light-content' : 'light-content');
  }, [colorScheme]);

  const slideFromRight = ({ current, layouts }) => ({
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
    <ToastProvider>
      <SafeAreaProvider>
        <SafeAreaInsetsContext.Consumer>
          {(insets) => (
            <View style={[styles.container, { paddingTop: insets?.top }]}>
              <NavigationContainer>
                <Stack.Navigator
                  // initialRouteName={initialScreen}
                  screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator: slideFromRight,
                  }}
                >
                  {/* <Stack.Screen name="Splash" component={Splash} />
                  <Stack.Screen name="Startscreen" component={Startscreen} />
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="SignUp" component={SignUp} />
                  <Stack.Screen name="LoginWoithPassword" component={LoginWoithPassword} />
                  <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                  <Stack.Screen name="ForgotResend" component={ForgotResend} />
                  <Stack.Screen name="OTPVerification" component={OTPVerification} />
                  <Stack.Screen name="CompleteInfo" component={CompleteInfo} />
                  <Stack.Screen name="Locationpage" component={Locationpage} />
                  <Stack.Screen name="MapScreen" component={MapScreen} />
                  <Stack.Screen name="AdditionalAddressScreen" component={AdditionalAddressScreen} /> */}

                  {/* Dashboard */}
                  <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
                  <Stack.Screen name="ViewAll" component={ViewAll} />
                  <Stack.Screen name="CategoryById" component={CategoryById}/>
                  <Stack.Screen name="SearchScreen" component={SearchScreen} />
                  <Stack.Screen name="EditAccountInfoScreen" component={EditAccountInfoScreen} />
                  <Stack.Screen name="ChangePassword" component={ChangePassword} />
                  <Stack.Screen name='VerfiEmail' component={VerfiEmail} />
                  <Stack.Screen name="CheckInbox" component={CheckInbox} />
                  <Stack.Screen name="SavedAddresses" component={SavedAddresses} />
                  <Stack.Screen name="SavedBookOrd" component={SavedBookOrd} />
                  <Stack.Screen name="NotificationSettings" component={NotificationSettings} />
                  <Stack.Screen name="DescriptionScreen" component={DescriptionScreen}/>
                  <Stack.Screen name="CompleteScreen" component={CompleteScreen}/>
                </Stack.Navigator>
              </NavigationContainer>

              {/* Flash Message */}
              <FlashMessage
                position={{
                  top: Platform.OS === "ios" ? 80 : 50,
                  right: 10,
                  left: Dimensions.get("screen").width - 315,
                }}
                style={{ zIndex: 999999999999999 }}
              />
            </View>
          )}
        </SafeAreaInsetsContext.Consumer>
      </SafeAreaProvider>
    </ToastProvider>
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

export default AppNavigator;
