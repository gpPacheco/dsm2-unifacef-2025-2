import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MeusCompromissosScreen from './screens/MeusCompromissosScreen';
import CompromissosEquipeScreen from './screens/CompromissosEquipeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#007AFF' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Agenda do dia' }}
        />
        <Stack.Screen
          name="MeusCompromissos"
          component={MeusCompromissosScreen}
          options={{ title: 'Meus compromissos' }}
        />
        <Stack.Screen
          name="CompromissosEquipe"
          component={CompromissosEquipeScreen}
          options={{ title: 'Compromissos da equipe' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
