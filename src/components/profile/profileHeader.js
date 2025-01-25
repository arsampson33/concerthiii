import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileHeader = () => {
  const profile = {
    imageUrl: "https://via.placeholder.com/100",
    followers: "1.2k",
    following: "345",
    shows: "2",
    bio: "I love concerts. 🌎✨ #tech #travel #food",
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileInfoContainer}>
        <Image source={{ uri: profile.imageUrl }} style={styles.profileImage} />
        <View style={styles.countsContainer}>
          <View style={styles.countItem}>
            <Text style={styles.countText}>{profile.followers}</Text>
            <Text style={styles.countLabel}>Followers</Text>
          </View>
          <View style={styles.countItem}>
            <Text style={styles.countText}>{profile.following}</Text>
            <Text style={styles.countLabel}>Following</Text>
          </View>
          <View style={styles.countItem}>
            <Text style={styles.countText}>{profile.shows}</Text>
            <Text style={styles.countLabel}>Shows</Text>
          </View>
        </View>
      </View>
      <Text style={styles.bio}>{profile.bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  profileInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Half of the width/height to make it circular
    marginRight: 20,
  },
  countsContainer: {
    flexDirection: 'row',
  },
  countItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  countText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  countLabel: {
    fontSize: 14,
    color: '#666',
  },
  bio: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default ProfileHeader;