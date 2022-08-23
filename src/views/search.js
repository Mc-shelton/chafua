import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,ImageBackground
} from "react-native";
import { globalStyles } from "../components/commonStyles";

import props from "../props/props";
import BottomNav from "../components/bottomNav";
import TopHeader from "../components/topHeader";
import MasonryList from "@react-native-seoul/masonry-list";
import {default as list} from "../props/props" ;
import { AirbnbRating } from "react-native-ratings";

function Search({ route, navigation }) {

  const [hotelList, setHotelList] = useState(list.HotelList);
  const [hotelConstList, setConstHotelList] = useState(list.HotelList);
  // const [hotelParams, setHotelParams] = useState(route.params.params)
  const [isSearching, setIsSearching] = useState(false);
  
  useEffect(()=>{

  if (route.params) {
    setHotelList(
      hotelConstList.filter((categ) => categ.categories.includes(name))
    )
  }
  })

  return (
    <View style={globalStyles.main}>
      {/* <TopHeader props={navigation} /> */}
      <TopHeader props={{ navigation: navigation, title: "Search" }} />

      <TextInput
        placeholder="search bar"
        style={[styles.search, { outline: "none", marginTop: "30px" }]}
        // onSubmitEditing={()=>navigation.navigate('Cart')}
      />
      <View style={styles.trending}>
        <h4 style={{ margin: 0, marginLeft: "20px", paddingBottom: "8px" }}>
          20 results found
        </h4>

        <ScrollView
          style={{
            marginTop: "20px",
          }}
        >
          <MasonryList
            data={hotelList}
            keyExtractor={(item) => item.id}
            numColumns={2}
            style={{ alignSelf: "stretch" }}
            contentContainerStyle={{
              paddingHorizontal: 24,
              alignSelf: "stretch",
            }}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => {
              return (
                <View>
                  {/* <Loader/> */}
                  <Text>Seems like you are offline... </Text>
                </View>
              );
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    navigation.navigate("Details");
                  }}
                >
                  <ImageBackground
                    source={item.image}
                    style={{
                      borderBottom: "2px solid red",
                      height: "100px",
                      width: "100%",
                      borderRadius: "15px",
                      // paddingTop:"9%",
                      overflow: "hidden",
                    }}
                  />
                  <View
                    style={{
                      width: 120,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "18px",
                        marginTop: "10px",
                        marginBottom: "5px",
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text>Status : {item.status}</Text>
                    <Text>Est : {item.estTime}</Text>

                    <View
                      style={{
                        marginLeft: "-10px",
                        marginTop: "10px",
                      }}
                    >
                      <AirbnbRating
                        count={5}
                        size={12}
                        defaultRating={item.rating}
                        isDisabled
                        showRating={false}
                        selectedColor="rgb(74, 4, 4)"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            flexDirection="true"
          />
        </ScrollView>
      </View>
      <BottomNav props={navigation} />
    </View>
  );
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
    marginTop: "5px",
    height: "75%",
    marginTop: "20px",
    border: "2px solid red",
  },
  item: {
    border: "2px solid red",
    height: "200px",
    width: "150px",
    borderRadius: "15px",
    marginTop: "20px",
    overflow: "hidden",
    backgroundColor: "white",
    marginLeft: "7%",
  },
});

export default Search;
