// import React, React Native
import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

// Import Styles
import gStyles from '../../tool/gStyles';

function Header() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={[styles.container, isDarkMode ? gStyles.bgDark : gStyles.bgLight]}>
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
    shadowOpacity: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
