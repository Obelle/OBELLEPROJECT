import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "./screens/Slider";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "./screens/OnboardingScreen";
import Form from "./screens/Form";
import * as Font from "expo-font";
import FAQScreen from "./screens/FAQScreen";
// Import SplashScreen

const Stack = createNativeStackNavigator();
// SplashScreen.preventAutoHideAsync();
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Pacifico: require("./assets/fonts/Pacifico-Regular.ttf"),
          Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        setAppIsReady(true);
      } catch (e) {
        console.warn(e);
      }
      // } finally {
      //   // Tell the application to render
      //   setAppIsReady(true);
      // }
    }

    prepare();
  }, []);

  // const onLayoutRootView = async () => {
  //   try {
  //     if (appIsReady) {
  //       // This tells the splash screen to hide immediately! If we call this after
  //       // `setAppIsReady`, then we may see a blank screen while the app is
  //       // loading its initial state and rendering its first pixels. So instead,
  //       // we hide the splash screen once we know the root view has already
  //       // performed layout.
  //       await SplashScreen.hideAsync();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  if (!appIsReady) {
    return null;
  }

  return (
    // <View
    // // onLayout={onLayoutRootView}
    // >
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"Onboarding"} component={OnboardingScreen} />
        <Stack.Screen name={"Slider"} component={Slider} />
        <Stack.Screen name={"Form"} component={Form} />
        <Stack.Screen name={"FAQ"} component={FAQScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
