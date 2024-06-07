import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import styles from "../styles/components/CashFlowContainer.styles"
import { basicColors } from "../styles/colors";

const CashFlowContainer = ({cashFlow}) => {

  return (
        <View style={styles.cashFlowContainer}>
          <FontAwesome
            name={cashFlow >= 0 ? "arrow-circle-up" : "arrow-circle-down"}
            size={35}
            color={cashFlow >= 0 ? basicColors.numberPositive : basicColors.numberNegative}
            style={styles.InAndExIcon}
          />
          <Text style={styles.InAndExText}>{cashFlow >= 0 ? "Income" : "Expenses"}</Text>
          <Text style={{ ...styles.amount, color: cashFlow > 0 ? basicColors.numberPositive : basicColors.numberNegative }}>{cashFlow < 0 && "-"}${Math.abs(cashFlow)}</Text>
        </View>
  );
};

export default CashFlowContainer;
