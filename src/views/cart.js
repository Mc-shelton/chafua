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

function Cart({ navigation }) {
  const [cAlert, setcAlert] = useState(true);
  const [cartItems, setCartItems] = useState("");
  const [cartItemsList, setCartItemsList] = useState(cartItems);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setcAlert(false);
    }, 500);
  });

  const fetch=()=>{
    AsyncStorage.getItem("cart")
    .then((res) => {
      if (res) {
        let array = JSON.parse(res);
        let total = 0;
        array.forEach((value) => {
          let itTotal = parseInt(value.price) + parseInt(value.packaging);
          let isTotal = itTotal * parseInt(value.count);
          total += parseInt(isTotal);
        });
        setTotalPrice(total);
        setCartItems(array);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
  useEffect( () => {
    const willFocus = navigation.addListener("focus", () => {
     fetch()
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
                  navigation.navigate("CartDetails", {
                    cartList: {
                      estDelTme: item.item.estDelTime,
                      hotel: item.item.hotel,
                      name: item.item.name,
                      count: item.item.count,
                      itemID: item.item.itemID,
                    },
                  });
                }}
                onLongPress={async () => {

                  let filter = cartItems.map((item) => item.itemID);
                  let ind = filter.indexOf(item.item.itemID);

                  cartItems.splice(ind, ind + 1);
                  let cartString = JSON.stringify(cartItems);
                  await AsyncStorage.setItem("cart", cartString);
                  fetch()
                  alert('removed')
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
                    <Text
                      style={{
                        fontSize: 14,
                        color: "rgb(74, 4, 4)",
                        fontWeight: "bold",
                      }}
                    >
                      /=
                    </Text>
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
      <View
        style={{
          // position: "fixed",
          bottom: 20,
          width: "100%",
          backgroundColor: "white",
          paddingTop: 10,
          paddingBottom: 60,
          boxShadow: " rgba(149, 157, 165) 0px 3px 15px" ,
          // border: "2px solid red",
        }}
      >
        <View style={styles.totalBox}>
          <Text
            style={{
              fontSize: 20,
            }}
          >
            Delivery time
          </Text>
          <View
            style={{
              position: "absolute",
              display: "flex",
              right: 10,
              marginTop: -5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ImageBackground
              style={{
                height: 30,
                width: 30,
                border: "2px solid rgb(74, 4, 4)",
                // borderRadius: "100%",
                marginRight: 5,
              }}
              source={time}
              imageStyle={{
                // borderRadius: 15,
              }}
            />
            <Text
              style={{
                marginLeft: 5,
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              25 mins
            </Text>
          </View>
          <Text
            style={{
              marginTop: 16,
            }}
          >
            Total Price
          </Text>
          <Text
            style={{
              fontSize: 40,
            }}
          >
            {totalPrice}
            <Text
              style={{
                fontSize: 20,
                color: "rgb(74, 4, 4)",
                fontWeight: "bold",
              }}
            >
              /=
            </Text>
          </Text>
          <TouchableOpacity
            style={{
              height: 40,
              width: 150,
              border: "2px solid rgb(74, 4, 4)",
              // borderRadius: 15,
              position: "absolute",
              bottom: 20,
              backgroundColor: "rgb(74, 4, 4)",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              right: 20,
            }}
            onPress={() => {
              console.log();
              if (cartItems.length > 0) {
                navigation.navigate("AddAddress");
              } else {
                alert("Nothing in Cart");
              }
            }}
          >
            <Text>Check Out</Text>
          </TouchableOpacity>
        </View>
      </View>

      {cAlert ? (
        <View
          style={[
            globalStyles.container,
            {
              position: "absolute",
              bottom: 80,
              backgroundColor: "grey",
              width: "70%",
              padding: 5,
              left: "14%",
            },
          ]}
        >
          <Text
            style={{
              fontSize: 17,
              color: "white",
            }}
          >
            Long press to remove
          </Text>
        </View>
      ) : (
        <></>
      )}
      <BottomNav props={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    // padding: "0",
    // overflow: "none",
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
    // transform: "rotate(45deg)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    // position: "fixed",
    marginLeft: 20,
    zIndex: 3,
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
    // overflow: "hidden",
  },
});
export default Cart;
