import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

const sections = [
  {
    title: '(Eu)',
    data: [
      '09h30: Reunião "Daily"',
      '14h00: Reunião com cliente: Carros & Carrros',
      '16h30: Prazo final Projeto X',
    ],
  },
  {
    title: 'Jurema (chefe)',
    data: [
      '09h30: Reunião "Daily"',
      '12h00: Almoço com a diretoria',
      '15h00: Saída viagem',
    ],
  },
  {
    title: 'Aderbal',
    data: [
      '09h30: Reunião "Daily"',
      '13h30: Visita técnica UniFACEF',
      '16h30: Prazo final Projeto X',
    ],
  },
];

export default function CompromissosEquipeScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  const renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topInfo}>
        <Text style={styles.smallText}>Gabriel Pacheco</Text>
        <Text style={styles.smallText}>Engenharia de Software</Text>
      </View>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
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
  listContent: {
    paddingBottom: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 6,
    textAlign: 'center',
  },
  itemRow: {
    paddingVertical: 6,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});
