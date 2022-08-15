import React, { useState } from "react";
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
  console.log(cAlert);
  return (
    <View style={styles.main} showsVerticalScrollIndicator={false}>
      <TopHeader props={{ navigation: navigation, title: "Orders" }} />
      <View
        style={[
          globalStyles.container,
          {
            marginTop: "20px",
            flexDirection: "row",
          },
        ]}
      >
        <View style={[globalStyles.container, styles.buttons]}>
          <Text
            style={{
              fontSize: "18px",
            }}
          >
            current
          </Text>
        </View>
        <View style={[globalStyles.container, styles.buttons]}>
          <Text
            style={{
              fontSize: "18px",
            }}
          >
            complete
          </Text>
        </View>
        <View style={[globalStyles.container, styles.buttons]}>
          <Text
            style={{
              fontSize: "18px",
            }}
          >
            canceled
          </Text>
        </View>
      </View>
      <FlatList
        data={props.categList}
        renderItem={() => {
          return (
            <TouchableOpacity
              style={styles.cartItem}
              onPress={() => {
                setcAlert(true);
                setTimeout(() => {
                  // alert()
                  setcAlert(false);
                }, 2000);
              }}
              onLongPress={() => alert("cancel?")}
            >
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
                <Text
                  style={{
                    position: "absolute",
                    left: "180px",
                    fontSize: "18px",
                    color: "red",
                  }}
                >
                  x2
                </Text>
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
            </TouchableOpacity>
          );
        }}
        style={{
          width: "90%",
          marginLeft: "5%",
          marginTop: "0px",
          paddingBottom: "100px",
          // border:'2px solid red'
        }}
        showsHorizontalScrollIndicator={false}
      />
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
