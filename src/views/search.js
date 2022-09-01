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

  useEffect(() => {
    if (route.params) {
      setHotelList(
        hotelConstList.filter((categ) => categ.categories.includes(name))
      );
    }
  });

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
          let nameList = [];
          let descList = [];
          let categList = [];
          let set = [];
          let searchedList = hotelConstList;
          value = value.toUpperCase();

          value.split(" ").forEach((string) => {
            // if(string != ''){
            console.log("searching", string);
            searchedList.forEach((item, ind) => {
              if (item.name.toUpperCase().includes(string)) {
                if (nameList.indexOf(hotelConstList[ind] != -1)) {
                  nameList.push(hotelConstList[ind]);
                }
              }
            });
            console.log(nameList);

            set = [...new Set([...set, ...nameList])];
            searchedList.forEach((item, ind) => {
              if (item.description.toUpperCase().includes(string)) {
                if (descList.indexOf(hotelConstList[ind] != -1)) {
                  descList.push(hotelConstList[ind]);
                }
              }
            });
            console.log(descList);

            set = [...new Set([...set, ...descList])];

            searchedList.forEach((item, ind) => {
              if (item.category.toUpperCase().includes(string)) {
                if (categList.indexOf(hotelConstList[ind] != -1)) {
                  categList.push(hotelConstList[ind]);
                }
              }
            });
            console.log(categList);
            set = [...new Set([...set, ...categList])];

            console.log("final search", set);
            setHotelList(set);
            // }
          });
        }}
      />
      <View style={styles.trending}>
        <h4 style={{ margin: 0, marginLeft: "20px", paddingBottom: "8px" }}>
          {hotelList.length == hotelConstList.length?'Search':`${hotelList.length} results found`}
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
