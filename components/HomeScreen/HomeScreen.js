import React, { useRef } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import CarouselComp from "react-native-snap-carousel";

import { carouselData } from "../../data/HomePage";
import CarouselItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "./CarouselItem/CarouselItem";
const HomeScreen = () => {
  const isCarousel = useRef(null);
  return (
    <>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              height: 400,
              backgroundColor: "#C4C4C4",
            }}
          >
            <CarouselComp
              layout='default'
              ref={isCarousel}
              data={carouselData}
              renderItem={CarouselItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={SLIDER_WIDTH}
              autoplay={true}
              autoplayInterval={2000}
              loop={true}
            />
          </View>
          <View
            style={{
              flex: 1,
              //   alignItems: "center",
              justifyContent: "flex-start",
              height: 300,
              padding: 17,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <Text style={{ fontSize: 10, marginRight: 10 }}>See All</Text>
              </TouchableOpacity>
              <Text style={{ marginTop: 17, marginBottom: 17, fontSize: 17 }}>
                New Coupons
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#c4c4c4",
                borderRadius: 17,
                height: 150,
              }}
            ></View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
