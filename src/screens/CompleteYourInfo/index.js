import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import HomeAddress from "./homeAddress";
import BookingDetails from "./bookingDetails";
import PeopleAdded from "./peopleAdded";
const Stack = createStackNavigator();


const CompleteScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
       name="HomeAddress"
        component={HomeAddress}
        initialParams={{ progress: 0.3 }} 
      />
       <Stack.Screen 
        name="BookingDetails" 
        component={BookingDetails} 
        initialParams={{ progress: 0.6 }} 
      />
      <Stack.Screen 
      name="PeopleAdded" 
      component={PeopleAdded}
      initialParams={{ progress: 1.0}} 
      />
    </Stack.Navigator>
  );
};



export default CompleteScreen;
