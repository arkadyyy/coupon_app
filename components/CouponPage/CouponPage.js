import React, { useReducer, useEffect } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";

import { vacationData } from "../../data/VacationPage";
import { ElectricityData } from "../../data/ElectricityPage";
import { FoodData } from "../../data/FoodPage";
import { RestaurantData } from "../../data/RestaurantPage";
const CouponPage = ({ route, navigation }) => {
  const { index, type } = route.params;

  const reducer = (state, action) => {
    switch (action.type) {
      case "vacation":
        return vacationData[action.index];
      case "food":
        return FoodData[action.index];
      case "restaurant":
        return RestaurantData[action.index];
      case "electricity":
        return ElectricityData[action.index];
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, { title: "", text: "" });

  useEffect(() => {
    dispatch({ type, index });
  }, [index, type]);
  return (
    <>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              height: 400,
              alignItems: "center",
            }}
          >
            <ImageBackground
              source={{ uri: state.image }}
              resizeMode='cover'
              style={styles.image}
              imageStyle={{ opacity: 0.8, overlayColor: "black" }}
            >
              <Text style={styles.title}>{state.title}</Text>

              <TouchableOpacity style={styles.btn}>
                <Text>Get It Now</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 13, fontWeight: "100", lineHeight: 20 }}>
              {state.text}
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    height: 400,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "rgb(0,0,0)",
  },

  title: {
    color: "white",
    fontSize: 38,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "right",
    padding: 20,
    textShadowColor: "rgba(0,0,0,0.9)",
    textShadowOffset: { height: 1, width: 1 },
  },
  btn: {
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 20,
    width: "30%",
    margin: 14,

    alignItems: "center",
    justifyContent: "flex-end",
  },
  textContainer: {
    padding: 20,
  },
});

export default CouponPage;
