#Dependencies you need

```json
    "@react-native-masked-view/masked-view": "^0.3.2",
    "@react-native/new-app-screen": "0.80.2",
    "@react-navigation/native": "^7.1.16",
    "@react-navigation/native-stack": "^7.3.23",
    "react": "19.1.0",
    "react-native": "0.80.2",
    "react-native-device-info": "^14.0.4",
    "react-native-gesture-handler": "^2.27.2",
    "react-native-reanimated": "^4.0.1",
    "react-native-safe-area-context": "^5.5.2",
    "react-native-screens": "^4.13.1",
    "react-native-vector-icons": "^10.3.0",
    "react-native-worklets": "^0.4.1"
```

# Basic Routing in App.tsx

```tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
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
});

export default App;
```
