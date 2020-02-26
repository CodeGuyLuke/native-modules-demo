import React from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet, Text} from 'react-native';

import {showToast} from './native/Toast';

const App = () => {
  const handleShowToastPress = () => {
    showToast('Our message', false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleShowToastPress}>
        <Text style={styles.buttonLabel}>Show toast</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 32,
    shadowColor: '#7F2DE0',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    backgroundColor: '#7F2DE0',
    borderRadius: 8,
    padding: 20,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
});

export default App;
