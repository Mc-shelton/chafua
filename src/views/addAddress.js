import React from "react";
import { View, StyleSheet, Text,FlatList, TouchableOpacity } from "react-native";

import props from "../props/props";

function AddAddress({navigation}) {
  return (
    <View style={{
        height:'100%',
        backgroundColor:'white'
    }}>
      <TouchableOpacity
      onPress={()=>navigation.goBack()}
      style={styles.buttons}>
        <View
          style={{
            borderLeft: "3px solid black",
            borderBottom: "3px solid black",
            height: "13px",
            marginLeft: "5px",
            width: "13px",
          }}
        />
      </TouchableOpacity>
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
      
      <FlatList
        data={props.categList}
        renderItem={() => {
          return (
            <View style={styles.cartItem}>
                <View style={{
                    border:'2px solid red',
                    height:'25px',
                    width:'25px',
                    borderRadius:'100%',
                    position:'absolute',
                    right:'15px',
                    top:'20px',
                    // display:'flex',
                    // justifyContent:'center',
                    // alignItems:'center',
                    padding:"1px"
                }}><View style={{
                    backgroundColor:"white",
                    height:'100%',
                    width:'100%',
                    borderRadius:'100%',

                }}></View></View>
              <Text
              style={{
                fontSize:'20px'
              }}
              >Title of my Address</Text>
              <Text
              style={{
                fontSize:'20px',
                color:'grey',
                marginTop:'10px'
              }}
              >Hostel</Text>
              <Text
              style={{
                fontSize:'20px',
                color:'grey',

              }}
              >C14</Text>
            </View>
          );
        }}
        style={{
          width: "90%",
          marginLeft: "5%",
          marginTop: "90px",
          paddingBottom: "5px",
          height:'90%'
        }}
        showsHorizontalScrollIndicator={false}
      />
      <View style={{
        backgroundColor:'white',
        border:"2px solid red",
        height:'350px',
        display:'flex',
        // justifyContent:'center',
        alignItems:'center'
      }}>
        <View style={
            {
                border:'2px solid red',
                marginTop:'30px',
                height:'35px',
                width:'200px',
                borderRadius:'10px',
            }
        }><Text style={{
            color:'red',
            fontSize:'15px',
            textAlign:'center',
            marginTop:'8px'
        }}>+ Add New Address</Text></View>
      <View style={{
        height:'35px',
        borderRadius:'10px',
        width:'70%',
        backgroundColor:'red',
        marginTop:'50px'
      }}><Text style={{
        color:'white',
        textAlign:'center',
        fontSize:'20px',
        fontWeight:'bold',
        marginTop:'7px'
      }}>Done</Text></View>
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
  cartItem: {
    border: "2px solid red",
    height: "120px",
    borderRadius: "20px",
    marginTop: "20px",
    // display: "flex",
    // justifyContent:'center',
    // flexDirection: "row",
    // alignItems: "center",
    padding:'20px',
    overflow: "hidden",
  },
});
export default AddAddress;
