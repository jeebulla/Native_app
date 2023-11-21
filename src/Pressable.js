import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  Dimensions,
  Pressable,
} from "react-native";
import Styles from "./AppStyles";
const menuItemsToDisplay = [
  {
    title: "Main",
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

const PressableExample = () => {
  const renderItem = ({ item }) => (
    <View style={Styles.item}>
      <Text style={Styles.title}>{item}</Text>
    </View>
  );
  const renderSectionHeader = ({ section: { title } }) => {
    return <Text style={Styles.header}>{title}</Text>;
  };
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <View style={Styles.contents}>
      {!showMenu && (
        <Text style={Styles.infoTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          architecto dolorem! Eum totam, provident inventore eos ratione
          corporis aliquid amet culpa enim? Doloremque, aliquid?
        </Text>
      )}
      <Pressable
        style={Styles.button}
        onPress={() => {
          setShowMenu(!showMenu);
        }}
      >
        <Text style={Styles.buttonText}>{showMenu ? "Home" : "View Menu"}</Text>
      </Pressable>
      {showMenu && (
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={(item, index) => item + index}
        />
      )}
    </View>
  );
};

export default PressableExample;
