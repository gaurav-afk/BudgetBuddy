import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./styles/ForgotPwScreen.styles";
// import logger from "../utils/logger";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import { getResetPwdEmail } from '../services/authService';
// import Snackbar from 'react-native-snackbar';
import { useNavigation } from "@react-navigation/native";
// import { useSelector, useDispatch } from 'react-redux'
// import { RootState } from '../redux/store';
import { InputField } from "../components/InputField";

const ForgotPwScreen = () => {
  // const navigation = useNavigation()
  // const dispatch = useDispatch()
  // const authState = useSelector((state: RootState) => state.auth)
  // const [email, setEmail] = useState<string>("")

  // const onSendBtnClicked = async () => {
  //     const isEmailSent = await getResetPwdEmail(email)
  //     if(isEmailSent) {
  //       Snackbar.show({
  //         text: `Reset pwd email sent to ${email}`,
  //         duration: Snackbar.LENGTH_SHORT,
  //       });
  //     }
  //     else {
  //       logger.error("reset failed ")
  //       Snackbar.show({
  //         text: `Failed to send reset pwd email to ${email}`,
  //         duration: Snackbar.LENGTH_SHORT,
  //       });
  //     }
  // }

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      style={styles.scrollView}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" style={styles.backIcon} />
          <Text style={styles.backText}>back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Forgot password?</Text>
        <InputField
          label="Email"
          placeholder="Enter your email address"
          icon={<MaterialCommunityIcons name="email" style={styles.icon} />}
          // value={email}
          // onChangeText={setEmail}
        />

        <Text style={styles.instructions}>
          You will receive instructions to reset your password.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ForgotPwScreen;
