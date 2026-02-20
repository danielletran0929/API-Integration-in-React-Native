import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductItem = ({ item }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.category}>{item.category.toUpperCase()}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,
    backgroundColor: '#e7e7e7',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  category: {
    fontSize: 12,
    color: '#888',
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
});

export default ProductItem;
