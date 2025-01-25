// import { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   SafeAreaView,
//   StyleSheet,
//   Image,
// } from "react-native";
// import FormInput from "../components/formInput";
// import FormButton from "../components/formButton";
// import { Stack, useRouter } from "expo-router";

// const signInPage = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const navigateToProfile = () => {
//     router.replace(`/profile`);
//     console.log("Navigating to profile");
//   };
//   return (
//     <View style={{ flex: 1, backgroundColor: "#4833A1" }}>
//       <Stack.Screen
//         options={{
//           headerShown: false,
//           headerShadowVisible: false,
//           headerTitle: "",
//           headerTransparent: true,
//         }}
//       />
//       <View style={styles.container}>
//         <Text style={styles.text}>Sign In</Text>
//         <FormInput
//           labelValue={email}
//           onChangeText={(userEmail) => setEmail(userEmail)}
//           placeholder="Email"
//           iconType="user"
//           keyboardType="email-address"
//           autoCapitalize="none"
//           autoCorrect={false}
//         />
//         <FormInput
//           labelValue={password}
//           onChangeText={(userPassword) => setPassword(userPassword)}
//           placeholder="Password"
//           iconType="user"
//           autoCapitalize="none"
//           autoCorrect={false}
//           secureTextEntry={true}
//         />
//         <FormButton buttonTitle={"Sign In"} onPress={navigateToProfile} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     marginTop: "50%",
//     // backgroundColor: "purple",
//   },
//   logo: {
//     height: 150,
//     width: 150,
//     resizeMode: "cover",
//   },
//   text: {
//     fontSize: 28,
//     marginBottom: 10,
//     color: "#fff",
//   },
// });

// export default signInPage;
