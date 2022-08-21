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
import BackButton from "../components/backButton";
import { globalStyles } from "../components/commonStyles";
import Logo from "../components/logo";
import axios from "axios";

function EditProfile({route, navigation }) {
  const [user, setUser] = useState(route.params.params.userData)

  const countries = ["Egypt", "Ireland"];

  const [Email, setEmail] = useState(user.Email);
  const [Phone, setPhone] = useState(user.Phone);
  const [Name, setName] = useState(user.Name);
  const [Institution, setInstitution] = useState(user.Institution);
  const [Password, setPassword] = useState(user.Password);
  const [prevEmail, setPrevEmail] = useState(user.Email);
  const [userID, setUserID] = useState(user.userID);


  const handleUpdate =()=>{
    axios({
      method: "POST",
      url: "http://localhost/chafua/updateProfile.php",
      data: {
        Email: Email,
        Phone: Phone,
        Name: Name,
        Institution: Institution,
        Password: Password,
        prevEmail:prevEmail,
        userID:userID
      },
    }).then(async (response) => {
      try {
        if (response.data.Name != undefined) {
      let data = JSON.stringify(response.data)

          await AsyncStorage.setItem("user", data);
          console.log('response', response.data)
          alert('Profile Saved')
          
          // navigation.navigate('EditProfile')
          window.location.reload()
        } else {
          alert(response.data);
        }
      } catch (e) {
        alert('Failed, check on your network')
      }
    });
  }
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
        <BackButton props={{ navigation: navigation, title: "Edit Profile" }} />
      </View>

      <View
        style={{
          // border:'2px solid red',
          marginTop: "20px",
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
            marginTop: "60px",
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
              // marginTop: "70px",
            },
          ]}
          placeholder={user.Name}
          onChange={(e)=>setName(e.target.value)}
        />
        <TextInput
          style={[globalStyles.LButtons, globalStyles.iText]}
          placeholder={user.Email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <TextInput
          style={[globalStyles.LButtons, globalStyles.iText]}
          placeholder={user.Phone}
          onChange={(e)=>setPhone(e.target.value)}

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
            borderRadius: "15px",
            height: "50px",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingLeft: "10px",
            marginTop: "15px",
          }}
          buttonTextStyle={{
            fontSize: "18px",
            // color:'grey'
          }}
          defaultButtonText={user.Institution}
          // placeholder="Choose institution"
          dropdownStyle={{
            backgroundColor: "white",
            border: "2px solid rgb(74, 4, 4)",
            backgroundColor: "#FAFAFA",
          }}
          rowTextStyle={{
            fontSize: "18px",
            paddingLeft: "15px",
          }}
          rowStyle={{
            marginTop: "10px",
            padding: "10px",
            borderBottom: "2px solid rgb(74, 4, 4)",
          }}
        />

        <TouchableOpacity
          onPress={() => {

            handleUpdate()
          }}
          style={[
            globalStyles.container,
            globalStyles.LButtons,
            {
              marginTop: "50px",
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

export default EditProfile;
