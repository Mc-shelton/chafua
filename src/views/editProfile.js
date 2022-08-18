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

function EditProfile({ navigation }) {
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
        <TextInput
          style={[
            globalStyles.LButtons,
            globalStyles.iText,
            {
              marginTop: "70px",
            },
          ]}
          placeholder="Name"
        />
        <TextInput
          style={[globalStyles.LButtons, globalStyles.iText]}
          placeholder="Email"
        />
        <TextInput
          style={[globalStyles.LButtons, globalStyles.iText]}
          placeholder="Phone"
        />
        <TextInput
          style={[globalStyles.LButtons, globalStyles.iText]}
          placeholder="Institution"
        />
        <TouchableOpacity

        onPress={()=>navigation.goBack()}
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
