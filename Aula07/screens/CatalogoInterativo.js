import React, { useState, useCallback, useMemo } from 'react';
import {
  SectionList,
  Text,
  View,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  StatusBar,
} from 'react-native';

// Dados dos produtos organizados por categoria
const PRODUTOS_COMPLETOS = [
  {
    title: 'Eletrônicos',
    data: [
      { id: '1', nome: 'Notebook Dell', preco: 3500.00, categoria: 'Eletrônicos' },
      { id: '2', nome: 'Smartphone Samsung', preco: 2200.00, categoria: 'Eletrônicos' },
      { id: '3', nome: 'TV LG 50"', preco: 2800.00, categoria: 'Eletrônicos' },
      { id: '4', nome: 'Mouse Logitech', preco: 150.00, categoria: 'Eletrônicos' },
      { id: '5', nome: 'Teclado Mecânico', preco: 450.00, categoria: 'Eletrônicos' },
      { id: '6', nome: 'Fone Bluetooth', preco: 280.00, categoria: 'Eletrônicos' },
    ],
  },
  {
    title: 'Roupas',
    data: [
      { id: '7', nome: 'Camiseta Polo', preco: 89.90, categoria: 'Roupas' },
      { id: '8', nome: 'Calça Jeans', preco: 199.90, categoria: 'Roupas' },
      { id: '9', nome: 'Jaqueta Couro', preco: 459.90, categoria: 'Roupas' },
      { id: '10', nome: 'Tênis Nike', preco: 399.90, categoria: 'Roupas' },
      { id: '11', nome: 'Bermuda Tactel', preco: 79.90, categoria: 'Roupas' },
    ],
  },
  {
    title: 'Livros',
    data: [
      { id: '12', nome: 'Clean Code', preco: 95.00, categoria: 'Livros' },
      { id: '13', nome: 'React Native', preco: 120.00, categoria: 'Livros' },
      { id: '14', nome: 'JavaScript ES6', preco: 85.00, categoria: 'Livros' },
      { id: '15', nome: 'Algoritmos', preco: 110.00, categoria: 'Livros' },
    ],
  },
  {
    title: 'Casa e Decoração',
    data: [
      { id: '16', nome: 'Luminária LED', preco: 145.00, categoria: 'Casa e Decoração' },
      { id: '17', nome: 'Quadro Decorativo', preco: 89.00, categoria: 'Casa e Decoração' },
      { id: '18', nome: 'Almofada Veludo', preco: 55.00, categoria: 'Casa e Decoração' },
      { id: '19', nome: 'Tapete Persa', preco: 320.00, categoria: 'Casa e Decoração' },
    ],
  },
  {
    title: 'Esportes',
    data: [
      { id: '20', nome: 'Bola Futebol', preco: 120.00, categoria: 'Esportes' },
      { id: '21', nome: 'Raquete Tênis', preco: 380.00, categoria: 'Esportes' },
      { id: '22', nome: 'Bicicleta MTB', preco: 1850.00, categoria: 'Esportes' },
      { id: '23', nome: 'Halteres 5kg', preco: 95.00, categoria: 'Esportes' },
    ],
  },
];

// Componente memoizado para renderizar cada item
const ProdutoItem = React.memo(({ item, larguraTela }) => {
  // Layout responsivo baseado na largura da tela
  const isSmallScreen = larguraTela < 350;

  return (
    <View style={[styles.card, isSmallScreen && styles.cardSmall]}>
      <View style={styles.cardContent}>
        <Text style={[styles.nome, isSmallScreen && styles.nomeSmall]}>
          {item.nome}
        </Text>
        <Text style={[styles.preco, isSmallScreen && styles.precoSmall]}>
          R$ {item.preco.toFixed(2)}
        </Text>
      </View>
    </View>
  );
});

export default function CatalogoInterativo() {
  const [filtro, setFiltro] = useState('');
  const { width } = useWindowDimensions();

  // Filtra os produtos baseado no texto digitado
  const produtosFiltrados = useMemo(() => {
    if (!filtro.trim()) {
      return PRODUTOS_COMPLETOS;
    }

    const filtroLower = filtro.toLowerCase();

    // Filtra cada seção e mantém apenas as que têm dados
    return PRODUTOS_COMPLETOS
      .map((secao) => ({
        ...secao,
        data: secao.data.filter((produto) =>
          produto.nome.toLowerCase().includes(filtroLower)
        ),
      }))
      .filter((secao) => secao.data.length > 0);
  }, [filtro]);

  // Renderiza cada item da lista (memoizado)
  const renderItem = useCallback(
    ({ item }) => <ProdutoItem item={item} larguraTela={width} />,
    [width]
  );

  // Renderiza o cabeçalho de cada seção
  const renderSectionHeader = useCallback(
    ({ section }) => (
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{section.title}</Text>
        <Text style={styles.headerCount}>({section.data.length} itens)</Text>
      </View>
    ),
    []
  );

  // Componente do cabeçalho da lista (campo de busca)
  const ListHeaderComponent = useCallback(
    () => (
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar produtos..."
          value={filtro}
          onChangeText={setFiltro}
          clearButtonMode="while-editing"
          autoCorrect={false}
        />
      </View>
    ),
    [filtro]
  );

  // Mensagem quando não há resultados
  const ListEmptyComponent = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          Nenhum produto encontrado para "{filtro}"
        </Text>
      </View>
    ),
    [filtro]
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SectionList
        sections={produtosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent={ListEmptyComponent}
        stickySectionHeadersEnabled
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    paddingBottom: 20,
  },
  searchContainer: {
    backgroundColor: '#fff',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 12,
    marginTop: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  headerCount: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  card: {
    backgroundColor: '#fff',
    marginVertical: 6,
    marginHorizontal: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardSmall: {
    marginHorizontal: 10,
  },
  cardContent: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nome: {
    fontWeight: '600',
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  nomeSmall: {
    fontSize: 14,
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  precoSmall: {
    fontSize: 16,
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});
