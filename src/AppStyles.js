import { StyleSheet, Dimensions } from "react-native";
const { width, height, fontScale } = Dimensions.get("window");

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    margin: 0,
    marginHorizontal: 0,
  },
  textStyle: {
    color: "blue",
    fontSize: 70,
  },
  content: {
    flexDirection: "row",
    width: width * 0.95,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    margin: 5,
  },
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: width * 0.9,
    height: 150,
  },
  title: {
    fontSize: 25,
    marginLeft: 5,
  },
  id: {
    fontSize: 23,
  },
});

export default Styles;
