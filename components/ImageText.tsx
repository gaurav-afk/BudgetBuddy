import React, { useState } from "react";
import { Text, View, Image } from "react-native";
// import { ImageTextProps } from "../types/components/ImageText"
import { ImageTextProps } from "../app/types/components/ImageText";
import styles from "../app/styles/components/ImageText.styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export const ImageTextSection: React.FC<ImageTextProps> = ({ icon, text }) => (
  <View style={styles.imageContainer}>
    <View style={styles.imageTextSection}>
      <FontAwesome name={icon} size={25} style={styles.image} />
      <Text style={styles.textView}>{text}</Text>
    </View>
  </View>
);
