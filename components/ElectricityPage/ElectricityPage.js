import React from "react";
import { View, Text, ScrollView } from "react-native";

import { ElectricityData } from "../../data/ElectricityPage";
import CouponBtn from "../CouponBtn/CouponBtn";

const ElectricityPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ height: 100, justifyContent: "center", padding: 13 }}>
          <Text style={{ fontSize: 17 }}>Electricity coupons</Text>
        </View>
        <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
          {ElectricityData.map((obj, index) => (
            <CouponBtn
              key={index}
              data={obj}
              navigation={navigation}
              index={index}
              type={"electricity"}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ElectricityPage;
