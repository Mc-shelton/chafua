import React, { useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import { SlideInUp } from "react-native-reanimated";
import { View } from "react-native-web";
import { globalStyles } from "../components/commonStyles";
import Logo from "../components/logo";

function DelMessage({navigation}) {
  useEffect(()=>{
    navigation.addListener('beforeRemove', (e)=>{
      e.preventDefault()
    })
  })
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <Logo/>
      <View>
        <Text
          style={{
            color: "rgb(74, 4, 4)",
            fontSize: 25,
            marginTop: 50,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Your food is on the way
        </Text>
        <Text
          style={{
            color: "grey",
            padding: 10,
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Thank you for your order! you can track the delivery in 'Order'
          section
        </Text>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Est. Delivery Time : 24 mins
        </Text>
      </View>
      <TouchableOpacity
        style={[
          globalStyles.container,
          {
            height: 50,
            backgroundColor: "rgb(74, 4, 4)",
            width: "90%",
            marginLeft: "5%",
            marginTop: 40,
          },
        ]}
        onPress={()=>{navigation.push('Orders')}}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Track My Order
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default DelMessage;
