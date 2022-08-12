import React from "react";
import { TextInput, View, StyleSheet, Text, TouchableOpacity } from "react-native";

function AddAnotherAdd() {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <View style={styles.buttons}>
        <View
          style={{
            borderLeft: "3px solid black",
            borderBottom: "3px solid black",
            height: "13px",
            marginLeft: "5px",
            width: "13px",
          }}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          //   marginTop: "-1px",
          fontSize: "20px",
          position: "fixed",
          width: "100%",
          height: "100px",
          backgroundColor: "white",
          paddingTop: "45px",
          zIndex: "2",
        }}
      >
        Choose Address
      </Text>

      <TextInput
        style={{
          height: "50px",
          width: "90%",
          backgroundColor: "grey",
          borderRadius: "15px",
          marginTop:'150px',
          color:'white'
        }}
        placeholder="Address Title"

      ></TextInput>
      <TextInput
        placeholder="Hostel/Class/Office ?"
        style={{
          height: "50px",
          width: "90%",
          backgroundColor: "grey",
          borderRadius: "15px",
          color:'white',
          marginTop:'15px',
        }}
      ></TextInput>
      <TextInput
        placeholder="name"
        style={{
          height: "50px",
          width: "90%",
          backgroundColor: "grey",
          borderRadius: "15px",
          marginTop:'15px'
        }}
      ></TextInput>
      <TouchableOpacity

        style={{
          height: "50px",
          width: "90%",
          backgroundColor: "red",
          borderRadius: "15px",
          marginTop:'15px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <Text style={{
            fontSize:'25px',
            color:"white",
        }}>Save</Text>
      </TouchableOpacity>
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
    left: "20px",
    position: "absolute",
    zIndex: "3",
  },
});
export default AddAnotherAdd;
