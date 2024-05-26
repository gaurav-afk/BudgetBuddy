import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomePage from "./homePage";
import Navigation from "@/Navigation";
import { NavigationContainer } from "@react-navigation/native";

const _layout = () => {
  return <Navigation />;
};

export default _layout;
