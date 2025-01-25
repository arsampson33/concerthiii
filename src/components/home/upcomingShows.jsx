import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import {
  Card,
  Heading,
  Avatar,
  AvatarImage,
  AvatarFallbackText,
  VStack,
  HStack,
  Box,
} from "@gluestack-ui/themed";

const UpcomingShows = () => {
  return (
    <Card>
      <Heading>Upcoming Shows</Heading>
      <Heading>See all shows</Heading>
      <ScrollView horizontal>
        <HStack space="md">
          <Card>
            <Image source={{ uri: "https://via.placeholder.com/100" }} style={styles.image} />
            <Text>Artist Name</Text>
            <Text>Date</Text>
            <Text>Venue</Text>
          </Card>
          <Card>
            <Image source={{ uri: "https://via.placeholder.com/100" }} style={styles.image} />
            <Text>Artist Name</Text>
            <Text>Date</Text>
            <Text>Venue</Text>
          </Card>
          <Card>
            <Image source={{ uri: "https://via.placeholder.com/100" }} style={styles.image} />
            <Text>Artist Name</Text>
            <Text>Date</Text>
            <Text>Venue</Text>
          </Card>
          <Card>
            <Image source={{ uri: "https://via.placeholder.com/100" }} style={styles.image} />
            <Text>Artist Name</Text>
            <Text>Date</Text>
            <Text>Venue</Text>
          </Card>
        </HStack>
      </ScrollView>
    </Card>
    
  );
};

const styles = StyleSheet.create({
    image: {
      width: 100,
      height: 100,
      borderRadius: 50, // Half of the width/height to make it circular
      marginRight: 20,
    }
  });

export default UpcomingShows;
