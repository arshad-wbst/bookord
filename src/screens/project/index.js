import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProjectHome from "./ProjectHome";
import ProjectInfo from "./ProjectInfo";
import ManageProject from "./ManageProject";
import CancelBooking from "./CancelBooking";
const Stack = createStackNavigator();


const ProjectScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProjectHome" component={ProjectHome} />
      <Stack.Screen name="ProjectInfo" component={ProjectInfo}  />
      <Stack.Screen name="ManageProject" component={ManageProject}/>
      <Stack.Screen name="CancelBooking" component={CancelBooking} />
    </Stack.Navigator>
  );
};



export default ProjectScreen;
