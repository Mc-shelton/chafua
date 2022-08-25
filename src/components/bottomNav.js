import React, { useState } from "react";
import reactDom from "react-dom";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FlipInEasyX } from "react-native-reanimated";

import Icons from "./icons";
import { iconNames } from "./iconNames";

function BottomNav({ props }) {
  const [showDot, setShowDot] = useState(true)
  return (
    <View
      style={[
        styles.main,
        {
          boxShadow:' rgba(149, 157, 165) 0px 8px 24px'
,
          borderRadius: "10px",
        },
      ]}
    >
      <TouchableOpacity
        style={[
          styles.iconBox,
          {
            marginLeft: "20px",
          },
        ]}
        onPress={() => props.navigate("Profile")}
      >
        <Icons props={{iconName:iconNames.settingsIcon}}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconBox}
        onPress={() => props.navigate("Search")}
      >
        <Icons props={{iconName:iconNames.searchIcon}}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.iconBox,
          styles.focused,
          {
            border: "2px solid rgb(74, 4, 4)",
          },
        ]}
        onPress={() => props.navigate("Home")}
      >
        <Icons props={{ iconName: iconNames.homeIcon }} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconBox]}
        onPress={() => props.navigate("Cart")}
      >
       {showDot? <View 
        style={{
          height:'10px'
          ,width:'10px',
          backgroundColor:'rgb(74, 4, 4)'
          ,borderRadius:'100%'
          ,
          position:'absolute'
          ,right:'5px'
          ,top:'0px'
        }}
        />:<></>}
        <Icons props={{ iconName: iconNames.cartIcon }} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconBox}
        onPress={() => {
          props.navigate("Orders");
        }}
      >
        <Icons props={{ iconName: iconNames.ordersIcon }} />
      </TouchableOpacity>
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
    // border: "2px solid rgb(74, 4, 4)",
    height: "50px",
    width: "50px",
    backgroundColor: "white",
    marginRight: "20px",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#E8E8E8",
    // boxShadow:' rgba(149, 157, 165) 2px 8px 24px'

  },
  focused: {
    height: "65px",
    width: "65px",
    marginTop: "-20px",
  },
});
export default BottomNav;
