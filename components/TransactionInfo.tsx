import React, { useState } from "react";
import { TextInput, View } from "react-native";
import styles from "../app/styles/transactions.style";
import { basicColors } from "../app/styles/colors";

export const TransactionInfo: React.FC<TransactionInfoProps> = ({
  placeholder,
  value,
  onChangeText,
}) => (
  <View style={styles.infoContainer}>
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor={basicColors.iconLight}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);
