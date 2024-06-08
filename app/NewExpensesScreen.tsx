import React, { useState } from "react";
import {
  ScrollView,
  View,
  Modal,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TextStyle,
} from "react-native";
import styles from "../app/styles/NewExpensesScreen.styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ImageTextSection } from "../components/ImageText";
import { TransactionInfo } from "../components/TransactionInfo";
import { FrequencyOverlay } from "../components/FrequencyOverlay";
import { FrequencyData } from "./types/dataModels";

const NewExpensesScreen = () => {
  const [price, setPrice] = useState("");
  const [store, setStore] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState("2024/05/30 14:02:38");

  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Once");
  const [execution, setExecution] = useState("Immediately");
  const [interval, setInterval] = useState("Monthly");
  const [times, setTimes] = useState("Unlimited");
  const [total, setTotal] = useState("2400");
  const [repaymentPeriod, setRepaymentPeriod] = useState("12");
  const [installmentAmount, setInstallmentAmount] = useState("200");

  const handleOnceClick = () => {
    setOverlayVisible(true);
  };

  const handleCloseOverlay = (
    newSelectedTab = selectedTab,
    data: FrequencyData = {}
  ) => {
    setSelectedTab(newSelectedTab);
    if (newSelectedTab === "Installment") {
      setTotal(data.total || total);
      setRepaymentPeriod(data.repaymentPeriod || repaymentPeriod);
      setInstallmentAmount(data.installmentAmount || installmentAmount);
    } else if (newSelectedTab === "Period") {
      setInterval(data.interval || interval);
      setTimes(data.times || times);
      setExecution(data.execution || execution);
    } else if (newSelectedTab === "Once") {
      setExecution(data.execution || execution);
    }
    setOverlayVisible(false);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      style={styles.scrollView}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>New Expenses</Text>
        </View>

        <View style={styles.imageSectionsContainer}>
          <ImageTextSection icon="shopping-cart" text="Groceries" />
          <ImageTextSection icon="home" text="Rent" />
          <ImageTextSection icon="subway" text="Transport" />
          <ImageTextSection icon="plus" text="New" />
        </View>

        <View style={styles.purchaseDetailsContainer}>
          {/* Camera ---------------------------------------------------------------------------------- */}
          <View style={styles.productImage}>
            <FontAwesome name="camera" size={40} style={styles.scanIcon} />
          </View>
          {/* Name and price  ---------------------------------------------------------------------------------- */}
          <View style={styles.priceDetailsContainer}>
            <View style={styles.nameContainer}>
              <TransactionInfo
                placeholder="Name"
                value={name}
                onChangeText={setName}
                width="100%"
              />
            </View>
            <View style={styles.currencyPriceRow}>
              <View style={styles.currencyContainer}>
                <Text style={styles.currencyText}>USD</Text>
              </View>
              {/* <View style={styles.priceContainer}> */}
              <TransactionInfo
                placeholder="Price"
                value={price}
                onChangeText={setPrice}
                width="60%"
              />
            </View>
          </View>
        </View>

        {/* Store and adress ---------------------------------------------------------------------------------- */}
        <View style={styles.detailsGridContainer}>
          <View style={styles.detailsRow}>
            <TransactionInfo
              placeholder="Store"
              value={store}
              onChangeText={setStore}
              width="47%"
            />
            <TransactionInfo
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
              width="47%"
            />
          </View>
          
          {/* time and frequency ---------------------------------------------------------------------------------- */}
          <View style={styles.detailsRow}>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{time}</Text>
            </View>
            <TouchableOpacity
              style={styles.frequencyContainer}
              onPress={handleOnceClick}
            >
              <Text style={styles.frequencyText}>{selectedTab}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tags ---------------------------------------------------------------------------------- */}
        <Text style={styles.tagsText}>Tags #</Text>
        <View style={styles.tagsContainer}>
          <View style={styles.tagsRow}>
            <View style={styles.tag}>
              <Text>Tag1</Text>
            </View>
            <View style={styles.tag}>
              <Text>Tag2</Text>
            </View>
            <View style={styles.tag}>
              <Text>Tag3</Text>
            </View>
          </View>
          <View style={styles.tagsRow}>
            <View style={styles.tag}>
              <Text>Tag4</Text>
            </View>
            <View style={styles.tag}>
              <Text>Tag5</Text>
            </View>
            <View style={styles.addTag}>
              <Text>+</Text>
            </View>
          </View>
        </View>

        {/* Notes---------------------------------------------------------------------------------- */}
        <Text style={styles.notesText}>Notes</Text>
        <View style={styles.notesContainer}>
          <Text style={styles.notesText}>
            1. Scan Receipt And Adjust The Auto-Loaded Data Fields If Needed
          </Text>
          <Text style={styles.notesText}>
            2. Period & Instalment Are Under Frequency Field
          </Text>
        </View>

        <Modal
          visible={isOverlayVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => handleCloseOverlay()}
        >
          <View style={styles.overlayContainer}>
            <FrequencyOverlay
              selectedTab={selectedTab}
              total={total}
              repaymentPeriod={repaymentPeriod}
              installmentAmount={installmentAmount}
              execution={execution}
              interval={interval}
              times={times}
              onClose={handleCloseOverlay}
            />
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default NewExpensesScreen;
