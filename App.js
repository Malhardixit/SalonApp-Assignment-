import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import SalonList from './screens/SalonList';
import Product from './screens/Product';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

const {height, width} = Dimensions.get('window');

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};
function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Slist"
          component={SalonList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <App />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
