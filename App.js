import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen';
import DetailsScreen from './src/screen/DetailsScreen';
import HeaderRight from './src/components/HeaderRight';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerRight: () => <HeaderRight/>,
          }}
          />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Java" component={DetailsScreen} />
        <Stack.Screen name="JavaScript" component={DetailsScreen} />
        <Stack.Screen name="ReactNative" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;