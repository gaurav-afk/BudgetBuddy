import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Logo from "../assets/logo/BBlogo2.png";
import Group from "../assets/images/Group.png";
import Eye from "../assets/images/passEye.png";
import Lock from "../assets/images/passwordLock.png";
import Glow from "../assets/logo/glowEffect.png";
import React from "react";

const _layout = () => {
  const navigation = useNavigation();

  // const handlePress = () => {
  //   // Navigate to another screen
  //   navigation.navigate("SignUp");
  // };

  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "black", // Add a background color for the glow effect to be visible
      }}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Budget</Text>
          <Text style={styles.text}>Buddy</Text>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.welcomeText}>Back!</Text>
          </View>
        </View>
        <View>
          <Image source={Logo} style={styles.logo} />
        </View>
      </View>

      <View style={styles.inputContainerCollection}>
        <View style={styles.inputContainer}>
          <Image source={Group} style={styles.group} />
          <Text style={styles.inputField}>Username or Email</Text>
        </View>
        <View style={styles.inputContainer}>
          <Image source={Lock} style={styles.group} />
          <Text style={styles.inputField}>Password</Text>

          <View style={styles.eyeContainer}>
            <Image source={Eye} style={styles.group} />
          </View>
        </View>
      </View>

      <View style={styles.forgotPassContainer}>
        <Text style={styles.linkText}>Forgot password?</Text>
      </View>

      <View style={styles.signInButton}>
        <Text style={styles.signInText}>Sign In</Text>
      </View>

      <View style={styles.createAccountContainer}>
        <Text style={styles.inputField}>New User?</Text>
        {/* <TouchableOpacity onPress={handlePress}> */}
        <TouchableOpacity>
          <Text style={styles.linkText}> Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "12%",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  textContainer: {
    marginRight: 20,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  welcomeContainer: {
    marginTop: 40,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "500",
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    width: "90%",
    height: 60,
    backgroundColor: "#272727",
    marginBottom: 25,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 20,
    borderRadius: 20,
  },
  inputContainerCollection: {
    alignItems: "center",
    marginTop: "15%",
    width: "100%",
  },
  inputField: {
    color: "#D1D1D1",
    paddingLeft: 30,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  group: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
  eyeContainer: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 25,
  },
  signInButton: {
    flexDirection: "row",
    width: "90%",
    height: 60,
    backgroundColor: "#4CCD99",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    borderRadius: 20,
  },
  signInText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  forgotPassContainer: {
    width: "100%",
    // backgroundColor: "red",
    alignItems: "flex-end",
    paddingRight: 25,
    paddingBottom: 20,
  },
  createAccountContainer: {
    width: "100%",
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 25,
    paddingTop: 20,
  },
  linkText: {
    color: "#4CCD99",
  },
});

export default _layout;
