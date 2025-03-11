import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../styles";
import MoreScreen from "../screens/more";
import MessagesScreen from "../screens/messages";
import DashboardScreen from "../screens/Dashboard";
import ProjectScreen from "../screens/project";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Dashboard":
              iconName = focused ? "view-dashboard" : "view-dashboard-outline";
              break;
            case "Services":
              iconName = focused ? "briefcase" : "briefcase-outline";
              break;
            case "Profile":
              iconName = focused ? "account-circle" : "account-circle-outline";
              break;
            case "Settings":
              iconName = focused ? "cog" : "cog-outline";
              break;
            default:
              iconName = "circle";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.GRAY,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: Colors.WHITE, height: 60, paddingBottom: 5 },
      })}
    >
      <Tab.Screen name="Dashboard"
        component={DashboardScreen}
        options={{ tabBarLabel: "Explore" }} />
      <Tab.Screen name="Profile"
        component={ProjectScreen}
        options={{ tabBarLabel: "Projects" }}
      />
      <Tab.Screen name="Services"
        component={MessagesScreen}
        options={{ tabBarLabel: "Messages" }} />
      <Tab.Screen name="Settings"
        component={MoreScreen}
        options={{ tabBarLabel: "More" }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
