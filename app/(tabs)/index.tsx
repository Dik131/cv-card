import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTranslation from '../../utils/useTranslation';

const ProfileScreen: React.FC = () => {
  const t = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t.name}</Text>
      <Text style={styles.text}>{t.age}</Text>
      <Text style={styles.text}>{t.position}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProfileScreen;
