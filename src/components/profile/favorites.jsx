import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

const Favorites = ({ onTrianglePress }) => {
  // Triangle points for drawing with SVG
  const triangles = [
    { id: 1, points: '50,0 0,100 100,100' }, // Top triangle
    { id: 2, points: '50,100 0,0 100,0' },   // Bottom triangle
    { id: 3, points: '0,50 100,0 100,100' }, // Left triangle
    { id: 4, points: '100,50 0,0 0,100' }    // Right triangle
  ];

  return (
    <View style={styles.container}>
      {triangles.map((triangle) => (
        <TouchableOpacity key={triangle.id} onPress={() => onTrianglePress(triangle.id)}>
          <Svg height="100" width="100" viewBox="0 0 100 100" style={styles.svgContainer}>
            <Polygon
              points={triangle.points}
              fill="lightblue"
              stroke="blue"
              strokeWidth="1"
            />
          </Svg>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  svgContainer: {
    margin: 10,
  },
});

export default Favorites;
