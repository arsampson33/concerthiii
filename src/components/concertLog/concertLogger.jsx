import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const ConcertLogger = () => {
  const [concerts, setConcerts] = useState([]);
  const [newConcert, setNewConcert] = useState({ name: '', date: '', location: '', performers: '' });

  const handleAddConcert = () => {
    setConcerts([...concerts, newConcert]);
    setNewConcert({ name: '', date: '', location: '', performers: '' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Concert Log</Text>

      <ScrollView style={styles.scrollContainer}>
        {concerts.map((concert, index) => (
          <View key={index} style={styles.concertItem}>
            <Text style={styles.concertName}>{concert.name}</Text>
            <Text>Date: {concert.date}</Text>
            <Text>Location: {concert.location}</Text>
            <Text>Performers: {concert.performers}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Concert Name"
          value={newConcert.name}
          onChangeText={(text) => setNewConcert({ ...newConcert, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Date"
          value={newConcert.date}
          onChangeText={(text) => setNewConcert({ ...newConcert, date: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={newConcert.location}
          onChangeText={(text) => setNewConcert({ ...newConcert, location: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Performers"
          value={newConcert.performers}
          onChangeText={(text) => setNewConcert({ ...newConcert, performers: text })}
        />
        <Button title="Add Concert" onPress={handleAddConcert} />
      </View>
    </View>
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
  scrollContainer: {
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

export default ConcertLogger;