import { StyleSheet, Dimensions } from "react-native";
const { width, height, fontScale } = Dimensions.get("window");

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "peru",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    margin: 0,
    padding: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  textStyle: {
    color: "blue",
    fontSize: 70,
  },
  // content: {
  //   flexDirection: "row",
  //   width: width * 0.95,
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   padding: 5,
  //   margin: 5,
  // },
  // contents: {
  //   backgroundColor: "lightblue",
  //   width: width * 1,
  //   padding: 10,
  // },
  user: {
    width: width * 0.75,
    borderRadius: 10,
    padding: 7,
    backgroundColor: "#ccc",
  },
  userName: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
  time: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
  timeStamp: {
    width: width * 0.15,
    backgroundColor: "#ffc",
    padding: 5,
    borderRadius: 10,
  },
  Date: {
    textAlign: "center",
    color: "blue",
    fontSize: fontScale * 25,
  },
  Month: {
    textAlign: "center",
    color: "blue",
  },
  item: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10,
    width: width * 0.9,
    height: 100,
  },
  title: {
    fontSize: 25,
    marginLeft: 5,
  },
  id: {
    fontSize: 23,
  },
  header: {
    fontSize: 30,
    backgroundColor: "skyblue",
    padding: 10,
    textAlign: "center",
    marginHorizontal: 0,
    width: width * 1,
  },
  infoTitle: {
    fontSize: 18,
    textAlign: "center",
    padding: 10,
    lineHeight: 20,
  },
  button: {
    backgroundColor: "lightgreen",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: width * 0.5,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default Styles;
