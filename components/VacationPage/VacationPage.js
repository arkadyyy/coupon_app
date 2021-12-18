import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { vacationData } from "../../data/VacationPage";
import CouponBtn from "../CouponBtn/CouponBtn";

const VacationPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ height: 100, justifyContent: "center", padding: 13 }}>
          <Text style={{ fontSize: 17 }}>Vacation coupons</Text>
        </View>
        <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
          {vacationData.map((obj, index) => (
            <CouponBtn
              key={index}
              data={obj}
              navigation={navigation}
              index={index}
              type={"vacation"}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     height: 400,
//   },

//   couponBtn: {
//     height: 150,
//     width: 150,
//     borderRadius: 20,
//     margin: 13,
//   },
//   couponBtnTxt: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 22,
//     padding: 10,
//     textShadowColor: "rgba(0,0,0,0.9)",
//   },
// });

export default VacationPage;
