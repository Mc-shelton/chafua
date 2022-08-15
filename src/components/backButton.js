import React from "react";
import { View,TouchableOpacity,Text } from "react-native-web";
import { globalStyles } from "./commonStyles";

function BackButton({props}){
  // console.log(props.title)
    return(
<View>
      <TouchableOpacity
      onPress={() => props.navigation.goBack()}
      style={globalStyles.buttons}
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
      <Text
        style={[globalStyles.title]}
      >
        {props.title}
      </Text>
      </View>
    )
}
export default BackButton