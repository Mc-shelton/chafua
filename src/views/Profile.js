import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import BottomNav from "../components/bottomNav";
import { globalStyles } from "../components/commonStyles";

function Profile({ navigation }) {
  // console.log(route)
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
          fontSize: "21px",
          marginTop: "30px",
        }}
      >
        Shelton Omondi
      </Text>
      <Text
        style={{
          fontSize: "15px",
          width: "80%",
          color: "grey",
          //   marginBottom: "30%",
          textAlign: "center",
        }}
      >
        sheltonnito@gmail.com
        <br />
        0741741381
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("EditProfile");
        }}
        style={[
          {
            backgroundColor: "red",
            marginTop: "20px",
            padding: "10px",
            paddingLeft: "30px",
            paddingRight: "30px",
            borderRadius: "10px",
            marginBottom: "30px",
          },
        ]}
      >
        <Text style={{ fontSize: "18px", color: "white" }}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=>{navigation.navigate('Favorites')}}
      style={[globalStyles.LButtons, { justifyContent: "center" }]}>
        <Text style={[globalStyles.iText]}>My Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=>{navigation.navigate('AddNewAddress')}}
      style={[globalStyles.LButtons, { justifyContent: "center" }]}>
        <Text style={[globalStyles.iText]}>My AddAddress</Text>
      </TouchableOpacity>
      <BottomNav props={(navigation)}/>
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
export default Profile;
