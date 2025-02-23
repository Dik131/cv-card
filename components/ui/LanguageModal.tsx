import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import useLanguageStore from '../../store/useLanguageStore';

const LanguageModal: React.FC<{ visible: boolean }> = ({ visible }) => {
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const [modalVisible, setModalVisible] = useState(visible);

  const selectLanguage = (lang: string) => {
    setLanguage(lang);
    setModalVisible(false);
  };

  return (
    <Modal visible={modalVisible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Выберите язык</Text>
          <TouchableOpacity style={styles.button} onPress={() => selectLanguage('ru')}>
            <Text style={styles.buttonText}>🇷🇺 Русский</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => selectLanguage('en')}>
            <Text style={styles.buttonText}>🇬🇧 English</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => selectLanguage('de')}>
            <Text style={styles.buttonText}>🇩🇪 Deutsch</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LanguageModal;
