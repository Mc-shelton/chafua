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
import logo from "../../assets/images/image2.jfif";
import { globalStyles } from "../components/commonStyles";
import cartImg from "../../assets/icons/cart.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Details({ route,navigation }) {
  const [countNum, setCountNum] = useState(0);
  const [logBox, setLogBox] = useState(false);
  const [reRender, setReRender] = useState(0);
  const [loadObj, setLoadObj] = useState(route.params.cartItems);

  let time = 0;
  setTimeout(() => {
    time++;
  }, 500);


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
              padding: "100px",
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
                padding: "5px",
                paddingLeft: "30px",
                paddingRight: "30px",
                marginTop: "20px",
              },
            ]}
          >
            <Text
              style={[
                globalStyles.bText,
                {
                  fontSize: "16px",
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
                padding: "5px",
                paddingLeft: "30px",
                paddingRight: "30px",
                marginTop: "10px",
              },
            ]}
          >
            <Text
              style={[
                globalStyles.bText,
                {
                  fontSize: "15px",
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
            right: "25px",
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
            onFinishRating={() => {
              alert("Added to favorites");
            }}
          />
        </View>
      </View>

      <ScrollView
        style={{
          marginTop: "100px",
          maxHeight: "85 %",
          overflow: "hidden",
          paddingBottom: "65px",
        }}
      >
        <ImageBackground
          style={{
            height: "300px",
          }}
          source={logo}
          imageStyle={{
            borderRadius: "15px",
          }}
        />
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: "20px",
            marginTop: "20px",
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
                height: "35px",
                width: "35px",
                borderRadius: "7px",
                backgroundColor: "rgb(74, 4, 4)",
              },
            ]}
          >
            <Text
              style={{
                transform: "rotate(135deg)",
                fontSize: "40px",
                marginTop: "0px",
                textAlign: "center",
                marginLeft: "4px",
                color: "white",
                // fontWeight:'bold'
              }}
            >
              -
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: "50px",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: "20px",
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
                height: "35px",
                width: "35px",
                borderRadius: "7px",
                backgroundColor: "rgb(74, 4, 4)",
              },
            ]}
          >
            <Text
              style={{
                transform: "rotate(135deg)",
                fontSize: "30px",
                marginTop: "0px",
                textAlign: "center",
                marginLeft: "0px",
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
              borderRadius: "20px",
              padding: "20px",
              boxShadow: " rgba(149, 157, 165) 0px 8px 24px",
            }}
          >
            <AirbnbRating showRating={false} size={15} 
                      count={5}
                      defaultRating={loadObj.rating}
                      isDisabled
                      selectedColor="rgb(74, 4, 4)"

                      />
            <Text
              style={{
                fontSize: "25px",
                marginTop: "5px",
              }}
            >
              {loadObj.name}

            </Text>
            <Text
              style={{
                marginTop: "15px",
                fontSize: "18px",
                color: "grey",
              }}
            >
              
              {loadObj.description}
            </Text>
            <Text
              style={{
                marginTop: "10px",
                fontSize: "18px",
              }}
            >
              Packaging: {loadObj.packaging} /=
            </Text>
            <Text
              style={{
                fontSize: "18px",
              }}
            >
              item Price: {loadObj.price} /=
            </Text>
            <Text
              style={{
                marginTop: "8px",
                fontSize: "18px",
              }}
            >
              Total Price
            </Text>
            <Text>
              {" "}
              <Text
                style={{
                  fontSize: "40px",
                  color: "brown",
                }}
              >
                {parseInt(loadObj.price) + parseInt(loadObj.packaging) }
              </Text>
              /=
            </Text>
            <TouchableOpacity
              style={{
                position: "absolute",
                right: "20px",
                bottom: "20px",
                height: "50px",
                width: "50px",
                borderRadius: "100%",
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
                    fontSize: "18px",
                    position: "absolute",
                    top: "-15px",
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
    height: "45px",
    width: "45px",
    borderRadius: "10px",
    transform: "rotate(45deg)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "30px",
    position: "fixed",
  },
});

export default Details;
