import React, { useEffect } from "react";
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

function Home({navigation}) {
  return (
    <View 
    style={globalStyles.main}
    >

      {/* {true?<TopHeader props={navigation} />:<></>} */}
      <TopHeader props={{ navigation: navigation, title: "Home" }} />

    <View style={{
      overflow:'hidden'
    }}>
      
      <TextInput
        placeholder="search bar"
        style={[styles.search, { outline: "none" }]}
        onSubmitEditing={()=>navigation.navigate('Search')}
      />
      <View style={styles.advert}>

      <ImageBackground
          style={{
            height: "70%",
            width: "70%",
            borderRadius: "100%",
            // border:'2px solid red'
          }}
          imageStyle={{
            // size
            height: "100%",
            width: "100%",
          }}
          source={require(`https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg?quality=82&strip=1&w=640`)}
        />
    )
      </View>
      <View >
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
      <ScrollView style={styles.categBox}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      >
        <View style={styles.categMiniBox}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            All
          </Text>
          <View style={styles.categIcon}>
            <View style={{
              height:'100%'
              ,width:'100%'
            }}>
            <Icons props={{iconName:iconNames.allIcon}}/>
            </View>
          </View>
        </View>
        <View style={styles.categMiniBox}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Fast
          </Text>
          <View style={styles.categIcon}>

          <View style={{
              height:'100%'
              ,width:'100%'
            }}>
            <Icons props={{iconName:iconNames.fastIcon}}/>
            </View>
          </View>
        </View>
        <View style={styles.categMiniBox}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Drinks
          </Text>
          <View style={styles.categIcon}>
            <View style={{
              height:'100%'
              ,width:'100%'
            }}>
            <Icons props={{iconName:iconNames.drinkIcon}}/>
            </View></View>
        </View>
        <View style={styles.categMiniBox}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Tea
          </Text>
          <View style={styles.categIcon}>
            <View style={{
              height:'100%'
              ,width:'100%'
            }}>
            <Icons props={{iconName:iconNames.teaIcon}}/>
            </View></View>
        </View>
        <View style={styles.categMiniBox}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Fruits
          </Text>
          <View style={styles.categIcon}>
            <View style={{
              height:'100%'
              ,width:'100%'
            }}>
            <Icons props={{iconName:iconNames.fruitIcon}}/>
            </View></View>
        </View>
      </ScrollView>
    </View>
    <View style={styles.trending}>
        <h4 style={{ margin: 0,paddingBottom:'20px' }}>Trending</h4>
        <FlatList
          data={props.categList}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => {
            return (
              <TouchableOpacity style={styles.item} 
              onPress={()=>{
                navigation.navigate('Details')
              }}
              
              >

                <View
                  style={{
                    borderBottom: "2px solid red",
                    height: "100px",
                    borderRadius: "15px",
                    paddingTop:"9%"
                  }}
                ></View>
              </TouchableOpacity>
            );
          }}
          flexDirection="true"
        />
      </View>
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
    paddingLeft:'10px',
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
    marginTop:'10px'
  },
  trending: {
    // marginTop:'5px',
    paddingLeft: "5px",
    // paddingTop: "15px",
    height:'42%  ',
    border:'2px solid red'
  },
  item: {
    border: "2px solid red",
    height: "200px",
    width: "150px",
    borderRadius: "15px",
    marginBottom: "20px",
    overflow: "hidden",
    backgroundColor:'white',
    marginLeft:'7%'

  },
});
export default Home;
