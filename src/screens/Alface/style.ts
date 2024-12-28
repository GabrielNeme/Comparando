import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: -20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  backButton: {
    top: 40,
    margin: 10,
    padding: 5,
  },
  productHighlight: {
    alignItems: 'center',
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  favoriteIcon: {
    position: 'absolute',
    right: 20,
  },
  sortOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  sortButton: {
    marginHorizontal: 10,
    padding: 5,
  },
  sortText: {
    fontSize: 16,
    color: 'gray',
  },
  activeSortText: {
    fontSize: 16,
    color: '#2c2c2c',
    fontWeight: 'bold',
  },
  marketList: {
    paddingHorizontal: 10,
  },
  marketCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  marketName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  marketAddress: {
    fontSize: 14,
    color: 'gray',
  },
  marketPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  addToCartButton: {
    backgroundColor: '#FFCC00',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
  },
});
