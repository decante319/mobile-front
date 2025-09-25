
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import weather from '../mockData/weather.json';

<Text>{weather.tomorrow}</Text>

export default function Home({ navigation }) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Maono — Farmer App</Text>

      <View style={s.card}>
        <Text style={s.cardTitle}>Weather</Text>
        <Text>⛅ Rain expected tomorrow. Advice: Delay planting 1 day.</Text>
      </View>

      <View style={s.row}>
        <Button title="Crop Scan" onPress={() => navigation.navigate('CropScan')} />
        <Button title="Marketplace" onPress={() => navigation.navigate('Marketplace')} />
      </View>

      <View style={s.row}>
        <Button title="Finance" onPress={() => navigation.navigate('Finance')} />
        <Button title="Logs" onPress={() => navigation.navigate('Logs')} />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f4f7fb' },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
  card: { padding: 12, backgroundColor: '#fff', borderRadius: 8, marginBottom: 12 },
  cardTitle: { fontWeight: '700', marginBottom: 6 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }
});
