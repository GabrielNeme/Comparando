import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 90,
    marginTop: 25,
    marginLeft: 20,
    resizeMode: 'contain',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  categoriesContainer: {
    flex: 1,
    alignItems: 'center',
  },
  categoriesList: {
    alignItems: 'center',
  },
  productButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#000',
    marginVertical: 10,
    overflow: 'hidden',
  },
  selectedProductButton: {
    backgroundColor: '#e0e0e0',
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  productTextContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  productText: {
    fontSize: 22,
    marginLeft: 10,
    color: '#fff',
  },
  selectedProductText: {
    color: '#000',
    fontWeight: 'bold',
  },
  resultsContainer: {
    marginTop: 20,
  },
  resultsText: {
    fontSize: 16,
    color: '#555',
  },
});
