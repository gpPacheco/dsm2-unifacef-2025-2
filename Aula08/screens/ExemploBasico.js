import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ExemploBasico() {
  const [imagem, setImagem] = useState(null);

  async function abrirCamera() {
    const result = await ImagePicker.launchCameraAsync();
    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  }

  async function abrirGaleria() {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Tirar Foto" onPress={abrirCamera} />
      <Button title="Escolher da Galeria" onPress={abrirGaleria} />

      {imagem && (
        <Image source={{ uri: imagem }} style={styles.image} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    gap: 10,
  },
  image: {
    marginTop: 20,
    width: 250,
    height: 250,
    borderRadius: 10,
  },
});
