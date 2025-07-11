import React, { useContext, useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../context/CartContext";
import { styles } from "./styles";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.92;

export default function FeedScreen() {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const navigation = useNavigation();

  const feedData = [
    { id: "1", image: require("../../../assets/feed/promocao1.png") },
    { id: "2", image: require("../../../assets/feed/promocao2.png") },
    { id: "3", image: require("../../../assets/feed/promocao3.png") },
  ];

  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % feedData.length;
        flatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [feedData]);

  const renderFeedItem = ({ item, index }: any) => {
    const inputRange = [
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 1) * ITEM_WIDTH,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.92, 1, 0.92],
      extrapolate: "clamp",
    });

    return (
      <Animated.View style={[styles.feedItem, { transform: [{ scale }] }]}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.feedImage} />
        </View>
      </Animated.View>
    );
  };

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / ITEM_WIDTH);
    setActiveIndex(index);
  };

  const categories = [
    {
      id: "1",
      name: "Frutas",
      icon: require("../../../assets/feed/icon_frutas.png"),
      screen: "FrutasScreen",
    },
    {
      id: "2",
      name: "Carnes",
      icon: require("../../../assets/feed/icon_carnes.png"),
      screen: "CarnesScreen",
    },
    {
      id: "3",
      name: "Vegetais",
      icon: require("../../../assets/feed/icon_vegetais.png"),
      screen: "VegetaisScreen",
    },
    {
      id: "4",
      name: "Pães",
      icon: require("../../../assets/feed/icon_paes.png"),
      screen: "PaesScreen",
    },
    {
      id: "5",
      name: "Massas",
      icon: require("../../../assets/feed/icon_massas.png"),
      screen: "MassasScreen",
    },
    {
      id: "6",
      name: "Outros",
      icon: require("../../../assets/feed/icon_outros.png"),
      screen: "OutrosScreen",
    },
  ];

  const renderCategoryItem = ({ item }: any) => {
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

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../../assets/logos/logo.png")}
          style={styles.logo}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Cart" as never)}>
          <View style={{ position: "relative" }}>
            <Image
              source={require("../../../assets/feed/icon_carrinho.png")}
              style={styles.carrinho}
            />
            <View style={styles.qtdCart}>
              <Text style={styles.qtdCartText}>{totalItems}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Promoções{"\n"}do Dia</Text>

      {/* Carousel */}
      <Animated.FlatList
        ref={flatListRef}
        data={feedData}
        renderItem={renderFeedItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        scrollEventThrottle={16}
        getItemLayout={(_, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
        contentContainerStyle={{
          paddingHorizontal: (Dimensions.get("window").width - ITEM_WIDTH) / 2,
        }}
        style={{ height: 240 }}
      />

      {/* Dots indicator */}
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 8, marginBottom: 16 }}>
        {feedData.map((_, index) => (
          <View
            key={index}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 4,
              backgroundColor: index === activeIndex ? "#333" : "#ccc",
            }}
          />
        ))}
      </View>

      {/* Categories */}
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
