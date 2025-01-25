import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  Card,
  Heading,
  Avatar,
  AvatarImage,
  AvatarFallbackText,
  HStack,
  Box,
  Center,
  Pressable,
} from "@gluestack-ui/themed";

export default function NextLast() {
  return (
    <Center>
      <HStack space="md">
        <Pressable
         $hover-bg="$primary400">
          <Card maxWidth={360}>
            <Box>
              <Heading size="lg">Next Concert</Heading>
              <Text>Artist: Drake</Text>
              <Text>Date: 12/25/2021</Text>
              <Text>Location: New York</Text>
            </Box>
          </Card>
        </Pressable>
        <Pressable>
          <Card maxWidth={360}>
            <Box>
              <Heading size="lg">Last Concert</Heading>
              <Text>Artist: Drake</Text>
              <Text>Date: 12/25/2021</Text>
              <Text>Location: New York</Text>
            </Box>
          </Card>
        </Pressable>
      </HStack>
    </Center>
  );
}
