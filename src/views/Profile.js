import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useRef, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import BottomNav from "../components/bottomNav";
import { globalStyles } from "../components/commonStyles";
import Logo from "../components/logo";

import infoLogo from '../../assets/icons/infoLogo.png'
import powerIcon from '../../assets/icons/powericon.png'
function Profile({ navigation }) {
  // console.log(route)

  const [logBox, setLogBox] = useState(false);
  const [user, setUser] = useState(0);

  var globalObject = ["tempUser"];

  const getUser = async () => {
    let user = await AsyncStorage.getItem("user");

    return user;
  };
  useEffect(() => {
    getUser().then((res) => {
      setUser(res);
    });
  }, [user]);
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
      <TouchableOpacity
      onPress={()=>{
        navigation.navigate('Info')
      }}
          style={{
            position: "absolute",
            right: "7%",
            top: "30px",
            height: "34px",
            width: "34px",
            borderRadius:'100%',
            zIndex:4
          }}> 
        <Image
          source={infoLogo}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => {
        setLogBox(true);
      }}
          style={{
            position: "absolute",
            right: "7%",
            top: "80px",
            border:'2px solid rgb(74, 4, 4)',
            height: "35px",
            width: "35px",
            borderRadius:'100%',
            zIndex:4
          }}> 
        <Image
          source={powerIcon}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </TouchableOpacity>
      {logBox ? (
        <View
          style={[
            globalStyles.container,
            {
              padding: "100px",
              position: "fixed",
              backgroundColor: "white",
              zIndex: "3",
            },
          ]}
        >
          <Text style={[globalStyles.iText]}>Are you sure?</Text>
          <TouchableOpacity
            onPress={async () => {
              AsyncStorage.clear();
              window.location.reload();
            }}
            style={[
              globalStyles.container,
              {
                padding: "5px",
                paddingLeft: "30px",
                paddingRight: "30px",
                marginTop: "20px",
              },
            ]}
          >
            <Text style={[globalStyles.bText]}>Log out</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setLogBox(false);
            }}
            style={[
              globalStyles.container,
              {
                padding: "5px",
                paddingLeft: "30px",
                paddingRight: "30px",
                marginTop: "10px",
              },
            ]}
          >
            <Text style={[globalStyles.bText]}>cancel</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
      <View
        style={{
          marginTop: "-100px",
          width: "100%",
        }}
      >
        <Logo />
      </View>
      <Text
        style={{
          fontSize: "21px",
          marginTop: "30px",
        }}
      >
        {JSON.parse(user).Name}
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
        {JSON.parse(user).Email}

        <br />
        {JSON.parse(user).Phone}
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("EditProfile", {
            params: { userData: JSON.parse(user) },
          });
        }}
        style={[
          {
            backgroundColor: "rgb(74, 4, 4)",
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
        onPress={() => {
          navigation.navigate("Favorites");
        }}
        style={[globalStyles.LButtons, { justifyContent: "center" }]}
      >
        <Text style={[globalStyles.iText]}>My Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MyAddress");
        }}
        style={[globalStyles.LButtons, { justifyContent: "center" }]}
      >
        <Text style={[globalStyles.iText]}>My AddAddress</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ChangePass", {
            params: { userData: JSON.parse(user) },
          });
        }}
        style={[globalStyles.LButtons, { justifyContent: "center" }]}
      >
        <Text style={[globalStyles.iText]}>Change Password</Text>
      </TouchableOpacity>
      <BottomNav props={navigation} />
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
