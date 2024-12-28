import { useState } from 'react';
import { TextInput, View, TouchableOpacity, FlatList, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { useNavigation } from "@react-navigation/native";

export default function SearchScreen() {
  const navigation = useNavigation() as any;
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const products = [
    { name: 'Laranja Lima', image: require('../../../assets/busca/laranja.png') },
    { name: 'Picanha', image: require('../../../assets/busca/carnes.png') },
    { name: 'Alface Americana', image: require('../../../assets/busca/alface.png') },
    { name: 'Maçã', image: require('../../../assets/busca/maça.png') },
    { name: 'Toddy', image: require('../../../assets/busca/toddy.png') },
    { name: 'Melancia', image: require('../../../assets/busca/melancia.png') },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderProductItem = ({ item }: { item: { name: string; image: any } }) => {
    const isSelected = selectedCategory === item.name;
    return (
      <TouchableOpacity
        style={[styles.productButton, isSelected && styles.selectedProductButton]}
        onPress={() => {
          if (item.name === 'Laranja Lima') {
            navigation.navigate("laranja");
          } else if (item.name === 'Picanha') {
            navigation.navigate("picanha");
          } else if (item.name === 'Alface Americana') {
            navigation.navigate("Alface");
          } else if (item.name === 'Maçã') {
            navigation.navigate("maca");
          } else if (item.name === 'Toddy') {
            navigation.navigate("toddy");
          } else if (item.name === 'Melancia') {
            navigation.navigate("melancia");
          }
        }}
      >
        <View style={styles.productItem}>
          <Image
            source={item.image}
            style={styles.productImage}
          />
          <View style={styles.productTextContainer}>
            <Text style={[styles.productText, isSelected && styles.selectedProductText]}>
              {item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logos/logo.png')} style={styles.logo} />
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#aaa" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Busque por produtos, mercados..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.categoriesContainer}>
        <FlatList
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.categoriesList}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {searchQuery && filteredProducts.length === 0 && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsText}>Nenhum resultado encontrado para: "{searchQuery}"</Text>
        </View>
      )}
    </View>
  );
}
