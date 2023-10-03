import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("screen");
const ElectricityInfoForm = ({ formData, setFormData }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#7223CB", "transparent"]}
        style={[styles.image]}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Energy Emmissions Information </Text>
        <View style={styles.item}>
          <Text style={styles.label}>Do you use energy?</Text>
          <SelectDropdown
            data={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
            defaultValue={formData?.energy_usage}
            onSelect={(selectedItem, index) => {
              setFormData((state) => ({
                ...state,
                energy_usage: selectedItem.value,
              }));
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.label;
            }}
            rowTextForSelection={(item, index) => {
              return item.label;
            }}
            buttonStyle={{
              borderRadius: 6,
              width: "100%",
            }}
            defaultButtonText="Select yes if you use gas and electrical ennergy"
            search
            buttonTextStyle={{ textAlign: "left", fontSize: 16 }}
            selectedRowTextStyle={{
              color: "#7223CB",
              fontWeight: "800",
              fontSize: 18,
            }}
            rowTextStyle={{ fontSize: 16 }}
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Gas Meter Type</Text>
          <SelectDropdown
            data={[
              { label: "Imperial", value: "imperial" },
              { label: "Metric", value: "metric" },
            ]}
            defaultValue={formData?.gas_meter_type}
            onSelect={(selectedItem, index) => {
              setFormData((state) => ({
                ...state,
                gas_meter_type: selectedItem.value,
              }));
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.label;
            }}
            rowTextForSelection={(item, index) => {
              return item.label;
            }}
            buttonStyle={{
              borderRadius: 6,
              width: "100%",
            }}
            defaultButtonText="Select measurement system"
            search
            buttonTextStyle={{ textAlign: "left", fontSize: 16 }}
            selectedRowTextStyle={{
              color: "#7223CB",
              fontWeight: "800",
              fontSize: 18,
            }}
            rowTextStyle={{ fontSize: 16 }}
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Gas Bill</Text>
          <TextInput
            style={styles.input}
            value={formData.gas_bill}
            onChangeText={(value) =>
              setFormData((state) => ({
                ...state,
                gas_bill: value,
              }))
            }
            placeholder="Enter gas bill"
            placeholderTextColor="#000"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Electricity Bill</Text>
          <TextInput
            style={styles.input}
            value={formData.electricity_bill}
            onChangeText={(value) =>
              setFormData((state) => ({
                ...state,
                electricity_bill: value,
              }))
            }
            placeholder="Enter electricity bill"
            placeholderTextColor="#000"
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
};

export default ElectricityInfoForm;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: "center",
    backgroundColor: "#1a1b4b",
  },
  image: { width: "100%", flex: 1 },
  content: {
    position: "absolute",
    top: 120,
    left: 0,
    padding: 20,
    width: "100%",
  },
  title: {
    color: "#f7a400",
    fontFamily: "Pacifico",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  item: {
    marginVertical: 10,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 6,
    height: 50,
  },
});
