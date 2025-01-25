import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import ConcertHistory from './concertHistory'
import PostsList from "../posts/postList";
import NextLast from './nextLast'
import ConcertLog from "../concertLog/concertLog";
import Hiiilights from "./hiiilights";
import ConcertItem from "../concertLog/concertItem";
const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("Posts");
  const [tabsVisible, setTabsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const handleScroll = (event) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    if (currentScrollY > lastScrollY) {
      setTabsVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setTabsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  const FeedContent = () => (
    <View style={styles.contentContainer}>
      <Text>Feed Content</Text>
    </View>
  );

  const HighlightsContent = () => (
    <View style={styles.contentContainer}>
      <Text>Highlights Content</Text>
    </View>
  );

  const PostsContent = () => (
    <View style={styles.contentContainer}>
      <Text>Posts Content</Text>
    </View>
  );

  const ConcertHistoryContent = () => (
    <View style={styles.contentContainer}>
      <Text>Concert History Content</Text>
    </View>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "HiiiLights":
        return <Hiiilights />;
      case "Posts":
      return <PostsList />;
      case "ConHis":
        return <ConcertItem />;
      default:
        return <FeedContent />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Posts" && styles.activeTab]}
          onPress={() => handleTabPress("Posts")}
        >
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "HiiiLights" && styles.activeTab]}
          onPress={() => handleTabPress("HiiiLights")}
        >
          <Text style={styles.tabText}>HiiiLights</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "ConHis" && styles.activeTab]}
          onPress={() => handleTabPress("ConHis")}
        >
          <Text style={styles.tabText}>Concert History</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView
        onScroll={handleScroll}
        scrollEventThrottle={16} // Important for performance
      >
        {renderContent()}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#E5E5E5",
  },
  activeTab: {
    backgroundColor: "#FFD700",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  contentContainer: {
    padding: 20,
  },
});

export default ProfileTabs;
