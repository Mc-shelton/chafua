import React from "react";
import { ScrollView, StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import props from "../props/props";

function Cart({navigation}) {
  return (
    <View style={styles.main} showsVerticalScrollIndicator={false}>
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
        Cart
      </Text>
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
      {/* <View style={
    {border:'2px solid red ',
    marginTop:'100px',height:'30%'
}
}> */}
      <FlatList
        data={props.categList}
        renderItem={() => {
          return (
            <TouchableOpacity style={styles.cartItem}
            onPress={()=>navigation.navigate('CartDetails')}
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
          marginTop: "80px",
          paddingBottom: "5px",
        }}
        showsHorizontalScrollIndicator={false}
      />
      {/* </View> */}
      <View
        style={{
          position: "fixed",
          bottom: "0px",
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
          ><p>Place Order</p></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    padding: "0",
    overflow: "none",
    height: "80%",
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
