import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import BackButton from "../components/backButton";
import { globalStyles } from "../components/commonStyles";

function LogIn({ navigation }) {
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
            height: "85%",
            backgroundColor: "white",
          },
        ]}
      >
        <Text
          style={{
            fontSize: "27px",
            color: "red",
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
            },
          ]}
          placeholder="Email or Phone"
        />
        <TextInput
          style={[globalStyles.LButtons, globalStyles.iText]}
          placeholder="Password"
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
              color: "red",
              fontSize: "15px",
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <View
          style={[
            globalStyles.container,
            globalStyles.LButtons,
            {
              marginTop: "50px",
            },
          ]}
        >
          <Text style={[globalStyles.bText]}>Login</Text>
        </View>
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
              color: "red",
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
    border: "2px solid red",
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
