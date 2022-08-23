import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { View, Text, Image } from "react-native";
import loader from "../../assets/images/load.json";
import logo from '../../assets/icons/logo.png'

export default function Loader() {
  return (
    <Image
    source={logo}
    style={{
      height:100,
      width:100
    }}
    autoPlay
    />
  );
}
