import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function Details({navigation}) {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={[
          styles.buttons,
          {
            left: "25px",
          },
        ]}
        onPress={()=>navigation.goBack()}
      >
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
      <View
        style={[
          styles.buttons,
          {
            right: "25px",
          },
        ]}
      >
        <View
          style={{
            transform: "rotate(-45deg)",
          }}
        >
          ps
        </View>
      </View>

      <View
        style={{
          marginTop: "85px",
          border: "2px solid red",
          // height:'300px'
        }}
      >
        <View
          style={{
            border: "2px solid red",
            height: "300px",
          }}
        ></View>
        <View
          style={{
            border: "2px solid red",
            // height: "80px",
            alignItems: "center",
            flexDirection:'row',
            justifyContent: "center",
            paddingBottom:'20px'
          }}
        >
          <View
            style={[
              styles.buttons,
              {position:'relative', margin: "0", height: "35px", width: "35px",borderRadius:'7px' },
            ]}
          >
            <Text
              style={{
                transform: "rotate(135deg)",
                fontSize: "40px",
                marginTop: "0px",
                textAlign: "center",
                marginLeft: "4px",
                // fontWeight:'bold'
              }}
            >
              -
            </Text>
          </View>
          <View style={{
            width:'50px'
          }}><Text style={{
            textAlign:'center',
            fontSize:'20px'
          }}>0</Text></View>
          <View
            style={[
              styles.buttons,
              {position:'relative', margin: "0", height: "35px", width: "35px",borderRadius:'7px' },
            ]}
          >
            <Text
              style={{
                transform: "rotate(135deg)",
                fontSize: "30px",
                marginTop: "0px",
                textAlign: "center",
                marginLeft: "0px",
                // fontWeight:'bold'
              }}
            >
              +
            </Text>
          </View>
        </View>


      </View>
      <View style={{
        border:'2px solid red',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <View 
        style={{
            width:'95%',
            border:'2px solid red',
            borderRadius:'20px',
            height:'200px'
        }}
        >
            df
            <TouchableOpacity style={{
              position:'absolute',
              border:'2px solid red',
              right:'20px',
              bottom:"20px",
              height:'50px',
              width:'50px',
              borderRadius:"100%"
            }}
            onPress={()=>{
              navigation.navigate('Cart')
            }}
            ></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  main: {
    border: "2px solid red",
  },
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
  },
});

export default Details;
