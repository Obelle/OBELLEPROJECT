import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import SelectDropdown from "react-native-select-dropdown";

const { width, height } = Dimensions.get("screen");
const WasteInfoForm = ({ formData, setFormData }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#7223CB", "transparent"]}
        style={[styles.image]}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Waste Information </Text>
        <View style={styles.item}>
          <Text style={styles.label}>Waste generated</Text>
          <SelectDropdown
            data={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
            defaultValue={formData.generated_waste}
            onSelect={(selectedItem, index) => {
              setFormData((state) => ({
                ...state,
                generated_waste: selectedItem.value,
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
            defaultButtonText="Select yes if you travel by air"
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
          <Text style={styles.label}>Select your age group</Text>
          <SelectDropdown
            data={[
              { label: "Below 18 to 30", value: "Below 18 to 30" },
              { label: "31 to 50", value: "31 to 50" },
              { label: "51 and above", value: "51 and above" },
            ]}
            defaultValue={formData.age_group}
            onSelect={(selectedItem, index) => {
              setFormData((state) => ({
                ...state,
                age_group: selectedItem.value,
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
            defaultButtonText="Select your age group"
            search
            buttonTextStyle={{ textAlign: "left", fontSize: 16 }}
            selectedRowTextStyle={{
              color: "#f7a400",
              fontWeight: "800",
              fontSize: 18,
            }}
            rowTextStyle={{ fontSize: 16 }}
          />
        </View>
      </View>
    </View>
  );
};

export default WasteInfoForm;

const styles = StyleSheet.create({
  container: { width, height, alignItems: "center", backgroundColor: "#000" },
  image: { width: "100%", flex: 1 },
  content: {
    position: "absolute",
    top: 150,
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
