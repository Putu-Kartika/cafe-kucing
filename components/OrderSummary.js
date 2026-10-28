import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderSummary = ({ totalCount }) => {
  return (
    <View style={styles.box}>
      <Text>Total Item Dipesan: {totalCount}</Text>
      {totalCount >= 5 ? (
        <Text style={styles.promo}>🎉 Selamat! Anda Mendapatkan Diskon 10%</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
  },
  promo: {
    color: 'green',
  },
});

export default OrderSummary;