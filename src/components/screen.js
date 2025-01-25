import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useThemeColor, View as ThemedView } from './Themed';

const Screen = ({ scroll, style, children }) => {
  const backgroundColor = useThemeColor({}, 'background');

  return scroll ? (
    <ScrollView
      testID="scrollview-screen"
      contentContainerStyle={styles.contentContainer}
      style={[styles.container, { backgroundColor }, style]}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  ) : (
    <ThemedView testID="view-screen" style={[styles.container, { backgroundColor }, style]}>
      {children}
    </ThemedView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    paddingBottom: 36,
    paddingLeft: 14,
  },
  contentContainer: {
    paddingBottom: 36,
  },
});