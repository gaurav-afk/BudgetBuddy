import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const HomePage = () => {
  return (
    <SafeAreaView style={s.container}>
      <Text style={s.header}>Expenses</Text>
      <View style={s.InAndExContainer}>
        <View style={s.incomeContainer}>
          <FontAwesome
            name="arrow-circle-up"
            size={35}
            color="#54A652"
            style={s.InAndExIcon}
          />
          <Text style={s.InAndExText}>Income</Text>
          <Text style={s.InAmount}>$4000.00</Text>
        </View>
        <View style={s.expenseContainer}>
          <FontAwesome
            name="arrow-circle-down"
            size={35}
            color="#FF5F00"
            style={s.InAndExIcon}
          />
          <Text style={s.InAndExText}>Expenses</Text>
          <Text style={s.exAmount}>$1000.00</Text>
        </View>
      </View>

      <View style={s.balanceContainer}>
        <View style={s.InAndExContainer}>
          <Text style={s.balanceText}>Available balance</Text>
          <Text style={s.balanceAmount}>$3000</Text>
        </View>
      </View>

      <View>
        <View style={s.transactionContainer}>
          <Text style={s.transactionHeading}>Transactions</Text>
          <Text style={s.transactionSeeAll}>see all</Text>
        </View>
        <View style={s.transactionContainer}>
          <View>
            <Text style={s.transactionType}>Salary</Text>
            <Text style={s.transactionSubHeading}>18:27 - April 30</Text>
          </View>
          <Text style={s.receivedAmount}>$4000.00</Text>
        </View>
        <View style={s.transactionContainer}>
          <View>
            <Text style={s.transactionType}>Groceries</Text>
            <Text style={s.transactionSubHeading}>18:27 - April 30</Text>
          </View>
          <Text style={s.transactionAmount}>-$100.00</Text>
        </View>
        <View style={s.transactionContainer}>
          <View>
            <Text style={s.transactionType}>Rent</Text>
            <Text style={s.transactionSubHeading}>18:27 - April 30</Text>
          </View>
          <Text style={s.transactionAmount}>-$800.00</Text>
        </View>
        <View style={s.transactionContainer}>
          <View>
            <Text style={s.transactionType}>Transport</Text>
            <Text style={s.transactionSubHeading}>18:27 - April 30</Text>
          </View>
          <Text style={s.transactionAmount}>-$150.00</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const s = StyleSheet.create({
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

  //   Income and Expense View Style---------------------------------------------
  InAndExContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  incomeContainer: {
    width: "40%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 30,
    backgroundColor: "#272727",
  },
  InAmount: {
    color: "#54A652",
    fontSize: 20,
    fontWeight: "bold",
  },
  expenseContainer: {
    width: "40%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 30,
    backgroundColor: "#272727",
  },
  exAmount: {
    color: "#FF5F00",
    fontSize: 20,
    fontWeight: "bold",
  },
  InAndExIcon: {
    paddingBottom: 5,
  },
  InAndExText: {
    color: "#676D75",
    fontSize: 15,
  },
  //   Available Balance Container---------------------------------------------
  balanceContainer: {
    width: "90%",
    height: 80,
    backgroundColor: "#272727",
    justifyContent: "center",
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 20,
  },
  balanceText: {
    color: "#FFFFFF",
    alignSelf: "center",
  },
  balanceAmount: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
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
