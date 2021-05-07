import React from "react";
import { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { validateEmail } from "../utils/validation";
import firebase from "../utils/firebase";
import Button from "../components/Button";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataError, setDataError] = useState({});

  const login = () => {
    let error = {};
    if (!email || !password) {
      if (!email) error.email = true;
      if (!password) error.password = true;
    } else if (!validateEmail(email)) {
      error.email = true;
    } else {
      console.log("Form Valid");
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
          navigation.navigate("Quotation");
        })
        .catch(() => {
          setDataError({
            email: true,
            password: true,
          });
        });
    }
    setDataError(error);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>¡Bienvenido!</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
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
      <View>
        <View style={styles.boton1}>
          <Button
            onPress={() => {
              login();
              //navigation.navigate("Quotation");
            }}
            content="Iniciar Sesión"
          />
        </View>
        <View style={styles.boton2}>
          <Button
            onPress={() => {
              navigation.navigate("Register");
            }}
            content="Registrarse"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  texto: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: "center",
    color: "#0057EE",
  },
  input1: {
    color: "black",
    borderColor: "#0057EE",
    margin: 6,
    padding: 5,
    borderRadius: 4,
    borderWidth: 2,
  },
  incorrect: {
    borderBottomColor: "red",
  },
  boton1: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
    color: 'white',
    width: "100%",
  },
  boton2: {
    justifyContent: "center",
    alignItems: "center",
    color: 'white',
    width: "100%",
  },
});

export default Login;
