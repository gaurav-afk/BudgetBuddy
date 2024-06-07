import { StyleSheet } from "react-native";
import * as typography from "../typography"
import { basicColors } from "../colors"

export default StyleSheet.create({
    transactionContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 30,
      paddingHorizontal: 10,
      alignItems: "flex-end",
    },
    transactionSubHeading: {
      fontSize: typography.fontSizes.small,
      color: "#ffffff",
    },
    transactionType: {
      fontSize: typography.fontSizes.largeMedium,
      color: "#ffffff",
    },
    transactionAmount: {
      fontSize: typography.fontSizes.normal,
      fontWeight: typography.fontWeights.bold,
    },
  });