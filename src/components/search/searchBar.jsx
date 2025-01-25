import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
InputField,
  Input,
} from "@gluestack-ui/themed";

export default function SearchBar() {
  return (
      <Input
        variant="rounded"
        size="lg"
        isDisabled={false}
      >
        <InputField placeholder="Search" />
      </Input>
  );
}
