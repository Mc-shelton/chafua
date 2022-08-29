import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState,useEffect } from "react";
import { View,Text,TextInput,TouchableOpacity, CheckBox } from "react-native-web";
import BackButton from "../components/backButton";
import { globalStyles } from "../components/commonStyles";

function AddNewAddress({navigation}){
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [room, setRoom] = useState('')
  const [phone, setPhone] = useState('')
  const [details, setDetails] = useState('')

  const [addresses,setAddresses]=useState([])


  useEffect(async()=>{
    const willFocus = navigation.addListener('focus', () => {
      AsyncStorage.getItem('addresses').then((res)=>{
        if(res){
        let array = JSON.parse(res)
        setAddresses(array)
      }
      }).catch((err)=>{
        console.log(err)
      })
    
  });
  return willFocus
    },[])

    return(
        <View
          style={[globalStyles.main]}
        >
            <BackButton props={{navigation:navigation, title:'Add New Address'}}/>
          <View
            style={[
              globalStyles.container,
              {
                marginTop: "100px",
                height:'85%',
                border:'none'
              },
            ]}
          >
          <Text
            style={{
              fontSize: "27px",
              color: "rgb(74, 4, 4)",
              // marginTop: "20px",
            }}
          >
            Address
          </Text>
          <Text
            style={{
              fontSize: "20px",
              color:'grey'
            }}
          >
            Edit/Add Address
          </Text>
  
    
            <TextInput
              style={[
                globalStyles.LButtons,
                globalStyles.iText,
                {
                  marginTop: "40px",
                },
              ]}

              
              placeholder="Title of Address e.g My Class Address"
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
            />
            <TextInput
              style={[globalStyles.LButtons, globalStyles.iText]}
              placeholder="Part of institution e.g Hostel"
              onChange={(e)=>{
                setLocation(e.target.value)
              }}
            />
            <TextInput
              style={[globalStyles.LButtons, globalStyles.iText]}
              placeholder="Room number e.g C14, pref 02/03 e.t.c"
              onChange={(e)=>{
                setRoom(e.target.value)
              }}
            />
            <TextInput
              style={[globalStyles.LButtons, globalStyles.iText]}
              placeholder="Phone number i.e Delivery number"
              onChange={(e)=>{
                setPhone(e.target.value)
              }}
            />
            <TextInput
              style={[globalStyles.LButtons, globalStyles.iText]}
              placeholder="More specific details"
              onChange={(e)=>{
                setDetails(e.target.value)
              }}ay
            /><TouchableOpacity
            onPress ={async ()=>{
              if(title != '' && location != '' && room != '' && phone != '' && details != ''){
                let addObj = {
                  title:title,
                  location:location,
                  room:room,
                  phone:phone,
                  details:details
                }
                addresses.push(addObj)
                let string = JSON.stringify(addresses)
                await AsyncStorage.setItem('addresses', string)
              }else{
                alert('some fields are missing')
              }
              navigation.goBack()
            }}
              style={[
                globalStyles.container,
                globalStyles.LButtons,
                {
                  marginTop: "50px",
                  backgroundColor:'rgb(74, 4, 4)'
                },
              ]}
            >
              <Text style={[globalStyles.bText,{
                color:'white'
              }]}>Done</Text>
            </TouchableOpacity>

          </View>
        </View>
    )
}

export default AddNewAddress