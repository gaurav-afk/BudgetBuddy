import * as React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
//import { Picker } from '@react-native-picker/picker';
import styles from "../app/styles/components/FrequencyOverlay.styles";
import { InfoBlockProps } from "../app/types/components/InfoBlock";
import { FrequencyOverlayProps } from "../app/types/components/FrequencyOverlay";
import { FrequencyData } from "../app/types/dataModels";

export const InfoBlock: React.FC<InfoBlockProps> = ({
  label,
  value,
  onChangeValue,
}) => {
  const isPicker =
    label === "Execution" || label === "Times" || label === "Interval";
  const keyboardType =
    label === "Total" ||
    label === "Repayment Period" ||
    label === "Installment amount"
      ? "numeric"
      : "default";
  return (
    <View style={styles.infoBlock}>
      <Text style={styles.textLabel}>{label}</Text>
      {/* {isPicker ? (
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={value}
            style={styles.picker}
            onValueChange={itemValue => onChangeValue(itemValue)}
          >
            {label === 'Execution' ? (
              <>
                <Picker.Item label="Immediately" value="Immediately" />
                <Picker.Item label="Reminder" value="Reminder" />
              </>
            ) : (
              <>
                <Picker.Item label="Daily" value="Daily" />
                <Picker.Item label="Weekly" value="Weekly" />
                <Picker.Item label="Bi-Weekly" value="Bi-Weekly" />
                <Picker.Item label="Monthly" value="Monthly" />
                <Picker.Item label="Quarterly" value="Quarterly" />
                <Picker.Item label="Semi-Annually" value="Semi-Annually" />
                <Picker.Item label="Annually" value="Annually" />
              </>
            )}
          </Picker>
        </View>
      ) : (
        <TextInput
          style={styles.textValue}
          value={value}
          onChangeText={onChangeValue}
          keyboardType={keyboardType}
        />
      )} */}

      <TextInput
        style={styles.textValue}
        value={value}
        onChangeText={onChangeValue}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export const FrequencyOverlay: React.FC<FrequencyOverlayProps> = ({
  selectedTab,
  total,
  repaymentPeriod,
  installmentAmount,
  execution,
  interval,
  times,
  onClose,
}) => {
  const [currentSelectedTab, setCurrentSelectedTab] = useState(selectedTab);
  const [currentTotal, setCurrentTotal] = useState(total);
  const [currentRepaymentPeriod, setCurrentRepaymentPeriod] =
    useState(repaymentPeriod);
  const [currentInstallmentAmount, setCurrentInstallmentAmount] =
    useState(installmentAmount);
  const [currentExecution, setCurrentExecution] = useState(execution);
  const [currentInterval, setCurrentInterval] = useState(interval);
  const [currentTimes, setCurrentTimes] = useState(times);

  useEffect(() => {
    if (currentSelectedTab === "Installment") {
      setCurrentInstallmentAmount(
        calculateInstallment(currentTotal, currentRepaymentPeriod)
      );
    }
  }, [currentTotal, currentRepaymentPeriod]);

  const calculateInstallment = (total: string, period: string) => {
    const totalValue = parseFloat(total);
    const periodValue = parseFloat(period);
    if (!isNaN(totalValue) && !isNaN(periodValue) && periodValue !== 0) {
      return (totalValue / periodValue).toFixed(2);
    }
    return "0";
  };

  const handleSubmit = () => {
    const data: FrequencyData = {};
    if (currentSelectedTab === "Installment") {
      data.total = currentTotal;
      data.repaymentPeriod = currentRepaymentPeriod;
      data.installmentAmount = currentInstallmentAmount;
    } else if (currentSelectedTab === "Period") {
      data.interval = currentInterval;
      data.times = currentTimes;
      data.execution = currentExecution;
    } else if (currentSelectedTab === "Once") {
      data.execution = currentExecution;
    }
    onClose(currentSelectedTab, data);
  };
  const handleCancel = () => {
    onClose();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.advancedOptions}>
        <View style={styles.header}>
          <Text style={styles.advancedOptionsText}>Advance Options</Text>
        </View>
        <View style={styles.blockRow}>
          <TouchableOpacity
            style={[
              styles.block,
              currentSelectedTab === "Once" && styles.selectedTab,
            ]}
            onPress={() => setCurrentSelectedTab("Once")}
          >
            <Text
              style={[
                styles.blockText,
                currentSelectedTab === "Once" && styles.selectedTabText,
              ]}
            >
              Once
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.block,
              currentSelectedTab === "Period" && styles.selectedTab,
            ]}
            onPress={() => setCurrentSelectedTab("Period")}
          >
            <Text
              style={[
                styles.blockText,
                currentSelectedTab === "Period" && styles.selectedTabText,
              ]}
            >
              Period
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.block,
              currentSelectedTab === "Installment" && styles.selectedTab,
            ]}
            onPress={() => setCurrentSelectedTab("Installment")}
          >
            <Text
              style={[
                styles.blockText,
                currentSelectedTab === "Installment" && styles.selectedTabText,
              ]}
            >
              Installment
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.repaymentSummary}>
          {currentSelectedTab === "Once" && (
            <View style={styles.summaryLabels}>
              <InfoBlock
                label="Execution"
                value={currentExecution}
                onChangeValue={setCurrentExecution}
              />
            </View>
          )}
          {currentSelectedTab === "Period" && (
            <View style={styles.summaryLabels}>
              <InfoBlock
                label="Interval"
                value={currentInterval}
                onChangeValue={setCurrentInterval}
              />
              <InfoBlock
                label="Times"
                value={currentTimes}
                onChangeValue={setCurrentTimes}
              />
              <InfoBlock
                label="Execution"
                value={currentExecution}
                onChangeValue={setCurrentExecution}
              />
            </View>
          )}
          {currentSelectedTab === "Installment" && (
            <View style={styles.summaryLabels}>
              <InfoBlock
                label="Total"
                value={currentTotal}
                onChangeValue={setCurrentTotal}
              />
              <InfoBlock
                label="Repayment Period"
                value={currentRepaymentPeriod}
                onChangeValue={setCurrentRepaymentPeriod}
              />
              <InfoBlock
                label="Installment amount"
                value={currentInstallmentAmount}
                onChangeValue={setCurrentInstallmentAmount}
              />
            </View>
          )}
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.okButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
