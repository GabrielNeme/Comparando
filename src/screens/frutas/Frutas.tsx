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
    { name: 'Maçã', image: require('../../../assets/busca/maça.png') },
    { name: 'Melancia', image: require('../../../assets/busca/melancia.png') },
    { name: 'Melão', image: require('../../../assets/busca/melao.png') },
    { name: 'Limão', image: require('../../../assets/busca/limao.png') },
    { name: 'Ameixa', image: require('../../../assets/busca/ameixa.png') },
    { name: 'Banana', image: require('../../../assets/busca/banana.png') },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderProductItem = ({ item, index }: { item: { name: string; image: any }; index: number }) => {
    const isSelected = selectedCategory === item.name;
    const isLastItem = index === filteredProducts.length - 1; // Verifica se é o último item da lista
  
    return (
      <TouchableOpacity
        style={[styles.productButton, isSelected && styles.selectedProductButton, isLastItem && styles.lastProductButton]} // Aplica o estilo do último item
        onPress={() => {
          if (item.name === 'Laranja Lima') {
            navigation.navigate("laranja");
          } else if (item.name === 'Maçã') {
            navigation.navigate("maca");
          } else if (item.name === 'Melancia') {
            navigation.navigate("melancia");
          } else if (item.name === 'Melão') {
            navigation.navigate("melao");
          } else if (item.name === 'Limão') {
            navigation.navigate("limao");
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
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Image source={require('../../../assets/logos/logo.png')} style={styles.logo} />

      <View style={styles.categoriesContainer}>
        <FlatList
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.categoriesList}
          showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  );
}
