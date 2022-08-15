import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import BackButton from "../components/backButton";
import { globalStyles } from "../components/commonStyles";

import props from "../props/props";

function MyAddress({ navigation }) {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <BackButton props={{ navigation: navigation, title: "My Addresses" }} />

      <FlatList
        data={props.categList}
        renderItem={(ind) => {
          return (
            <View style={globalStyles.cartItem}>
              <TouchableOpacity
                style={[globalStyles.paddedButton,,{
                    position:'absolute',
                    top:'0px'
                    ,right:'20px'
                    ,backgroundColor:'none'
                    ,border:'2px solid grey'

                }]}

                onPress={()=>{
                  navigation.navigate('AddNewAddress')
                }
                }
              >
                <Text style={[globalStyles.iText,{color:'grey'}]}>Edit</Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: "20px",
                }}
              >
                Title of my Address
              </Text>
              <Text
                style={{
                  fontSize: "20px",
                  color: "grey",
                  marginTop: "10px",
                }}
              >
                Hostel
              </Text>
              <Text
                style={{
                  fontSize: "20px",
                  color: "grey",
                }}
              >
                C14
              </Text>
              <Text
                style={{
                  fontSize: "20px",
                  color: "grey",
                }}
              >
                0741741381
              </Text>
            </View>
          );
        }}
        style={{
          width: "90%",
          marginLeft: "5%",
          marginTop: "90px",
          paddingBottom: "5px",
          height: "90%",
        }}
        showsHorizontalScrollIndicator={false}
      />


<View
        style={{
          backgroundColor: "white",
          border: "2px solid red",
          height: "15%",
          display: "flex",
          // justifyContent:'center',
          alignItems: "center",
        }}
      >
      <TouchableOpacity
        style={{
          border: "2px solid red",
          marginTop: "30px",
          height: "35px",
          width: "200px",
          borderRadius: "10px",
        }}

        onPress={()=>{
          navigation.navigate('AddNewAddress')
        }
        }
      >
        <Text
          style={{
            color: "red",
            fontSize: "15px",
            textAlign: "center",
            marginTop: "8px",
          }}
        >
          + Add New Address
        </Text>
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
export default MyAddress;
