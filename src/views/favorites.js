import React from "react";
import { View, StyleSheet, Text,FlatList } from "react-native";

import props from "../props/props";

function Favorites() {
  return (
    <View style={{
        height:'100%'
    }}>
      <View style={styles.buttons}>
        <View
          style={{
            borderLeft: "3px solid black",
            borderBottom: "3px solid black",
            height: "13px",
            marginLeft: "5px",
            width: "13px",
          }}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          //   marginTop: "-1px",
          fontSize: "20px",
          position: "fixed",
          width: "100%",
          height: "100px",
          backgroundColor: "white",
          paddingTop: "45px",
          zIndex: "2",
        }}
      >
        My Favorites
      </Text>
      
      <FlatList
        data={props.categList}
        renderItem={() => {
          return (
            <View style={styles.cartItem}>
              <View
                style={{
                  border: "2px solid red",
                  height: "100px",
                  width: "100px",
                  borderRadius: "100%",
                  marginLeft: "10px",
                }}
              />
              <View
                style={{
                  marginLeft: "20px",
                  maxWidth: "50%",
                  // border:'2px solid red'
                }}
              >
                {/* <Text
                  style={{
                    position: "absolute",
                    left: "180px",
                    fontSize: "18px",
                    color: "red",
                  }}
                >
                  x2
                </Text> */}
                <Text
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Name Food
                </Text>
                <Text
                  style={{
                    color: "grey",
                  }}
                >
                  hotelname
                </Text>
                <Text
                  style={{
                    fontSize: "25px",
                    marginTop: "10px",
                  }}
                >
                  20.00{" "}
                  <span
                    style={{
                      fontSize: "14px",
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    /=
                  </span>
                </Text>
              </View>
            </View>
          );
        }}
        style={{
          width: "90%",
          marginLeft: "5%",
          marginTop: "90px",
          paddingBottom: "5px",
          height:'90%'
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  buttons: {
    border: "2px solid red",
    height: "45px",
    width: "45px",
    borderRadius: "10px",
    transform: "rotate(45deg)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "30px",
    position: "fixed",
    marginLeft: "20px",
    zIndex: "3",
  },
  cartItem: {
    border: "2px solid red",
    height: "120px",
    borderRadius: "20px",
    marginTop: "20px",
    display: "flex",
    // justifyContent:'center',
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
});
export default Favorites;
