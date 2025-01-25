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
import ProfileHeader from "../../../components/profile/profileHeader";
import ProfileTabs from "../../../components/profile/profileTabs";
import ConcertHistory from "../../../components/profile/concertHistory";
import Favorites from "../../../components/profile/favorites";
// Define the Profile component

const Profile = () => {
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
          <ProfileHeader />
          <ProfileTabs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Define the styles
const styles = StyleSheet.create({});

export default Profile;
