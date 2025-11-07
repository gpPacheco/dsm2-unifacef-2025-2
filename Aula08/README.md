# Aula 08 - Câmera e Galeria de Imagens

## 📚 Objetivos de Aprendizagem
- ✅ Solicitar permissões para uso da câmera e da galeria no Expo
- ✅ Capturar imagens diretamente da câmera usando `expo-image-picker`
- ✅ Selecionar imagens da galeria do dispositivo
- ✅ Exibir uma imagem capturada/selecionada na interface

## 📦 Dependências Instaladas
```bash
npm install expo-image-picker
```

## 🔐 Permissões Configuradas

### iOS (`app.json`)
```json
"ios": {
  "infoPlist": {
    "NSCameraUsageDescription": "Este app precisa acessar a câmera para tirar fotos de perfil.",
    "NSPhotoLibraryUsageDescription": "Este app precisa acessar a galeria para selecionar fotos de perfil."
  }
}
```

### Android (`app.json`)
```json
"android": {
  "permissions": [
    "CAMERA",
    "READ_EXTERNAL_STORAGE",
    "WRITE_EXTERNAL_STORAGE"
  ]
}
```

## 📂 Estrutura do Projeto

```
Aula08/
├── App.js                      # Navegação principal
├── screens/
│   ├── HomeScreen.js          # Tela inicial com menu
│   ├── ExemploBasico.js       # Exemplo das instruções
│   └── PerfilUsuario.js       # 🏆 Atividade prática
├── package.json
├── app.json
└── index.js
```

## 🎯 Exemplos Implementados

### 1️⃣ Exemplo Básico
**Arquivo:** `screens/ExemploBasico.js`

**Funcionalidades:**
- 📷 Tirar foto com a câmera
- 🖼️ Escolher imagem da galeria
- 🖼️ Exibir imagem selecionada

**Código-chave:**
```javascript
// Acessar câmera
async function abrirCamera() {
  const result = await ImagePicker.launchCameraAsync();
  if (!result.canceled) {
    setImagem(result.assets[0].uri);
  }
}

// Acessar galeria
async function abrirGaleria() {
  const result = await ImagePicker.launchImageLibraryAsync();
  if (!result.canceled) {
    setImagem(result.assets[0].uri);
  }
}
```

### 2️⃣ 🏆 Perfil do Usuário (Atividade Prática)
**Arquivo:** `screens/PerfilUsuario.js`

**Funcionalidades Completas:**

#### ✅ 1. Avatar Circular
- 🎨 Avatar redondo de 150x150px
- 👤 Placeholder com ícone quando não há foto
- 🔵 Borda azul destacando o avatar

**Estilo implementado:**
```javascript
avatar: {
  width: 150,
  height: 150,
  borderRadius: 75,
  borderWidth: 4,
  borderColor: '#007AFF',
}
```

#### ✅ 2. Solicitação de Permissões
- 📱 Permissão de câmera solicitada ao iniciar
- 🖼️ Permissão de galeria (iOS)
- ⚠️ Alertas quando permissões são negadas

**Código:**
```javascript
const [permission, requestPermission] = ImagePicker.useCameraPermissions();

useEffect(() => {
  solicitarPermissoes();
}, []);
```

#### ✅ 3. Múltiplas Formas de Adicionar Foto

**A) Botão sobre o avatar:**
- 📸 Ícone de câmera sobreposto ao avatar
- 🎯 Abre menu com opções (Câmera/Galeria)

**B) Botões principais:**
- 🔵 **Tirar Foto** - Abre câmera diretamente
- 🟢 **Escolher da Galeria** - Abre galeria

**C) Menu de opções:**
```javascript
Alert.alert(
  'Escolha uma opção',
  'De onde você deseja escolher a foto?',
  [
    { text: 'Câmera', onPress: abrirCamera },
    { text: 'Galeria', onPress: abrirGaleria },
    { text: 'Cancelar', style: 'cancel' },
  ]
);
```

#### ✅ 4. Edição de Imagem
- ✂️ `allowsEditing: true` - Permite cortar/ajustar
- 📐 `aspect: [1, 1]` - Proporção quadrada para avatar
- 🎨 `quality: 0.7` - Otimização de tamanho

#### ✅ 5. Recursos Extras
- 🗑️ Botão "Remover Foto" para limpar avatar
- 👤 Informações do perfil (nome e email)
- 🎨 Design moderno com sombras e ícones
- ⚠️ Tratamento de erros com Alert

## 🚀 Como Executar

### 1. Instalar Dependências
```powershell
cd Aula08
npm install
```

### 2. Iniciar o Projeto
```powershell
npx expo start --tunnel
```

### 3. Testar no Dispositivo Móvel
📱 **Recomendado usar dispositivo físico para testar câmera!**

- Abra o **Expo Go** no seu celular
- Escaneie o QR Code
- Permita acesso à câmera e galeria quando solicitado

> ⚠️ **Nota:** A câmera não funciona adequadamente no modo web. Use um dispositivo móvel real para melhor experiência.

## 💡 Conceitos Aplicados

### 🔐 Gerenciamento de Permissões
```javascript
// Hook para permissão de câmera
const [permission, requestPermission] = ImagePicker.useCameraPermissions();

// Solicitar permissão
const { status } = await requestPermission();

// Verificar se foi concedida
if (status !== 'granted') {
  Alert.alert('Permissão Negada');
}
```

### 📷 Opções da Câmera
```javascript
await ImagePicker.launchCameraAsync({
  quality: 0.7,           // Qualidade da imagem (0-1)
  allowsEditing: true,    // Permite editar/cortar
  aspect: [1, 1],         // Proporção da imagem
});
```

### 🖼️ Opções da Galeria
```javascript
await ImagePicker.launchImageLibraryAsync({
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [1, 1],
  quality: 0.7,
});
```

### 🎨 Avatar Circular
```javascript
// Placeholder (sem foto)
<View style={styles.avatarPlaceholder}>
  <Ionicons name="person" size={80} color="#ccc" />
</View>

// Avatar com foto
<Image source={{ uri: avatar }} style={styles.avatar} />

// Botão de editar sobreposto
<TouchableOpacity style={styles.botaoEditar}>
  <Ionicons name="camera" size={24} color="#fff" />
</TouchableOpacity>
```

## 🎨 Design System

### Cores
- **Primária:** `#007AFF` (Azul iOS)
- **Sucesso:** `#34C759` (Verde iOS)
- **Perigo:** `#FF3B30` (Vermelho iOS)
- **Background:** `#f5f5f5` (Cinza claro)
- **Cards:** `#fff` (Branco)

### Ícones
- 📷 `camera` - Tirar foto
- 🖼️ `images` - Galeria
- 👤 `person` - Avatar placeholder
- ✏️ `create` - Editar

## 🎓 Checklist da Atividade Prática

- ✅ Avatar genérico exibido inicialmente
- ✅ Opção para tirar foto com câmera
- ✅ Opção para selecionar da galeria
- ✅ Foto escolhida substitui o avatar
- ✅ Avatar em formato circular (150x150px, borderRadius: 75)
- ✅ Permissões solicitadas corretamente
- ✅ Tratamento de erros
- ✅ Interface moderna e intuitiva

## 📱 Compatibilidade

| Plataforma | Câmera | Galeria | Edição |
|------------|--------|---------|--------|
| iOS        | ✅     | ✅      | ✅     |
| Android    | ✅     | ✅      | ✅     |
| Web        | ⚠️     | ✅      | ✅     |

> ⚠️ **Web:** A câmera funciona parcialmente, recomenda-se usar dispositivo móvel.

## 🔧 Solução de Problemas

### Permissão negada
- Vá em Configurações do dispositivo
- Apps → Expo Go → Permissões
- Habilite Câmera e Armazenamento

### Câmera não abre
- Verifique se o Expo Go está atualizado
- Reinicie o app
- Teste em dispositivo físico (não emulador)

### Imagem não aparece
- Verifique o console para erros
- Confirme que `result.canceled` é `false`
- Teste com imagens menores

---

**Desenvolvido para a disciplina de Desenvolvimento Mobile II - Aula 08**

## 📚 Recursos Adicionais
- [Documentação oficial: expo-image-picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
- [Guia de permissões no Expo](https://docs.expo.dev/guides/permissions/)
