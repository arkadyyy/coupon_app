import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { RestaurantData } from "../../data/RestaurantPage";
import CouponBtn from "../CouponBtn/CouponBtn";

const RestaurantPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ height: 100, justifyContent: "center", padding: 13 }}>
          <Text style={{ fontSize: 17 }}>Restaurant coupons</Text>
        </View>
        <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
          {RestaurantData.map((obj, index) => (
            <CouponBtn
              key={index}
              data={obj}
              navigation={navigation}
              index={index}
              type={"restaurant"}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantPage;
