import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  Platform,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("screen");

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/autumn.png")}
      resizeMode="cover" // Add this line
      style={{ height, width }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height,
          width,
        }}
      >
        <Text style={[styles.logo, styles.title]}>Obelle</Text>
        <View>
          <Text style={[styles.poppinsFont, styles.subTitle]}>
            We can walk more, with less carbon
          </Text>
        </View>
        <View>
          <Text style={[styles.subTitle, styles.poppinsFont]}>
            Are you curious to know how?
          </Text>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Slider")}
        >
          <Text style={{ color: "#fff", fontWeight: "700", fontSize: 18 }}>
            Walk with Us
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {},

  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    fontWeight: "bold",
    position: "relative",
    marginTop: 5,
    textAlign: "center", // Add this line to center the text
    fontFamily: Platform.OS === "android" ? "Pacifico" : "Pacifico", // Update the font family for Android and iOS
  },
  title: {
    marginTop: 5,
    fontFamily: Platform.OS === "android" ? "Pacifico" : "Pacifico", // Update the font family for Android and iOS
    color: "white",
    fontSize: 45,
  },
  subTitle: {
    marginTop: 10,
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  poppinsFont: {
    fontFamily: Platform.OS === "android" ? "Poppins" : "Poppins", // Update the font family for Android and iOS
  },
  btn: {
    padding: 20,
    backgroundColor: "transparent",
    borderRadius: 6,
    width: "90%",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#7223CB",
    marginHorizontal: "auto",
  },
  button: {
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    bottom: 70,
    zIndex: 10,
  },
});

export default OnboardingScreen;
