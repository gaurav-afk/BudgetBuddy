import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import styles from "../styles/components/TransactionListItems.styles"
import { basicColors } from "../styles/colors";

const TransactionListItem = ({type, timestamp, amount}) => {
  return (
    <View style={styles.transactionContainer}>
        <View>
        <Text style={styles.transactionType}>{type}</Text>
        <Text style={styles.transactionSubHeading}>{timestamp}</Text>
        </View>
        <Text style={{ ...styles.transactionAmount, color: amount > 0 ? basicColors.numberPositive : basicColors.numberNegative }}>{amount < 0 && "-"}${Math.abs(amount)}</Text>
    </View>
  );
};

export default TransactionListItem;
