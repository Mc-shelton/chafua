import React,{useState} from "react";
import { TouchableOpacity, View,Text, ImageBackground } from "react-native";
import { TextInput } from "react-native-web";
import BackButton from "../components/backButton";
import { globalStyles } from "../components/commonStyles";

import logo from '../../assets/icons/logo.png'
import Logo from "../components/logo";
function ForgotPass({navigation}){
  const [Email, setEmail] = useState("");

  const handleRecover = ()=>{
    if(Email != ''){
        console.log('handle recover password')
    }else{
        alert('Field is empty')
    }
  }
    return(
        <View 
        style={[{
            height:'100%'
            ,backgroundColor:'white'
        }]}>
            <BackButton props={{navigation:navigation, title:''}}/>
            <Logo/>
            <View style={[globalStyles.container,{
                marginTop:'50px'
                ,border:'none'
            }]}>

            <Text style={{
                fontSize:28
                ,color:'rgb(74, 4, 4)'
                ,marginBottom:'10px'
            }}>Forgot Password</Text>
            <Text style={[globalStyles.iText,{
                width:'80%'
                ,textAlign:'center'
                ,marginBottom:'15%'
            }]}>Enter your registered email or phone number</Text>
            <TextInput style={[globalStyles.LButtons,{
                outline:'none'
            }]} placeholder='Email'
            
          onChange={(event) => {
            setEmail(event.target.value);
          }}
            />
            <TouchableOpacity onPress={handleRecover} style={[globalStyles.container,globalStyles.LButtons]}><Text style={[globalStyles.bText,{color:'rgb(74, 4, 4)'}]}>Submit</Text></TouchableOpacity>
            </View>
        </View>
    )
}


export default ForgotPass