import React from 'react';
import { SectionList, Text, View, StyleSheet } from 'react-native';

const dados = [
  { title: 'Eletrônicos', data: ['Notebook', 'Smartphone', 'TV'] },
  { title: 'Roupas', data: ['Camiseta', 'Calça', 'Jaqueta'] },
];

export default function ListaAgrupada() {
  return (
    <SectionList
      sections={dados}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      renderSectionHeader={({ section }) => (
        <Text style={styles.header}>{section.title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    backgroundColor: '#eee',
    padding: 8,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    fontSize: 16,
  },
});
