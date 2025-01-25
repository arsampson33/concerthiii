import { Link, Stack } from "expo-router";

export default function searchStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Search" }} />
    </Stack>
  );
}
