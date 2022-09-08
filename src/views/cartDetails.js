import React,{useState,useEffect} from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Touchable,
  ImageBackground,
} from "react-native";
import { globalStyles } from "../components/commonStyles";
import foodSrc from "../../assets/icons/all.png";
import BackButton from "../components/BackButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
function CartDetails({route, navigation }) {
  const [reRender, setReRender] = useState(0);
  const [count, setCount] = useState(route.params.cartList.count)
  const [loadObj, setLoadObj] = useState(route.params.cartList);
  const [total, setTotal] = useState()


  const calcTotal =async ()=>{
    
    let cartString = await AsyncStorage.getItem("cart");
    let cartList = JSON.parse(cartString);

    let filter = cartList.map((item) => item.itemID);
    let ind = filter.indexOf(loadObj.itemID);

    let anTotal = ((parseInt(cartList[ind].price) + parseInt(cartList[ind].packaging))* parseInt(cartList[ind].count))
    setTotal(anTotal)
  }

  useEffect(()=>{
    if(count >0){
    calcTotal()
    }
  })

  const handleEdit = async (par) => {
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
            setCount(0)
            setTotal(0)
            navigation.goBack()
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
      <View
        style={{
          // position: "fixed",
          zIndex: 5,
        }}
      >
        <BackButton props={{ navigation: navigation, title: "Cart Details" }} />
      </View>

      <View
        style={{
          marginTop: 100,
          // border: "2px solid red",
          // height:'300px',
        }}
      >
        <ImageBackground
          style={{
            height: 300,
            width:'95%',
            marginLeft:'5%'
          }}
          source={foodSrc}
          imageStyle={{
            // borderRadius: 15,
          }}
        />
        <View
          style={{
            padding: 20,
            paddingBottom: 0,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              // fontWeight:'bold',
              textAlign: "center",
              color: "rgb(74, 4, 4)",
            }}
          >
            {loadObj.name}
          </Text>

          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "grey",
            }}
          >
            More details on the item
          </Text>
        </View>
      </View>

      <View style={styles.flexBox}>
        <View
          style={[
            styles.flexBox,
            {
              width: "95%",
              // borderRadius: 20,
              paddingBottom: 20,
              border:'2px solid rgb(74, 4, 4)'
            },
          ]}
        >
          <View style={[styles.flexBox, styles.Cdetails]}>
            <View style={[styles.circles]} />
            <Text style={styles.text}>Est. Time: 15mins</Text>
          </View>
          <View style={[styles.flexBox, styles.Cdetails]}>
            <View style={[styles.circles]} />
            <Text style={styles.text}>{loadObj.hotel}</Text>
          </View>
          <View style={[styles.flexBox, styles.Cdetails]}>
            <View style={[styles.circles]} />
            <Text style={styles.text}>
              Quantity:
              <TouchableOpacity
              
            onPress={() => {
              if (count > 1) {
                setReRender(reRender + 1);
                setCount(count-1)
                handleEdit("Sub");
              } else {
                setCount(0);
                handleEdit("SubNull");
              }
            }}
              style={styles.smallButtons}>
                <Text>-</Text>
              </TouchableOpacity>
              {count}
              <TouchableOpacity
              
            onPress={() => {
              setReRender(reRender + 1);
              setCount(count + 1)
              handleEdit("Add");
            }}
              style={styles.smallButtons}>
                <Text>+</Text>
              </TouchableOpacity>
            </Text>
          </View>

          <View style={[styles.flexBox, styles.Cdetails]}>
            <View style={[styles.circles]} />
            <Text style={styles.text}>
              Total  :{" "}
              <Text
                style={{
                  color: "rgb(74, 4, 4)",
                }}
              >
                {total}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "rgb(74, 4, 4)",
                }}
              >
                {" "}
                /=
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.flexBox,
              styles.Cdetails,
              {
                backgroundColor: "rgb(74, 4, 4)",
                justifyContent: "center",
              },
            ]}
            onPress={() => {
              navigation.goBack()
            }}
          >
            <Text style={[styles.text, { color: "white", margin: 0 }]}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexBox: {
    // border: "2px solid red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  smallButtons: {
    marginLeft: 20,
    border: "2px solid blue",
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 20,
  },
  Cdetails: {
    // border: "2px solid red",
    height: 40,
    width: "95%",
    // borderRadius: 10,
    flexDirection: "row",
              boxShadow: " rgb(74, 4, 4) 0px 0px 10px",
              justifyContent: "unset",
    // textAlign:'',
    paddingLeft: 20,
    marginTop: 20,
  },
  circles: {
    border: "2px solid rgb(74, 4, 4)",
    height: 20,
    width: 20,
    // borderRadius: "100%",
  },
  text: {
    fontSize: 20,
    marginLeft: 15,
  },
});

export default CartDetails;
