import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const { width } = Dimensions.get("screen");
const Pagination = ({ data, scrollX, index }) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: "clamp",
        });
        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#ccc", "#f7a400", "#ccc"],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={idx}
            style={[
              styles.dot,
              { width: dotWidth, backgroundColor },
              idx === index && styles.active,
            ]}
          ></Animated.View>
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    bottom: 40,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#ccc",
    marginHorizontal: 3,
  },
  active: {
    backgroundColor: "#f7a400",
  },
});
