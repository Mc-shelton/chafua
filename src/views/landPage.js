import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles } from "../components/commonStyles";

function LandPage({props,navigation}) {
    console.log(props)
  return (
    <View
      style={[
        globalStyles.container,
        {
          borderRadius: "0",
          height: "100%",
          backgroundColor: "white",
        },
      ]}
    >
      <View
        style={[
          globalStyles.container,
          {
            height: "150px",
            width: "150px",
            // marginTop: "100px",
          },
        ]}
      ></View>
      <Text
        style={{
          fontSize: "30px",
          color: "red",
          marginTop: "40%",
        }}
      >
        Welcome,
      </Text>
      <Text
        style={{
          fontSize: "20px",
          width: "80%",
          marginTop: "10px",
          marginBottom: "30%",
          textAlign: "center",
        }}
      >
        To 'beti nywandi', happy ordering and eating
      </Text>
      <TouchableOpacity
      onPress={()=>{
        navigation.navigate('LogIn')
      }}
        style={[
          globalStyles.container,
          styles.pgButtons,
          { backgroundColor: "red" },
        ]}
      >
        <Text style={{ fontSize: "18px", color: "white", fontWeight: "bold" }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=>navigation.navigate('SignUp')}
      style={[globalStyles.container, styles.pgButtons]}>
        <Text style={{ fontSize: "18px", fontWeight: "bold" }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pgButtons: {
    width: "90%",
    height: "50px",
    marginTop: "25px",
  },
});
export default LandPage;
