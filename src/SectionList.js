import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
const { width, height, fontScale } = Dimensions.get("window");
const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
  {
    title: "Seafood",
    data: ["Lobster", "Baked Clams", "Shrimp", "Crab", "Fish"],
  },
];

const SectionListExample = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={Styles.item}>
            <Text style={Styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={Styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    width: width * 0.9,
  },
  item: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: 24,
  },
});

export default SectionListExample;
