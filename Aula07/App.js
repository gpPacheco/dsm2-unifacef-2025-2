import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ListaOtimizada from './screens/ListaOtimizada';
import ListaAgrupada from './screens/ListaAgrupada';
import CatalogoInterativo from './screens/CatalogoInterativo';

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
            title: 'Aula 07 - Listas e Layouts',
          }}
        />
        <Stack.Screen
          name="ListaOtimizada"
          component={ListaOtimizada}
          options={{
            title: 'Lista Otimizada (1000 itens)',
          }}
        />
        <Stack.Screen
          name="ListaAgrupada"
          component={ListaAgrupada}
          options={{
            title: 'Lista Agrupada',
          }}
        />
        <Stack.Screen
          name="CatalogoInterativo"
          component={CatalogoInterativo}
          options={{
            title: 'Catálogo Interativo',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
