import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { AirbnbRating, Rating } from "react-native-ratings";
import BackButton from "../components/backButton";
import BottomNav from "../components/bottomNav";
import logo from "../../assets/icons/all.png";
import { globalStyles } from "../components/commonStyles";
import cartImg from "../../assets/icons/cart.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Details({ route, navigation }) {
  const [countNum, setCountNum] = useState(0);
  const [logBox, setLogBox] = useState(false);
  const [reRender, setReRender] = useState(0);
  const [loadObj, setLoadObj] = useState(route.params.cartItems);

  let time = 0;
  setTimeout(() => {
    time++;
  }, 500);

  console.log(route.params);
  useEffect(async () => {
    let cartString = await AsyncStorage.getItem("cart");
    let cartList = JSON.parse(cartString);

    let filter = cartList.map((item) => item.itemID);
    let ind = filter.indexOf(loadObj.itemID);

    if (ind > -1) {
      setCountNum(cartList[ind].count);
    }
  });
  const handleLoadCart = async (par) => {
    let cartString = await AsyncStorage.getItem("cart");
    let cartList = JSON.parse(cartString);

    let filter = cartList.map((item) => item.itemID);
    let ind = filter.indexOf(loadObj.itemID);

    if (ind != -1) {
      if (par == "Add") {
        cartList[ind].count += 1;
      } else {
        if (par == "SubNull") {
          cartList[ind].count = 0;
          if (cartList[ind].count < 1) {
            cartList.splice(ind, ind + 1);
          }
        } else {
          cartList[ind].count -= 1;
        }
      }
    } else {
      if (par == "Add") {
        cartList.push(loadObj);
      }
    }

    cartString = JSON.stringify(cartList);
    await AsyncStorage.setItem("cart", cartString);
  };
  return (
    <View style={globalStyles.main}>
      <BackButton props={{ navigation: navigation, title: "Details" }} />
      {logBox ? (
        <View
          style={[
            globalStyles.container,
            {
              padding: 100,
              position: "fixed",
              backgroundColor: "white",
              zIndex: "3",
              top: "30%",
              left: "5%",
              boxShadow: " rgba(149, 157, 165) 0px 8px 24px",
              width: "90%",
            },
          ]}
        >
          <Text
            style={[
              globalStyles.iText,
              {
                textAlign: "center",
              },
            ]}
          >
            Want to continue shopping?
          </Text>
          <TouchableOpacity
            onPress={async () => {
              setLogBox(false);
              // navigation.navigate('')
            }}
            style={[
              globalStyles.container,
              {
                padding: 5,
                paddingLeft: 30,
                paddingRight: 30,
                marginTop: 20,
              },
            ]}
          >
            <Text
              style={[
                globalStyles.bText,
                {
                  fontSize: 16,
                },
              ]}
            >
              Sure
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setLogBox(false);
              navigation.navigate("Cart");
            }}
            style={[
              globalStyles.container,
              {
                padding: 5,
                paddingLeft: 30,
                paddingRight: 30,
                marginTop: 10,
              },
            ]}
          >
            <Text
              style={[
                globalStyles.bText,
                {
                  fontSize: 15,
                },
              ]}
            >
              Go to Cart
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
      <View
        style={[
          styles.buttons,
          {
            right: 25,
            overflow: "hidden",
          },
        ]}
      >
        <View
          style={{
            transform: "rotate(-45deg)",
          }}
        >
          <Rating
            type="heart"
            ratingColor="rgb(74, 4, 4)"
            ratingCount={1}
            ratingBackgroundColor="rgb(74, 4, 4)"
            startingValue={0}
            onFinishRating={async () => {
              let favItem = route.params.cartItems;
              let paramList = [];
              paramList.push(favItem);
              let storeList = await AsyncStorage.getItem("favorites");
              console.log(storeList)
              storeList = JSON.parse(storeList)
              let set = [...new Set([...storeList, ...paramList])];
              set = JSON.stringify(set)
              await AsyncStorage.setItem("favorites", set);
              
            }}
          />
        </View>
      </View>

      <ScrollView
        style={{
          marginTop: 100,
          maxHeight: "85%",
          overflow: "hidden",
          paddingBottom: 65,
        }}
      >
        <ImageBackground
          style={{
            height: 300,
          }}
          source={logo}
          imageStyle={{
            // borderRadius: 15,
          }}
        />
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: 20,
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (countNum > 1) {
                setReRender(reRender + 1);
                handleLoadCart("Sub");
              } else {
                setCountNum(0);
                handleLoadCart("SubNull");
              }
            }}
            style={[
              styles.buttons,
              {
                position: "relative",
                margin: "0",
                height: 35,
                width: 35,
                // borderRadius: 7,
                backgroundColor: "rgb(74, 4, 4)",
              },
            ]}
          >
            <Text
              style={{
                transform: "rotate(135deg)",
                fontSize: 40,
                marginTop: 0,
                textAlign: "center",
                marginLeft: 4,
                color: "white",
                // fontWeight:'bold'
              }}
            >
              -
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 50,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
              }}
            >
              {countNum}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setReRender(reRender + 1);
              handleLoadCart("Add");
            }}
            style={[
              styles.buttons,
              {
                position: "relative",
                margin: "0",
                height: 35,
                width: 35,
                // borderRadius: 7,
                backgroundColor: "rgb(74, 4, 4)",
              },
            ]}
          >
            <Text
              style={{
                transform: "rotate(135deg)",
                fontSize: 30,
                marginTop: 0,
                textAlign: "center",
                marginLeft: 0,
                color: "white",
                // fontWeight:'bold'
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "95%",
              // border: "2px solid rgb(74, 4, 4)",
              // borderRadius: 20,
              padding: 20,
              boxShadow: " rgba(149, 157, 165) 0px 8px 24px",
            }}
          >
            <AirbnbRating
              showRating={false}
              size={15}
              count={5}
              defaultRating={loadObj.rating}
              isDisabled
              selectedColor="rgb(74, 4, 4)"
            />
            <Text
              style={{
                fontSize: 25,
                marginTop: 5,
              }}
            >
              {loadObj.name}
            </Text>
            <Text
              style={{
                marginTop: 15,
                fontSize: 18,
                color: "grey",
              }}
            >
              {loadObj.description}
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 18,
              }}
            >
              Packaging: {loadObj.packaging} /=
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              item Price: {loadObj.price} /=
            </Text>
            <Text
              style={{
                marginTop: 8,
                fontSize: 18,
              }}
            >
              Total Price
            </Text>
            <Text>
              {" "}
              <Text
                style={{
                  fontSize: 40,
                  color: "brown",
                }}
              >
                {parseInt(loadObj.price) + parseInt(loadObj.packaging)}
              </Text>
              /=
            </Text>
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 20,
                bottom: 20,
                height: 50,
                width: 50,
                // borderRadius: "100%",
                boxShadow: " rgba(149, 157, 165) 0px 8px 24px",
              }}
              onPress={() => {
                setLogBox(true);
              }}
            >
              <ImageBackground
                source={cartImg}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    position: "absolute",
                    top: -15,
                    right: 0,
                  }}
                >
                  {countNum}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <BottomNav props={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
  },
  buttons: {
    border: "2px solid rgb(74, 4, 4)",
    height: 45,
    width: 45,
    // borderRadius: 10,
    transform: "rotate(45deg)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    position: "fixed",
  },
});

export default Details;
