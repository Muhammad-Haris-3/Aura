import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Alhamdulillah</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainHeading: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 700,
    fontSize: 36,
    marginTop: 20,
  },
});

export default Home;
