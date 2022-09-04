import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { AirbnbRating } from "react-native-ratings";
import BottomNav from "../components/bottomNav";
import { globalStyles } from "../components/commonStyles";
import { iconNames } from "../components/iconNames";
import Icons from "../components/icons";
import TopHeader from "../components/topHeader";
import { default as list } from "../props/props";
import MasonryList from "@react-native-seoul/masonry-list";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

function Hotel({ route, navigation }) {
  const [hotelList, setHotelList] = useState([]);
  const [hotelConstList, setConstHotelList] = useState([]);
  const [hotelParams, setHotelParams] = useState(route.params.params);

  useEffect(() => {
    const willFocus = navigation.addListener("focus", () => {
      axios({
        method: "POST",
        url: "http://localhost/chafua/getItems.php",
        data: { hotelID: hotelParams.hotelID },
      }).then((res) => {
        console.log(res);
        if (typeof res.data != "string") {
          setHotelList(res.data);
          setConstHotelList(res.data);
        }
      });
    });

    return willFocus;
  });

  const categFilter = (name) => {
    if (name != "All") {
      setHotelList(hotelConstList.filter((categ) => (categ.category = name)));
    } else {
      setHotelList(hotelConstList);
    }
  };

  return (
    <View style={globalStyles.main} showsVerticalScrollIndicator={false}>
      <TopHeader props={{ navigation: navigation, title: hotelParams.name }} />
      <View
        style={[
          globalStyles.container,
          {
            marginTop: 20,
            flexDirection: "row",
            border: "none",
          },
        ]}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => {
              const categName = "All";
              categFilter(categName);
            }}
            style={styles.categMiniBox}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              All
            </Text>
            <View style={styles.categIcon}>
              <View
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Icons props={{ iconName: iconNames.allIcon }} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              const categName = "Fast";
              categFilter(categName);
            }}
            style={styles.categMiniBox}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Fast
            </Text>
            <View style={styles.categIcon}>
              <View
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Icons props={{ iconName: iconNames.fastIcon }} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              const categName = "Drinks";
              categFilter(categName);
            }}
            style={styles.categMiniBox}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Drinks
            </Text>
            <View style={styles.categIcon}>
              <View
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Icons props={{ iconName: iconNames.drinkIcon }} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              const categName = "Tea";
              categFilter(categName);
            }}
            style={styles.categMiniBox}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Tea
            </Text>
            <View style={styles.categIcon}>
              <View
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Icons props={{ iconName: iconNames.teaIcon }} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              const categName = "Fruits";
              categFilter(categName);
            }}
            style={styles.categMiniBox}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Fruits
            </Text>
            <View style={styles.categIcon}>
              <View
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Icons props={{ iconName: iconNames.fruitIcon }} />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <TextInput
        placeholder="search bar"
        style={[styles.search, { outline: "none" }]}
        onFocus={(e) =>
          navigation.navigate("Search", {
            params: { isSearching: true, word: e.target.value },
          })
        }
      />
      <ScrollView
        style={{
          marginTop: 20,
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
                <Text>Seems like Nothing is here... </Text>
              </View>
            );
          }}
          renderItem={({ item, ind }) => {
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
                      hotel: hotelParams.name,
                      price: item.price,
                      estDelTime: item.estDelTime,
                      thumbNail: item.thumbNail,
                      count: parseInt(item.count),
                      rating: parseInt(item.rating),
                      itemID: parseInt(item.itemID),
                      packaging: item.packaging,
                      category: item.category,
                      delivery: item.delivery,
                      description: item.description,
                    },
                  });
                }}
              >
                <ImageBackground
                  source={item.thumbNail}
                  style={{
                    borderBottom: "2px solid rgb(74, 4, 4)",
                    height: 100,
                    width: "100%",
                    // borderRadius: 15,
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
                      fontSize: 18,
                      marginTop: 10,
                      marginBottom: 5,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text>Price : {item.price}</Text>
                  <Text>Hotel : {item.hotel}</Text>
                  <Text>Est : {item.estDelTime}</Text>

                  <View
                    style={{
                      marginLeft: -10,
                      marginTop: 10,
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
      {/* </View> */}
      <BottomNav props={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    padding: "0",
    overflow: "none",
    height: "100%",
  },
  search: {
    border: "2px solid rgb(74, 4, 4)",
    height: 35,
    fontSize: 18,
    // borderRadius: 15,
    paddingLeft: 10,
    width: "80%",
    marginTop: 10,
    marginLeft: 10,
  },
  totalBox: {
    border: "2px solid rgb(74, 4, 4)",
    height: 150,
    width: "90%",
    marginLeft: "5%",
    // borderRadius: 20,
    backgroundColor: "white",
    padding: 20,
  },
  buttons: {
    paddingLeft: 20,
    paddingRight: 20,
    // borderRadius: 10,
    marginLeft: 5,
    height: 35,
  },
  cartItem: {
    border: "2px solid rgb(74, 4, 4)",
    height: 120,
    // borderRadius: 20,
    marginTop: 20,
    display: "flex",
    // justifyContent:'center',
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  categMiniBox: {
    border: "2px solid rgb(74, 4, 4)",
    minWidth: 85,
    paddingRight: 10,
    paddingLeft: 10,
    height: 40,
    // borderRadius: 15,
    marginLeft: 10,
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  categIcon: {
    height: 35,
    width: 35,
    // borderRadius: "100%",
    marginTop: 10,
  },
  trending: {
    // marginTop:'5px',
    paddingLeft: 5,
    // paddingTop: 15,
    height: "42%  ",
    // border:'2px solid red'
  },
  item: {
    border: "2px solid rgb(74, 4, 4)",
    height: "fit-content",
    paddingBottom: 5,
    width: 150,
    // borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    backgroundColor: "white",
    marginLeft: "7%",
    alignItems: "center",
  },
});
export default Hotel;
