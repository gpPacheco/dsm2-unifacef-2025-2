import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aula 07</Text>
      <Text style={styles.subtitulo}>Listas Otimizadas e Layouts Responsivos</Text>

      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('ListaOtimizada')}
        >
          <Text style={styles.textoBotao}>📊 Lista Otimizada</Text>
          <Text style={styles.descricao}>FlatList com 1000 itens</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('ListaAgrupada')}
        >
          <Text style={styles.textoBotao}>📁 Lista Agrupada</Text>
          <Text style={styles.descricao}>SectionList com categorias</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, styles.botaoDestaque]}
          onPress={() => navigation.navigate('CatalogoInterativo')}
        >
          <Text style={[styles.textoBotao, styles.textoBotaoDestaque]}>
            🏆 Catálogo Interativo
          </Text>
          <Text style={[styles.descricao, styles.descricaoDestaque]}>
            Desafio Final - Com filtro e responsivo
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          💡 Toque em qualquer opção para explorar
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
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 40,
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  botaoDestaque: {
    backgroundColor: '#007AFF',
    marginTop: 10,
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
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
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#999',
  },
});
