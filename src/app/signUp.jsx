import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import FormInput from "../components/formInput";
import FormButton from "../components/formButton";
import { Stack, useRouter } from "expo-router";

const signInPage = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={{ flex: 1, backgroundColor: "#4833A1" }}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerShadowVisible: false,
          headerTitle: "",
          headerTransparent: true,
        }}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Sign Up</Text>
        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholder="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          labelValue={username}
          onChangeText={(username) => setUsername(username)}
          placeholder="Username"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholder="Password"
          iconType="user"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <FormInput
          labelValue={password}
          //   onChangeText={(userPassword) => setPassword(userPassword)}
          placeholder="Confirm Password"
          iconType="user"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <FormButton buttonTitle={"Sign In"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: "50%",
    // backgroundColor: "purple",
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: "cover",
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: "#fff",
  },
});

export default signInPage;
