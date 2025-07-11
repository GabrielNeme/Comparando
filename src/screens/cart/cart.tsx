import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { CartContext, Product } from "../context/CartContext";
import { FontAwesome } from "@expo/vector-icons";

export default function CartScreen() {
  const navigation = useNavigation();
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const calculateTotal = (): string => {
    const total = cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price.replace("R$", "").replace(",", "."));
      return acc + price * item.quantity;
    }, 0);
    return `R$ ${total.toFixed(2).replace(".", ",")}`;
  };
  const groupByMarket = (): {
    [key: string]: { items: Product[]; total: number };
  } => {
    const grouped: { [key: string]: { items: Product[]; total: number } } = {};

    cartItems.forEach((item) => {
      const price = parseFloat(item.price.replace("R$", "").replace(",", "."));
      const subtotal = price * item.quantity;

      if (!grouped[item.market]) {
        grouped[item.market] = { items: [item], total: subtotal };
      } else {
        grouped[item.market].items.push(item);
        grouped[item.market].total += subtotal;
      }
    });

    return grouped;
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header fixo */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../../assets/logos/logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Meu Carrinho</Text>
      </View>

      {/* Lista scrollable */}
      <ScrollView
        contentContainerStyle={styles.cartContent}
        style={{ flex: 1 }}
      >
        {cartItems.length === 0 ? (
          <>
            <Image
              source={require("../../../assets/feed/icon_carrinho.png")}
              style={styles.carrinho}
            />
            <Text style={styles.cartText}>Seu carrinho está vazio.</Text>
          </>
        ) : (
          Object.entries(groupByMarket()).map(([marketName, group], index) => (
            <View key={index} style={{ marginBottom: 20 }}>
              {/* Nome do mercado */}
              <Text
                style={[
                  styles.marketName,
                  { fontWeight: "bold", fontSize: 16 },
                ]}
              >
                {marketName}
              </Text>

              {/* Lista de produtos desse mercado */}
              <FlatList
                data={group.items}
                keyExtractor={(item, idx) => `${item.name}-${idx}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 8, paddingLeft: 4 }}
                renderItem={({ item }) => (
                  <View
                    style={[styles.marketCard, { width: 220, marginRight: 12 }]}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text style={styles.marketName}>{item.name}</Text>
                        <Text style={[styles.marketPrice, { marginTop: 4 }]}>
                          {item.price} x {item.quantity}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => removeFromCart(cartItems.indexOf(item))}
                      >
                        <FontAwesome name="trash" size={20} color="red" />
                      </TouchableOpacity>
                    </View>

                    {/* Botões de quantidade */}
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 10,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() =>
                          updateQuantity(
                            cartItems.indexOf(item),
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        style={styles.qtyButton}
                      >
                        <Text style={styles.qtyButtonText}>–</Text>
                      </TouchableOpacity>

                      <Text style={styles.qtyText}>{item.quantity}</Text>

                      <TouchableOpacity
                        onPress={() =>
                          updateQuantity(
                            cartItems.indexOf(item),
                            item.quantity + 1
                          )
                        }
                        style={styles.qtyButton}
                      >
                        <Text style={styles.qtyButtonText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />

              {/* Total por mercado */}
              <Text style={{ fontWeight: "bold", marginTop: 8 }}>
                Total neste mercado: R${" "}
                {group.total.toFixed(2).replace(".", ",")}
              </Text>
            </View>
          ))
        )}
      </ScrollView>

      {/* Rodapé fixo */}
      {cartItems.length > 0 && (
        <View style={styles.totalPursh}>
          <Text style={styles.totalText}>Total: {calculateTotal()}</Text>

          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Finalizar Compra</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
