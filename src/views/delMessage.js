import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SlideInUp } from "react-native-reanimated";
import { View } from "react-native-web";
import { globalStyles } from "../components/commonStyles";

function DelMessage({navigation}) {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          height: "350px",
          marginTop: "50px",
          border: "2px solid red",
        }}
      ></View>

      <View>
        <Text
          style={{
            color: "red",
            fontSize: "25px",
            marginTop: "50px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Your food is on the way
        </Text>
        <Text
          style={{
            color: "grey",
            padding: "10px",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Thank you for your order! you can track the delivery in 'Order'
          section
        </Text>
        <Text
          style={{
            fontSize: "20px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Est. Delivery Time : 24 mins
        </Text>
      </View>
      <TouchableOpacity
        style={[
          globalStyles.container,
          {
            height: "50px",
            backgroundColor: "red",
            width: "90%",
            marginLeft: "5%",
            marginTop: "40px",
          },
        ]}
        onPress={()=>{navigation.navigate('Orders')}}
      >
        <Text
          style={{
            color: "white",
            fontSize: "20px",
          }}
        >
          Track My Order
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default DelMessage;
