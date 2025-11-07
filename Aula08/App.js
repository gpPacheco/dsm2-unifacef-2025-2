import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ExemploBasico from './screens/ExemploBasico';
import PerfilUsuario from './screens/PerfilUsuario';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Aula 08 - Câmera e Galeria',
          }}
        />
        <Stack.Screen
          name="ExemploBasico"
          component={ExemploBasico}
          options={{
            title: 'Exemplo Básico',
          }}
        />
        <Stack.Screen
          name="PerfilUsuario"
          component={PerfilUsuario}
          options={{
            title: 'Perfil do Usuário',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
