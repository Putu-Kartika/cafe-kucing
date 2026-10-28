import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import OrderSummary from './components/OrderSummary';
import MenuItem from './components/MenuItem';

const DAFTAR_MENU = [
  { id: '1', nama: 'Kopi Susu Catnip', harga: 20000 },
  { id: '2', nama: 'Matcha Paw Latte', harga: 25000 },
  { id: '3', nama: 'Croissant Ikan Tuna', harga: 18000 },
];

export default function App() {
  const [totalPesanan, setTotalPesanan] = useState(0);

  const tambahPesanan = () => {
    setTotalPesanan(totalPesanan + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Kafe Kucing</Text>
      <OrderSummary totalCount={totalPesanan} />
      <ScrollView>
        {DAFTAR_MENU.map((item) => (
          <MenuItem
            key={item.id}
            nama={item.nama}
            harga={item.harga}
            onTambahPesanan={tambahPesanan}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  judul: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});