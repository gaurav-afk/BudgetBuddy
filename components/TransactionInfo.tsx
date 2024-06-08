import React, { useState } from "react";
import { TextInput, View } from "react-native";
import styles from "../app/styles/components/TransactionInfo.style";
import { basicColors } from "../app/styles/colors";


export interface TransactionInfoProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  width?: string | number; // Optional width prop
}

export const TransactionInfo: React.FC<TransactionInfoProps> = ({
  placeholder,
  value,
  onChangeText,
  width = "100%",
}) => (
  <View style={[styles.infoContainer, { width }]}>
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor={basicColors.iconLight}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);


// export const TransactionInfo: React.FC<TransactionInfoProps> = ({
//   placeholder,
//   value,
//   onChangeText,
// }) => (
//   <View style={styles.infoContainer}>
//     <TextInput
//       style={styles.textInput}
//       placeholder={placeholder}
//       placeholderTextColor={basicColors.iconLight}
//       value={value}
//       onChangeText={onChangeText}
//     />
//   </View>
// );
