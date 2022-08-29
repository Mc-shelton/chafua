import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Text, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import BottomNav from "../components/bottomNav";
import TopHeader from "../components/topHeader";
import props from "../props/props";
import time from '../../assets/icons/time.png'
import { globalStyles } from "../components/commonStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";


function Cart({navigation}) {
  const [cAlert, setcAlert] = useState(true);
  const [cartItems, setCartItems] = useState('')
  const [cartItemsList, setCartItemsList] = useState(cartItems)
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(()=>{
    setTimeout(() => {
      setcAlert(false)
    }, 500);
  })
  useEffect(async()=>{
    const willFocus = navigation.addListener('focus', () => {
      AsyncStorage.getItem('cart').then((res)=>{
        if(res){
        let array = JSON.parse(res)
        let total = 0
        array.forEach(value => {
          let itTotal = parseInt(value.price) + parseInt(value.packaging)
          let isTotal = itTotal * parseInt(value.count)
          total += parseInt(isTotal)
  
  
        });
        setTotalPrice(total)  
        setCartItems(array)
      }
      }).catch((err)=>{
        console.log(err)
      })
    
  });
  return willFocus
    },[])
  return (
    <View style={styles.main} showsVerticalScrollIndicator={false}>
      <TopHeader props={{  navigation: navigation, title: "Cart" }} />
     <View style={{
      height:'65%',
      width:'100%'
     }}>
      <FlatList
        data={cartItems}
        keyExtractor={item=>item.itemID}
        renderItem={(item) => {
          return (
            <TouchableOpacity style={styles.cartItem}
            onPress={()=>{
              navigation.navigate('CartDetails',{cartList:{
                estDelTme :item.item.estDelTime,
                hotel :item.item.hotel,
                name :item.item.name,
                count :item.item.count,
                itemID :item.item.itemID,
              }})}}
            onLongPress={async()=>{
            // console.log(item.item)

    let filter = cartItems.map((item) => item.itemID);
    let ind = filter.indexOf(item.item.itemID);

    cartItems.splice(ind, ind+1)
    let cartString = JSON.stringify(cartItems)
    await AsyncStorage.setItem("cart",cartString)
// window.reload()
// navigation.navigate('Cart')
            }}
            >
              <ImageBackground
                style={{
                  border: "2px solid rgb(74, 4, 4)",
                  height: "100px",
                  width: "100px",
                  borderRadius: "100%",
                  marginLeft: "10px",
                }}
                source={item.item.thumbNail}
                imageStyle={{
                  borderRadius: "15px",
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
                    color: "rgb(74, 4, 4)",
                  }}
                >
                  x{item.item.count}
                </Text>
                <Text
                  style={{
                    fontSize: "20px",
                  }}
                >
                  {item.item.name}
                </Text>
                <Text
                  style={{
                    color: "grey",
                  }}
                >
                  {item.item.hotel}
                </Text>
                <Text
                  style={{
                    fontSize: "25px",
                    marginTop: "10px",
                  }}  
                >
                  {parseInt(item.item.price)+parseInt(item.item.packaging)}{" "}
                  <span
                    style={{
                      fontSize: "14px",
                      color: "rgb(74, 4, 4)",
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
          width: "100%",
          marginTop: "0px",
          paddingBottom: "10px",
          height:'10%'
    // border:'2px solid red'

        }}
        ListEmptyComponent={()=>{
          return(
            <Text style={{
              textAlign:'center'
              ,fontSize:'20px'
              ,marginTop:'40%'
            }}>Nothing in cart at now</Text>
          )
        }}
        showsHorizontalScrollIndicator={false}
      />

      </View>
      <View
        style={{
          position: "fixed",
          bottom: "20px",
          width: "100%",
          backgroundColor: "white",
          paddingTop: "10px",
          paddingBottom: "60px",
              boxShadow: " rgba(149, 157, 165) 0px 3px 15px",
              // border: "2px solid red",
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
            <ImageBackground
            style={{
                height:'30px',
                width:'30px',
                border:'2px solid rgb(74, 4, 4)',
                borderRadius:'100%',
                marginRight:'5px'

            }}
            source={time}
            imageStyle={{
              borderRadius: "15px",
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
            {totalPrice}
            <span
              style={{
                fontSize: "20px",
                color: "rgb(74, 4, 4)",
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
            border:'2px solid rgb(74, 4, 4)',
            borderRadius:'15px',
            position:'absolute',
            bottom:'20px',
            backgroundColor:'rgb(74, 4, 4)',
            color:'white',
            alignItems:'center',
            justifyContent:'center',
            right:'20px'
          }}
          onPress={()=>{
            console.log()
            if(cartItems.length >0){
            navigation.navigate('AddAddress')
            }else{
              alert('Nothing in Cart')
            }
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
    border: "2px solid rgb(74, 4, 4)",
    height: "150px",
    width: "90%",
    marginLeft: "5%",
    borderRadius: "20px",
    backgroundColor: "white",
    padding:'20px'
  },
  buttons: {
    border: "2px solid rgb(74, 4, 4)",
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
    height: "120px",
    borderRadius: "20px",
    marginTop: "20px",
          marginLeft: "5%",
          width:'90%',
    display: "flex",
    // justifyContent:'center',
    flexDirection: "row",
              boxShadow: " rgba(149, 157, 165) 0px 3px 15px",
              alignItems: "center",
    overflow: "hidden",
  },
});
export default Cart;
