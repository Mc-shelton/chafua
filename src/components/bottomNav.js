import React, { useEffect, useState } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";

function BottomNav({ props }) {
  const [showDot, setShowDot] = useState(false);

  useEffect(async () => {
    const willFocus = props.addListener("focus", () => {
      AsyncStorage.getItem("cart")
        .then((res) => {
          if (res) {
            let array = JSON.parse(res);
            if (array.length > 0) {
              setShowDot(true);
            } else {
              setShowDot(false);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
    return willFocus;
  }, []);
  return (
    <View
      style={[
        styles.main,
        {
          boxShadow: " rgba(149, 157, 165) 0px 8px 24px",
          // borderRadius: 10,
        },
      ]}
    >
      <TouchableOpacity
        style={[
          styles.iconBox,
          {
            marginLeft: 20,
          },
        ]}
        onPress={() => props.push("Profile")}
      >
        <Icons props={{ iconName: iconNames.settingsIcon }} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconBox}
        onPress={() => props.push("Search")}
      >
        <Icons props={{ iconName: iconNames.searchIcon }} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.iconBox,
          styles.focused,
          {
            border: "2px solid rgb(74, 4, 4)",
          },
        ]}
        onPress={() => props.push("Home")}
      >
        <Icons props={{ iconName: iconNames.homeIcon }} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconBox]}
        onPress={() => props.push("Cart")}
      >
        {showDot ? (
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: "rgb(74, 4, 4)",
              // borderRadius: "100%",
              position: "absolute",
              right: 5,
              top: 0,
            }}
          />
        ) : (
          <></>
        )}
        <Icons props={{ iconName: iconNames.cartIcon }} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconBox}
        onPress={() => {
          props.push("Orders");
        }}
      >
        <Icons props={{ iconName: iconNames.ordersIcon }} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    height: 60,
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
    height: 50,
    width: 50,
    backgroundColor: "white",
    marginRight: 20,
    // borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#E8E8E8",
    // boxShadow:' rgba(149, 157, 165) 2px 8px 24px'
  },
  focused: {
    height: 65,
    width: 65,
    marginTop: -20,
  },
});
export default BottomNav;
