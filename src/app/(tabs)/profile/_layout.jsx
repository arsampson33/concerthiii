import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";

export default function ProfileStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Profile" }} />
    </Stack>
  );
}
