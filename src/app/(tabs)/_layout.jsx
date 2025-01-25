import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, Redirect, Tabs } from "expo-router";
import { Pressable, useColorScheme, View, StyleSheet } from "react-native";

function TabBarIcon({ name, color, size }) {
  return <MaterialCommunityIcons name={name} color={color} size={size} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === "dark" ? "#FFF" : "#000", // Adjusts color based on theme
        tabBarInactiveTintColor: colorScheme === "dark" ? "#686868" : "#B0B0B0", // Lighter grey for inactive icons
        tabBarStyle: {
          // Modern styling for the tabBar
          backgroundColor: colorScheme === "dark" ? "#333333" : "#FFFFFF",
          borderTopColor: "transparent", // Hides the top border of the tabBar
          elevation: 0, // For Android shadow
          shadowOpacity: 0, // For iOS shadow
        },
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home-outline" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="magnify" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "Add",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View style={styles.addButton}>
              <TabBarIcon name="plus" color="white" size={30} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="message-text-outline" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="account-circle-outline" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  addButton: {
    width: 60, // Slightly larger diameter for the button
    height: 60, // Slightly larger diameter for the button
    borderRadius: 30, // Perfect circle
    backgroundColor: "#FFA500", // Orange color for the button
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30, // Elevated position
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Shadow for Android
  },
});
