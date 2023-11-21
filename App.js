import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Styles from "./src/AppStyles.js";
import Todoist from "./src/Todoist.js";
import List from "./src/List.js";
import SectionListExample from "./src/SectionList.js";
import VirtualizedListExample from "./src/VirtualizedLiast.js";
import ImageExample from "./src/Image.js";
import FeedbackForm from "./src/TextInput.js";
import PressableExample from "./src/Pressable.js";
import LittleLemon from "./src/LittleLemon.js";

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <LittleLemon />
    </SafeAreaView>
  );
}
