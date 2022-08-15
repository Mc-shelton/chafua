import React from "react";
import { TouchableOpacity, View,Text } from "react-native";
import { TextInput } from "react-native-web";
import BackButton from "../components/backButton";
import { globalStyles } from "../components/commonStyles";

function ForgotPass({navigation}){
    return(
        <View 
        style={[{
            height:'100%'
            ,backgroundColor:'white'
        }]}>
            <BackButton props={{navigation:navigation, title:''}}/>
            <View style={{
                height:'35%'
                ,border:'2px solid red'
                ,marginTop:'100px'
            }}/>
            <View style={[globalStyles.container,]}>

            <Text style={{
                fontSize:'28px'
                ,color:'red'
            }}>Forgot Password</Text>
            <Text style={[globalStyles.iText,{
                width:'80%'
                ,textAlign:'center'
                ,marginBottom:'15%'
            }]}>Enter your registered email or phone number</Text>
            <TextInput style={[globalStyles.LButtons]} placeholder='Email or Phone'/>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Confirm')
            }} style={[globalStyles.container,globalStyles.LButtons]}><Text style={[globalStyles.bText]}>Submit</Text></TouchableOpacity>
            </View>
        </View>
    )
}


export default ForgotPass