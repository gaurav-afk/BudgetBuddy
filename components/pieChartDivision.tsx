import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

const PieChartDivision = ({ title, percentage, color }) => {
  return (
    <View>
      <View style={s.indicatorAndTitleContainer}>
        <Icon name={"circle"} size={8} color={color} />
        <View>
          <Text style={s.reportDivisionTitle}>{title}</Text>
          <Text style={s.reportDivisionTitle}>{percentage}%</Text>
        </View>
      </View>
    </View>
  );
};

export default PieChartDivision;

const s = StyleSheet.create({
  reportDivisionTitle: {
    fontSize: 12,
    color: "#FFFAE6",
    paddingLeft: 10,
  },
  indicatorAndTitleContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "baseline",
    paddingBottom: 10,
  },
  indicator: {
    color: "red",
  },
});
