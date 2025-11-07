import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

export default function PerfilUsuario() {
  const [avatar, setAvatar] = useState(null);
  const [permission, requestPermission] = ImagePicker.useCameraPermissions();

  // Solicita permissões ao carregar o componente
  useEffect(() => {
    solicitarPermissoes();
  }, []);

  async function solicitarPermissoes() {
    // Permissão para câmera
    if (!permission?.granted) {
      const { status } = await requestPermission();
      if (status !== 'granted') {
        Alert.alert(
          'Permissão Negada',
          'Precisamos de acesso à câmera para tirar fotos.'
        );
      }
    }

    // Permissão para galeria (iOS)
    if (Platform.OS === 'ios') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permissão Negada',
          'Precisamos de acesso à galeria para selecionar fotos.'
        );
      }
    }
  }

  async function abrirCamera() {
    try {
      const result = await ImagePicker.launchCameraAsync({
        quality: 0.7,
        allowsEditing: true,
        aspect: [1, 1], // Proporção quadrada para avatar
      });

      if (!result.canceled) {
        setAvatar(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível abrir a câmera.');
    }
  }

  async function abrirGaleria() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1], // Proporção quadrada para avatar
        quality: 0.7,
      });

      if (!result.canceled) {
        setAvatar(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível abrir a galeria.');
    }
  }

  function mostrarOpcoes() {
    Alert.alert(
      'Escolha uma opção',
      'De onde você deseja escolher a foto?',
      [
        {
          text: 'Câmera',
          onPress: abrirCamera,
        },
        {
          text: 'Galeria',
          onPress: abrirGaleria,
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Meu Perfil</Text>
        <Text style={styles.subtitulo}>Personalize seu avatar</Text>
      </View>

      <View style={styles.avatarContainer}>
        {/* Avatar - Imagem ou Placeholder */}
        <View style={styles.avatarWrapper}>
          {avatar ? (
            <Image source={{ uri: avatar }} style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Ionicons name="person" size={80} color="#ccc" />
            </View>
          )}

          {/* Botão de editar sobre o avatar */}
          <TouchableOpacity
            style={styles.botaoEditar}
            onPress={mostrarOpcoes}
            activeOpacity={0.8}
          >
            <Ionicons name="camera" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.nome}>Gabriel Pacheco</Text>
        <Text style={styles.email}>gabriel@unifacef.com.br</Text>
      </View>

      {/* Botões de ação */}
      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={[styles.botao, styles.botaoCamera]}
          onPress={abrirCamera}
          activeOpacity={0.8}
        >
          <Ionicons name="camera" size={24} color="#fff" />
          <Text style={styles.textoBotao}>Tirar Foto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, styles.botaoGaleria]}
          onPress={abrirGaleria}
          activeOpacity={0.8}
        >
          <Ionicons name="images" size={24} color="#fff" />
          <Text style={styles.textoBotao}>Escolher da Galeria</Text>
        </TouchableOpacity>
      </View>

      {avatar && (
        <TouchableOpacity
          style={styles.botaoRemover}
          onPress={() => setAvatar(null)}
          activeOpacity={0.8}
        >
          <Text style={styles.textoBotaoRemover}>Remover Foto</Text>
        </TouchableOpacity>
      )}
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
    marginTop: 20,
    marginBottom: 40,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#007AFF',
  },
  avatarPlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#ddd',
  },
  botaoEditar: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#007AFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  botoesContainer: {
    gap: 15,
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  botaoCamera: {
    backgroundColor: '#007AFF',
  },
  botaoGaleria: {
    backgroundColor: '#34C759',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoRemover: {
    marginTop: 20,
    padding: 12,
    alignItems: 'center',
  },
  textoBotaoRemover: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
  },
});
