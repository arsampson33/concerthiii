// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import FormInput from "../src/components/formInput";
// import FormButton from "../src/components/formButton";
// import { useState } from "react";
// import { Stack, useRouter } from "expo-router";

// export default function signUpName() {
//   const router = useRouter();
//   const [name, setName] = useState();

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#4833A1" }}>
//       <View style={styles.textContainer}>
//         <Text style={styles.header}>What's ya name?</Text>
//         <Text style={styles.paragraph}>Ya real name not ya stripper name</Text>
//       </View>
//       <View style={styles.input}>
//         <FormInput
//           labelValue={name}
//           onChangeText={(name) => setName(name)}
//           placeholder="What do they call you"
//           iconType="user"
//           autoCapitalize="none"
//           autoCorrect={false}
//         />
//       </View>
//       <View style={styles.buttonContainer}>
//         <FormButton
//             buttonTitle={"Next"}
//             location={"suEmail"} />
//       </View>
//     </SafeAreaView>
//   );
// }

// styles = StyleSheet.create({
//   header: {
//     fontSize: 40,
//     color: "orange",
//     fontWeight: "bold",
//   },
//   paragraph: {
//     fontSize: 20,
//     color: "orange",
//   },
//   textContainer: {
//     flex: 0.2,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 40,
//   },
//   input: {
//     alignItems: "center",
//   },
//   buttonContainer: {
//     position: "absolute",
//     bottom: 50,
//     width: "50%",
//     alignSelf: "center",
//   },
// });
