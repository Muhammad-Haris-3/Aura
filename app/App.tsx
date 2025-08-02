import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [buttonText, setButtonText] = useState('Click Me');
  const onClick = () => {
    setButtonText(prev => (prev === 'Click Me' ? 'Alhamdulillah' : 'Click Me'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Alhamdulillah</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={onClick}>
          <Text style={styles.btnText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
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
    color: 'white',
    fontWeight: 700,
    fontSize: 36,
    marginTop: 20,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 50,
    width: 100,
    backgroundColor: 'aqua',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 700,
    fontSize: 16,
  },
});

export default App;
