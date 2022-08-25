import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import props from "../props/props";
import TopHeader from "../components/topHeader";
import BottomNav from "../components/bottomNav";
import Icons from "../components/icons";
import { iconNames } from "../components/iconNames";
import { globalStyles } from "../components/commonStyles";
import { ImageBackground } from "react-native-web";
import Loader from "../components/loader";
import { AirbnbRating, Rating } from "react-native-ratings";
import MasonryList from "@react-native-seoul/masonry-list";

function Home({ navigation }) {
  const [hotelList, setHotelList] = useState(props.HotelList);
  const [hotelConstList, setConstHotelList] = useState(props.HotelList);
  const categFilter = (name) => {
    if (name != "All") {
      setHotelList(
        hotelConstList.filter((categ) => categ.categories.includes(name))
      );
    } else {
      setHotelList(hotelConstList);
    }
  };
  return (
    <View style={[globalStyles.main]}>
      {/* {true?<TopHeader props={navigation} />:<></>} */}
      <TopHeader props={{ navigation: navigation, title: "Home" }} />

      <View
        style={{
          overflow: "hidden",
        }}
      >
        <TextInput
          placeholder="search bar"
          style={[styles.search, { outline: "none" }]}
          onSubmitEditing={(e) =>
            navigation.navigate("Search", {
              params: { isSearching: true, word: e.target.value },
            })
          }
        />
        <View style={styles.advert}>
          <ImageBackground
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "15px",
              overflow: "hidden",
              // border:'2px solid red'
            }}
            imageStyle={{
              // size
              height: "100%",
              width: "100%",
            }}
            source={
              "https://media.npr.org/assets/img/2022/06/06/gettyimages-1199291938-40_custom-7191b02345de50bf85961f6342c202dd9d6d20a0-s800-c85.webp"
            }
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "10px",
              paddingLeft: "5px",
            }}
          >
            Categories
          </Text>
        </View>
        <ScrollView
          style={styles.categBox}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
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
      <ScrollView style={styles.trending}>
        <h4 style={{ margin: 0, paddingBottom: "20px" }}>Restaurants Around</h4>
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
                  navigation.navigate("Hotel", {
                    params: { title: item.name },
                  });
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
      <BottomNav props={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    border: "2px solid rgb(74, 4, 4)",
    height: "35px",
    fontSize: "18px",
    borderRadius: "15px",
    paddingLeft: "10px",
    width: "80%",
    marginTop: "10px",
    marginLeft: "10px",
  },
  advert: {
    border: "2px solid rgb(74, 4, 4)",
    marginTop: "15px",
    height: "200px",
    backgroundColor: "white",
    borderRadius: "15px",
  },
  categBox: {
    display: "flex",
    flexDirection: "row",
    overflow: "scroll",
    marginTop: "5px",
    paddingBottom: "15px",
  },
  categMiniBox: {
    border: "2px solid rgb(74, 4, 4)",
    minWidth: "85px",
    paddingRight: "10px",
    paddingLeft: "10px",
    height: "40px",
    borderRadius: "15px",
    marginLeft: "10px",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  categIcon: {
    height: "35px",
    width: "35px",
    borderRadius: "100%",
    marginTop: "10px",
  },
  trending: {
    // marginTop:'5px',
    paddingLeft: "5px",
    // paddingTop: "15px",
    height: "42%  ",
    // border:'2px solid red'
  },
  item: {
    border: "2px solid red",
    height: "fit-content",
    paddingBottom: "5px",
    width: "150px",
    borderRadius: "15px",
    marginBottom: "20px",
    overflow: "hidden",
    backgroundColor: "white",
    marginLeft: "7%",
    alignItems: "center",
  },
});
export default Home;
