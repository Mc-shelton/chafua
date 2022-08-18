import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  main: {
    height: "100%",
    backgroundColor: "white",
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
    zIndex: "3",
    left: "20px",
  },
  container: {
    borderRadius: "15px",
    border: "2px solid rgb(74, 4, 4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  LButtons: {
    border: "2px solid rgb(74, 4, 4)",
    width: "90%",
    borderRadius: "15px",
    height: "50px",
    paddingLeft: "10px",
    marginTop: "15px",
  },
  bText: {
    fontSize: "18px",
    fontWeight: "bold",
    
  },
  iText: {
    fontSize: "18px",
  },
  title: {
    textAlign: "center",
    //   marginTop: "-1px",
    fontSize: "20px",
    position: "fixed",
    width: "100%",
    height: "100px",
    backgroundColor: "white",
    paddingTop: "45px",
    zIndex: "2",
  },
  paddedButton: {
    backgroundColor: "rgb(74, 4, 4)",
    marginTop: "20px",
    padding: "10px",
    paddingLeft: "30px",
    paddingRight: "30px",
    borderRadius: "10px",
    marginBottom: "30px",
  },

  cartItem: {
    border: "2px solid rgb(74, 4, 4)",
    borderRadius: "20px",
    marginTop: "20px",
    padding: "20px",
    overflow: "hidden",
  },
});
