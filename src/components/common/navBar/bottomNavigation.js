import { Tabs } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'; // Or any other icon library


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}


function MyTabs() {
  return (
    <Ta
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-search' : 'ios-search-outline';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline';
          } else if (route.name === 'Add') {
            return (
              <View style={styles.addButton}>
                <Ionicons name="ios-add" size={size + 10} color={color} />
              </View>
            );
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Search" component={HomeScreen} />
      <Tabs.Screen name="Messages" component={HomeScreen} />
      <Tabs.Screen name="Add" component={HomeScreen} options={{ tabBarLabel: () => null }} />
      <Tabs.Screen name="Profile" component={HomeScreen} />
    </Ta>
  );
}

const styles = StyleSheet.create({
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Adjust based on your tab bar's height
  },
});

export default MyTabs;
