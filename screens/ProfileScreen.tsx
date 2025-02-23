import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useTranslation from '../utils/useTranslation';
import useLanguageStore from '../store/useLanguageStore';

const ProfileScreen: React.FC = () => {
  const t = useTranslation();
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t.name}</Text>
      <Text style={styles.text}>{t.age}</Text>
      <Text style={styles.text}>{t.position}</Text>

      <Button title="🇷🇺 Рус" onPress={() => setLanguage('ru')} />
      <Button title="🇬🇧 Eng" onPress={() => setLanguage('en')} />
      <Button title="🇩🇪 De" onPress={() => setLanguage('de')} />
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
