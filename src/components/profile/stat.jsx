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

export default function Stat() {
  return (
    <Center>
        <Pressable $hover-bg="$primary400">
          <Card siz="md">
            <Box>
              <Heading size="lg">Concerts Tracked</Heading>
              <Center>
                <Heading size="lg">25</Heading>
              </Center>
            </Box>
          </Card>
        </Pressable>
    </Center>
  );
}
