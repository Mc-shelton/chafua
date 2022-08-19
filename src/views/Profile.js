import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useRef, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import BottomNav from "../components/bottomNav";
import { globalStyles } from "../components/commonStyles";

function Profile({ navigation }) {
  // console.log(route)

  const [logBox, setLogBox] = useState(false);
  const [user, setUser] = useState([]);

  const userData = useRef(0);
  // console.log('asddf')
  useEffect(() => {

  var storeUser;
  const getUser = async()=>{

    storeUser = await AsyncStorage.getItem('user')
    storeUser = JSON.parse(storeUser)
    // setUser(storeUser)
  return storeUser
  }

  getUser().then((res)=>{
    // console.log(res)
    userData.current = res

    // console.log(userData.current)
  })

  });
  // console.log('store', user )
  
  // setUser(userData)
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
      {logBox ? (
        <View
          style={[
            globalStyles.container,
            {
              padding: "50px",
              position: "fixed",
              backgroundColor: "white",
              zIndex: "3",
            },
          ]}
        >
          <Text style={[globalStyles.iText]}>Are you sure?{userData.current.Name} </Text>
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

          onPress={()=>{
            setLogBox(false)
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
        {userData.current.Name}
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
        {/* sheltonnito@gmail.com */}
        {userData.current.Email}

        <br />
        {/* 0741741381 */}
        {userData.current.Name}

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
        onPress={() => {
          navigation.navigate("Favorites");
        }}
        style={[globalStyles.LButtons, { justifyContent: "center" }]}
      >
        <Text style={[globalStyles.iText]}>My Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AddNewAddress");
        }}
        style={[globalStyles.LButtons, { justifyContent: "center" }]}
      >
        <Text style={[globalStyles.iText]}>My AddAddress</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setLogBox(true)
        }}
        style={[globalStyles.LButtons, { justifyContent: "center" }]}
      >
        <Text style={[globalStyles.iText]}>Log Out</Text>
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
