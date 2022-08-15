import React from "react";
import { View,FlatList, StyleSheet,TouchableOpacity,TextInput,  } from "react-native";
import { globalStyles } from "../components/commonStyles";

import props from "../props/props";
import BottomNav from "../components/bottomNav";
import TopHeader from "../components/topHeader";

function Search({navigation}){
    return(
        <View style={globalStyles.main}>

      {/* <TopHeader props={navigation} /> */}
      <TopHeader props={{ navigation: navigation, title: "Search" }} />

      <TextInput
      placeholder="search bar"
      style={[styles.search, { outline: "none",marginTop:"30px" }]}
      // onSubmitEditing={()=>navigation.navigate('Cart')}
    />
        <View style={styles.trending}>
        <h4 style={{ margin:0,marginLeft: '20px',paddingBottom:'8px' }}>20 results found</h4>
        <FlatList
          data={props.categList}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => {
            return (
              <TouchableOpacity style={styles.item} 
              onPress={()=>{
                navigation.navigate('Details')
              }}
              
              >

                <View
                  style={{
                    borderBottom: "2px solid red",
                    height: "100px",
                    borderRadius: "15px",
                  }}
                ></View>
              </TouchableOpacity>
            );
          }}
          flexDirection="true"
          style={{border:'2px solid red'}}
        />
      </View>
    <BottomNav props={navigation} />
      </View>
    )
}



const styles = StyleSheet.create({
    search: {
      border: "2px solid grey",
      height: "35px",
      fontSize: "18px",
      borderRadius: "15px",
      paddingLeft: "10px",
      width: "80%",
      marginTop: "10px",
      marginLeft: "10px",
    },
    trending: {
      marginTop:'5px',
      height:'75%',
      marginTop:'20px',
      border:'2px solid red'
    },
    item: {
      border: "2px solid red",
      height: "200px",
      width: "150px",
      borderRadius: "15px",
      marginTop: "20px",
      overflow: "hidden",
      backgroundColor:'white',
      marginLeft:'7%'
  
    },
  });

export default Search