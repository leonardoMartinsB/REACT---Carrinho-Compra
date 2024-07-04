import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CartContext } from '../../contexts/CartContext';
import CardItem from '../../components/CardItem';

export default function Cart() {
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Seu Carrinho</Text>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={() => <Text style={styles.emptyCart}>Nenhuma camisa adicionado no carrinho...</Text>}
        renderItem={({ item }) => (
          <CardItem
            data={item}
            addAmount={() => addItemCart(item)}
            removeAmount={() => removeItemCart(item)}
          />
        )}
        ListFooterComponent={() => (
          <View style={styles.footer}>
            <Text style={styles.total}>Total: R$ {total}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#588157',
    padding: 14,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
  emptyCart: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
    color: 'white',
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: 'white',
    marginTop: 20,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
