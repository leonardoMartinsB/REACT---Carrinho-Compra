import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function CardItem({ data, addAmount, removeAmount }) {
  const [amount, setAmount] = useState(data?.amount);

  const handleIncrease = () => {
    addAmount();
    setAmount(amount + 1);
  };

  const handleDecrease = () => {
    if (amount === 0) return;
    removeAmount();
    setAmount(amount - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image style={styles.img} resizeMode="cover" source={{ uri: data.img }} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.price}>R$ {data.price.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.amountContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDecrease}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.amount}>{amount}</Text>
        <TouchableOpacity style={styles.button} onPress={handleIncrease}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#dfdfdf',
    marginBottom: 14,
    padding: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    marginLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    color: 'white'
  },
  price: {
    fontSize: 16,
        color: 'white'

  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#5b7',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
    color: 'white'

  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});
