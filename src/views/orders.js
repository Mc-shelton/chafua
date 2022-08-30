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
} from "react-native";
import BottomNav from "../components/bottomNav";
import { globalStyles } from "../components/commonStyles";
import TopHeader from "../components/topHeader";
import props from "../props/props";

function Orders({ navigation }) {
  const [cAlert, setcAlert] = useState(false);
  const [orderList, setOrderList] = useState([]);
  console.log(cAlert);

  useEffect(() => {
    const willFocus = navigation.addListener("focus", () => {
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
          .then(async (response) => {
            // console.log(JSON.parse(response.data));
            // setOrderList(JSON.parse(response.data))
            // console.log(response.data);
            setOrderList(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
  });
  return (
    <View style={styles.main} showsVerticalScrollIndicator={false}>
      <TopHeader props={{ navigation: navigation, title: "Orders" }} />
      <View
        style={{
          height: "65%",
          width: "100%",
        }}
      >
      {orderList.map((item) => (
        <View key={item.orderID}>
          <Text>hello world</Text>

          {JSON.parse(item.orders).map((val) => (
            <View key={val.itemID}>
              <Text>val.itemID</Text>
            </View>
          ))}
        </View>
      ))}
      </View>
      {/* </View> */}

      {cAlert ? (
        <View
          style={[
            globalStyles.container,
            {
              position: "absolute",
              bottom: "80px",
              backgroundColor: "grey",
              width: "70%",
              padding: "5px",
              left: "14%",
            },
          ]}
        >
          <Text
            style={{
              fontSize: "17px",
              color: "white",
            }}
          >
            Long press to cancel
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
    padding: "0",
    overflow: "none",
    height: "100%",
  },
  totalBox: {
    border: "2px solid red",
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
export default Orders;
