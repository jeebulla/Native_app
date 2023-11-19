import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Styles from "./src/AppStyles.js";
import Todoist from "./src/Todoist.js";
import List from "./src/List.js";
import SectionListExample from "./src/SectionList.js";
import VirtualizedListExample from "./src/VirtualizedLiast.js";
import ImageExample from "./src/Image.js";

export default function App() {
  return (
    <View style={Styles.container}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      {/* <Todoist date="16" month="Nov" user="Yusuf Muhammad Najeeb" />
        <Todoist date="16" month="Nov" user="Yusuf Muhammad Najeeb" />
        <Todoist date="16" month="Nov" user="Yusuf Muhammad Najeeb" />
        <Todoist date="16" month="Nov" user="Yusuf Muhammad Najeeb" />
        <Todoist date="16" month="Nov" user="Yusuf Muhammad Najeeb" />
        <Todoist date="16" month="Nov" user="Yusuf Muhammad Najeeb" />
        <Todoist date="17" month="Nov" user="David Ezekiel" />
        <Todoist date="18" month="Dec" user="Gladys Luke" />
        <Todoist date="22" month="Jan" user="John Doe" />
        <Todoist date="3" month="Mar" user="Edet Hilary" />
        <Todoist date="3" month="Mar" user="Edet Hilary" />
        <Todoist date="3" month="Mar" user="Edet Hilary" />
        <Todoist date="3" month="Mar" user="Edet Hilary" />
        <Todoist date="3" month="Mar" user="Edet Hilary" />*/}
      {/* </ScrollView> */}
      {/* <List /> */}
      {/* <SectionListExample /> */}
      {/* <VirtualizedListExample /> */}
      <ImageExample />
    </View>
  );
}
