import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

const AnimatedBlock: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Animated.View entering={FadeIn.duration(500)} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 10,
    margin: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AnimatedBlock;
