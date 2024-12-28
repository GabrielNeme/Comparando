import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    paddingHorizontal: 20,
    marginTop: -20,
    marginLeft: -20,
    height: 120,
    width: '120%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFCC00',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  logo: {
    width: 120,
    height: 90,
    marginTop: 25,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  carrinho: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginLeft: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    marginTop: 22,
    marginLeft: 35,
    fontWeight: 'bold',
  },
  feedItem: {
    paddingHorizontal: 20,
    flex: 1,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
  },
  imageContainer: {
    position: 'relative',
  },
  feedImage: {
    width: '100%',
    height: 210,
    borderRadius: 20,
    marginBottom: 10,
  },
  // Contêiner das Categorias e Botões
  categoriesContainer: {
    marginBottom: 10,
  },
  categoryTitle: {
    marginLeft: 35,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryList: {
    marginLeft: 20,
    marginBottom: 170,
  },
  categoryButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginBottom: 10,
  },
  categoryButton: {
    width: 78,
    height: 78,
    marginRight: 8,
    backgroundColor: '#BFBFBF',
    paddingHorizontal: 20,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: 40,
    height: 40,  // Ajuste conforme o tamanho da imagem desejado
    resizeMode: 'contain',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: -8,
    color: '#000',
    textAlign: 'center',
  },
  cartSidebar: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 300,
    backgroundColor: '#fff',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    zIndex: 10,
  },
});
