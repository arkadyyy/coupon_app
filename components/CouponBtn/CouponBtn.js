import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const CouponBtn = ({ data, navigation, index, type }) => {
  return (
    <>
      <TouchableOpacity
        key={index}
        onPress={() => navigation.navigate("CouponPage", { index, type })}
        style={styles.couponBtn}
      >
        <ImageBackground
          source={{ uri: data.image }}
          imageStyle={{ borderRadius: 20, opacity: 0.9 }}
          resizeMode='cover'
          style={styles.image}
        >
          <Text style={styles.couponBtnTxt}>{data.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgb(0,0,0)",
    borderRadius: 20,
  },

  couponBtn: {
    height: 150,
    width: 150,
    borderRadius: 20,
    margin: 13,
  },
  couponBtnTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    padding: 10,
    textShadowColor: "rgba(0,0,0,0.9)",
  },
});

export default CouponBtn;
