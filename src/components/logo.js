import React from "react";
import { View,ImageBackground } from "react-native";
import { globalStyles } from "./commonStyles";
import logo from '../../assets/icons/logo.png'

function Logo(){
    return(
    <View style={[globalStyles.container,{
            marginTop:'100px',
            height:'200px',
            overflow:'hidden',
            border:'none'
            ,borderBottom:'4px solid rgb(74, 4, 4)'
            ,borderRadius:'0'
            ,width:'80%'
            ,marginLeft:'10%'
            
        }]}>
            <ImageBackground style={{
                height:'200px',
                marginTop:"80px",
                width:'200px',
                backgroundColor:'#ececec',
                borderRadius:'100%'
            }}
            source={logo}
            imageStyle={{
                top:'-25px'
            }}
            ></ImageBackground>
        </View>
    )
}

export default Logo