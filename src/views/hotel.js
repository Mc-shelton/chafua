import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { AirbnbRating } from "react-native-ratings";
import BottomNav from "../components/bottomNav";
import { globalStyles } from "../components/commonStyles";
import { iconNames } from "../components/iconNames";
import Icons from "../components/icons";
import TopHeader from "../components/topHeader";
import {default as list} from "../props/props" ;
import MasonryList from "@react-native-seoul/masonry-list";

function Hotel({route,navigation }) {
  const [hotelList, setHotelList] = useState(list.hotelItems);
  const [hotelConstList, setConstHotelList] = useState(list.hotelItems);
  const [hotelParams, setHotelParams] = useState(route.params.params)
  const categFilter = (name) => {
    if (name != "All") {
      setHotelList(
        hotelConstList.filter((categ) => categ.category = name)
      );
    } else {
      setHotelList(hotelConstList);
    }
  };

  return (
    <View style={globalStyles.main} showsVerticalScrollIndicator={false}>
      <TopHeader props={{ navigation: navigation, title: hotelParams.title }} />
      <View
        style={[
          globalStyles.container,
          {
            marginTop: "20px",
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
          renderItem={( {item, ind} ) => {
            return (
              <TouchableOpacity
                style={styles.item}
                
                onPress={() => {
                  let ind = list.hotelItems.map((obj) => obj.itemID).indexOf(item.itemID)
                  navigation.navigate("Details",{
                    cartItems:list.hotelItems[ind]
                  });
                }}
              >
                <ImageBackground
                  source={item.thumbNail}
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
                  <Text>Price : {item.price}</Text>
                  <Text>Hotel : {item.hotel}</Text>
                  <Text>Est : {item.estDelTime}</Text>

                  <View
                style={{
                  marginLeft:'-10px'
                  ,marginTop:'10px'
                }}>                
                <AirbnbRating
                count={5}
                size={12}
                defaultRating={item.rating}
                isDisabled
                showRating={false}
                selectedColor='rgb(74, 4, 4)'

                /></View>
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
  totalBox: {
    border: "2px solid red",
    height: "150px",
    width: "90%",
    marginLeft: "5%",
    borderRadius: "20px",
    backgroundColor: "white",
    padding: "20px",
  },
  buttons: {
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: "10px",
    marginLeft: "5px",
    height: "35px",
  },
  cartItem: {
    border: "2px solid red",
    height: "120px",
    borderRadius: "20px",
    marginTop: "20px",
    display: "flex",
    // justifyContent:'center',
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
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
export default Hotel;
