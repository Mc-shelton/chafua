import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import props from "../props/props";

function Home() {
  return (
    <View style={{
      border:'2px solid red',
      height:'100%',
      overflow:'hidden'
    }}>
      <TextInput
        placeholder="search bar"
        style={[styles.search, { outline: "none" }]}
      />
      <View style={styles.advert}></View>
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
      <View style={styles.categBox}>
        <View style={styles.categMiniBox}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Fast
          </Text>
          <View style={styles.categIcon}></View>
        </View>
        <View style={styles.categMiniBox}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Fast
          </Text>
          <View style={styles.categIcon}></View>
        </View>
        <View style={styles.categMiniBox}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Fast
          </Text>
          <View style={styles.categIcon}></View>
        </View>
        <View style={styles.categMiniBox}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Fast
          </Text>
          <View style={styles.categIcon}></View>
        </View>
        <View style={styles.categMiniBox}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Fast
          </Text>
          <View style={styles.categIcon}></View>
        </View>
      </View>
      <View style={styles.trending}>
        <h4 style={{ margin: 0,paddingBottom:'8px' }}>Trending</h4>
        <FlatList
          data={props.categList}
          // key={props.categList.id}
          renderItem={(item) => {
            return (
              <View style={styles.item}>
                <View
                  style={{
                    borderBottom: "2px solid red",
                    height: "60px",
                    borderRadius: "15px",
                  }}
                ></View>
              </View>
            );
          }}
          flexDirection="true"
        />
      </View>
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
  advert: {
    border: "2px solid red",
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
    border: "2px solid red",
    minWidth: "85px",
    paddingLeft: "3px",
    height: "40px",
    borderRadius: "15px",
    marginLeft: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  categIcon: {
    border: "2px solid red",
    height: "35px",
    width: "35px",
    marginLeft: "5px",
    marginRight: "2px",
    borderRadius: "100%"
  },
  trending: {
    marginTop:'5px',
    paddingLeft: "5px",
    height:'50%',
  },
  item: {
    border: "2px solid red",
    height: "100px",
    width: "90px",
    borderRadius: "15px",
    marginTop: "20px",
    overflow: "hidden",

  },
});
export default Home;
