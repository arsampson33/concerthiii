import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

const ConcertItem = () => {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchedConcerts = [
      {
        id: 1,
        name: "Renisnace",
        date: "12/17",
        location: "Denver",
        performers: "Performer1",
      },
      {
        id: 2,
        name: "Swanita",
        date: "1/17",
        location: "SLC",
        performers: "Performer2",
      },
      {
        id: 3,
        name: "Mozart",
        date: "2/17",
        location: "Seattle",
        performers: "Performer3",
      },
      {
        id: 4,
        name: "Mozart",
        date: "3/17",
        location: "Texas",
        performers: "Performer4",
      },
      {
        id: 5,
        name: "Mozart",
        date: "4/17",
        location: "NYC",
        performers: "Performer5",
      },
    ];
    setConcerts(fetchedConcerts);
  }, []);
  return (
    <FlatList
      data={concerts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.concertItem}>
          <Text style={styles.concertName}>{item.name}</Text>
          <Text>Date: {item.date}</Text>
          <Text>Location: {item.location}</Text>
          <Text>Performers: {item.performers}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    flatList: {
      marginBottom: 20,
    },
    concertItem: {
      marginBottom: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    concertName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    formContainer: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });
export default ConcertItem;