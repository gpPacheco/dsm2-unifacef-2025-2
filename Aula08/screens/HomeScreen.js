import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="camera" size={60} color="#007AFF" />
        <Text style={styles.titulo}>Aula 08</Text>
        <Text style={styles.subtitulo}>Câmera e Galeria de Imagens</Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('ExemploBasico')}
        >
          <Ionicons name="code-outline" size={32} color="#007AFF" />
          <View style={styles.botaoTexto}>
            <Text style={styles.textoBotao}>Exemplo Básico</Text>
            <Text style={styles.descricao}>
              Tirar foto e escolher da galeria
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, styles.botaoDestaque]}
          onPress={() => navigation.navigate('PerfilUsuario')}
        >
          <Ionicons name="person-circle" size={32} color="#fff" />
          <View style={styles.botaoTexto}>
            <Text style={[styles.textoBotao, styles.textoBotaoDestaque]}>
              🏆 Atividade Prática
            </Text>
            <Text style={[styles.descricao, styles.descricaoDestaque]}>
              Perfil do Usuário com Avatar
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Ionicons name="information-circle-outline" size={20} color="#999" />
        <Text style={styles.footerText}>
          Funciona melhor em dispositivos móveis
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
  menu: {
    flex: 1,
    gap: 15,
  },
  botao: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
    gap: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  botaoDestaque: {
    backgroundColor: '#007AFF',
  },
  botaoTexto: {
    flex: 1,
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  textoBotaoDestaque: {
    color: '#fff',
  },
  descricao: {
    fontSize: 14,
    color: '#666',
  },
  descricaoDestaque: {
    color: '#fff',
    opacity: 0.9,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#999',
  },
});
