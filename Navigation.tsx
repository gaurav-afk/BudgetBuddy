import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomePage from "./app/homePage";
import SignInScreen from "./app/signInScreen";
import Report from "./app/report";
import { NavigationContainer } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome"; // Import the appropriate icon library
import Icon2 from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: "rgba(34,36,40,1)",
          position: "absolute",
          borderTopWidth: 0,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
            return <Icon name={iconName} size={size} color={color} />;
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search";
            return <Icon name={iconName} size={size} color={color} />;
          } else if (route.name === "Scan") {
            iconName = focused ? "document-scanner" : "document-scanner";
            return <Icon2 name={iconName} size={size} color={color} />;
          } else if (route.name === "Report") {
            iconName = focused ? "analytics" : "analytics";
            return <Icon2 name={iconName} size={size} color={color} />;
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person";
            return <Icon2 name={iconName} size={size} color={color} />;
          }
          return null;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Scan"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={HomePage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer independent={true}>
      <TabGroup />
    </NavigationContainer>
  );
};

export default Navigation;
