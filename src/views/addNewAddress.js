import React from "react";
import { View,Text,TextInput,TouchableOpacity, CheckBox } from "react-native-web";
import BackButton from "../components/backButton";
import { globalStyles } from "../components/commonStyles";

function AddNewAddress({navigation}){
    return(
        <View
          style={{
            height: "100%",
            backgroundColor:'white'
          }}
        >
            <BackButton props={{navigation:navigation, title:'Add New Address'}}/>
          <View
            style={[
              globalStyles.container,
              {
                marginTop: "100px",
                height:'85%'
                ,backgroundColor:'white'
              },
            ]}
          >
          <Text
            style={{
              fontSize: "27px",
              color: "red",
              // marginTop: "20px",
            }}
          >
            Address
          </Text>
          <Text
            style={{
              fontSize: "20px",
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
            />
            <TextInput
              style={[globalStyles.LButtons, globalStyles.iText]}
              placeholder="Part of institution e.g Hostel"
            />
            <TextInput
              style={[globalStyles.LButtons, globalStyles.iText]}
              placeholder="Room number e.g C14, pref 02/03 e.t.c"
            />
            <TextInput
              style={[globalStyles.LButtons, globalStyles.iText]}
              placeholder="Phone number i.e Delivery number"
            />
            <TextInput
              style={[globalStyles.LButtons, globalStyles.iText]}
              placeholder="More specific details"
            /><TouchableOpacity
            onPress ={()=>{
              navigation.goBack()
            }}
              style={[
                globalStyles.container,
                globalStyles.LButtons,
                {
                  marginTop: "50px",
                },
              ]}
            >
              <Text style={[globalStyles.bText]}>Done</Text>
            </TouchableOpacity>

          </View>
        </View>
    )
}

export default AddNewAddress