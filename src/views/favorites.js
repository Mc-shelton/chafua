import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import BottomNav from "../components/bottomNav";
import TopHeader from "../components/topHeader";
import props from "../props/props";
import time from "../../assets/icons/time.png";
import { globalStyles } from "../components/commonStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

function Favorites({ navigation }) {
  const [cartItems, setCartItems] = useState("");

  const fetch = () => {
    AsyncStorage.getItem("favorites")
      .then((res) => {
        if (res) {
          let array = JSON.parse(res);
          setCartItems(array);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const willFocus = navigation.addListener("focus", () => {
      fetch();
    });
    return willFocus;
  }, []);
  return (
    <View style={styles.main} showsVerticalScrollIndicator={false}>
      <TopHeader props={{ navigation: navigation, title: "Cart" }} />
      <View
        style={{
          height: "65%",
          width: "100%",
        }}
      >
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.itemID}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                style={styles.cartItem}
                onPress={() => {
                  console.log("item", item.item);
                  let ind = cartItems
                    .map((obj) => obj.itemID)
                    .indexOf(item.item.itemID);
                  navigation.navigate("Details", {
                    cartItems: {
                      name: item.item.name,
                      hotel: item.item.hotel,
                      price: item.item.price,
                      estDelTime: item.item.estDelTime,
                      thumbNail: item.item.thumbNail,
                      count: parseInt(item.item.count),
                      rating: parseInt(item.item.rating),
                      itemID: parseInt(item.item.itemID),
                      packaging: item.item.packaging,
                      category: item.item.category,
                      delivery: item.item.delivery,
                      description: item.item.description,
                    },
                  });
                }}
                onLongPress={async () => {
                  let filter = cartItems.map((item) => item.itemID);
                  let ind = filter.indexOf(item.item.itemID);

                  cartItems.splice(ind, ind + 1);
                  let cartString = JSON.stringify(cartItems);
                  await AsyncStorage.setItem("favorites", cartString);
                  fetch();
                  alert("removed");
                }}
              >
                <ImageBackground
                  style={{
                    height: 100,
                    width: 100,
                    marginLeft: 10,
                  }}
                  source={item.item.thumbNail}
                  imageStyle={{
                    // borderRadius: 15,
                  }}
                />
                <View
                  style={{
                    marginLeft: 20,
                    maxWidth: "50%",
                    // border:'2px solid red'
                  }}
                >
                  <Text
                    style={{
                      position: "absolute",
                      left: 180,
                      fontSize: 18,
                      color: "rgb(74, 4, 4)",
                    }}
                  >
                    x{item.item.count}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                    }}
                  >
                    {item.item.name}
                  </Text>
                  <Text
                    style={{
                      color: "grey",
                    }}
                  >
                    {item.item.hotel}
                  </Text>
                  <Text
                    style={{
                      fontSize: 25,
                      marginTop: 10,
                    }}
                  >
                    {parseInt(item.item.price) + parseInt(item.item.packaging)}{" "}
                    <span
                      style={{
                        fontSize: 14,
                        color: "rgb(74, 4, 4)",
                        fontWeight: "bold",
                      }}
                    >
                      /=
                    </span>
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          style={{
            width: "100%",
            marginTop: 0,
            paddingBottom: 10,
            height: "10%",
            // border:'2px solid red'
          }}
          ListEmptyComponent={() => {
            return (
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  marginTop: "40%",
                }}
              >
                Nothing in cart as at now
              </Text>
            );
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <BottomNav props={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    padding: "0",
    overflow: "none",
    height: "100%",
  },
  totalBox: {
    border: "2px solid rgb(74, 4, 4)",
    height: 150,
    width: "90%",
    marginLeft: "5%",
    // borderRadius: 20,
    backgroundColor: "white",
    padding: 20,
  },
  buttons: {
    border: "2px solid rgb(74, 4, 4)",
    height: 45,
    width: 45,
    // borderRadius: 10,
    transform: "rotate(45deg)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    position: "fixed",
    marginLeft: 20,
    zIndex: "3",
  },
  cartItem: {
    height: 120,
    // borderRadius: 20,
    marginTop: 20,
    marginLeft: "5%",
    width: "90%",
    display: "flex",
    // justifyContent:'center',
    flexDirection: "row",
    boxShadow: " rgba(149, 157, 165) 0px 3px 15px",
    alignItems: "center",
    overflow: "hidden",
  },
});
export default Favorites;
