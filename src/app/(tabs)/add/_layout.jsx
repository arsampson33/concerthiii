import { Link, Stack } from "expo-router";

export default function AddStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Add" }} />
    </Stack>
  );
}
