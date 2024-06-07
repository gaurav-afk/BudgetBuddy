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
import { useNavigation } from "@react-navigation/native";
import { InputField } from "../components/InputField";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    useState<boolean>(false);

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
