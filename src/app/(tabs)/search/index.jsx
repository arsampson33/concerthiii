// Import necessary modules
import React from "react";
import { Stack } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import SearchBar from "../../../components/search/searchBar";
export default function Search() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerShadowVisible: false,
          headerTitle: "",
          headerTransparent: true,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <SearchBar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Define the styles
const styles = StyleSheet.create({});
