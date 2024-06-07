import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomePage from "./homePage";
import Navigation from "@/Navigation";
import SignInScreen from "./signInScreen";
import RegisterScreen from "./RegisterScreen";
import NewExpensesScreen from "./NewExpensesScreen";
import { NavigationContainer } from "@react-navigation/native";
import ForgotPwScreen from "./forgotPwScreen";
import TransactionList from "./transaction_list";

const _layout = () => {
  // return <Navigation />;
  return <NewExpensesScreen />;
};

export default _layout;
