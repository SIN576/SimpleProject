// import React, React Native
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feature</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#fff',
    shadowOpacity: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
