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
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { SliderBox } from "react-native-image-slider-box";
function Home({ navigation }) {
  const [hotelList, setHotelList] = useState([]);
  const [hotelConstList, setConstHotelList] = useState([]);
  const [userDetails, setUserDetails] = useState();
  const [stateImages, setStateImages] = useState([
    "https://media.npr.org/assets/img/2022/06/06/gettyimages-1199291938-40_custom-7191b02345de50bf85961f6342c202dd9d6d20a0-s800-c85.webp",
    "https://media.npr.org/assets/img/2022/06/06/gettyimages-1199291938-40_custom-7191b02345de50bf85961f6342c202dd9d6d20a0-s800-c85.webp",
    "https://media.npr.org/assets/img/2022/06/06/gettyimages-1199291938-40_custom-7191b02345de50bf85961f6342c202dd9d6d20a0-s800-c85.webp",
  ]);

  useEffect(() => {
    const willFocus = navigation.addListener("focus", () => {
      AsyncStorage.getItem("user").then((res) => {
        let campusID = JSON.parse(res).campusID;
        axios({
          method: "POST",
          url: "http://localhost/chafua/getHotels.php",
          data: { campusID: campusID },
        })
          .then(async (res) => {
            if (typeof res.data != "string") {
              console.log(res.data);
              setHotelList(res.data);
              setConstHotelList(res.data);
            }
          })
          .catch((eer) => {
            alert("error");
          });
      });
    });
    return willFocus;
  });

  useEffect(() => {
    const willFocus = navigation.addListener("focus", () => {
      AsyncStorage.getItem("user")
        .then((res) => {
          let parse = JSON.parse(res);
          setUserDetails(parse);
        })
        .catch((err) => {
          console.log(err);
          alert("something went wrong");
        });
    });
    return willFocus;
  });
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
          onFocus={(e) =>
            navigation.navigate("Search", {
              params: { isSearching: true, word: e.target.value },
            })
          }
        />
        <View style={styles.advert}>
          {/* <SliderBox
            ImageComponent={FastImage}
            images={stateImages}
            sliderBoxHeight={200}
            onCurrentImagePressed={(index) =>
              console.warn(`image ${index} pressed`)
            }
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={"resize"}
            resizeMode={"cover"}
            paginationBoxStyle={{
              position: "absolute",
              bottom: 0,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              paddingVertical: 10,
            }}
            dotStyle={{
              width: 10,
              height: 10,
              // borderRadius: 5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: "rgba(128, 128, 128, 0.92)",
            }}
            ImageComponentStyle={{
              // borderRadius: 15,
              width: "97%",
              marginTop: 5,
            }}
            imageLoadingColor="#2196F3"
          /> */}
          <ImageBackground
            style={{
              height: "100%",
              width: "100%",
              // borderRadius: 15,
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
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
              paddingLeft: 5,
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
        <h4 style={{ margin: 0, paddingBottom: 20 }}>
          {userDetails ? userDetails.campName : "Hotels"}
        </h4>

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
                    params: { hotelID: item.hotelID, name: item.name },
                  });
                }}
              >
                <ImageBackground
                  source={item.image}
                  style={{
                    borderBottom: "2px solid rgb(74, 4, 4)",
                    height: 100,
                    width: "100%",
                    // borderRadius: 15,
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
                  <Text>Status : {item.status}</Text>
                  <Text>Est : {item.estTime}</Text>

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
      <BottomNav props={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    // border: "2px solid rgb(74, 4, 4)",

    borderWidth:2,
    borderColor:'rgb(74, 4, 4)',
    height: 35,
    fontSize: 18,
    // borderRadius: 15,
    paddingLeft: 10,
    width: "80%",
    marginTop: 10,
    marginLeft: 10,
  },
  advert: {
    border: "2px solid rgb(74, 4, 4)",
    marginTop: 15,
    height: 200,
    backgroundColor: "white",
    // borderRadius: 15,
  },
  categBox: {
    display: "flex",
    flexDirection: "row",
    overflow: "scroll",
    marginTop: 5,
    paddingBottom: 15,
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
export default Home;
