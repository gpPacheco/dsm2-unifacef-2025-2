import React, { useCallback } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

// Gera 1000 produtos de exemplo
const produtos = Array.from({ length: 1000 }).map((_, i) => ({
  id: String(i),
  nome: `Produto ${i}`,
  preco: (Math.random() * 500).toFixed(2),
}));

export default function ListaOtimizada() {
  // useCallback evita re-renderizações desnecessárias
  const renderItem = useCallback(({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>R$ {item.preco}</Text>
    </View>
  ), []);

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      initialNumToRender={12} // Renderiza apenas 12 itens inicialmente
      windowSize={10} // Controla quantos itens são mantidos na memória
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f9fa',
    marginVertical: 6,
    marginHorizontal: 12,
    padding: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  preco: {
    color: 'gray',
    fontSize: 14,
  },
});
