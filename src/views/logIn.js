import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
// import BackButton from "../components/BackButton";
import { globalStyles } from "../components/commonStyles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LogIn({ navigation }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogIn = () => {
    console.log(Email);
    console.log(Password);

    if (Email != "" && Password != "") {
      axios({
        method: "POST",
        url: "http://localhost/chafua/logIn.php",
        data: {
          Email: Email,
          Password: Password,
        },
      }).then(async (response) => {
        try {
          if (response.data.Name != undefined) {
            let data = JSON.stringify(response.data);
            await AsyncStorage.setItem("user", data);
            await AsyncStorage.setItem("isLoggedIn", true);
            await AsyncStorage.setItem("cart", JSON.stringify([]));
            await AsyncStorage.setItem("addresses", JSON.stringify([]));
            await AsyncStorage.setItem("favorites", JSON.stringify([]));
            window.location.reload();
            //  console.log()
          } else {
            alert(response.data);
          }
        } catch (e) {
          console.log(e.message);
          alert("You are offline");
        }
      });
    } else {
      alert("Some fields are not filled");
    }
  };

  return (
    <View style={[globalStyles.main]}>
      <View>
        {/* <BackButton props={{ navigation: navigation, title: "Log In" }} /> */}

        <Text style={[globalStyles.title]}>
          LogIn
          {/* {props.title} */}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[globalStyles.buttons]}
        >
          <View
            style={{
              // borderLeft: "3px solid rgb(74, 4, 4)",
              // borderBottom: "3px solid rgb(74, 4, 4)",
              borderColor: "rgb(74, 4, 4)",
              borderLeftWidth: 2,
              borderBottomWidth: 2,
              height: 13,
              marginLeft: 5,
              width: 13,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          globalStyles.container,
          {
            // marginTop: 100,
            paddingTop: "30%",
            // border: "none",
            borderWidth: 0,
            backgroundColor: "white",
          },
        ]}
      >
        <Text
          style={{
            fontSize: 25,
            color: "rgb(94, 4, 4)",
            // marginTop: 20,
          }}
        >
          Welcome Back
        </Text>
        <Text
          style={{
            fontSize: 15,
          }}
        >
          Login to your account
        </Text>

        <TextInput
          style={[
            globalStyles.LButtons,
            globalStyles.iText,
            {
              marginTop: 70,
              // outline: "none",
            },
          ]}
          placeholder="Email"
          keyboardType="email-address"
          
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextInput
          style={[
            globalStyles.LButtons,
            globalStyles.iText,
            {
              // outline: "none",
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
            marginTop: 5,
            alignSelf: "flex-end",
            marginRight: 30,
          }}
          onPress={() => {
            navigation.navigate("ForgotPass");
          }}
        >
          <Text
            style={{
              color: "rgb(74, 4, 4)",
              fontSize: 15,
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
              marginTop: 50,
              backgroundColor:'rgb(74, 4, 4)'
            },
          ]}
          onPress={handleLogIn}
        >
          <Text style={[globalStyles.bText, { color: "white" }]}>
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={[
            globalStyles.iText,
            {
              marginTop: 30,
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
  // buttons: {
  //   // border: "2px solid rgb(74, 4, 4)",
  //   borderWidth:2,
  //   borderColor:' rgb(74, 4, 4)',
  //   height: 45,
  //   width: 45,
  //   // borderRadius: 10,
  //   transform: "rotate(45deg)",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginTop: 30,
  //   position: "fixed",
  //   marginLeft: 20,
  //   zIndex: "3",
  // },
});

export default LogIn;
