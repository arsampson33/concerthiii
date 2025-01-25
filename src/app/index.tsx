import React, { useCallback, useEffect } from "react";
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Text,
} from "react-native";
// import { images } from "../assets/images";
import { useRouter } from "expo-router";
import { windowHeight, windowWidth } from "../../utils/dimensions";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

const { width, height } = Dimensions.get("window");
const SplashPage = () => {
  const router = useRouter();
  const [loaded, error] = useFonts({
    'BowlbyOne-Regular': require('../../assets/fonts/BowlbyOne-Regular.ttf'),
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (error) {
    return null;
  }

  const navigateToSignIn = () => {
    router.push(`/(tabs)`);
    console.log("Navigating to Sign In");
  };

  const navigateToSignUp = () => {
    console.log("Navigating to Sign Up");
  };

  // const [fontsLoaded] = useFonts({
  //   "Electric-Kick": require("../assets/fonts/Electric-Kick.ttf"),
  // });

  return (
    <View style={styles.container}  onLayout={onLayoutRootView}>
      <ImageBackground
        source={require("../assets/images/stage-background.jpg")}
        resizeMode="cover"
        style={[styles.backgroundImage, { width, height }]}
      >
        <View style={styles.container}>
          <View style={[styles.welcomeContainer]} >
            <Text style={[styles.welcomeText, { fontFamily: "BowlbyOne-Regular" }]}>Concert Hiii</Text>
          </View>
          <View style={styles.sloganContainer}>
            <Text style={styles.slogan}>Where the concert never ends</Text>
          </View>
          {/* Sign In and Sign Up Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={navigateToSignUp}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "blue" }]}
              onPress={navigateToSignIn}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 70,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 20,
    fontFamily:"BowlbyOne-Regular",
  },
  sloganContainer:{
    flex: .1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',
  },
  slogan: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  button: {
    backgroundColor: "purple",
    padding: 15,
    width: 150,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  images: {
    height: 300,
    width: 300,
    borderRadius: 360,
    alignSelf: "center",
    marginBottom: 100,
  },
});
export default SplashPage;
