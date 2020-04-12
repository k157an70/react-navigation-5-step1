import React from 'react'
import { View, Text } from 'react-native'

const DetailsScreen = ({ route }) => {
  // const { routeName } = route.params;
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{ route.params?.routeName || 'Details Screen'}</Text>
      </View>
    );
}

export default DetailsScreen
