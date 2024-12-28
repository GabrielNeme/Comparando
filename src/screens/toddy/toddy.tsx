import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const marketList = [
  { id: '1', name: 'Carrefour', address: 'Rua xxxxxxxx, xxx', price: 'R$ 8,99/Unidade' },
  { id: '2', name: 'Assaí', address: 'Rua xxxxxxxx, xxx', price: 'R$ 9,49/Unidade' },
  { id: '3', name: 'Extra', address: 'Rua xxxxxxxx, xxx', price: 'R$ 9,99/Unidade' },
];

export default function ProductList() {
  const navigation = useNavigation();
  const [markets, setMarkets] = useState(marketList);
  const [sortOption, setSortOption] = useState('price');
  const [isFavorite, setIsFavorite] = useState(false);

  const sortMarkets = (option: string) => {
    const sortedMarkets = [...markets].sort((a, b) => {
      if (option === 'price') {
        return parseFloat(a.price.replace('R$', '').replace(',', '.')) - parseFloat(b.price.replace('R$', '').replace(',', '.'));
      } else {
        return 0;
      }
    });
    setMarkets(sortedMarkets);
    setSortOption(option);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Produto em destaque */}
      <View style={styles.productHighlight}>
        <Text style={styles.productTitle}>Toddy</Text>
        <Image source={require('../../../assets/busca/toddy.png')} style={styles.productImage} />
        <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)} style={styles.favoriteIcon}>
          <FontAwesome name={isFavorite ? 'heart' : 'heart-o'} size={24} color={isFavorite ? 'red' : 'gray'} />
        </TouchableOpacity>
      </View>

      {/* Opções de ordenação */}
      <View style={styles.sortOptions}>
        <TouchableOpacity onPress={() => sortMarkets('price')} style={styles.sortButton}>
          <Text style={sortOption === 'price' ? styles.activeSortText : styles.sortText}>Preço</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => sortMarkets('distance')} style={styles.sortButton}>
          <Text style={sortOption === 'distance' ? styles.activeSortText : styles.sortText}>Distância</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de mercados */}
      <ScrollView contentContainerStyle={styles.marketList}>
        {markets.map((market) => (
          <View key={market.id} style={styles.marketCard}>
            <View>
              <Text style={styles.marketName}>{market.name}</Text>
              <Text style={styles.marketAddress}>{market.address}</Text>
              <Text style={styles.marketPrice}>{market.price}</Text>
            </View>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
