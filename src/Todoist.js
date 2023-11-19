import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Styles from "./AppStyles";

const Todoist = ({ date, month, user }) => {
  return (
    <SafeAreaView style={Styles.content}>
      <View style={Styles.timeStamp}>
        <Text style={Styles.Date}>{date}</Text>
        <Text style={Styles.Month}>{month}</Text>
      </View>
      <View style={Styles.user}>
        <Text style={Styles.time}>10:00 am - 11:00 am</Text>
        <Text style={Styles.userName}>{user}</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </View>
    </SafeAreaView>
  );
};

export default Todoist;
