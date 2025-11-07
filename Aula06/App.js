import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroScreen from './screens/CadastroScreen';
import ConfirmacaoScreen from './screens/ConfirmacaoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Cadastro"
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
          name="Cadastro" 
          component={CadastroScreen}
          options={{
            title: 'Novo Cadastro',
          }}
        />
        <Stack.Screen 
          name="Confirmacao" 
          component={ConfirmacaoScreen}
          options={{
            title: 'Cadastro Confirmado',
            headerLeft: () => null, // Remove o botão de voltar
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
