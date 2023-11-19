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
];

const Najeeb = ({ title, id }) => {
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
        data={DATA}
        renderItem={({ item }) => <Najeeb title={item.title} id={item.id} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default List;
