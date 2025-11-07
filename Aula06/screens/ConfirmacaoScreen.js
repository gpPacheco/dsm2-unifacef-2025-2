import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ConfirmacaoScreen({ route, navigation }) {
  const { nome, email, telefone } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.iconeContainer}>
        <Ionicons name="checkmark-circle" size={100} color="#34C759" />
      </View>

      <Text style={styles.titulo}>Cadastro Realizado!</Text>
      <Text style={styles.subtitulo}>Seus dados foram registrados com sucesso</Text>

      <View style={styles.dadosContainer}>
        <View style={styles.itemDado}>
          <Ionicons name="person" size={24} color="#007AFF" />
          <View style={styles.itemTexto}>
            <Text style={styles.labelDado}>Nome Completo</Text>
            <Text style={styles.valorDado}>{nome}</Text>
          </View>
        </View>

        <View style={styles.itemDado}>
          <Ionicons name="mail" size={24} color="#007AFF" />
          <View style={styles.itemTexto}>
            <Text style={styles.labelDado}>E-mail</Text>
            <Text style={styles.valorDado}>{email}</Text>
          </View>
        </View>

        <View style={styles.itemDado}>
          <Ionicons name="call" size={24} color="#007AFF" />
          <View style={styles.itemTexto}>
            <Text style={styles.labelDado}>Telefone</Text>
            <Text style={styles.valorDado}>{telefone}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.botaoVoltar}
        onPress={() => navigation.navigate('Cadastro')}
        activeOpacity={0.8}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
        <Text style={styles.textoBotao}>Fazer Novo Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  iconeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  dadosContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  itemDado: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemTexto: {
    marginLeft: 15,
    flex: 1,
  },
  labelDado: {
    fontSize: 14,
    color: '#999',
    marginBottom: 4,
  },
  valorDado: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  botaoVoltar: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
