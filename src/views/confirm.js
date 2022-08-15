import React from "react";
import { View, Text, TouchableOpacity } from "react-native-web";
import BackButton from "../components/backButton";
import { globalStyles } from "../components/commonStyles";

function Confirm({ navigation }) {
  console.log(navigation);
  return (
    <View
      style={[
        {
          height: "100%",
          backgroundColor: "white",
        },
      ]}
    >
      <BackButton props={{ navigation: navigation, title: "" }} />
      <View
        style={{
          height: "35%",
          border: "2px solid red",
          marginTop: "100px",
        }}
      />
      <View style={[globalStyles.container]}>
        <Text
          style={{
            fontSize: "25px",
            color: "red",
          }}
        >
          Check you mail
        </Text>
        <Text
          style={[
            globalStyles.iText,
            {
              width: "80%",
              textAlign: "center",
              color: "grey",
              marginBottom: "15%",
              marginTop: "10px",
            },
          ]}
        >
          We have sent you a mail, please check your inbox/spam folder
        </Text>

        <TouchableOpacity
          style={[globalStyles.container, globalStyles.LButtons]}
          onPress={()=>{navigation.navigate('LandPage')}}
        >
          <Text style={[globalStyles.bText]}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Confirm;
