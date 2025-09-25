
import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const MOCK = [
  { id: '1', seller: 'Amina', crop: 'Maize', qty: 100, price: 40 },
  { id: '2', seller: 'Joseph', crop: 'Beans', qty: 50, price: 80 }
];

export default function Marketplace() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Marketplace</Text>
      <FlatList
        data={MOCK}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={s.card}>
            <Text style={{ fontWeight: '700' }}>{item.crop} — {item.qty}kg</Text>
            <Text>Seller: {item.seller}</Text>
            <Text>Price: KES {item.price}/kg</Text>
            <View style={{ marginTop: 8 }}>
              <Button title="Contact" onPress={() => alert('Contact simulated')} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f4f7fb' },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  card: { backgroundColor: '#fff', padding: 10, borderRadius: 8, marginBottom: 10 }
});
