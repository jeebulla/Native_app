import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
const { width, height, fontScale } = Dimensions.get("window");
const ImageExample = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ImageBackground
        source={require("../assets/favicon.png")}
        style={styles.containerImage}
        resizeMode="contain"
      >
        <Image
          style={styles.image}
          source={require("../assets/Picture1.jpg")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel="Picture1 Delicious Fish and Chips"
        />
        <Image
          style={styles.image}
          source={require("../assets/Picture2.jpg")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel="Picture1 Delicious Fish and Chips"
        />
        <Image
          style={styles.image}
          source={require("../assets/Picture3.jpg")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel="Picture1 Delicious Fish and Chips"
        />
        <Image
          style={styles.image}
          source={require("../assets/Picture4.jpg")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel="Picture1 Delicious Fish and Chips"
        />
        <Image
          style={styles.image}
          source={require("../assets/Picture5.jpg")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel="Picture1 Delicious Fish and Chips"
        />
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
  },
  image: {
    alignSelf: "center",
    width: width * 0.9,
    borderWidth: 3,
    borderColor: "goldenrod",
    margin: 10,
    borderRadius: 10,
    // flexDirection: "row",
    // height: 100,
  },
  containerImage: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ImageExample;
