import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
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
import { globalStyles } from "../components/commonStyles";
import TopHeader from "../components/topHeader";
import props from "../props/props";
import time from "../../assets/icons/time.png";

function Orders({ navigation }) {
  console.log(navigation)
  const [orderList, setOrderList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const handleCancel = (items, ind) => {
    if (items.length > 0) {
      items = JSON.stringify(items);
    } else {
      items = "Remove";
    }
    axios({
      method: "POST",
      url: "http://localhost/chafua/cancelOrder.php",
      data: {
        orderID: ind,
        orders: items,
      },
    })
      .then((res) => {
        fetch();
        navigation.isFocused()
        alert(res.data);
        if(res.data == 'Order Removed'){
          window.location.reload()
        }


      })
      .catch(() => {
        alert("Sorry, network error!!");
        fetch();
      });
  };

  const fetch = () => {
    AsyncStorage.getItem("user").then((res) => {
      let user = JSON.parse(res);
      let resData;
      axios({
        method: "POST",
        url: "http://localhost/chafua/getOrders.php",
        data: {
          userID: user.userID,
        },
      })
        .then((response) => {
          if (typeof response.data != "string") {
            setOrderList(response.data);
            let filter = response.data.filter((item) => item.orders);
            let total = 0;
            filter.forEach((array) => {
              JSON.parse(array.orders).forEach((value) => {
                let itTotal = parseInt(value.price) + parseInt(value.packaging);
                let isTotal = itTotal * parseInt(value.count);
                total += parseInt(isTotal);
              });
            });
            setTotalPrice(total);
          }
        })
        .catch((err) => {
          alert("Failed to fetch");
        });
    });
  };
  useEffect(() => {
    const willFocus = navigation.addListener("focus", () => {
      fetch();
    });
    return willFocus;
  });
  return (
    <View style={globalStyles.main} showsVerticalScrollIndicator={false}>
      <TopHeader props={{ navigation: navigation, title: "Orders" }} />
      <ScrollView
        style={{
          height: "65%",
          width: "100%",
          paddingBottom: "70%",
        }}
        showsHorizontalScrollIndicator={false}
      >
        {refresh}
        {orderList != [] && orderList.length >0 ? (
          orderList.map((item) => (
            <View key={item.orderID}>
              {JSON.parse(item.orders).map((val) => (
                <TouchableOpacity
                  key={val.itemID}
                  style={styles.cartItem}
                  onPress={() => {
                    alert("Long press to cancel");
                  }}
                  onLongPress={() => {
                    // let obj = {}
                    let orderID = item.orderID;
                    let orders = JSON.parse(item.orders);

                    let filter = orders.map((mapItem) => mapItem.itemID);
                    let ind = filter.indexOf(val.itemID);

                    orders.splice(ind, ind + 1);
                    handleCancel(orders, orderID);
                  }}
                >
                  <ImageBackground
                    style={{
                      height: "100px",
                      width: "100px",
                      // borderRadius: "100%",
                      marginLeft: "10px",
                    }}
                    source={val.thumbNail}
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
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      x{val.count}
                      <Text
                        style={{
                          marginTop: "100%",
                          marginLeft: "-30px",
                        }}
                      >
                        {item.status}
                      </Text>
                    </Text>
                    <Text
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      {val.name}
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                      }}
                    >
                      {val.hotel}
                    </Text>
                    <Text
                      style={{
                        fontSize: "25px",
                        marginTop: "10px",
                      }}
                    >
                      {parseInt(val.price) + parseInt(val.packaging)}{" "}
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
              ))}
            </View>
          ))
        ) : (
          <Text style={{ marginTop: "50%", textAlign: "center", fontSize:'18px' }}>
            You have no orders as yet
          </Text>
        )}
      </ScrollView>
      {/* </View> */}

      <View
        style={{
          position: "fixed",
          bottom: "20px",
          width: "100%",
          backgroundColor: "white",
          paddingTop: "10px",
          paddingBottom: "60px",
          boxShadow: " rgba(149, 157, 165) 0px 3px 15px",
          // border: "2px solid red",
        }}
      >
        <View style={styles.totalBox}>
          <Text
            style={{
              fontSize: "20px",
            }}
          >
            Delivery time
          </Text>
          <View
            style={{
              position: "absolute",
              display: "flex",
              right: "10px",
              marginTop: "-5px",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ImageBackground
              style={{
                height: "30px",
                width: "30px",
                border: "2px solid rgb(74, 4, 4)",
                borderRadius: "100%",
                marginRight: "5px",
              }}
              source={time}
              imageStyle={{
                borderRadius: "15px",
              }}
            />
            <Text
              style={{
                marginLeft: "5px",
                fontSize: "17px",
                fontWeight: "bold",
              }}
            >
              25 mins
            </Text>
          </View>
          <Text
            style={{
              marginTop: "16px",
            }}
          >
            Total Price
          </Text>
          <Text
            style={{
              fontSize: "40px",
            }}
          >
            {totalPrice}
            <span
              style={{
                fontSize: "20px",
                color: "rgb(74, 4, 4)",
                fontWeight: "bold",
              }}
            >
              /=
            </span>
          </Text>
          <TouchableOpacity
            style={{
              height: "40px",
              width: "150px",
              border: "2px solid rgb(74, 4, 4)",
              borderRadius: "15px",
              position: "absolute",
              bottom: "20px",
              backgroundColor: "rgb(74, 4, 4)",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              right: "20px",
            }}
          >
            {orderList != 0 ? <p>On the way!!</p> : <p>Make Order</p>}
          </TouchableOpacity>
        </View>
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
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: "10px",
    marginLeft: "5px",
    height: "35px",
  },
  cartItem: {
    height: "120px",
    borderRadius: "20px",
    marginTop: "20px",
    display: "flex",
    width: "95%",
    marginLeft: "2.5%",
    // justifyContent:'center',
    flexDirection: "row",
    boxShadow: " rgba(149, 157, 165) 0px 3px 15px",
    alignItems: "center",
    overflow: "hidden",
  },
});
export default Orders;
