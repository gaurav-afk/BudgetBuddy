import React, { useEffect } from "react";
import { useState, useContext } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Button,
  Text,
  TextInput,
  Pressable,
  View,
  ImageBackground,
  Image,
} from "react-native";
import styles from "../app/styles/RegisterScreen.styles";
// import logger from "../utils/logger";
// import { createUser } from '../redux/thunks/authThunks';
// import Snackbar from 'react-native-snackbar';
import { useNavigation } from "@react-navigation/native";
// import screen from '../constants/screenNames';
// import { useDispatch, useSelector } from 'react-redux'
// import { RootState } from '../redux/store';
// import { errorNotified } from '../redux/slices/authSlice';
import { InputField } from "../components/InputField";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    useState<boolean>(false);
  // const dispatch = useDispatch();
  // const authState = useSelector((state: RootState) => state.auth);

  // useEffect(() => {
  //   if (authState.error) {
  //     Snackbar.show({
  //       text: `Failed to create account: ${authState.error}`,
  //       duration: Snackbar.LENGTH_SHORT,
  //     });

  //     dispatch(errorNotified());
  //   }
  // }, [authState]);

  // const togglePasswordVisibility = () => {
  //   logger.info("Toggle password visibility");
  //   setPasswordVisible(!passwordVisible);
  // };

  // const toggleConfirmPasswordVisibility = () => {
  //   logger.info("Toggle confirm password visibility");
  //   setConfirmPasswordVisible(!confirmPasswordVisible);
  // };

  // const onCreateBtnClicked = async () => {
  //   if (
  //     email.length == 0 ||
  //     password.length == 0 ||
  //     confirmPassword.length == 0
  //   ) {
  //     Snackbar.show({
  //       text: `All Inputs are required`,
  //       duration: Snackbar.LENGTH_SHORT,
  //     });
  //   }
  //   if (password !== confirmPassword) {
  //     Snackbar.show({
  //       text: `Password does not match with confirm password.`,
  //       duration: Snackbar.LENGTH_SHORT,
  //     });
  //     return;
  //   }
  //   // TODO: password validator
  //   if (password.length < 6) {
  //     Snackbar.show({
  //       text: `Password should have at least 6 characters`,
  //       duration: Snackbar.LENGTH_SHORT,
  //     });
  //     return;
  //   }

  //   dispatch(createUser({ email, password }));
  // };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      style={styles.scrollView}
    >
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.heading}>Create an{"\n"}account</Text>
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
            // icon={require('../assets/password.png')}
            icon={
              <Image
                source={require("../assets/images/password.png")}
                style={styles.fieldIcon}
              />
            }
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
            visibilityIcon={require("../assets/images/Visible.png")}
            // onVisibilityIconPress={togglePasswordVisibility}
          />
          <InputField
            label="Confirm Password"
            placeholder="Confirm Password"
            // icon={require('../assets/password.png')}
            icon={
              <Image
                source={require("../assets/images/password.png")}
                style={styles.fieldIcon}
              />
            }
            secureTextEntry={!confirmPasswordVisible}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            visibilityIcon={require("../assets/images/Visible.png")}
            // onVisibilityIconPress={toggleConfirmPasswordVisibility}
          />

          <Pressable>
            <Text style={styles.loginText}>Already a user? Login</Text>
          </Pressable>

          <TouchableOpacity
            style={styles.registerButton}
            // onPress={onCreateBtnClicked}
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
