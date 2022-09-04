import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Link,
  Linking,
} from "react-native";
// import BackButton from "../components/backButton";
import { globalStyles } from "../components/commonStyles";
import axios from "axios";
import Picker from "react-native-picker-select";
import SelectDropdown from "react-native-select-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckBox } from "@react-native-community/checkbox";
const countries = ["Egypt", "Ireland"];

function SignUp({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const [isDisabled, setDisabled] = useState(true);

  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Name, setName] = useState("");
  const [Institution, setInstitution] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignIn = () => {
    if (
      Email != "" &&
      Password != "" &&
      confirmPassword != "" &&
      Institution != "" &&
      Name != "" &&
      Phone != ""
    ) {
      if (Password === confirmPassword) {
        axios({
          method: "POST",
          url: "http://localhost/chafua/signUp.php",
          data: {
            Email: Email,
            Phone: Phone,
            Name: Name,
            Institution: Institution,
            Password: Password,
          },
        }).then(async (response) => {
          try {
            if (response.data.Name != undefined) {
          let data = JSON.stringify(response.data)

              await AsyncStorage.setItem("user", data);
              await AsyncStorage.setItem("isLoggedIn", true);
              await AsyncStorage.setItem('cart','')
              window.location.reload();
            } else {
              alert(response.data);
            }
          } catch (e) {
            console.log(e);
          }
        });
      } else {
        alert("Passwords din't match");
      }
    } else {
      alert("Some fields are not filled");
    }
  };
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
      {/* <BackButton props={{ navigation: navigation, title: "Sign Up" }} /> */}
      <View
        style={[
          globalStyles.container,
          {
            marginTop: 100,
            height: "85%",
            backgroundColor: "white",
            border: "none",
          },
        ]}
      >
        <Text
          style={{
            fontSize: 27,
            color: "rgb(94, 4, 4)",
            // marginTop: 20,
          }}
        >
          Register
        </Text>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          create your new account
        </Text>

        <TextInput
          style={[
            globalStyles.LButtons,
            globalStyles.iText,
            {
              marginTop: 40,
              outline: "none",
            },
          ]}
          placeholder="Email "
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
          placeholder="Phone number"
          onChange={(event) => {
            setPhone(event.target.value);
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
          placeholder="firstName secondName"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <SelectDropdown
          data={countries}
          onSelect={(value) => {
            setInstitution(value);
          }}
          style={[
            globalStyles.LButtons,
            globalStyles.iText,
            {
              outline: "none",
            },
          ]}
          buttonStyle={{
            border: "2px solid rgb(74, 4, 4)",
            width: "90%",
            // borderRadius: 15,
            height: 50,
            justifyContent: "flex-end",
            alignItems: "center",
            paddingLeft: 10,
            marginTop: 15,
          }}
          buttonTextStyle={{
            fontSize: 18,
            // color:'grey'
          }}
          defaultButtonText="Choose institution"
          // placeholder="Choose institution"
          dropdownStyle={{
            backgroundColor: "white",
            border: "2px solid rgb(74, 4, 4)",
            backgroundColor: "#FAFAFA",
          }}
          rowTextStyle={{
            fontSize: 18,
            paddingLeft: 15,
          }}
          rowStyle={{
            marginTop: 10,
            padding: 10,
            borderBottom: "2px solid rgb(74, 4, 4)",
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
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          secureTextEntry={true}
        />
        <TextInput
          style={[
            globalStyles.LButtons,
            globalStyles.iText,
            {
              outline: "none",
            },
          ]}
          placeholder="Confrim Password"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
          secureTextEntry={true}
        />

        <View
          style={[
            globalStyles.container,
            {
              flexDirection: "row",
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: "5%",
              border: "none",
            },
          ]}
        >
          <CheckBox
            value={isSelected}
            onValueChange={() => {
              if (isSelected == false) {
                setSelection(true);
                setDisabled(false);
              } else {
                setSelection(false);
                setDisabled(true);
              }
            }}
          />
          <Text
            style={[
              globalStyles.iText,
              {
                paddingLeft: 10,
                marginTop: 20,
              },
            ]}
          >
            I have read and agreed to your{" "}
            <Text
              style={{
                color: "rgb(74, 4, 4)",
              }}
              onPress={() => {
                Linking.openURL("http://google.com");
              }}
            >
              terms and conditions
            </Text>
          </Text>
        </View>
        <TouchableOpacity
          disabled={isDisabled}
          style={[
            globalStyles.container,
            globalStyles.LButtons,
            {
              marginTop: 20,
            },
          ]}
          onPress={handleSignIn}
        >
          <Text style={[globalStyles.bText]}>Sign Up</Text>
        </TouchableOpacity>

        <Text
          style={[
            globalStyles.iText,
            {
              marginTop: 30,
            },
          ]}
        >
          Already having an account?{" "}
          <TouchableOpacity
            onPress={() => navigation.navigate("LogIn")}
            style={{
              color: "rgb(74, 4, 4)",
            }}
          >
            <Text style={[globalStyles.iText]}>Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

export default SignUp;
