import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { windowHeight, windowWidth } from "../../utils/dimensions";

const FormInput = ({ labelValue, placeholder, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholder}
        value={labelValue}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: "80%",
    height: windowHeight / 15,
    borderColor: "#ccc",
    borderRadius: 100,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FormInput;
