import React, { useState, useEffect } from "react";
import NextLast from "./nextLast";
import Stat from "./stat";
import { View } from "react-native";

export default function Hiiilights() {
  return (
    <View>
      <NextLast />
      <Stat />
    </View>
  );
}
