import React from "react";
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
import cartImg from '../../assets/icons/cart.png'

function Details({ navigation }) {
  return (
    <View style={globalStyles.main}>
      <BackButton props={{ navigation: navigation, title: "Details" }} />
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
          maxHeight:'85 %',
          overflow:'hidden'
          ,paddingBottom:'65px'

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
              0
            </Text>
          </View>
          <TouchableOpacity
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
            boxShadow:' rgba(149, 157, 165) 0px 8px 24px'
          }}
        >
          <AirbnbRating 
          showRating = {false}
          size={15}

          />
          <Text
            style={{
              fontSize: "25px",
              marginTop:'5px'
            }}
          >
            Title of Food
          </Text>
          <Text
            style={{
              marginTop: "15px",
              fontSize: "18px",
              color: "grey",
            }}
          >
            A very short description of the food, and how its has been made and
            any alergens and things like that 
          </Text>
          <Text style={{
            marginTop:'10px'
            ,fontSize:'18px'
          }}>Packaging: 20.00 /=</Text>
          <Text style={{
            fontSize:'18px'
          }}>item Price: 20.00 /=</Text>
          <Text style={{
            marginTop:'8px'
            ,fontSize:'18px'
          }}>Total Price</Text>
          <Text >
            /= <Text style={{
              fontSize:'40px'
            }}>20.00</Text>
          </Text>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: "20px",
              bottom: "20px",
              height: "50px",
              width: "50px",
              borderRadius: "100%",
    boxShadow:' rgba(149, 157, 165) 0px 8px 24px'

            }}
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            <ImageBackground
            source={cartImg}
            style={{
              height:'100%'
              ,width:'100%'
            }}
            />
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
