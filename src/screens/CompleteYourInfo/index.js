import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import HomeAddress from "./homeAddress";
import BookingDetails from "./bookingDetails";
import PeopleAdded from "./peopleAdded";
import JobDateTime from "./jobDatetime";
import SummaryScreen from "./summaryScreen";
import ConfirmBooking from "./confirmBooking";
const Stack = createStackNavigator();


const CompleteScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
       name="HomeAddress"
        component={HomeAddress}
        initialParams={{ progress: 0.2 }} 
      />
       <Stack.Screen 
        name="BookingDetails" 
        component={BookingDetails} 
        initialParams={{ progress: 0.4 }} 
      />
      <Stack.Screen 
      name="PeopleAdded" 
      component={PeopleAdded}
      initialParams={{ progress: 0.6}} 
      />
      <Stack.Screen 
      name="JobDateTime"
       component={JobDateTime}
      initialParams={{ progress: 0.8}} 
      />
      <Stack.Screen
       name="SummaryScreen"
        component={SummaryScreen}
        initialParams={{process: 1.0}} />
        <Stack.Screen 
        name="ConfirmBooking"
        component={ConfirmBooking}
        initialParams={{process:1.0}} />
    </Stack.Navigator>
  );
};



export default CompleteScreen;
