import {
  Animated,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import SlideItem from "../components/SlideItem";
import Pagination from "../components/Pagination";

const slides = [
  {
    id: 1,
    title:
      "Our World is everchanging, with more humans been born every hour. We might be affecting the environment in our daily activities which will be devastating on a collective scale.",
    img: require("../assets/Rectangle1.jpeg"),
  },
  {
    id: 2,
    title:
      "The governments of the world are on course with emission guidelines which are realistic, if we contribute our own quota to this process. Firstly we need to know how much carbon we footprint from our activities daily. This will help in keeping us informed of what we do and how it affects the world climate.",
    img: require("../assets/Rectangle2.jpeg"),
  },
  {
    id: 3,
    title:
      "Obelle can help  you understand your carbon footprints and how you can manage your activities to reduce them and save the environment",
    img: require("../assets/Rectangle7.jpeg"),
  },
  {
    id: 4,
    title: "Walk with us, let us help you calculate your carbon footprint.",
    img: require("../assets/Rectangle13.jpeg"),
  },
];
const Slider = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };
  const handleOnViewable = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewable}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={slides} scrollX={scrollX} index={index} />
    </SafeAreaView>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
