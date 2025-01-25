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
import { Heading } from "@gluestack-ui/themed";
import UpcomingShows from "../../../components/home/upcomingShows";
import PostsList from "../../../components/posts/postList";
// Define the HOME component

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <UpcomingShows />
          <Heading> Popular Posts</Heading>
          <PostsList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

