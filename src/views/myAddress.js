import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import BackButton from "../components/backButton";
import { globalStyles } from "../components/commonStyles";
import props from "../props/props";

function MyAddress({ navigation }) {
  const [addresses, setAddresses] = useState([]);

  useEffect(async () => {
    const willFocus = navigation.addListener("focus", () => {
      AsyncStorage.getItem("addresses")
        .then((res) => {
          if (res) {
            let array = JSON.parse(res);
            setAddresses(array);
            console.log("array", array);
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
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <BackButton props={{ navigation: navigation, title: "My Addresses" }} />

      <FlatList
        data={addresses}
        keyExtractor={(item) => item.room}
        renderItem={(item) => {
          return (
            <View style={globalStyles.cartItem}>
              <TouchableOpacity
                style={[
                  globalStyles.paddedButton,
                  ,
                  {
                    position: "absolute",
                    top: "0px",
                    right: "20px",
                    backgroundColor: "none",
                    border: "2px solid grey",
                  },
                ]}
                onPress={() => {
                  navigation.navigate("AddNewAddress", {
                    ops: "Edit",
                    room: item.item.room,
                  });
                }}
              >
                <Text style={[globalStyles.iText, { color: "grey" }]}>
                  Edit
                </Text>
              </TouchableOpacity>
              <View style={{
                width:'60%'
              }}>
              <Text
                style={{
                  fontSize: "20px",
                }}
              >
                {item.item.title}
              </Text>
              <Text
                style={{
                  fontSize: "20px",
                  color: "grey",
                  marginTop: "10px",
                }}
              >
                {item.item.location}
              </Text>
              <Text
                style={{
                  fontSize: "20px",
                  color: "grey",
                }}
              >
                {item.item.room}
                
              </Text>
              <Text
                style={{
                  fontSize: "20px",
                  color: "grey",
                }}
              >
                {item.item.phone}
                
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
          height: "90%",
        }}
        ListEmptyComponent={() => {
          return (
            <View
              style={[
                globalStyles.container,
                {
                  border: "none",
                  marginTop: "30%",
                },
              ]}
            >
              <Text
                style={{
                  fontSize: "18px",
                }}
              >
                No addresses here, please add one{" "}
              </Text>
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />

      <View
        style={{
          backgroundColor: "white",
          height: "15%",
          display: "flex",
          // justifyContent:'center',
          boxShadow: " rgb(74, 4, 4) 0px 14px  30px",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            border: "2px solid rgb(74, 4, 4)",
            marginTop: "30px",
            height: "35px",
            width: "200px",
            borderRadius: "10px",
          }}
          onPress={() => {
            navigation.navigate("AddNewAddress", { ops: "Add" });
          }}
        >
          <Text
            style={{
              color: "rgb(74, 4, 4)",
              fontSize: "15px",
              textAlign: "center",
              marginTop: "8px",
            }}
          >
            + Add New Address
          </Text>
        </TouchableOpacity>
      </View>
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
});
export default MyAddress;
