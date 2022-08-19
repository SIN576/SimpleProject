// Import React, React Native
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Button from '../../component/button';

// Import Internal Component
import Header from '../../component/header';
import Label from '../../component/label';

function Home({navigation}) {
  const onPress = () => {
    navigation.navigate('RemoteConfig');
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerContent}>
        <Label />
        <View style={styles.HStack}>
          <Button style={styles.containerCard} onPress={onPress}>
            <View style={styles.containerImage} />
            <Text>Remote Config</Text>
          </Button>

          <View style={styles.containerCard}>
            <View style={styles.containerImage} />
            <Text>Remote Config</Text>
          </View>
        </View>
        <View style={styles.HStack}>
          <View style={styles.containerCard}>
            <View style={styles.containerImage} />
            <Text>Remote Config</Text>
          </View>
          <View style={styles.containerCard}>
            <View style={styles.containerImage} />
            <Text>Remote Config</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    flex: 1,
    padding: 8,
  },
  containerCard: {
    padding: 16,
    backgroundColor: 'white',
    flex: 1,
    height: 200,
    alignItems: 'center',
    margin: 8,
    borderRadius: 10,
  },
  containerImage: {
    flex: 1,
    width: '100%',
  },
  HStack: {
    width: '100%',
    flexDirection: 'row',
  },
});
