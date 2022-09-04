import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import { globalStyles } from "../components/commonStyles";

import props from "../props/props";
import BottomNav from "../components/bottomNav";
import TopHeader from "../components/topHeader";
import MasonryList from "@react-native-seoul/masonry-list";
import { default as list } from "../props/props";
import { AirbnbRating } from "react-native-ratings";
import axios from "axios";

function Search({ route, navigation }) {
  const [hotelList, setHotelList] = useState([]);
  const [hotelConstList, setConstHotelList] = useState([]);
  // const [hotelParams, setHotelParams] = useState(route.params.params)
  const [isSearching, setIsSearching] = useState(false);
  const [categFilter, setCategFilter] = useState([]);
  const [descFilter, setDescFilter] = useState([]);
  const [nameFilter, setNameFilter] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const searchEng = (value) => {
    let nameList = [];
    let descList = [];
    let categList = [];
    let set = [];
    let anotherSet = [];
    let searchedList = hotelConstList;
    value = value.toUpperCase();
    value = value.split(" ");

    searchedList.forEach((item, ind) => {
      console.log("description", item.description);
      if (
        value.includes(item.name.toUpperCase()) ||
        value.includes(item.category.toUpperCase())
      ) {
        console.log(item.description);
        if (nameList.indexOf(hotelConstList[ind] != -1)) {
          nameList.push(hotelConstList[ind]);
        }
      }

      anotherSet = [...new Set([...set, ...nameList])];

      item.description.split(" ").forEach((anotherItem) => {
        if (value.includes(anotherItem.toUpperCase())) {
          if (nameList.indexOf(hotelConstList[ind] != -1)) {
            nameList.push(hotelConstList[ind]);
          }
        }
      });
      anotherSet = [...new Set([...set, ...nameList])];
    });

    value.forEach((string) => {
      if (string != " " && value != '' ) {
        searchedList.forEach((item, ind) => {
          if (item.name.toUpperCase().includes(string)) {
            if (descList.indexOf(hotelConstList[ind] != -1)) {
              descList.push(hotelConstList[ind]);
            }
          }
        });

        set = [...new Set([...set, ...descList])];

        searchedList.forEach((item, ind) => {
          if (item.description.toUpperCase().includes(string)) {
            if (descList.indexOf(hotelConstList[ind] != -1)) {
              descList.push(hotelConstList[ind]);
            }
          }
        });

        set = [...new Set([...set, ...descList])];

        searchedList.forEach((item, ind) => {
          if (item.category.toUpperCase().includes(string)) {
            if (categList.indexOf(hotelConstList[ind] != -1)) {
              categList.push(hotelConstList[ind]);
            }
          }
        });
        set = [...new Set([...set, ...categList])];

    searchedList = set;
    setHotelList(set);
      }else{
        console.log(hotelConstList)
    setHotelList(hotelConstList);
      }
    });
  };
  useEffect(() => {
    const willFocus = navigation.addListener("focus", () => {
      axios({
        method: "GET",
        url: "http://localhost/chafua/allItems.php",
      }).then((res) => {
        console.log(res);
        if (typeof res.data != "string") {
          setHotelList(res.data);
          setConstHotelList(res.data);
          console.log("console data", res.data);

          let filteredHotelList = res.data.map((item) => item.category);

          setCategFilter(filteredHotelList);

          filteredHotelList = res.data.map((item) => item.description);
          setDescFilter(filteredHotelList);

          filteredHotelList = res.data.map((item) => item.name);
          setNameFilter(filteredHotelList);
        }
      });
    });

    return willFocus;
  });

  useEffect(() => {
    const willFocus = navigation.addListener("focus", () => {
      console.log("confirm", hotelList);
    });
    return willFocus;
  });

  // useEffect(() => {
  //   const willFocus = navigation.addListener('focus',()=>{

  //     if (route.params) {
  //       setSearchValue(route.params.params.word)
  //     }
  //   })
  //   return willFocus
  // });
  return (
    <View style={globalStyles.main}>
      {/* <TopHeader props={navigation} /> */}
      <TopHeader props={{ navigation: navigation, title: "Search" }} />

      <TextInput
        placeholder="search bar"
        style={[styles.search, { outline: "none", marginTop: "30px" }]}
        // onSubmitEditing={()=>navigation.navigate('Cart')}
        onChange={(e) => {
          let value = e.target.value;
          setSearchValue(value);
          searchEng(value);
        }}
        // value={route.params?route.params.params.word:''}
        value={searchValue}
        autoFocus={route.params ? route.params.params.isSearching : false}
      />
      <View style={styles.trending}>
        <h4 style={{ margin: 0, marginLeft: "20px",lineHeight:'0'}}>
          {hotelList.length == hotelConstList.length
            ? "Search"
            : `${hotelList.length} results found`}
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
                  <Text>Seems like its empty in here... </Text>
                </View>
              );
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    let ind = hotelList
                      .map((obj) => obj.itemID)
                      .indexOf(item.itemID);
                    navigation.navigate("Details", {
                      cartItems: {
                        name: item.name,
                        hotel: item.hotel,
                        price: item.price,
                        estDelTime: item.estDelTime,
                        thumbNail: item.thumbNail,
                        count: parseInt(item.count),
                        rating: parseInt(item.rating),
                        itemID: parseInt(item.itemID),
                        packaging: item.packaging,
                        category: item.category,
                        delivery: item.delivery,
                        description:item.description,
                      },
                    });
                  }}
                >
                  <ImageBackground
                    source={item.thumbNail}
                    style={{
                      borderBottom: "2px solid rgb(74, 4, 4)",
                      height: "100px",
                      width: "100%",
                      borderRadius: "15px",
                      // paddingTop:"9%",
                      overflow: "hidden",
                    }}
                  />
                  <View
                    style={{
                      // width: 120,
                      paddingLeft:'5%'
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
                    <Text>Hotel : {item.hotel}</Text>
                    <Text>Est : {item.estDelTime}</Text>

                    <View
                      style={{
                        // marginLeft: "10px",
                        marginTop: "10px",
                        // position:'absolute'
                        marginLeft:'-10px'
                      }}
                    >
                      <AirbnbRating
                        count={5}
                        size={12}
                        defaultRating={3}
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
    height: "75%",
    marginTop : "20px",
  },
  item: {
    border: "2px solid rgb(74, 4, 4)",
    // height: "200px",
    paddingBottom:'5px',
    width: "150px",
    borderRadius: "15px",
    marginTop: "20px",
    overflow: "hidden",
    backgroundColor: "white",
    marginLeft: "7%",
  },
});

export default Search;
