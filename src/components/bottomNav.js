import React from "react";
import reactDom from "react-dom";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FlipInEasyX } from "react-native-reanimated";

function BottomNav({ props }) {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={[
          styles.iconBox,
          {
            marginLeft: "20px",
          },
        ]}
        onPress={()=>props.navigate('Profile')}
      ></TouchableOpacity>
      <TouchableOpacity
        style={styles.iconBox}
        onPress={() => props.navigate("Search")}
      ></TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconBox, styles.focused]}
        onPress={() => props.navigate("Home")}
      ></TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconBox]}
        onPress={() => props.navigate("Cart")}
      ></TouchableOpacity>
      <TouchableOpacity
        style={styles.iconBox}
        onPress={() => {
          props.navigate("Orders");
        }}
      ></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    height: "60px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "0",
    backgroundColor: "white",
    width: "100%",
  },
  iconBox: {
    border: "2px solid red",
    height: "50px",
    width: "50px",
    backgroundColor: "white",
    border: "2px solid red",
    marginRight: "20px",
    borderRadius: "100%",
  },
  focused: {
    height: "65px",
    width: "65px",
    marginTop: "-20px",
  },
});
export default BottomNav;
