import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import BackButton from "../components/backButton";
import { globalStyles } from "../components/commonStyles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LogIn({ navigation }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogIn = () => {
    console.log(Email)
    console.log(Password)

    if(Email != '' && Password != ''){

      axios({
        method:'POST',
        url:'http://localhost/chafua/logIn.php',
        data:{
          Email:Email,
          Password:Password
        },

      }).then(async(response)=>{
        try{
         if(response.data.Name != undefined){

          let data = JSON.stringify(response.data)
         await AsyncStorage.setItem('user', data)
         await AsyncStorage.setItem('isLoggedIn', true)
         await AsyncStorage.setItem('cart',JSON.stringify([]))
         window.location.reload()
        //  console.log()
         
      }else{
        alert(response.data)
      }}catch(e){
        console.log(e.message)
        alert('You are offline')
      }
      })
    }else{
      alert('Some fields are not filled')
    }
  };



  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <BackButton props={{ navigation: navigation, title: "Log In" }} />
      <View
        style={[
          globalStyles.container,
          {
            marginTop: "100px",
            paddingTop: "30%",
            border: "none",
            backgroundColor: "white",
          },
        ]}
      >
        <Text
          style={{
            fontSize: "27px",
            color: "rgb(94, 4, 4)",
            // marginTop: "20px",
          }}
        >
          Welcome Back
        </Text>
        <Text
          style={{
            fontSize: "20px",
          }}
        >
          Login to your account
        </Text>

        <TextInput
          style={[
            globalStyles.LButtons,
            globalStyles.iText,
            {
              marginTop: "70px",
              outline: "none",
            },
          ]}
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextInput
          style={[
            globalStyles.LButtons,
            globalStyles.iText,
            {
              outline: "none",
            },
          ]}
          secureTextEntry={true}
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <TouchableOpacity
          style={{
            marginTop: "5px",
            alignSelf: "flex-end",
            marginRight: "30px",
          }}
          onPress={() => {  
    navigation.navigate("ForgotPass");

          }}
        >
          <Text
            style={{
              color: "rgb(74, 4, 4)",
              fontSize: "15px",
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.container,
            globalStyles.LButtons,
            {
              marginTop: "50px",
            },
          ]}

          onPress={handleLogIn}
        >
          <Text style={[globalStyles.bText, { color: "rgb(74, 4, 4)" }]}>
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={[
            globalStyles.iText,
            {
              marginTop: "30px",
            },
          ]}
        >
          Don't have an account yet?{" "}
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={{
              color: "rgb(74, 4, 4)",
            }}
          >
            <Text style={[globalStyles.iText]}>Sign Up</Text>
          </TouchableOpacity>
        </Text>
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

export default LogIn;
