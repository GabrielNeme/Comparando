import React, { useState, useContext } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { CartContext } from '../context/CartContext';

const marketList = [
  { id: '1', name: 'Carrefour', address: 'Rua xxxxxxxx, xxx', price: 'R$ 29,99/Kg' },
  { id: '2', name: 'Assaí', address: 'Rua xxxxxxxx, xxx', price: 'R$ 31,99/Kg' },
  { id: '3', name: 'Extra', address: 'Rua xxxxxxxx, xxx', price: 'R$ 34,99/Kg' },
];

export default function ProductList() {
  const navigation = useNavigation();
  const [markets, setMarkets] = useState(marketList);
  const [sortOption, setSortOption] = useState('price');
  const [isFavorite, setIsFavorite] = useState(false);
  const product = 'Picanha';

  const { addToCart } = useContext(CartContext);

  const sortMarkets = (option: string) => {
    const sortedMarkets = [...marketList].sort((a, b) => {
      if (option === 'price') {
        return (
          parseFloat(a.price.replace('R$', '').replace(',', '.')) -
          parseFloat(b.price.replace('R$', '').replace(',', '.'))
        );
      }
      return 0;
    });
    setMarkets(sortedMarkets);
    setSortOption(option);
  };

  const handleAddToCart = (market: { name: string; address: string; price: string }) => {
    addToCart({
      name: product,
      market: market.name,
      price: market.price,
      quantity: 1,
    });

    Toast.show({
      type: 'success',
      text1: 'Produto Adicionado!',
      text2: `${product} foi adicionado ao carrinho.`,
      position: 'bottom',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.productHighlight}>
        <Text style={styles.productTitle}>Picanha</Text>
        <Image source={require('../../../assets/busca/carnes.png')} style={styles.productImage} />
        <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)} style={styles.favoriteIcon}>
          <FontAwesome name={isFavorite ? 'heart' : 'heart-o'} size={24} color={isFavorite ? 'red' : 'gray'} />
        </TouchableOpacity>
      </View>

      <View style={styles.sortOptions}>
        <TouchableOpacity onPress={() => sortMarkets('price')} style={styles.sortButton}>
          <Text style={sortOption === 'price' ? styles.activeSortText : styles.sortText}>Preço</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => sortMarkets('distance')} style={styles.sortButton}>
          <Text style={sortOption === 'distance' ? styles.activeSortText : styles.sortText}>Distância</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.marketList}>
        {markets.map((market) => (
          <View key={market.id} style={styles.marketCard}>
            <View>
              <Text style={styles.marketName}>{market.name}</Text>
              <Text style={styles.marketAddress}>{market.address}</Text>
              <Text style={styles.marketPrice}>{market.price}</Text>
            </View>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => handleAddToCart(market)}
            >
              <Text style={styles.addToCartText}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}