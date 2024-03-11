import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Header = ({ title, onPressBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 60,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
  },
  backButton: {
    paddingRight: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: 'blue',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
};

export default Header;
