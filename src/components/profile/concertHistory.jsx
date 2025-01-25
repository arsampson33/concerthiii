import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const Ticket = ({ ticketType, day, month, time, artist, live, location, venue }) => {
  const backgroundImage = ticketType === 'ticket-1' ?
    'https://images.unsplash.com/photo-1483101974978-cf266fdf1139?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80' :
    'https://images.unsplash.com/photo-1550184658-ff6132a71714?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2180&q=80';

  // Scale ticket based on screen width, leave margins
  const ticketWidth = screenWidth - 40; // 20px margin on each side
  const scale = ticketWidth / 700; // original width is 700
  const ticketHeight = 300 * scale;
  

  return (
    <ImageBackground 
      source={{ uri: backgroundImage }} 
      style={[styles.ticket, { width: ticketWidth, height: ticketHeight }]} 
      imageStyle={{ borderRadius: 15 }}
    >
      <View style={styles.date}>
        <Text style={[styles.day, { fontSize: scale * 80 }]}>{day}</Text>
        <View>
          <Text style={[styles.monthAndTime, { fontSize: scale * 20 }]}>{month}</Text>
          <Text style={[styles.monthAndTime, styles.small, { fontSize: scale * 15 }]}>{time}</Text>
        </View>
      </View>
      <View style={styles.middleTicket}>
        <Text style={[styles.name, { fontSize: scale * 30 }]}>{artist}</Text>
        <Text style={[styles.live, styles.small, { fontSize: scale * 15 }]}>{live}</Text>
        <Text style={[styles.locationText, { fontSize: scale * 30 }]}>{location}</Text>
        <Text style={[styles.locationText, styles.small, { fontSize: scale * 15 }]}>{venue}</Text>
      </View>
      <Image  source={{ uri: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA3L3JtNTY0LWVsZW1lbnQtMDE1LXAucG5n.png' }} style={[styles.cta, {width: scale * 250}]}/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ticket: {
    height: 300,
    width: 700,
    marginVertical: 5,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  day: {
    fontSize: 80,
    color: '#fff',
    fontWeight: 'bold',
  },
  monthAndTime: {
    marginLeft: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  middleTicket: {
    alignItems: 'center',
  },
  name: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  live: {
    marginTop: 5,
  },
  location: {
    alignItems: 'center',
  },
  locationText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  cta: {
    backgroundColor: '#436ea5',
    marginLeft:15,
    padding: 10,
    borderRadius: 25,
    width:100,
    transform: [{ rotate: '-90deg' }],
  },
  buy: {
    color: '#fff',
    fontWeight: 'bold',
  },
  small: {
    fontWeight: '200',
  },
});

export default Ticket;


{/* <ConcertHistory
ticketType={beyonceConcertData.ticketType}
day={beyonceConcertData.day}
month={beyonceConcertData.month}
time={beyonceConcertData.time}
artist={beyonceConcertData.artist}
live={beyonceConcertData.live}
location={beyonceConcertData.location}
venue={beyonceConcertData.venue}
/> 

const beyonceConcertData = {
  ticketType: 'ticket-2', // Assuming you have different ticket designs
  day: '24',
  month: 'SEP',
  time: '8PM',
  artist: 'Beyoncé',
  live: 'LIVE',
  location: 'Rose Bowl Stadium',
  venue: 'Pasadena, CA',
};*/}