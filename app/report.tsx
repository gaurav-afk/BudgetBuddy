import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PieChart from "react-native-pie-chart";
import PieChartDivision from "@/components/pieChartDivision";
import ProgressBarReport from "@/components/progressBarReport";

const Report = () => {
  const widthAndHeight = 130;
  const series = [40, 32, 28];
  const sliceColor = ["#12D284", "#2C7865", "#FF9800"];

  const progressSegments = [
    { value: 0.2, color: "#FF9800" },
    { value: 0.5, color: "#2C7865" },
    { value: 0.4, color: "#12D284" },
  ];

  return (
    <SafeAreaView style={s.container}>
      <View>
        <Text style={s.header}>Report</Text>

        {/* Main report card */}
        <View style={s.mainReportContainer}>
          <Text style={s.reportHeading}>May, 2024</Text>

          <View style={s.chartAndDescContainer}>
            <View style={s.pieContainer}>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                coverRadius={0.7}
                coverFill={"#272727"}
              />
            </View>

            <View style={s.descContainer}>
              <PieChartDivision
                title="savings"
                percentage="40"
                color={"#12D284"}
              />
              <PieChartDivision
                title="necessary"
                percentage="32"
                color={"#2C7865"}
              />
              <PieChartDivision
                title="extra"
                percentage="28"
                color={"#FF9800"}
              />
            </View>
          </View>
        </View>

        {/* Sub report card */}
        <View style={s.descContainer}>
          <ProgressBarReport
            progressSegments={progressSegments}
            monthYear={"April, 2024"}
          />
          <ProgressBarReport
            progressSegments={progressSegments}
            monthYear={"March, 2024"}
          />
          <ProgressBarReport
            progressSegments={progressSegments}
            monthYear={"February, 2024"}
          />
          <ProgressBarReport
            progressSegments={progressSegments}
            monthYear={"January, 2024"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Report;

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  pieContainer: {
    paddingTop: 10,
  },
  header: {
    padding: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "#D6F1F1",
  },
  mainReportContainer: {
    width: "95%",
    height: "auto",
    paddingVertical: 20,
    backgroundColor: "#272727",
    justifyContent: "center",
    marginTop: 20,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  reportHeading: {
    fontSize: 15,
    color: "white",
  },
  chartAndDescContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "flex-end",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  descContainer: {
    height: "80%",
  },
});