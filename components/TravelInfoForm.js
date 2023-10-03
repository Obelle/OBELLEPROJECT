import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("screen");
const TravelInfoForm = ({ formData, setFormData }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#7223CB", "transparent"]}
        style={[styles.image]}
      />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Travel Information </Text>
        <View style={styles.item}>
          <Text style={styles.label}>Do you travel by Air</Text>
          <SelectDropdown
            data={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
            defaultValue={formData.air_travel}
            onSelect={(selectedItem, index) => {
              setFormData((state) => ({
                ...state,
                air_travel: selectedItem.value,
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
          <Text style={styles.label}>Distance travelled by Air (Miles)</Text>
          <TextInput
            style={[styles.input]}
            value={formData.air_distance}
            onChangeText={(value) =>
              setFormData((state) => ({
                ...state,
                air_distance: value,
              }))
            }
            placeholder="Enter distance travelled (Miles)"
            placeholderTextColor="#000"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Do you travel by Train</Text>
          <SelectDropdown
            data={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
            defaultValue={formData.train_travel}
            onSelect={(selectedItem, index) => {
              setFormData((state) => ({
                ...state,
                train_travel: selectedItem.value,
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
            defaultButtonText="Select yes if you travel by Train"
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
          <Text style={styles.label}>Distance travelled by Train (Miles)</Text>
          <TextInput
            style={[styles.input]}
            value={formData.train_distance}
            onChangeText={(value) =>
              setFormData((state) => ({
                ...state,
                train_distance: value,
              }))
            }
            placeholder="Enter distance travelled (Miles)"
            placeholderTextColor="#000"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Do you travel by Car</Text>
          <SelectDropdown
            data={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
            defaultValue={formData.car_travel}
            onSelect={(selectedItem, index) => {
              setFormData((state) => ({
                ...state,
                car_travel: selectedItem.value,
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
            defaultButtonText="Select yes if you travel by Car"
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
          <Text style={styles.label}>Distance travelled by Car (Miles)</Text>
          <TextInput
            style={[styles.input]}
            value={formData.car_distance}
            onChangeText={(value) =>
              setFormData((state) => ({
                ...state,
                car_distance: value,
              }))
            }
            placeholder="Enter distance travelled (Miles)"
            placeholderTextColor="#000"
            keyboardType="numeric"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default TravelInfoForm;

const styles = StyleSheet.create({
  container: { width, height, alignItems: "center", backgroundColor: "#000" },
  image: { width: "100%", flex: 1 },
  content: {
    position: "absolute",
    top: 50,
    left: 0,
    padding: 20,
    width: "100%",
    height: 600,
  },
  title: {
    color: "#f7a400",
    fontFamily: "Pacifico",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  item: {
    marginVertical: 5,
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
