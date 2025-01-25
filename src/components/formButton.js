import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const FormButton = ({ buttonTitle, location, ...rest }) => {
  const router = useRouter();
  //Navigates to the location passed in as a prop
  const navigateTo = () => {
    router.push(`/${location}`);
    console.log(`Navigating to ${location}`);
  };
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={navigateTo}>
      {/* displays the button title passed in as a prop */}
      <Text style={styles.buttonText}>{buttonTitle}</Text> 
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    height: 50,
    backgroundColor: "#2e64e5",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
