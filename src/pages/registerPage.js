import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { useState } from "react/cjs/react.development";
import { validateEmail } from "../utils/validation";
import firebase from "../utils/firebase";
import Button from "../components/Button";

const Register = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [dataError, setDataError] = useState({});

  const register = () => {
    let error = {};

    if (!userName || !password || !repeatPassword) {
      if (!userName) error.userName = true;
      if (!password) error.password = true;
      if (!repeatPassword) error.repeatPassword = true;
    } else if (!validateEmail(userName)) {
      error.userName = true;
    } else if (password !== repeatPassword) {
      error.password = true;
      error.repeatPassword = true;
    } else if (password.length < 6) {
      error.password = true;
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(userName, password)
        .then(() => {
          navigation.navigate("Quotation");
        })
        .catch(() => {
          setDataError({
            userName: true,
            password: true,
            repeatPassword: true,
          });
        });
    }
    setDataError(error);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={userName}
        onChangeText={setUserName}
        placeholder="Email"
        style={styles.input1}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input1}
      />
      <TextInput
        value={repeatPassword}
        onChangeText={setRepeatPassword}
        placeholder="Repeat password"
        secureTextEntry={true}
        style={styles.input1}
      />
      <Button content="Registrarse" onPress={() => register()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  input1: {
    borderColor: "#0057EE",
    padding: 5,
    borderRadius: 4,
    borderWidth: 2,
    margin: 6,
    color: "black",
  },
});

export default Register;
