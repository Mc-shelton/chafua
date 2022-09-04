import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import BackButton from "../components/BackButton";
import { globalStyles } from "../components/commonStyles";
import Logo from "../components/logo";
import axios from "axios";
import md5 from "md5";

function ChangePass({ route, navigation }) {
  const [user, setUser] = useState(route.params.params.userData);

  const [Email, setEmail] = useState(user.Email);
  const [Password, setPassword] = useState(user.Password);
  const [curPassWord, setCurPassWord] = useState("");
  const [newPassword, setNewPassword] = useState(user.Password);
  const [userID, setUserID] = useState(user.userID);

  const handleUpdate = () => {
    if (Password == md5(curPassWord)) {
      axios({
        method: "POST",
        url: "http://localhost/chafua/changePass.php",
        data: {
          Email: Email,
          Password: Password,
          newPassword: newPassword,
          userID: userID,
        },
      }).then(async (response) => {
        try {
          if (response.data.Password != undefined) {
            user["Password"] = response.data.Password;

            let data = JSON.stringify(user);
            await AsyncStorage.setItem("user", data);
            console.log("response", user);
            alert("Password Saved");

            window.location.reload();
          } else {
            alert(response.data);
          }
        } catch (e) {
          alert("Failed, check on your network");
        }
      });
    } else {
      alert("Password wasn't recognized");
    }
  };
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          position: "absolute",
          zIndex: "4",
          width: "100%",
          // border:'2px solid red',
        }}
      >
        <BackButton
          props={{ navigation: navigation, title: "Change Password" }}
        />
      </View>

      <View
        style={{
          // border:'2px solid red',
          marginTop: 20,
          width: "100%",
          zIndex: "0",
          // position:'absolute',top:'0',
          // border:'2px solid red'
          overflow: "hidden",
        }}
      >
        <Logo />
      </View>
      <View
        style={[
          globalStyles.container,
          {
            marginTop: 60,
            // height: "85%",
            backgroundColor: "white",
            border: "none",
          },
        ]}
      >
        <Text>*Leave field blank if you don't want to change it</Text>
        <TextInput
          style={[
            globalStyles.LButtons,
            globalStyles.iText,
            {
              // marginTop: 70,
            },
          ]}
          placeholder="Enter current password"
          onChange={(e) => setCurPassWord(e.target.value)}
          secureTextEntry={true}
        />
        <TextInput
          style={[globalStyles.LButtons, globalStyles.iText]}
          placeholder="Enter new password"
          onChange={(e) => setNewPassword(e.target.value)}
          secureTextEntry={true}
        />

        <TouchableOpacity
          onPress={() => {
            handleUpdate();
          }}
          style={[
            globalStyles.container,
            globalStyles.LButtons,
            {
              marginTop: 50,
            },
          ]}
        >
          <Text style={[globalStyles.bText]}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    border: "2px solid red",
    height: 45,
    width: 45,
    // borderRadius: 10,
    transform: "rotate(45deg)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    position: "fixed",
    marginLeft: 20,
    zIndex: "3",
  },
});

export default ChangePass;
