import * as typography from "../typography";
import { basicColors } from "../colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
      },
      header: {
        padding: 10,
        fontSize: 30,
        fontWeight: "bold",
        color: "#D6F1F1",
      },
    
      //    transaction Head
      transactionHeading: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#D6F1F1",
      },
      transactionSeeAll: {
        fontSize: 15,
        paddingRight: 5,
        color: "#676D75",
      },
      totalTransactionContainer: {
        paddingBottom: 50,
      },
      transactionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 30,
        paddingHorizontal: 10,
        alignItems: "flex-end",
      },
      transactionSubHeading: {
        fontSize: 12,
        color: "#ffffff",
      },
      transactionType: {
        fontSize: 18,
        color: "#ffffff",
      },
      receivedAmount: {
        fontSize: 15,
        fontWeight: "bold",
        // color: "#FF5F00",
        color: "#54A652",
      },
      transactionAmount: {
        fontSize: 15,
        fontWeight: "bold",
        // color: "#FF5F00",
        color: "#FF5F00",
      },
});