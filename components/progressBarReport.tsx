import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ProgressBarReport = ({ progressSegments, monthYear }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.reportHeading}>{monthYear}</Text>

      <View style={styles.progressBar}>
        {progressSegments.map((segment, index) => (
          <View
            key={index}
            style={[
              styles.segment,
              {
                width: `${segment.value * 100}%`,
                backgroundColor: segment.color,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#272727",
    borderRadius: 20,
    margin: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  progressBar: {
    flexDirection: "row",
    height: 7,
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#e0e0df",
    borderRadius: 5,
    overflow: "hidden",
  },
  reportHeading: {
    fontSize: 15,
    color: "white",
    paddingBottom: 15,
  },
  segment: {
    height: "100%",
  },
});

export default ProgressBarReport;
