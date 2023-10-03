import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { VictoryPie } from "victory-native";

const PieChart = ({ electricity, diet, waste, travel, gas }) => {
  console.log("total", electricity, diet, waste, travel, gas);
  const data = [
    {
      x: "Waste",
      y: Number(parseFloat(waste).toFixed(2)),
      // y: 420.0,
    },
    {
      x: "Electricity",
      y: Number(parseFloat(electricity).toFixed(2)),
      // y: 274.12,
    },
    {
      x: "Diet",
      y: Number(parseFloat(diet).toFixed(2)),
      // y: 0.23,
    },
    {
      x: "Travel",
      y: Number(parseFloat(travel).toFixed(2)),
      // y: 36.0,
    },
    {
      x: "Gas",
      y: Number(parseFloat(gas).toFixed(2)),
      // y: NaN,
    },
  ];

  const colors = ["#FFC107", "#2196F3", "#4CAF50", "#FF5722", "#E91E63"];
  return (
    <View>
      <VictoryPie
        data={data}
        innerRadius={80}
        padAngle={5}
        colorScale={colors}
        width={340}
      />
      <View style={styles.labelContainer}>
        {data.map((item, index) => (
          <View key={`label-desc-${index}`} style={styles.labelRow}>
            <View
              style={[styles.labelColor, { backgroundColor: item.color }]}
            />
            <Text style={styles.labelText}>{`${item.x}: ${item.y} kgCO2`}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default PieChart;

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 20,
    fontFamily: "Poppins",
    marginRight: 10,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  labelColor: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  labelText: {
    fontSize: 16,
    color: "#000",
    fontFamily: "Poppins",
    marginVertical: 5,
    textAlign: "center",
  },
});
