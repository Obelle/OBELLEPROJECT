import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import PersonalInfoForm from "../components/PersonalInfoForm";
import DietInfoForm from "../components/DietInfoForm";
import ElectricityInfoForm from "../components/ElectricityInfoForm";
import TravelInfoForm from "../components/TravelInfoForm";
import WasteInfoForm from "../components/WasteInfoForm";
import ResultScreen from "../components/ResultScreen";
import axios from "axios";

const Form = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    // personal info
    firstName: "",
    countryOrigin: "",
    countryResidence: "",

    // diet info
    diet_type: "",
    age_category: "",
    gender: "",

    // electricity & gas
    energy_usage: "",
    gas_meter_type: "",
    gas_bill: "",
    electricity_bill: "",

    // travel
    air_travel: "",
    air_distance: "",
    train_travel: "",
    train_distance: "",
    car_travel: "",
    car_distance: "",

    // waste
    generated_waste: "",
    age_group: "",
  });
  const [screen, setScreen] = useState(0);
  const [loading, setLoading] = useState(false);
  const [countryOrigin, setCountryOrigin] = useState();
  const [countryResidence, setCountryResidence] = useState();
  const [diet, setDiet] = useState();
  const [electricity, setElectricity] = useState();
  const [travel, setTravel] = useState();
  const [waste, setWaste] = useState();
  const [gas, setGas] = useState();

  // fetcher functions
  const fetchCountryInfo = async (country) => {
    const response = await axios.post("https://obelle.onrender.com/country", {
      selectedCountry: country,
    });
    return response?.data;
  };
  const fetchDietInfo = async () => {
    const response = await axios.post(
      `https://obelle-n179.onrender.com/calculate_diet_emissions`,
      {
        diet_type: formData.diet_type,
        age_category: formData.age_category,
        gender: formData.gender,
      }
    );
    return response.data;
  };
  const fetchElectricityInfo = async () => {
    const response = await axios.post(
      "https://obelle-n179.onrender.com/calculate_energy_emissions",
      {
        energy_usage: formData.energy_usage,
        gas_meter_type: formData.gas_meter_type,
        gas_bill: formData.gas_bill,
        electricity_bill: formData.electricity_bill,
      }
    );
    return response.data;
  };

  const fetchTravelInfo = async () => {
    const response = await axios.post(
      `https://obelle-n179.onrender.com/calculate_travel_emissions`,
      {
        air_travel: formData.air_travel,
        air_distance: formData.air_distance,
        train_travel: formData.train_travel,
        train_distance: formData.train_distance,
        car_travel: formData.car_travel,
        car_distance: formData.car_distance,
      }
    );
    return response.data;
  };
  const fetchWasteInfo = async () => {
    const response = await axios.post(
      "https://obelle-n179.onrender.com/waste_disposal_emissions",
      {
        generated_waste: formData.generated_waste,
        age_group: formData.age_group,
      }
    );
    return response.data;
  };
  const onSubmit = async () => {
    setLoading(true);
    try {
      const requests = await Promise.all([
        fetchCountryInfo(formData?.countryOrigin),
        fetchCountryInfo(formData?.countryResidence),
        fetchDietInfo(),
        fetchElectricityInfo(),
        fetchTravelInfo(),
        fetchWasteInfo(),
      ]);

      setLoading(false);
      console.log(requests);
      setCountryOrigin(requests[0]);
      setCountryResidence(requests[1]);
      setDiet(requests[2]?.emissions);
      setElectricity(
        formData.energy_usage === "yes" ? requests[3]?.electricity : 0
      );
      setGas(formData.energy_usage === "yes" ? requests[3]?.gas : 0);
      setTravel(requests[4]?.total);
      setWaste(requests[5]?.emissions);
      setScreen(5);
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong");
    }
  };
  const handleNext = () => {
    const alertMsg = "Missing input fields, fill all inputs to proceed.";

    switch (screen) {
      case 0:
        if (
          formData.firstName !== "" &&
          formData.countryOrigin !== "" &&
          formData.countryResidence !== ""
        ) {
          setScreen((screen) => screen + 1);
        } else {
          alert(alertMsg);
        }
        break;

      case 1:
        if (
          formData.gender !== "" &&
          formData.age_category !== "" &&
          formData.diet_type !== ""
        ) {
          setScreen((screen) => screen + 1);
        } else {
          alert(alertMsg);
        }
        break;

      case 2:
        if (
          formData.energy_usage !== "" &&
          formData.gas_meter_type !== "" &&
          formData.gas_bill !== "" &&
          formData.electricity_bill !== ""
        ) {
          setScreen((screen) => screen + 1);
        } else {
          alert(alertMsg);
        }
        break;

      case 3:
        if (
          formData.air_travel !== "" &&
          formData.air_distance !== "" &&
          formData.train_travel !== "" &&
          formData.train_distance !== "" &&
          formData.car_travel !== "" &&
          formData.car_distance !== ""
        ) {
          setScreen((screen) => screen + 1);
        } else {
          alert(alertMsg);
        }
        break;

      case 4:
        if (formData.generated_waste !== "" && formData.age_group !== "") {
          setScreen((screen) => screen + 1);
        } else {
          alert(alertMsg);
        }
        break;

      default:
        break;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.backBtn}
        onPress={() => navigation.navigate("Slider")}
      >
        <Text style={[styles.btnText2, { color: "#f7a400" }]}>Back</Text>
      </Pressable>
      {screen === 0 && (
        <PersonalInfoForm formData={formData} setFormData={setFormData} />
      )}
      {screen === 1 && (
        <DietInfoForm formData={formData} setFormData={setFormData} />
      )}
      {screen === 2 && (
        <ElectricityInfoForm formData={formData} setFormData={setFormData} />
      )}
      {screen === 3 && (
        <TravelInfoForm formData={formData} setFormData={setFormData} />
      )}
      {screen === 4 && (
        <WasteInfoForm formData={formData} setFormData={setFormData} />
      )}
      {screen === 5 && (
        <ResultScreen
          formData={formData}
          countryOrigin={countryOrigin}
          countryResidence={countryResidence}
          diet={diet}
          electricity={electricity}
          travel={travel}
          waste={waste}
          gas={gas}
        />
      )}

      {screen !== 5 && (
        <View style={styles.btns}>
          <Pressable
            disabled={screen === 0}
            style={[
              styles.actionBtn,
              { borderColor: screen === 0 ? "#ccc" : "#f7a400" },
            ]}
            onPress={() => setScreen((screen) => screen - 1)}
          >
            <Text style={styles.btnText2}>Prev</Text>
          </Pressable>
          {screen === 4 ? (
            <Pressable
              style={[styles.actionBtn2, { borderColor: "green" }]}
              onPress={onSubmit}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.btnText2}>Submit</Text>
              )}
            </Pressable>
          ) : (
            <Pressable
              disabled={screen === 4}
              style={[
                styles.actionBtn2,
                { borderColor: screen === 4 ? "#ccc" : "#f7a400" },
              ]}
              onPress={handleNext}
            >
              <Text style={styles.btnText2}>Next</Text>
            </Pressable>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnText2: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Poppins",
  },
  backBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    position: "absolute",
    top: 70,
    left: 20,
    padding: 5,
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderTopLeftRadius: 0,
    zIndex: 10,
  },
  btns: {
    flexDirection: "row",
    // backgroundColor: "#fff",
    zIndex: 10,
    position: "absolute",
    bottom: 50,
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  actionBtn: {
    borderWidth: 3,
    paddingVertical: 7,
    paddingHorizontal: 30,
    borderColor: "#f7a400",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderTopLeftRadius: 9,
  },
  actionBtn2: {
    borderWidth: 3,
    paddingVertical: 7,
    paddingHorizontal: 30,
    borderColor: "#7223CB",
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderTopLeftRadius: 0,
  },
});
