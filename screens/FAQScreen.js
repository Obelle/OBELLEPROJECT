import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  ImageBackground,
  Pressable,
} from "react-native";
// import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

// Enable layout animations for Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FAQScreen = ({ navigation }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Array of FAQ items
  const faqData = [
    {
      question: "What is the purpose of this app?",
      answer:
        "The purpose of a carbon footprint estimation app for daily activities is to raise awareness about individual and collective carbon emissions and encourage environmentally conscious behavior. Such an app aims to provide users with a means to track and understand the environmental impact of their daily activities and make informed choices to reduce their carbon footprint. The Activities estimated by this app includes Waste Disposal, Air Travel, Car Travel, Train Travel, Diet Type and Energy Consumption",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply keep record of your activities as explained by the app and check you emissions in relation to them as describe by the App",
    },
    {
      question: "How Safe is the Data Provided",
      answer:
        "The App keeps record of your inputs and the estimation results. This is further used for machine learning purposes as a predictive analysis will be carried out. The app follows the UK Government guidelines on Data Privacy and Protection, 2018.",
    },
    {
      question: "How is my Emmission estimated ",
      answer:
        "Waste Disposal; 1kg = 0.700 KgCO2, Air Travel; 1 mile = 0.440 KgCO2, Train Travel; 1 mile = 0.072 KgCO2, Car Travel; 1 mile = 0.240 KgCO2, Electricity COnsumption; 1 Pound = 0.6853 KgCO2, Gas Consumption (Imperial); 1 Pound = 6.4434 KgCO2, Gas Consumption (Metric); 1 pound = 6.4484 KgCO2. Vegan Diet; 1 KCal = 0.00069 KgCO2.  Vegetarian Diet; 1 KCal = 0.00116 KgCO2.  Ominivorous Diet; 1 KCal = 0.00223 KgCO2.  Pescetarian Diet; 1 KCal = 0.00166 KgCO2.  Paleo Diet; 1 KCal = 0.00262 KgCO2.  Keto Diet; 1 KCal = 0.00291 KgCO2.  ",
    },
    {
      question: "Further Readings?",
      answer: "https://www.ipcc.ch/",
    },
    // Add more FAQ items here
  ];

  // Function to toggle the accordion item
  const toggleAccordion = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <ImageBackground
      source={require("../assets/foods.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText2}>Back</Text>
        </Pressable>
        {faqData.map((faq, index) => (
          <View key={index} style={styles.itemContainer}>
            <TouchableOpacity
              style={styles.header}
              activeOpacity={0.8}
              onPress={() => toggleAccordion(index)}
            >
              <Text style={[styles.question, styles.poppinsFont]}>
                {faq.question}
              </Text>
              <Text style={[styles.arrow, styles.poppinsFont]}>
                {expandedIndex === index ? "▲" : "▼"}
              </Text>
            </TouchableOpacity>
            {expandedIndex === index && (
              <View style={styles.content}>
                <Text style={[styles.answer, styles.poppinsFont]}>
                  {faq.answer}
                </Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  itemContainer: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#e0e0e0",
  },
  question: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
  arrow: {
    fontSize: 18,
    fontFamily: "Poppins",
  },
  content: {
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
  },
  answer: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Poppins",
  },
  poppinsFont: {
    fontFamily: "Poppins",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 2,
  },
  backBtn: {
    borderWidth: 2,
    borderColor: "#ccc",
    position: "absolute",
    top: 60,
    left: 20,
    padding: 5,
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderTopLeftRadius: 0,
  },
  btnText2: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },
});

export default FAQScreen;
