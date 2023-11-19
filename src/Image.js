import { Text, View, SafeAreaView, Image } from "react-native";
import Styles from "./AppStyles";

const ImageExample = () => {
  return (
    <SafeAreaView>
      <Image
        source={require("../assets/favicon.png")}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
        resizeMethod="scale"
      />
    </SafeAreaView>
  );
};

export default ImageExample;
