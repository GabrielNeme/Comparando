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
    { name: 'Filé Mignon', image: require('../../../assets/busca/file_mignon.png') },
    { name: 'Picanha', image: require('../../../assets/busca/carnes.png') },
    { name: 'Alcatra', image: require('../../../assets/busca/alcatra.png') },
    { name: 'Coxão Mole', image: require('../../../assets/busca/coxao_mole.png') },
    { name: 'Fraldinha', image: require('../../../assets/busca/fraldinha.png') },
    { name: 'Costela', image: require('../../../assets/busca/costela.png') },
    { name: 'Cupim', image: require('../../../assets/busca/cupim.png') },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderProductItem = ({ item, index }: { item: { name: string; image: any }; index: number }) => {
    const isSelected = selectedCategory === item.name;
    const isLastItem = index === filteredProducts.length - 1;

    return (
      <TouchableOpacity
        style={[styles.productButton, isSelected && styles.selectedProductButton, isLastItem && styles.lastProductButton]}
        onPress={() => {
          if (item.name === 'Filé Mignon') {
            navigation.navigate("fileMignon");
          } else if (item.name === 'Picanha') {
            navigation.navigate("picanha");
          } else if (item.name === 'Alcatra') {
            navigation.navigate("alcatra");
          } else if (item.name === 'Coxão Mole') {
            navigation.navigate("coxaoMole");
          } else if (item.name === 'Fraldinha') {
            navigation.navigate("fraldinha");
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
