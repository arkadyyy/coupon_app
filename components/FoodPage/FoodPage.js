import React from "react";
import { View, Text, ScrollView } from "react-native";
import { FoodData } from "../../data/FoodPage";
import CouponBtn from "../CouponBtn/CouponBtn";

const FoodPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ height: 100, justifyContent: "center", padding: 13 }}>
          <Text style={{ fontSize: 17 }}>Food coupons</Text>
        </View>
        <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
          {FoodData.map((obj, index) => (
            <CouponBtn
              key={index}
              data={obj}
              navigation={navigation}
              index={index}
              type={"food"}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodPage;
