import { basicColors } from "../styles/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    formField: {
      borderRadius: 20,
      backgroundColor: basicColors.backgroundLight,
      display: "flex",
      marginTop: 33,
      flexDirection: "row",
      alignItems: "center",
      padding: 21,
    },
    iconContainer: {
      marginRight: 20,
    },
    // fieldIcon: {
    //   position: 'relative',
    // },
    fieldText: {
      flex: 1,
    },
    textInput: {
      color: basicColors.textPrimary,
    },
});
