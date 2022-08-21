import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { globalStyles } from "../components/commonStyles";
import { LinearGradient } from "expo-linear-gradient";

import logo from "../../assets/icons/logo.png";
import image1 from "../../assets/images/image2.jfif";

function LandPage({  navigation }) {
  // console.log(navigation);
  return (
    <ImageBackground
      source={image1}
      style={[
        globalStyles.container,
        {
          border: "none",
          borderRadius: "0",
          height: "100%",
          backgroundColor: "white",
        },
      ]}
      imageStyle={{
        // top:'200px'
        resizeMode: "cover",
        height: "55%",
        // ,width:'80'
      }}
    >
      <LinearGradient
        // end={{x: 0, y: 0.8}}
        colors={["transparent", "#ffffff"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "56%",
        }}
      />
      <ImageBackground
        source={logo}
        style={[
          globalStyles.container,
          {
            height: "150px",
            width: "150px",
            // marginTop: "100px",
            backgroundColor: "rgb(255, 255, 255)",
          },
        ]}
        imageStyle={{
          height: "90%",
          width: "90%",
          top:'6%',
          left:'5%',
          border:'2px solid rgb(74, 4, 4)',
          borderRadius:'10px',
          resizeMode:'center'
        }}
      ></ImageBackground>
      <Text
        style={{
          fontSize: "30px",
          color: "rgb(94, 4, 4)",
          marginTop: "60%",
        }}
      >
        Welcome
      </Text>
      <Text
        style={{
          fontSize: "20px",
          width: "80%",
          marginTop: "10px",
          marginBottom: "10%",
          textAlign: "center",
        }}
      >
        To 'beti nywandi', happy ordering and eating
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LogIn");
        }}
        style={[
          globalStyles.container,
          styles.pgButtons,
          { backgroundColor: "rgb(74, 4, 4)" },
        ]}
      >
        <Text style={{ fontSize: "18px", color: "white", fontWeight: "bold" }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        style={[globalStyles.container, styles.pgButtons]}
      >
        <Text style={{ fontSize: "18px", fontWeight: "bold",color:'rgb(74, 4, 4)' }}>Sign Up</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  pgButtons: {
    width: "90%",
    height: "50px",
    marginTop: "25px",
  },
});
export default LandPage;
