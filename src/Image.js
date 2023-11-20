import { Text, View, SafeAreaView, Image } from "react-native";
import Styles from "./AppStyles";

const ImageExample = () => {
  return (
    <SafeAreaView>
      <Image
        source={require("../assets/favicon.png")}
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
        resizeMethod="resize"
      />
    </SafeAreaView>
  );
};

export default ImageExample;
