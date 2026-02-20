import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProductContext } from '../context/ProductContext';
import ProductItem from '../components/ProductItem';
import StateHandler from '../components/StateHandler';

const ProductScreen = () => {
  const { products, loading, error, reload } = useContext(ProductContext);

  return (
    <SafeAreaProvider style={styles.container}>
      <Text style={styles.header}>BananaPedia Products</Text>
      <StateHandler
        loading={loading}
        error={error}
        empty={products.length === 0}
        onRetry={reload}
      >
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <ProductItem item={item} />}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </StateHandler>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#3a3a3a' },
  header: {
    fontSize: 22,
    padding: 16,
    paddingTop: 32,
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: '#f3e300',
    color: '#000000',
  },
  list: {
    paddingBottom: 20,
  },
});

export default ProductScreen;
