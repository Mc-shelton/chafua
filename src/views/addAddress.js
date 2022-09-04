import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
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

function AddAddress({ navigation }) {
  // console.log('asdfjlaksd asdf')
  const [isChosen, setIsChosen] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [pickedAddress, setPickedAddress] = useState();
  const [checkItems, setCheckItems] = useState("");
  const [userID, setUserID] = useState("");
  const [totalPrice, setTotalPrice] = useState();
  const [totalPack, setTotalPack] = useState();
  const [deliveryFee, setDeliveryFee] = useState();
  useEffect(async () => {
    const willFocus = navigation.addListener("focus", () => {
      AsyncStorage.getItem("addresses")
        .then((res) => {
          if (res) {
            let array = JSON.parse(res);
            setAddresses(array);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
    return willFocus;
  }, []);

  useEffect(async () => {
    const willFocus = navigation.addListener("focus", () => {
      AsyncStorage.getItem("user")
        .then((res) => {
          if (res) {
            let array = JSON.parse(res);
            setUserID(array);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
    return willFocus;
  }, []);

  useEffect(async () => {
    const willFocus = navigation.addListener("focus", () => {
      AsyncStorage.getItem("cart").then((res) => {
        if (res) {
          let array = JSON.parse(res);

          let priced = 0;
          let packing = 0;
          let totCount = 0;
          let delivery = 0;
          setCheckItems(array);
          array.forEach((value) => {
            priced += parseInt(value.price) * parseInt(value.count);
            packing += parseInt(value.packaging) * parseInt(value.count);
            totCount += parseInt(value.count);
            delivery += parseInt(value.delivery) * parseInt(value.count);
          });

          setTotalPrice(priced);
          setTotalPack(packing);
          console.log(totCount);
          let average = Math.floor(delivery / totCount);
          console.log(average);
          console.log(delivery);
          if (priced + delivery < 200) {
            if (totCount < 3) {
              setDeliveryFee(average + 5);
            } else {
              if (totCount < 5) {
                setDeliveryFee(average + 10);
              } else {
                setDeliveryFee(Math.floor(priced * 0.1));
              }
            }
          } else {
            setDeliveryFee(Math.floor(priced * 0.1));
          }
        }
      });
    });
    return willFocus;
  }, []);
  const handleOrder = () => {
    if(checkItems != ''){
    axios({
      method: "POST",
      url: "http://localhost/chafua/makeOrder.php",
      data: {
        userID: userID.userID,
        orders: JSON.stringify(checkItems),
        addresses:JSON.stringify(pickedAddress)
      },
    }).then(async(res)=>{
      if(res.data.orders){
        alert('Success !!! Order received successfully')
        await AsyncStorage.setItem('cart', JSON.stringify([]))
        navigation.navigate('DelMessage')
      }else{
        alert(res.data)
      }
    }).catch((err)=>{
      alert('something went wrong please check on your network')
    });}else{
      alert('Nothing to check out!!, please add something to cart')
    }
  };

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <BackButton props={{ navigation: navigation, title: "Choose Address" }} />
      <FlatList
        data={addresses}
        keyExtractor={(item) => item.room}
        ListEmptyComponent={()=><Text style={{
          textAlign:'center'
          ,marginTop:'20%'
          ,fontSize:18
        }}>You haven't added an Address yet</Text>}
        renderItem={(item) => {
          return (
            <TouchableOpacity
              style={globalStyles.cartItem}
              onPress={() => {
                setPickedAddress(item.item);
                setIsChosen(item.item.room);
              }}
            >
              <View
                style={{
                  border: "2px solid rgb(74, 4, 4)",
                  height: 25,
                  width: 25,
                  // borderRadius: "100%",
                  position: "absolute",
                  right: 15,
                  top: 20,
                  // display:'flex',
                  // justifyContent:'center',
                  // alignItems:'center',
                  padding: 1,
                }}
              >
                <View
                  style={{
                    backgroundColor:
                      isChosen == item.item.room ? "rgb(74, 4, 4) " : "white",
                    height: "100%",
                    width: "100%",
                    // borderRadius: "100%",
                  }}
                ></View>
              </View>
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                {item.item.title}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "grey",
                  marginTop: 10,
                }}
              >
                {item.item.location}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "grey",
                }}
              >
                {item.item.room}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "grey",
                }}
              >
                {item.item.phone}
              </Text>
            </TouchableOpacity>
          );
        }}
        style={{
          width: "90%",
          marginLeft: "5%",
          marginTop: 90,
          paddingBottom: 5,
          height: "90%",
        }}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          backgroundColor: "white",
          boxShadow: " rgb(74, 4, 4) 0px 14px  30px",
          height: 350,
          display: "flex",
          // justifyContent:'center',
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyAddress");
          }}
          style={{
            border: "2px solid rgb(74, 4, 4)",
            marginTop: 30,
            height: 35,
            width: 200,
            // borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "rgb(74, 4, 4)",
              fontSize: 15,
              textAlign: "center",
              marginTop: 8,
            }}
          >
            + Add/Edit Address
          </Text>
        </TouchableOpacity>

        <View
          style={[
            {
              border: "2px solid rgb(74, 4, 4)",
              height: 140,
              padding: 20,
              overflow: "hidden",
              width: "80%",
              // borderRadius: 15,
              marginTop: 20,
            },
          ]}
        >
          <View
            style={[
              {
                // alignSelf:'flex-end'
                position: "absolute",
              },
            ]}
          >
            <Text
              style={{
                fontSize: 18,
              }}
            >
              Items Price
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              Packaging Fees
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              Delivery Fees
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 23,
                color: "rgb(74, 4, 4)",
                marginTop: 10,
              }}
            >
              Total
            </Text>
          </View>
          <View
            style={[
              {
                // justifySelf:'flex-end'
                position: "absolute",
                right: 10,
              },
            ]}
          >
            <Text
              style={{
                fontSize: 18,
              }}
            >
              {totalPrice}/=
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              {totalPack}/=
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              {deliveryFee}/=
            </Text>
            <Text
              style={{
                fontSize: 23,
                fontWeight: "bold",
                color: "rgb(74, 4, 4)",
                marginTop: 10,
                marginRight: 50,
              }}
            >
              {deliveryFee + totalPack + totalPrice}
              <span
                style={{
                  fontSize: 14,
                }}
              >
                /=
              </span>
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: 35,
            // borderRadius: 10,
            width: "70%",
            backgroundColor: "rgb(74, 4, 4)",
            marginTop: 50,
          }}
          onPress={() => {
            if (isChosen != "") {
              handleOrder();
            } else {
              alert("You have not picked an address");
            }
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 7,
            }}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
});
export default AddAddress;
