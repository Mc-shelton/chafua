import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  main: {
    height: "100%",
    backgroundColor: "white",
    overflowX:'hidden'
  },
  buttons: {
    // border: "2px solid rgb(74, 4, 4)",

    borderWidth:0.5,
    borderColor:'rgb(74, 4, 4)',
    height: 45,
    width: 45,
    borderRadius: 10,
    borderStyle:'solid',
    transform: "rotate(45deg)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    position: "fixed",
    zIndex: "3",
    left: 20,
  },
  container: {
    // borderRadius: 15,
    // border: "2px solid rgb(74, 4, 4) ",
    borderWidth:2,
    borderColor:'rgb(74, 4, 4)',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  LButtons: {
    // border: "2px solid rgb(74, 4, 4)",

    borderWidth:2,
    borderColor:'rgb(74, 4, 4)',
    width: "90%",
    // borderRadius: 15,
    height: 50,
    paddingLeft: 10,
    marginTop: 15,
  },
  bText: {
    fontSize: 18,
    fontWeight: "bold",
    
  },
  iText: {
    fontSize: 18,
  },
  title: {
    textAlign: "center",
    //   marginTop: "1,
    fontSize: 20,
    position: "fixed",
    width: "100%",
    height: 100,
    backgroundColor: "white",
    paddingTop: 45,
    zIndex: "2",
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
