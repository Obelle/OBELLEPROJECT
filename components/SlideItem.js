import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("screen");
const SlideItem = ({ item }) => {
  const navigation = useNavigation();
  const translateYImage = new Animated.Value(40);
  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.linear,
  }).start();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#7223CB", "transparent"]}
        style={[styles.image]}
      />
      <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.btnText2}>Back</Text>
      </Pressable>
      <Pressable
        style={styles.faqBtn}
        onPress={() => navigation.navigate("FAQ")}
      >
        <Text style={styles.btnText2}>FAQ</Text>
      </Pressable>
      <Animated.ScrollView
        style={[
          styles.content,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      >
        <Text style={styles.title}>{item.title}</Text>
      </Animated.ScrollView>
      {item.id === 4 && (
        <TouchableOpacity
          onPress={() => navigation.navigate("Form")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Continue {"\uD83D\uDEB6"}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: { width, height, alignItems: "center", backgroundColor: "#000" },
  image: { width: "100%", flex: 1 },
  content: {
    position: "absolute",
    top: 80,
    backgroundColor: "transparent",
    opacity: 0.9,
    padding: 30,
    borderRadius: 6,
    width: "80%",
  },
  title: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: 20,
    lineHeight: 35,
    letterSpacing: 2,
    color: "#fff",
  },
  btn: {
    padding: 20,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 150,
    borderRadius: 6,
    width: "90%",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#7223CB",
  },
  btnText: {
    color: "#f7a400",
    fontWeight: "800",
    fontSize: 18,
  },
  btnText2: {
    color: "#f7a400",
    fontWeight: "500",
    fontSize: 18,
  },
  backBtn: {
    borderWidth: 2,
    borderColor: "#ccc",
    position: "absolute",
    top: 40,
    left: 20,
    padding: 5,
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderTopLeftRadius: 0,
  },
  faqBtn: {
    borderWidth: 2,
    borderColor: "#ccc",
    position: "absolute",
    top: 40,
    right: 20,
    padding: 7,
    borderRadius: 10,
  },
});
