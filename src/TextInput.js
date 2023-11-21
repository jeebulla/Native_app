import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const { width, height, fontScale } = Dimensions.get("window");

const FeedbackForm = () => {
  const [firstName, onChangeFirstName] = React.useState("");
  const [lastName, onChangeLastName] = React.useState("");
  const [message, onChangeMessage] = React.useState("");
  const [phoneNumber, onChangePhoneNumber] = React.useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headerText}>How was your visit to TIIDELab</Text>
        <Text style={styles.infoText}>
          This is our first native app where we created a feedback form.
        </Text>
        <Text style={styles.infoText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ipsa
          possimus. Dolore, consequuntur laborum! Cum deleniti atque autem
          dignissimos ipsa.
        </Text>
        <TextInput
          //   secureTextEntry={true}
          value={firstName}
          onChangeText={onChangeFirstName}
          style={styles.input}
          placeholder="First Name"
        />
        <TextInput
          value={lastName}
          onChangeText={onChangeLastName}
          style={styles.input}
          placeholder="Last Name"
        />
        <TextInput
          value={phoneNumber}
          onChangeText={onChangePhoneNumber}
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
        <TextInput
          value={message}
          onChangeText={onChangeMessage}
          style={styles.messageInput}
          placeholder="Message"
          multiline={true}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495e57",
    padding: 35,
  },
  headerText: {
    color: "#fff",
    textAlign: "left",
    fontSize: 20,
    marginVertical: 20,
  },
  infoText: {
    color: "#fff",
    textAlign: "left",
    fontSize: 15,
    marginVertical: 5,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    marginVertical: 12,
    padding: 5,
    borderRadius: 3,
    fontSize: 15,
  },
  messageInput: {
    height: height * 0.2,
    backgroundColor: "white",
    marginVertical: 12,
    padding: 5,
    borderRadius: 3,
    fontSize: 15,
    textAlignVertical: "top",
  },
});

export default FeedbackForm;
