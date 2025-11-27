import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const dados = [
  { id: '1', hora: '09h30', titulo: 'Reunião "Daily"' },
  { id: '2', hora: '14h00', titulo: 'Reunião com cliente Carros & Carros' },
  { id: '3', hora: '16h30', titulo: 'Prazo final Projeto X' },
];

export default function MeusCompromissosScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemText}>{item.hora} : {item.titulo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topInfo}>
        <Text style={styles.header}>(Eu)</Text>
        <Text style={styles.smallText}>Gabriel Pacheco</Text>
        <Text style={styles.smallText}>Engenharia de Software</Text>
      </View>  
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  topInfo: {
    alignItems: 'center',
    marginBottom: 6,
  },
  smallText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 16,
  },
  itemRow: {
    paddingVertical: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});
