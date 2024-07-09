// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Props } from '../types';

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;




// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../types';


// type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

// type Props = {
//   navigation: HomeScreenNavigationProp;
// };

// const HomeScreen: React.FC<Props> = ({ navigation }) => {
//   return (
//     <View>
//       <Text>Home Screen</Text>
//       <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
//     </View>
//   );
// };

// export default HomeScreen;
