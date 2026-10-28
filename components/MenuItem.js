import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MenuItem = ({ nama, harga, onTambahPesanan }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.nama}>{nama}</Text>
      <Text style={styles.harga}>Rp {harga}</Text>
      <Button title="Tambah Pesanan" onPress={onTambahPesanan} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
  nama: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  harga: {
    marginBottom: 4,
  },
});

export default MenuItem;