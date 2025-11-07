# Aula 07 - Listas Otimizadas e Layouts Responsivos

## 📚 Objetivos de Aprendizagem
- ✅ Aplicar conceitos avançados de renderização de listas (FlatList, SectionList e otimizações)
- ✅ Explorar renderização condicional e memoização em componentes de lista
- ✅ Criar layouts responsivos e adaptáveis a diferentes tamanhos de tela
- ✅ Utilizar Flexbox avançado e dimensões dinâmicas

## 🆚 Diferenças: React Web vs React Native

| Conceito | React Web | React Native |
|----------|-----------|--------------|
| **Layout** | CSS tradicional | Flexbox por padrão |
| **Rolagem** | `overflow-y: scroll` | `ScrollView` |
| **Listas** | `.map()` sobre JSX | `FlatList` ou `SectionList` |
| **Estilo** | Classes CSS / Styled Components | `StyleSheet.create()` ou styled-components/native |

## 📂 Estrutura do Projeto

```
Aula07/
├── App.js                          # Navegação principal
├── screens/
│   ├── HomeScreen.js              # Tela inicial com menu
│   ├── ListaOtimizada.js          # FlatList com 1000 itens
│   ├── ListaAgrupada.js           # SectionList básica
│   └── CatalogoInterativo.js      # Desafio completo
├── package.json
├── app.json
└── index.js
```

## 🎯 Exemplos Implementados

### 1️⃣ Lista Otimizada (FlatList)
**Arquivo:** `screens/ListaOtimizada.js`

**Características:**
- 📊 **1000 produtos** renderizados eficientemente
- 🚀 **Otimizações:**
  - `useCallback()` para evitar re-renderizações
  - `initialNumToRender={12}` - renderiza apenas 12 itens inicialmente
  - `windowSize={10}` - controla itens mantidos na memória
- 🎨 Cards estilizados com sombra e espaçamento

**Código-chave:**
```javascript
const renderItem = useCallback(({ item }) => (
  <View style={styles.card}>
    <Text style={styles.nome}>{item.nome}</Text>
    <Text style={styles.preco}>R$ {item.preco}</Text>
  </View>
), []);
```

### 2️⃣ Lista Agrupada (SectionList)
**Arquivo:** `screens/ListaAgrupada.js`

**Características:**
- 📁 Produtos organizados por **categorias**
- 🏷️ Cabeçalhos de seção destacados
- 📋 Renderização por grupos

**Categorias:**
- Eletrônicos
- Roupas

### 3️⃣ 🏆 Catálogo Interativo (Desafio Final)
**Arquivo:** `screens/CatalogoInterativo.js`

**Funcionalidades Implementadas:**

#### ✅ 1. Lista de Produtos Completa
- **5 categorias:** Eletrônicos, Roupas, Livros, Casa e Decoração, Esportes
- **23 produtos** com nome, preço e categoria
- Dados estruturados em `SectionList`

#### ✅ 2. Filtro por Nome
- 🔍 Campo de busca no topo
- 🎯 Filtra produtos em tempo real
- 📱 Atualiza automaticamente as seções
- 💡 Mensagem quando não há resultados

#### ✅ 3. Layout Responsivo
- 📐 `useWindowDimensions()` detecta tamanho da tela
- 🔄 Ajusta fontes e espaçamentos para telas pequenas (<350px)
- 📱 Funciona em diferentes dispositivos

#### ✅ 4. Otimizações de Performance
- `React.memo()` no componente `ProdutoItem`
- `useCallback()` em todas as funções de renderização
- `useMemo()` para filtrar produtos
- `initialNumToRender={10}` e `windowSize={5}`

#### ✅ 5. UX Avançada
- 📌 Cabeçalhos de seção fixos (`stickySectionHeadersEnabled`)
- 🔢 Contador de itens por categoria
- 🎨 Design moderno com sombras e cores
- ⌨️ Campo de busca com botão de limpar

## 🚀 Como Executar

### 1. Instalar Dependências
```powershell
cd Aula07
npm install
```

### 2. Iniciar o Projeto
```powershell
npx expo start --tunnel
```

### 3. Visualizar
- 📱 **Mobile:** Escaneie o QR Code com Expo Go
- 🌐 **Web:** Pressione `w` no terminal

## 💡 Conceitos Aplicados

### 🧩 Memoização
```javascript
// React.memo evita re-renderizar componentes sem mudanças
const ProdutoItem = React.memo(({ item, larguraTela }) => {
  // componente
});

// useCallback mantém a mesma referência da função
const renderItem = useCallback(
  ({ item }) => <ProdutoItem item={item} />,
  [width]
);

// useMemo recalcula apenas quando dependências mudam
const produtosFiltrados = useMemo(() => {
  return PRODUTOS_COMPLETOS.filter(/* ... */);
}, [filtro]);
```

### 📐 Layout Responsivo
```javascript
const { width } = useWindowDimensions();
const isSmallScreen = width < 350;

<Text style={[styles.nome, isSmallScreen && styles.nomeSmall]}>
```

### 🔍 Filtro de Dados
```javascript
const produtosFiltrados = useMemo(() => {
  return PRODUTOS_COMPLETOS
    .map((secao) => ({
      ...secao,
      data: secao.data.filter((produto) =>
        produto.nome.toLowerCase().includes(filtro.toLowerCase())
      ),
    }))
    .filter((secao) => secao.data.length > 0);
}, [filtro]);
```

## 🎨 Design System

### Cores
- **Primária:** `#007AFF` (Azul iOS)
- **Background:** `#f5f5f5` (Cinza claro)
- **Cards:** `#fff` (Branco)
- **Texto:** `#333` (Cinza escuro)

### Tipografia
- **Títulos:** 18-20px, bold
- **Itens:** 16px, regular/semibold
- **Preços:** 18px, bold, cor primária

## 🎓 Aprendizados Chave

1. **FlatList vs .map()**: FlatList renderiza sob demanda = melhor performance
2. **SectionList**: Ideal para dados agrupados por categoria
3. **Memoização**: Crucial para listas grandes
4. **useWindowDimensions**: Detecta mudanças de orientação em tempo real
5. **Otimizações**: `initialNumToRender`, `windowSize`, `maxToRenderPerBatch`

## 🏆 Checklist do Desafio

- ✅ Lista de produtos com nome, preço e categoria
- ✅ Agrupamento por categoria usando SectionList
- ✅ Filtro por nome com TextInput
- ✅ Estilos responsivos com useWindowDimensions
- ✅ Memoização com React.memo e useCallback
- ✅ Interface moderna e intuitiva

---

**Desenvolvido para a disciplina de Desenvolvimento Mobile II - Aula 07**
