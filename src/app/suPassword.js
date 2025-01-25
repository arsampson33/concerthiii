import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import FormInput from "../components/formInput";
import FormButton from "../components/formButton";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";

export default function signUpPassword() {
  const router = useRouter();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4833A1" }}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>Create a password?</Text>
        <Text style={styles.paragraph}>
          We'd suggest something different, from everything else, but do what u
          do.
        </Text>
      </View>
      <View style={styles.input}>
        <FormInput
          labelValue={password}
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
          iconType="user"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          labelValue={passwordConfirm}
          onChangeText={(passwordConfirm) =>
            setPasswordConfirm(passwordConfirm)
          }
          placeholder="Confirm Password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.buttonContainer}>
        <FormButton buttonTitle={"Create Account"} location={"suPassword"} />
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
