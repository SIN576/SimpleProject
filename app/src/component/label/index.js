// import React, React Native
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Label() {
  return (
    <View style={styles.labelContainer}>
      <Text style={styles.labelText}>Firebase Remote Config</Text>
    </View>
  );
}

export default Label;

const styles = StyleSheet.create({
  labelContainer: {
    margin: 8,
    padding: 12,
    backgroundColor: 'cyan',
    borderRadius: 10,
  },
  labelText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});
