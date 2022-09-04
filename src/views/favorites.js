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
    AsyncStorage.getItem("favorites")
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

        console.log('array',array)
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
                  console.log('item',item.item)
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
                      description:item.item.description,
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
                    height: "100px",
                    width: "100px",
                    marginLeft: "10px",
                  }}
                  source={item.item.thumbNail}
                  imageStyle={{
                    borderRadius: "15px",
                  }}
                />
                <View
                  style={{
                    marginLeft: "20px",
                    maxWidth: "50%",
                    // border:'2px solid red'
                  }}
                >
                  <Text
                    style={{
                      position: "absolute",
                      left: "180px",
                      fontSize: "18px",
                      color: "rgb(74, 4, 4)",
                    }}
                  >
                    x{item.item.count}
                  </Text>
                  <Text
                    style={{
                      fontSize: "20px",
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
                      fontSize: "25px",
                      marginTop: "10px",
                    }}
                  >
                    {parseInt(item.item.price) + parseInt(item.item.packaging)}{" "}
                    <span
                      style={{
                        fontSize: "14px",
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
            marginTop: "0px",
            paddingBottom: "10px",
            height: "10%",
            // border:'2px solid red'
          }}
          ListEmptyComponent={() => {
            return (
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "20px",
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
    height: "150px",
    width: "90%",
    marginLeft: "5%",
    borderRadius: "20px",
    backgroundColor: "white",
    padding: "20px",
  },
  buttons: {
    border: "2px solid rgb(74, 4, 4)",
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
    height: "120px",
    borderRadius: "20px",
    marginTop: "20px",
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
