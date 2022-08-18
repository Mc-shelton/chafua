import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Directions } from "react-native-gesture-handler";

function TopHeader({ props }) {
  console.log(props);
  return (
    <View style={styles.main}>
      <View style={styles.leftPane}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.rightPane}>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate('Profile')}
          style={[styles.icons, styles.avator]}
        ></TouchableOpacity>
        <TouchableOpacity  style={[styles.icons, styles.notify]}></TouchableOpacity>
        <TouchableOpacity
          style={[styles.icons, styles.cart]}
          onPress={() => {
            props.navigation.navigate("Cart");
          }}
        >
          <Text
            style={{
              textAlign: "center",
              marginTop: "-7px",
              marginLeft: "20px",
              fontSize: "15px",
              width: "fit-content",
              border: "2px solid red",
              borderRadius: "100%",
              backgroundColor: "white",
            }}
          >
            1
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    height: "70px",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    // paddingBottom:'10px'
  },
  leftPane: {
    width: "60%",
    alignSelf: "flex-end",
  },
  title: {
    fontSize: "23px",
    paddingLeft: "10px",
    fontWeight: "bold",
  },
  rightPane: {
    height: "90%",
    position: "absolute",
    right: 15,
    display: "flex",
    marginTop: "5px",
    flexDirection: "row-reverse",
    flexSpace: "10px",
    alignItems: "flex-end",
    flexSpace: "20px",
    paddingBottom: "3px",
  },
  icons: {
    border: "2px solid red",
    borderRadius: "100%",
  },
  avator: {
    width: "60px",
    height: "100%",
    marginLeft: "10px",
  },
  notify: {
    height: "30px",
    width: "30px",
    marginLeft: "15px",
  },
  cart: {
    height: "30px",
    width: "30px",
  },
});
export default TopHeader;
