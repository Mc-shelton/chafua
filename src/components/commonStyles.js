import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  main: {
    paddingTop:'10%',
    height: "100%",
    backgroundColor: "white",
    overflowX:'hidden'
  },
  buttons: {
    // border: "2px solid rgb(74, 4, 4)",
    borderWidth:1,
    borderColor:'rgb(74, 4, 4)',
    height: 45,
    width: 45,
    borderRadius: 10,
    borderStyle:'solid',
    alignItems: "center",
    justifyContent: "center",
    marginTop: -80,
        transform: [{ rotate: '45deg' }],
        // position: "fixed",
    // backgroundColor:'red',
    zIndex: 3,
    left: 20,
  },
  title: {
    textAlign: "center",
    //   marginTop: "1,
    fontSize: 20,
    // backgroundColor:'red',
    // position: "fixed",
    width: "100%",    backgroundColor:'red',
    height: 100,
    backgroundColor: "white",
    paddingTop: 25,
    zIndex: 2,
  },
  container: {
    // borderRadius: 15,
    // border: "2px solid rgb(74, 4, 4) ",
    borderWidth:1,
    borderColor:'rgb(74, 4, 4)',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  LButtons: {
    // border: "2px solid rgb(74, 4, 4)",

    borderWidth:1,
    borderColor:'rgb(74, 4, 4)',
    width: "90%",
    borderRadius: 10,
    height: 45,
    paddingLeft: 10,
    marginTop: 15,
  },
  bText: {
    fontSize: 18,
    fontWeight: "bold",
    
  },
  iText: {
    fontSize: 15,
  },
  paddedButton: {
    backgroundColor: "rgb(74, 4, 4)",
    marginTop: 20,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    // borderRadius: 10,
    marginBottom: 30,
  },

  cartItem: {
    // border: "2px solid rgb(74, 4, 4)",

    borderWidth:2,
    borderColor:'rgb(74, 4, 4)',
    // borderRadius: 20,
    marginTop: 20,
    padding: 20,
    overflow: "hidden",
  },
});
