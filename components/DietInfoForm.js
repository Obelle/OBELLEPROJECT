import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("screen");
const DietInfoForm = ({ formData, setFormData }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#7223CB", "transparent"]}
        style={[styles.image]}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Diet Information </Text>
        <View style={styles.item}>
          <Text style={styles.label}>Select your gender</Text>
          <SelectDropdown
            data={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
            defaultValue={formData.diet}
            onSelect={(selectedItem, index) => {
              setFormData((state) => ({
                ...state,
                gender: selectedItem.value,
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
            defaultButtonText="Select your gender"
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
        <View style={styles.item}>
          <Text style={styles.label}>Select your age category</Text>
          <SelectDropdown
            data={[
              { label: "18 and below", value: "18 and below" },
              { label: "19-30", value: "19-30" },
              { label: "31-50", value: "31-50" },
              { label: "51 and above", value: "51 and above" },
            ]}
            defaultValue={formData.age_category}
            onSelect={(selectedItem, index) => {
              setFormData((state) => ({
                ...state,
                age_category: selectedItem.value,
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
            defaultButtonText="Select your age category"
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
        <View style={styles.item}>
          <Text style={styles.label}>Select your diet</Text>
          <SelectDropdown
            data={[
              { label: "Vegan", value: "vegan" },
              { label: "Vegetarian", value: "vegetarian" },
              { label: "Ominivorous", value: "ominivorous" },
              { label: "Pescetarian", value: "pescetarian" },
              { label: "Paleo", value: "paleo" },
              { label: "Keto", value: "keto" },
            ]}
            defaultValue={formData.diet_type}
            onSelect={(selectedItem, index) => {
              setFormData((state) => ({
                ...state,
                diet_type: selectedItem.value,
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
            defaultButtonText="Select your diet"
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
        {/* <View style={styles.item}>
          <Text style={styles.label}>Calories of meal (Kcal)</Text>
          <TextInput
            style={[styles.input]}
            value={formData.calories}
            onChangeText={(value) =>
              setFormData((state) => ({
                ...state,
                calories: value,
              }))
            }
            placeholder="Enter calories of meal (Kcal)"
            placeholderTextColor="#000"
            keyboardType="numeric"
          />
        </View> */}
      </View>
    </View>
  );
};

export default DietInfoForm;

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
