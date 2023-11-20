import { Text, View, FlatList, SafeAreaView } from "react-native";
import Styles from "./AppStyles";

const DATA = [
  { title: "Family", id: 1 },
  {
    title: "Friends",
    id: 2,
  },
  {
    title: "Work",
    id: 3,
  },
  {
    title: "School",
    id: 4,
  },
  {
    title: "Others",
    id: 5,
  },
  {
    title: "Family-friends",
    id: 6,
  },
];

const Item = ({ title, id }) => {
  return (
    <View style={Styles.item}>
      <Text style={Styles.id}>{id}</Text>
      <Text style={Styles.title}>{title}</Text>
    </View>
  );
};

const List = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} id={item.id} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default List;
