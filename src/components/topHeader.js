import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Directions } from "react-native-gesture-handler";

import Icons from "./icons";
import { iconNames } from "./iconNames";

function TopHeader({ props }) {
  console.log(props);
  return (
    <View style={styles.main}>
      <View style={styles.leftPane}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.rightPane}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Profile")}
          style={[styles.icons, styles.avator]}
        >
          <View style={{
            height:'160%',
            width:'160%'
          }}>
          <Icons props={{iconName:iconNames.logoIcon}}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.icons, styles.notify]}>
          <View
            style={{
              height: "120%",
              width: "120%",
            }}
          >
            <Icons props={{ iconName: iconNames.bellIcon }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.icons, styles.cart]}
          onPress={() => {
            props.navigation.navigate("Cart");
          }}
        >
          <Text
            style={{
              marginTop: "-7px",
              marginLeft: "20px",
              fontSize: "15px",
              backgroundColor: "white",
              position:'absolute'
              ,zIndex:4
            }}
          >
            55
          </Text>
          <View style={{
            height:'130%'
            ,width:'130%',
            position:'absolute'
            ,top:'0'
          }}>
          <Icons props={{iconName:iconNames.cartIcon2}}/>
          </View>
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
    height:'28px',
    flexWrap:'nowrap',
    overflow:'hidden',
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
    // border: "2px solid red",
    borderRadius: "100%",
  },
  avator: {
    width: "50px",
    height: "50px",
    marginLeft: "7px",
    backgroundColor:'#ececec'
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
