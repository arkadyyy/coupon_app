import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselItem = ({ item, index }) => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: item.image }}
          resizeMode='cover'
          style={styles.image}
          imageStyle={{ opacity: 0.8, overlayColor: "black" }}
        >
          <View style={{ padding: 10 }}>
            <Text style={styles.header}>{item.header}</Text>
            <Text style={styles.subHeader}>{item.subHeader}</Text>
          </View>
        </ImageBackground>
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
    backgroundColor: "black",
  },
  header: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "right",
    //   backgroundColor: "#000000c0"
  },
  subHeader: {
    color: "white",
    fontSize: 15,
    lineHeight: 84,
    // fontWeight: "lighter",
    textAlign: "right",
  },
});

export default CarouselItem;
