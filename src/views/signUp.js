import React from "react";
import { View,Text,TextInput,TouchableOpacity, CheckBox } from "react-native-web";
import BackButton from "../components/backButton";
import { globalStyles } from "../components/commonStyles";

function SignUp({navigation}){
    return(
        <View
          style={{
            height: "100%",
            backgroundColor:'white'
          }}
        >
            <BackButton props={{navigation:navigation, title:'Sign Up'}}/>
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
            Register
          </Text>
          <Text
            style={{
              fontSize: "20px",
            }}
          >
            create your new account
          </Text>
  
    
            <TextInput
              style={[
                globalStyles.LButtons,
                globalStyles.iText,
                {
                  marginTop: "40px",
                },
              ]}
              placeholder="Email "
            />
            <TextInput
              style={[globalStyles.LButtons, globalStyles.iText]}
              placeholder="Phone number"
            />
            <TextInput
              style={[globalStyles.LButtons, globalStyles.iText]}
              placeholder="firstName secondName"
            />
            <TextInput
              style={[globalStyles.LButtons, globalStyles.iText]}
              placeholder="Choose institution"
            />
            <TextInput
              style={[globalStyles.LButtons, globalStyles.iText]}
              placeholder="Password"
            />
            <TextInput
            
              style={[globalStyles.LButtons, globalStyles.iText]}
              placeholder="Confrim Password"
            />
            <Text style={[globalStyles.iText,{
                paddingLeft:'20px'
                ,marginTop:'30px'
            }]}>I have read and agreed to your terms and conditions</Text>
            <View
              style={[
                globalStyles.container,
                globalStyles.LButtons,
                {
                  marginTop: "50px",
                },
              ]}
            >
              <Text style={[globalStyles.bText]}>Sign Up</Text>
            </View>

        <Text
          style={[
            globalStyles.iText,
            {
              marginTop: "30px",
            },
          ]}
        >
          Already having an account?{" "}
          <TouchableOpacity
            onPress={() => navigation.navigate("LogIn")}
            style={{
              color: "red",
            }}
          >
            <Text style={[globalStyles.iText]}>Login</Text>
          </TouchableOpacity>
        </Text>
          </View>
        </View>
    )
}

export default SignUp