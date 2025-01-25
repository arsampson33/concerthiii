import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import FormInput from "../components/formInput";
import FormButton from "../components/formButton";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";

export default function signUpEmail() {
  const router = useRouter();
  const [email, setEmail] = useState();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4833A1" }}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>What's ya Email?</Text>
        <Text style={styles.paragraph}>
          Do people still check these anymore?
        </Text>
      </View>
      <View style={styles.input}>
        <FormInput
          labelValue={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="Email Address"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.buttonContainer}>
        <FormButton buttonTitle={"Next"} location={"suPassword"} />
      </View>
    </SafeAreaView>
  );
}

styles = StyleSheet.create({
  header: {
    fontSize: 40,
    color: "orange",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 20,
    color: "orange",
  },
  textContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  input: {
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "50%",
    alignSelf: "center",
  },
});
