import { Link, Stack } from "expo-router";

export default function MessageStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Message" }} />
    </Stack>
  );
}
