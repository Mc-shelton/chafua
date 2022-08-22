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

function AddAddress({ navigation }) {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <BackButton props={{navigation:navigation, title:'Choose Address'}}/>
      <FlatList
        data={props.categList}
        renderItem={(ind) => {
          return (
            <TouchableOpacity 
            style={globalStyles.cartItem}
            onPress={(event)=>{
              console.log(ind.index)
              const bulb = document.getElementsByClassName('bulb')
              console.log(bulb)
            
            }

            }

            >
              <View
                style={{
                  border: "2px solid red",
                  height: "25px",
                  width: "25px",
                  borderRadius: "100%",
                  position: "absolute",
                  right: "15px",
                  top: "20px",
                  // display:'flex',
                  // justifyContent:'center',
                  // alignItems:'center',
                  padding: "1px",
                }}
              >
                <View
                className = {'bulb'}
                  style={{
                    backgroundColor: "white",
                    height: "100%",
                    width: "100%",
                    borderRadius: "100%",
                  }}
                ></View>
              </View>
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
            </TouchableOpacity>
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
          height: "350px",
          display: "flex",
          // justifyContent:'center',
          alignItems: "center",
        }}
      >
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate('AddNewAddress')  
        }}
          style={{
            border: "2px solid red",
            marginTop: "30px",
            height: "35px",
            width: "200px",
            borderRadius: "10px",
          }}
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

        <View
          style={[
            {
              border: "2px solid red",
              height: "140px",
              padding: "20px",
              overflow: "hidden",
              width: "80%",
              borderRadius: "15px",
              marginTop: "20px",
            },
          ]}
        >
          <View
            style={[
              {
                // alignSelf:'flex-end'
                position: "absolute",
              },
            ]}
          >
            <Text
              style={{
                fontSize: "18px",
              }}
            >
              Items Price
            </Text>
            <Text
              style={{
                fontSize: "18px",
              }}
            >
              Delivery Fees
            </Text>
            <Text
              style={{
                fontSize: "18px",
              }}
            >
              Tin Fees
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: "23px",
                color: "red",
                marginTop: "10px",
              }}
            >
              Total
            </Text>
          </View>
          <View
            style={[
              {
                // justifySelf:'flex-end'
                position: "absolute",
                right: "10px",
              },
            ]}
          >
            <Text
              style={{
                fontSize: "18px",
              }}
            >
              90.00
            </Text>
            <Text
              style={{
                fontSize: "18px",
              }}
            >
              90.00
            </Text>
            <Text
              style={{
                fontSize: "18px",
              }}
            >
              90.00
            </Text>
            <Text
              style={{
                fontSize: "23px",
                fontWeight: "bold",
                color: "red",
                marginTop: "10px",
              }}
            >
              270.00{" "}
              <span
                style={{
                  fontSize: "14px",
                }}
              >
                /=
              </span>
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: "35px",
            borderRadius: "10px",
            width: "70%",
            backgroundColor: "red",
            marginTop: "50px",
          }}

          onPress={()=>{navigation.navigate('DelMessage')}}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "7px",
            }}
          >
            Done
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
export default AddAddress;
