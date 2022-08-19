// import React, React Native
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// Import Redux
import {useNavigation} from '@react-navigation/native';

function HeaderGoBack() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feature</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HeaderGoBack;

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
  button: {
    position: 'absolute',
    left: 16,
  },
});
