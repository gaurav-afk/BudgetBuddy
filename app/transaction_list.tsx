import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import s from "./styles/screens/transactions.style";

const TransactionList = () => {
  return (
    <SafeAreaView style={s.container}>
      <Text style={s.header}>Transaction</Text>
      <ScrollView>
        <View style={s.totalTransactionContainer}>
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
          <View style={s.transactionContainer}>
            <View>
              <Text style={s.transactionType}>Groceries</Text>
              <Text style={s.transactionSubHeading}>18:27 - April 30</Text>
            </View>
            <Text style={s.transactionAmount}>-$100.00</Text>
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
              <Text style={s.transactionType}>Groceries</Text>
              <Text style={s.transactionSubHeading}>18:27 - April 30</Text>
            </View>
            <Text style={s.transactionAmount}>-$100.00</Text>
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
              <Text style={s.transactionType}>Groceries</Text>
              <Text style={s.transactionSubHeading}>18:27 - April 30</Text>
            </View>
            <Text style={s.transactionAmount}>-$100.00</Text>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransactionList;
