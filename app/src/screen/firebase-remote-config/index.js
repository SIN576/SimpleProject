// Import React, React Native
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

// Import Internal Component
import Header from '../../component/header';

function RemoteConfig() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerContent}>
        <Text>Firebase Remote Config</Text>
        <Text>Key --- Value</Text>
        <Text>Name --- Soy Sin</Text>
      </View>
    </View>
  );
}

export default RemoteConfig;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
