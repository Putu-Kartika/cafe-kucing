import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MenuItem = (props) => {
  const [qty, setQty] = useState(0);

  const tambah = () => {
    setQty(qty + 1);
    props.onTambahPesanan();
  };

  return (
    <View style={styles.card}>
      <Text style={styles.nama}>{props.nama}</Text>
      <Text>Rp {props.harga}</Text>
      <Text>Jumlah: {qty}</Text>
      <Button title="Tambah Pesanan" onPress={tambah} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  nama: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MenuItem;