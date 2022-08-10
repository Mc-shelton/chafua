import React from "react";
import reactDom from "react-dom";
import { View, StyleSheet } from "react-native";
import { FlipInEasyX } from "react-native-reanimated";

function BottomNav(){
    return(
        <View style={styles.main}>
            <View style={styles.iconBox}></View>
            <View style={styles.iconBox}></View>
            <View style={[styles.iconBox,styles.focused]} onClick={()=>{alert()}}></View>
            <View style={[styles.iconBox]}></View>
            <View style={styles.iconBox}></View>
        </View>
    );
}
const styles = StyleSheet.create({
    main:{
        height:'60px',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        
    },
    iconBox:{
        border:'2px solid red',
        height:'50px',
        width:'50px',
        backgroundColor:'white',
        border:'2px solid red',
        marginLeft:'20px',
        borderRadius:'100%'
    },
    focused:{
        height:'65px',
        width:'65px',
        marginTop:'-20px'
    }

})
export default BottomNav