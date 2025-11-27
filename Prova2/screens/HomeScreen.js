import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda do dia</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoName}>Gabriel Pacheco</Text>
        <Text style={styles.infoClass}>Engenharia de Software</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MeusCompromissos')}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Meus compromissos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CompromissosEquipe')}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Compromissos da equipe</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 18,
  },
  infoBox: {
    alignItems: 'center',
    marginBottom: 24,
  },
  infoName: {
    fontSize: 13,
    color: '#666',
    marginBottom: 2,
  },
  infoClass: {
    fontSize: 13,
    color: '#666',
  },
  button: {
    backgroundColor: '#e6e6e6',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 6,
    marginVertical: 6,
    width: 220,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#333',
  },
});
