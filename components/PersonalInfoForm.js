import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { CountryTest } from "../constants/countries";
import SelectDropdown from "react-native-select-dropdown";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("screen");
const PersonalInfoForm = ({ formData, setFormData }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#7223CB", "transparent"]}
        style={[styles.image]}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Personal Information </Text>
        <View style={styles.item}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your First Name"
            placeholderTextColor="#000"
            value={formData.firstName}
            onChangeText={(value) =>
              setFormData((state) => ({
                ...state,
                firstName: value,
              }))
            }
          />
        </View>
        {/* <View style={styles.item}>
          <Text style={styles.label}>Occupation</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Occupation"
            placeholderTextColor="#000"
            value={formData.occupation}
            onChangeText={(value) =>
              setFormData((state) => ({
                ...state,
                occupation: value,
              }))
            }
          />
        </View> */}
        <View style={styles.item}>
          <Text style={styles.label}>Country of Origin</Text>
          <SelectDropdown
            data={CountryTest}
            defaultValue={formData.countryOrigin}
            onSelect={(selectedItem, index) => {
              setFormData((state) => ({
                ...state,
                countryOrigin: selectedItem.label,
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
            defaultButtonText="Enter your Country of Origin"
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
          <Text style={styles.label}>Country of Residence</Text>
          <SelectDropdown
            data={CountryTest}
            defaultValue={formData.countryResidence}
            onSelect={(selectedItem, index) => {
              setFormData((state) => ({
                ...state,
                countryResidence: selectedItem.label,
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
            defaultButtonText="Enter your Country of Residence"
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
      </View>
    </View>
  );
};

export default PersonalInfoForm;

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
