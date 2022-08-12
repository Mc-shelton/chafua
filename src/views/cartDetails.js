import React from "react";
import { View,StyleSheet,TouchableOpacity, Text, Touchable } from "react-native";
import { globalStyles } from "../components/commonStyles";

function CartDetails({navigation}){
  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={[
          globalStyles.buttons,
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
        style={{
          marginTop: "85px",
          border: "2px solid red",
          // height:'300px',
        }}
      >
        <View
          style={{
            border: "2px solid red",
            height: "300px",
        }}
        />
        <View style={{
            padding:'20px',
        }}>
        <Text style={{
            fontSize:'30px',
            // fontWeight:'bold',
            textAlign:'center',
        }}>Name of Food</Text>
        <Text style={{
            fontSize:'20px',
            textAlign:'center',
            color:"grey"
        }}>a very very short Description</Text>
        </View>

      </View>

      <View style={styles.flexBox}>
        <View 
        style={[styles.flexBox,{
            width:'95%',
            borderRadius:'20px',
            paddingBottom:'20px'
        }]}
        >
            <View style={[styles.flexBox,styles.Cdetails]}>
                <View style={[styles.circles]}/>
                <Text style={styles.text}>Est. Delivery Time: 15mins</Text>
            </View>
            <View style={[styles.flexBox,styles.Cdetails]}>
                <View style={[styles.circles]}/>
                <Text style={styles.text}>Hotel C</Text>
            </View>
            <View style={[styles.flexBox,styles.Cdetails]}>
                <View style={[styles.circles]}/>
                <Text style={styles.text}>Quantity:<TouchableOpacity style={styles.smallButtons}
                ><Text>-</Text></TouchableOpacity> 2 <TouchableOpacity style={styles.smallButtons}><Text>+</Text></TouchableOpacity></Text>
            </View>

            <View style={[styles.flexBox,styles.Cdetails]}>
                <View style={[styles.circles]}/>
                <Text style={styles.text}>Price : <span style={{
                  color:'red'

                }}>90.00</span><span style={{
                  fontSize:'15px',
                  color:'red'
                }}> /=</span></Text>
            </View>
            <TouchableOpacity style={[styles.flexBox,styles.Cdetails,{
                backgroundColor:'red',
                justifyContent:'center'

            }]}
            onPress={()=>{
              // navigation.navigate('Cart')
            }}
            ><Text style={[styles.text,{color:'white',margin:'0'}]}>Save</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  main: {
    border: "2px solid red",
  },
  flexBox:{
    border:'2px solid red',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'},
  smallButtons:{
    marginLeft:'20px',
    border:'2px solid blue',
    paddingLeft:'10px',
    paddingRight:'10px',
    marginRight:'20px'},
  Cdetails:{
    border:'2px solid red',
    height:'40px',
    width:'95%',
    borderRadius:'10px',
    flexDirection:'row',
    justifyContent:'unset',
    // textAlign:'',
    paddingLeft:'20px',
    marginTop:'20px'
  },
  circles:{
    border:'2px solid red',
    height:'20px',
    width:'20px',
    borderRadius:'100%'
  },
  text:{
    fontSize:'20px',
    marginLeft:'15px'
  }
});

export default CartDetails