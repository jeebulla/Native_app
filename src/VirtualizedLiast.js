import { Text, View, SafeAreaView, VirtualizedList } from "react-native";
import Styles from "./AppStyles";

const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

const getItemCount = (_data) => 50;

const Item = ({ title, id }) => (
  <View style={Styles.item}>
    <Text style={Styles.title}>{title}</Text>
    <Text style={Styles.id}>{id}</Text>
  </View>
);

const VirtualizedListExample = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <VirtualizedList
        showsVerticalScrollIndicator={false}
        initialNumToRender={4}
        renderItem={({ item }) => <Item id={item.id} title={item.title} />}
        keyExtractor={(item) => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
};

export default VirtualizedListExample;
