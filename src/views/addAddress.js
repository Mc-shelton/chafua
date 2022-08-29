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

function AddAddress({ navigation }) {
  // console.log('asdfjlaksd asdf')
  const [isChosen, setIsChosen] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [pickedAddress, setPickedAddress] = useState();
  const [checkItems,setCheckItems] = useState('')
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
      AsyncStorage.getItem("cart").then((res) => {
        if (res) {
          let array = JSON.parse(res);

          let priced = 0;
          let packing = 0;
          let totCount = 0;
          let delivery = 0;
          setCheckItems(array)
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
                  height: "25px",
                  width: "25px",
                  borderRadius: "100%",
                  position: "absolute",
                  right: "15px",
                  top: "20px",
                  // display:'flex',
                  // justifyContent:'center',
                  // alignItems:'center',
                  padding: "1px",
                }}
              >
                <View
                  style={{
                    backgroundColor:
                      isChosen == item.item.room ? "rgb(74, 4, 4) " : "white",
                    height: "100%",
                    width: "100%",
                    borderRadius: "100%",
                  }}
                ></View>
              </View>
              <Text
                style={{
                  fontSize: "20px",
                }}
              >
                Title of my Address
              </Text>
              <Text
                style={{
                  fontSize: "20px",
                  color: "grey",
                  marginTop: "10px",
                }}
              >
                Hostel
              </Text>
              <Text
                style={{
                  fontSize: "20px",
                  color: "grey",
                }}
              >
                C14
              </Text>
              <Text
                style={{
                  fontSize: "20px",
                  color: "grey",
                }}
              >
                0741741381
              </Text>
            </TouchableOpacity>
          );
        }}
        style={{
          width: "90%",
          marginLeft: "5%",
          marginTop: "90px",
          paddingBottom: "5px",
          height: "90%",
        }}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          backgroundColor: "white",
          boxShadow: " rgb(74, 4, 4) 0px 14px  30px",
          height: "350px",
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
            marginTop: "30px",
            height: "35px",
            width: "200px",
            borderRadius: "10px",
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
            + Add/Edit Address
          </Text>
        </TouchableOpacity>

        <View
          style={[
            {
              border: "2px solid rgb(74, 4, 4)",
              height: "140px",
              padding: "20px",
              overflow: "hidden",
              width: "80%",
              borderRadius: "15px",
              marginTop: "20px",
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
                fontSize: "18px",
              }}
            >
              Items Price
            </Text>
            <Text
              style={{
                fontSize: "18px",
              }}
            >
              Packaging Fees
            </Text>
            <Text
              style={{
                fontSize: "18px",
              }}
            >
              Delivery Fees
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: "23px",
                color: "rgb(74, 4, 4)",
                marginTop: "10px",
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
                right: "10px",
              },
            ]}
          >
            <Text
              style={{
                fontSize: "18px",
              }}
            >
              {totalPrice}/=
            </Text>
            <Text
              style={{
                fontSize: "18px",
              }}
            >
              {totalPack}/=
            </Text>
            <Text
              style={{
                fontSize: "18px",
              }}
            >
              {deliveryFee}/=
            </Text>
            <Text
              style={{
                fontSize: "23px",
                fontWeight: "bold",
                color: "rgb(74, 4, 4)",
                marginTop: "10px",
                marginRight: "50px",
              }}
            >
              {deliveryFee + totalPack + totalPrice}
              <span
                style={{
                  fontSize: "14px",
                }}
              >
                /=
              </span>
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: "35px",
            borderRadius: "10px",
            width: "70%",
            backgroundColor: "rgb(74, 4, 4)",
            marginTop: "50px",
          }}
          onPress={() => {  
            if (isChosen != "") {
              navigation.navigate("DelMessage");
            } else {
              alert("You have not picked an address");
            }
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "7px",
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
export default AddAddress;
