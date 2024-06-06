import React, { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  Pressable,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import styles from "./styles/SignInScreen.styles";
// import logger from "../utils/logger";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../redux/store";
// import { login } from "../redux/thunks/authThunks";
import { useNavigation } from "@react-navigation/native";
// import screen from "../constants/screenNames";
import { InputField } from "../components/InputField";

const SignInScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const navigation = useNavigation();
  // const dispatch = useDispatch();
  // const authState = useSelector((state: RootState) => state.auth);

  // const togglePasswordVisibility = () => {
  //   logger.info("Toggle password visibility");
  //   setIsPasswordVisible(!isPasswordVisible);
  // };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      style={styles.scrollView}
    >
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.mainTitle}>Budget{"\n"}Buddy</Text>
          <Image
            resizeMethod="auto"
            source={require("../assets/logo/app-icon.png")}
            style={styles.mainImage}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.subtitle}>Welcome{"\n"}Back!</Text>

          <View style={styles.formContainer}>
            <InputField
              label="Email"
              placeholder="Email"
              // icon={require('../assets/User.png')}
              icon={
                <Image
                  source={require("../assets/images/User.png")}
                  style={styles.fieldIcon}
                />
              }
              value={email}
              onChangeText={setEmail}
            />
            <InputField
              label="Password"
              placeholder="Password"
              secureTextEntry={isPasswordVisible}
              // icon={require('../assets/password.png')}
              icon={
                <Image
                  source={require("../assets/images/password.png")}
                  style={styles.fieldIcon}
                />
              }
              value={password}
              onChangeText={setPassword}
              visibilityIcon={require("../assets/images/Visible.png")}
              // onVisibilityIconPress={togglePasswordVisibility}
            />

            {/* <Pressable onPress={() => navigation.navigate(screen.FORGET_PWD)}> */}
            <Pressable>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </Pressable>
          </View>

          <TouchableOpacity
            style={styles.signInButton}
            // onPress={() => dispatch(login({ email, password }))}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          {/* <Pressable style={styles.newUserContainer} onPress={() => navigation.navigate(screen.REGISTER)}> */}
          <Pressable style={styles.newUserContainer}>
            <Text style={styles.newUserText}>New user?</Text>
            <Text style={styles.createAccountText}>Create account</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
