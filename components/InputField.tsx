import React, { useState } from "react";
import { TextInput, Pressable, View, Image } from "react-native";
import { InputFieldProps } from "../app/types/components/InputField";
import styles from "../app/styles/InputField.styles";
import { basicColors } from "../app/styles/colors";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  secureTextEntry = false,
  icon,
  visibilityIcon,
  value,
  onChangeText,
  onVisibilityIconPress,
}) => (
  <View style={styles.formField}>
    <View style={styles.iconContainer}>
      {/* <Image source={icon} style={styles.fieldIcon} /> */}
      {icon}
    </View>

    <View style={styles.fieldText}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={basicColors.primaryLight}
        secureTextEntry={secureTextEntry}
        accessibilityLabel={label}
        value={value}
        onChangeText={onChangeText}
      />
    </View>

    {visibilityIcon && (
      <Pressable style={styles.iconContainer} onPress={onVisibilityIconPress}>
        <Image source={visibilityIcon} style={styles.fieldIcon} />
      </Pressable>
    )}
  </View>
);
