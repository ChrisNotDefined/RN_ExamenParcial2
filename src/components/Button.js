import React from "react";
import {StyleSheet, Text, TouchableOpacity } from "react-native";

import GradientButton from 'react-native-gradient-buttons';

const Button = ({ onPress, content }) => {
  return (
    <GradientButton style={styles.buttonBox} onPressAction={onPress} blueMarine impact>
      <Text style={styles.buttonText}>{content}</Text>
    </GradientButton>
  );
};


const styles = StyleSheet.create({
  buttonBox: {
    borderColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: "white",
    fontWeight: 'bold'
  }
})

export default Button;
