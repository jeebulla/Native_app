import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";
const { width, height, fontScale } = Dimensions.get("window");
const LittleLemon = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showForm, setShowForm] = React.useState(true);
  return (
    <ScrollView keyboardDismissMode="on-drag" style={styles.contents}>
      <View style={styles.header}>
        <Text style={styles.headerText} includeFontPadding={false}>
          Little Lemon App
        </Text>
      </View>

      <View style={styles.formContainer}>
        <View>
          <Pressable onPress={() => setShowForm(!showForm)}>
            <Text style={styles.welcomeText}>
              {showForm ? "Welcome to Little Lemon" : "You are logged in"}
            </Text>
          </Pressable>
        </View>
        {showForm && (
          <View style={styles.form}>
            <Text style={styles.infoText}>Login to continue</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              placeholder="example@gmail.com"
              keyboardType="email"
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              placeholder="Enter Password"
              secureTextEntry={true}
            />
            <Pressable
              style={styles.button}
              onPress={() => setShowForm(!showForm)}
            >
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </View>
        )}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          All rights reserved. Little Lemon 2023
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contents: {
    width: width * 1,
    padding: 0,
  },
  header: {
    backgroundColor: "peru",
    padding: 30,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    alignSelf: "center",
    letterSpacing: 0.4,
    textShadowColor: "#f4f4f4",
    textShadowRadius: 5,
    textShadowOffset: { width: 1.3, height: 0.5 },
  },
  formContainer: {
    width: width * 1,
    height: height * 0.8,
    backgroundColor: "#222",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  form: {
    alignItems: "center",
  },

  input: {
    backgroundColor: "#f7f7f7",
    width: width * 0.75,
    margin: 15,
    padding: 12,
    borderRadius: 4,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    alignSelf: "center",
    color: "white",
    marginVertical: 15,
    marginTop: 60,
  },
  infoText: {
    fontSize: 20,
    color: "white",
  },
  button: {
    backgroundColor: "peru",
    padding: 15,
    margin: 10,
    borderRadius: 5,
    width: width * 0.3,
  },
  buttonText: {
    color: "#222",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default LittleLemon;
