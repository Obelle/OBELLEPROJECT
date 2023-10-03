import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PieChart from "./PieChart";

const ResultScreen = ({
  formData,
  countryOrigin,
  countryResidence,
  diet,
  electricity,
  gas,
  travel,
  waste,
}) => {
  const navigation = useNavigation();

  const formatNumberWithCommas = (number) => {
    return number.toLocaleString();
  };

  const total = parseFloat(electricity + diet + waste + travel + gas).toFixed(
    2
  );

  return (
    <ImageBackground
      source={require("../assets/tropical2.png")}
      style={styles.backgroundImage}
    >
      <Pressable
        style={styles.faqBtn}
        onPress={() => navigation.navigate("FAQ")}
      >
        <Text style={styles.btnText2}>FAQ</Text>
      </Pressable>
      <ScrollView style={styles.container}>
        <View style={styles.centerContent}>
          <Text style={[styles.text, styles.poppinsFont]}>
            Hi {formData?.firstName}
          </Text>
        </View>
        <View style={styles.centerContent}>
          <Text style={[styles.text, styles.poppinsFont]}>
            The emissions in your country of origin {formData?.countryOrigin} is{" "}
            {formatNumberWithCommas(parseFloat(countryOrigin?.emissions))} in
            KgCO2 and emission per capita {countryOrigin?.emissionsPerCapita} in
            KgCO2 based on the review in {countryOrigin?.year}
          </Text>
        </View>
        <View style={styles.centerContent}>
          <Text style={[styles.text, styles.poppinsFont]}>
            The emissions in your country of residence{" "}
            {formData?.countryResidence} is{" "}
            {formatNumberWithCommas(parseFloat(countryResidence?.emissions))} in
            KgCO2 and emission per capita {countryResidence?.emissionsPerCapita}{" "}
            in KgCO2 based on the review in {countryResidence?.year}
          </Text>
        </View>
        <View style={styles.centerContent}>
          <Text style={styles.text}>This is your carbon footprint: </Text>
        </View>
        <View style={styles.centerContent}>
          <Text style={styles.text}>Total: {total} KgCO2</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          {total > 442 ? (
            <Image
              style={{ width: 200, height: 200 }}
              source={require("../assets/sad.jpeg")}
            />
          ) : (
            <Image
              style={{ width: 200, height: 200 }}
              source={require("../assets/happy.png")}
            />
          )}
          <Text style={styles.text}>
            {total > 442
              ? "You have a high carbon footprint."
              : "You have a low carbon footprint"}
          </Text>
        </View>
        <View style={styles.centerContentTotal}>
          <Text style={styles.text2}>Breakdown</Text>
        </View>
        <View>
          <PieChart
            diet={diet}
            gas={gas}
            electricity={electricity}
            travel={travel}
            waste={waste}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    padding: 10,
  },
  container: {
    backgroundColor: "white",
    opacity: 0.7,
    padding: 20,
    borderRadius: 6,
    marginTop: 70,
  },
  faqBtn: {
    borderWidth: 2,
    borderColor: "#ccc",
    position: "absolute",
    top: 10,
    right: 20,
    padding: 7,
    borderRadius: 10,
  },
  btnText2: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },
  text: {
    color: "#000",
    fontSize: 18,
    fontFamily: "Poppins",
    fontWeight: "800",
  },
  text2: {
    color: "#000",
    fontSize: 18,
    fontFamily: "Poppins",
    fontWeight: "800",
    textDecorationLine: "underline",
  },
  centerContent: {
    marginVertical: 5,
  },
  centerContentTotal: {
    alignItems: "center",
    marginTop: 30,
  },
});
