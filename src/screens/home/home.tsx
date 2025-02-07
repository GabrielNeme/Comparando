import { View, Image, FlatList, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function FeedScreen() {
  const navigation = useNavigation();

  const feedData = [
    { id: '1', image: require('../../../assets/feed/promocao1.png') },
  ];

  const categories = [
    { id: '1', name: 'Frutas', icon: require('../../../assets/feed/icon_frutas.png'), screen: 'FrutasScreen' },
    { id: '2', name: 'Carnes', icon: require('../../../assets/feed/icon_carnes.png'), screen: 'CarnesScreen' },
    { id: '3', name: 'Vegetais', icon: require('../../../assets/feed/icon_vegetais.png'), screen: 'VegetaisScreen' },
    { id: '4', name: 'Pães', icon: require('../../../assets/feed/icon_paes.png'), screen: 'PaesScreen' },
    { id: '5', name: 'Massas', icon: require('../../../assets/feed/icon_massas.png'), screen: 'MassasScreen' },
    { id: '6', name: 'Outros', icon: require('../../../assets/feed/icon_outros.png'), screen: 'OutrosScreen' },
  ];

  const renderCategoryItem = ({ item }: { item: { id: string; name: string; icon: any; screen: string } }) => {
    const handlePress = () => {
      navigation.navigate(item.name as never);
    };

    return (
      <View style={styles.categoryButtonContainer}>
        <TouchableOpacity style={styles.categoryButton} onPress={handlePress}>
          <Image source={item.icon} style={styles.categoryImage} />
        </TouchableOpacity>
        <Text style={styles.categoryText}>{item.name}</Text>
      </View>
    );
  };

  const renderFeedItem = ({ item }: { item: { id: string; image: any } }) => {
    return (
      <View style={styles.feedItem}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.feedImage} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/logos/logo.png')} style={styles.logo} />
        <Image source={require('../../../assets/feed/icon_carrinho.png')} style={styles.carrinho} />
      </View>

      <View>
        <Text style={styles.title}>Promoções{'\n'}do Dia</Text>
      </View>

      <FlatList
        data={feedData}
        renderItem={renderFeedItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.categoriesContainer}>
        <Text style={styles.categoryTitle}>Categorias</Text>

        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        />
      </View>
    </View>
  );
}
