import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { useEffect } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import Button from "../components/Button";

const Quotation = ({ navigation }) => {
  const [prestamo, setPrestamo] = useState(null);
  const [sueldo, setSueldo] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [options, setOptions] = useState([
    {
      label: "3 meses",
      value: 3,
    },
    {
      label: "6 meses",
      value: 6,
    },
  ]);

  useEffect(() => {
    let value = +sueldo;
    let newOptions = [];
    if (value >= 0 && value <= 10000) {
      setInteres(0.02);
      newOptions = [
        { label: "3 meses", value: 3 },
        { label: "6 meses", value: 6 },
      ];
    } else if (value > 10000 && value <= 20000) {
      setInteres(0.04);
      newOptions = [
        { label: "3 meses", value: 3 },
        { label: "6 meses", value: 6 },
        { label: "9 meses", value: 9 },
      ];
    } else if (value > 20000) {
      setInteres(0.06);
      newOptions = [
        { label: "3 meses", value: 3 },
        { label: "6 meses", value: 6 },
        { label: "9 meses", value: 9 },
        { label: "12 meses", value: 12 },
        { label: "24 meses", value: 24 },
      ];
    }
    setOptions(newOptions);
    setMeses(3);
  }, [sueldo]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input1}
        value={prestamo}
        onChangeText={setPrestamo}
        placeholder="Prestamo"
      />
      <TextInput
        style={styles.input1}
        value={sueldo}
        onChangeText={setSueldo}
        placeholder="Sueldo"
      />
      <View style={styles.viewPicker}>
        <Picker
          style={styles.picker}
          selectedValue={meses}
          onValueChange={(itemValue, itemIndex) => {
            setMeses(itemValue);
          }}
        >
          {options.map((opt, index) => {
            return (
              <Picker.Item
                key={`${opt}${index}`}
                label={opt.label}
                value={opt.value}
              />
            );
          })}
        </Picker>
      </View>
      <View style={styles.boton}>
        <Button
          content="Calcular"
          onPress={() => {
            navigation.navigate("Summary", {
              interes,
              meses,
              sueldo,
              prestamo,
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  boton: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
    color: "white",
    width: "100%",
  },
  picker: {
    color: "#0057EE",
  },
  input1: {
    borderColor: "#0057EE",
    padding: 5,
    borderRadius: 4,
    borderWidth: 2,
    margin: 6,
    color: "black",
  },
  viewPicker: {
    margin: 6,
    borderColor: "#0057EE",
    borderWidth: 4,
    borderRadius: 5,
  },
});

export default Quotation;
