import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Card, Heading, Avatar, AvatarImage, AvatarFallbackText, VStack, Box } from "@gluestack-ui/themed"
const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchedPosts = [
      {
        id: 1,
        content: "This is the first post. Welcome to our social platform!",
        likes: 10,
        comments: [
          { id: 1, text: "Great post!", user: "User1" },
          { id: 2, text: "Really interesting content.", user: "User2" },
        ],
      },
      {
        id: 2,
        content:
          "Another day, another post. Here's something interesting for you all.",
        likes: 5,
        comments: [{ id: 3, text: "Thanks for sharing!", user: "User3" }],
      },
      {
        id: 3,
        content: "Check out this cool feature in our latest update.",
        likes: 8,
        comments: [],
      },
    ];
    setPosts(fetchedPosts);
  }, []);

  //   const fetchPosts = async () => {
  //     const response = await fetch("https://api.example.com/posts");
  //     const data = await response.json();
  //     setPosts(data);
  //   };

  const handleLike = (postId) => {
    const updatePosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatePosts);
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
    //   ListHeaderComponent={<ProfileHeader />}
      renderItem={({ item }) => (
        <Card p="$5" borderRadius="$lg" maxWidth={360} m="$3">
           <Box flexDirection="row">
          <Avatar mr="$3">
            <AvatarFallbackText fontFamily="$heading">RR</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
              }}
            />
          </Avatar>
          <VStack>
            <Heading size="sm" fontFamily="$heading" mb="$1">
              John Smith
            </Heading>
            <Text size="sm" fontFamily="$heading">
              Motivational Speaker
            </Text>
          </VStack>
        </Box>

        <VStack mb="$6">
          <Heading size="md" fontFamily="$heading" mb="$4">
            The Power of Positive Thinking
          </Heading>
          <Text size="sm" fontFamily="$heading">
          {item.content}
          </Text>
        </VStack>
        <Text
          fontSize="$sm"
          fontStyle="normal"
          fontFamily="$heading"
          fontWeight="$normal"
          lineHeight="$sm"
          mb="$2"
          sx={{
            color: "$textLight700",
            _dark: {
              color: "$textDark200",
            },
          }}
        >
          May 15, 2023
        </Text>
      </Card>
      )}
    />
  );
};
const styles = StyleSheet.create({
  postContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default PostsList;
