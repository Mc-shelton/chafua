import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import BottomNav from "../components/bottomNav";
import TopHeader from "../components/topHeader";
import props from "../props/props";

import { globalStyles } from "../components/commonStyles";

function Cart({navigation}) {
  const [cAlert, setcAlert] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setcAlert(false)
    }, 500);
  })
  return (
    <View style={styles.main} showsVerticalScrollIndicator={false}>
      {/* <TopHeader props={navigation}/> */}
      <TopHeader props={{ navigation: navigation, title: "Cart" }} />
     
      <FlatList
        data={props.categList}
        renderItem={() => {
          return (
            <TouchableOpacity style={styles.cartItem}
            onPress={()=>navigation.navigate('CartDetails')}
            onLongPress={()=>alert('remove?')}
            >
              <View
                style={{
                  border: "2px solid red",
                  height: "100px",
                  width: "100px",
                  borderRadius: "100%",
                  marginLeft: "10px",
                }}
              />
              <View
                style={{
                  marginLeft: "20px",
                  maxWidth: "50%",
                  // border:'2px solid red'
                }}
              >
                <Text
                  style={{
                    position: "absolute",
                    left: "180px",
                    fontSize: "18px",
                    color: "red",
                  }}
                >
                  x2
                </Text>
                <Text
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Name Food
                </Text>
                <Text
                  style={{
                    color: "grey",
                  }}
                >
                  hotelname
                </Text>
                <Text
                  style={{
                    fontSize: "25px",
                    marginTop: "10px",
                  }}
                >
                  20.00{" "}
                  <span
                    style={{
                      fontSize: "14px",
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    /=
                  </span>
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        style={{
          width: "90%",
          marginLeft: "5%",
          marginTop: "0px",
          paddingBottom: "100px",
    // border:'2px solid red'

        }}
        showsHorizontalScrollIndicator={false}
      />
      {/* </View> */}
      <View
        style={{
          position: "fixed",
          bottom: "50px",
          width: "100%",
          backgroundColor: "white",
          paddingTop: "10px",
          paddingBottom: "10px",
          border: "2px solid red",
        }}
      >
        <View style={styles.totalBox}>
          <Text style={{
            fontSize:'20px'
          }}>Delivery time</Text>
          <View style={
            {
                position:'absolute',
                display:'flex',
                right:'10px',
                marginTop:'-5px',
                flexDirection:'row',
                alignItems:'center'
            }
          }>
            <View 
            style={{
                height:'40px',
                width:'40px',
                border:'2px solid red',
                borderRadius:'100%'

            }}
            />
            <Text style={{
                marginLeft:'5px',
                fontSize:'17px',
                fontWeight:'bold'
            }}>25 mins</Text>
          </View>
          <Text
          style={{
            marginTop:'16px'
          }}
          >Total Price</Text>
          <Text
          style={{
            fontSize:'40px'
          }}
          >
            90
            <span
              style={{
                fontSize: "20px",
                color: "red",
                fontWeight: "bold",
              }}
            >
              /=
            </span>
          </Text>
          <TouchableOpacity
          style={{
            height:'40px',
            width:'150px',
            border:'2px solid red',
            borderRadius:'15px',
            position:'absolute',
            bottom:'20px',
            backgroundColor:'red',
            color:'white',
            alignItems:'center',
            justifyContent:'center',
            right:'20px'
          }}
          onPress={()=>{
            navigation.navigate('AddAddress')
          }}
          ><p>Check Out</p></TouchableOpacity>
        </View>
      </View>

      {cAlert ? (
        <View

          style={[
            globalStyles.container,
            {
              position: "absolute",
              bottom: "80px",
              backgroundColor: "grey",
              width: "70%",
              padding: "5px",
              left: "14%",
            },
          ]}
        >
          <Text
            style={{
              fontSize: "17px",
              color: "white",
            }}
          >
            Long press to remove
          </Text>
        </View>
      ) : (
        <></>
      )}
      <BottomNav props={navigation}/>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    padding: "0",
    overflow: "none",
    height: "100%",
  },
  totalBox: {
    border: "2px solid red",
    height: "150px",
    width: "90%",
    marginLeft: "5%",
    borderRadius: "20px",
    backgroundColor: "white",
    padding:'20px'
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
    marginLeft: "20px",
    zIndex: "3",
  },
  cartItem: {
    border: "2px solid red",
    height: "120px",
    borderRadius: "20px",
    marginTop: "20px",
    display: "flex",
    // justifyContent:'center',
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
});
export default Cart;
