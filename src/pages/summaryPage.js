import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import firebase from "../utils/firebase";
import { toMoney } from "../utils/strings";

const Summary = ({ navigation, route }) => {
  const { sueldo, meses, interes, prestamo } = route.params;
  const interesTotal = prestamo * interes;
  const IVA = 0.16;
  const IVATotal = prestamo * IVA;
  let cantidadxMes = +prestamo + +interesTotal + +IVATotal;
  cantidadxMes = +cantidadxMes / +meses;

  const user = firebase.auth().currentUser;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Correo del usuario:</Text>
      <View style={styles.valueBox}>
        <Text style={styles.values}>{user?.email}</Text>
      </View>
      <Text style={styles.label}>Cantidad solicitada:</Text>
      <View style={styles.valueBox}>
        <Text style={styles.values}>{toMoney(+prestamo)}</Text>
      </View>
      <Text style={styles.label}>Interés:</Text>
      <View style={styles.valueBox}>
        <Text style={styles.values}>{toMoney(+interesTotal)}</Text>
      </View>
      <Text style={styles.label}>IVA:</Text>
      <View style={styles.valueBox}>
        <Text style={styles.values}>{toMoney(+IVATotal)}</Text>
      </View>
      <Text style={styles.label}>Pago mensual:</Text>
      <View style={styles.valueBox}>
      <Text style={styles.values}>{toMoney(+cantidadxMes)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10
  },
  values: {
    fontSize: 18,
    textAlign: 'right'
  },
  valueBox: {
    borderBottomColor: '#0057EE',
    borderBottomWidth: 2,
    marginBottom: 25,
  }
});

export default Summary;
