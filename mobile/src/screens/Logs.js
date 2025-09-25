
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    (async () => {
      const l = JSON.parse(await AsyncStorage.getItem('maono_logs') || '[]');
      setLogs(l);
    })();
  }, []);

  return (
    <View style={s.container}>
      <Text style={s.title}>Activity Logs</Text>
      <FlatList data={logs} keyExtractor={(item, idx) => idx+''} renderItem={({ item }) => (
        <View style={s.item}>
          <Text style={{ fontWeight: '700' }}>{item.time}</Text>
          <Text>{item.type || 'scan'} — {item.label || item.status}</Text>
        </View>
      )} />
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f4f7fb' },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  item: { backgroundColor: '#fff', padding: 10, borderRadius: 8, marginBottom: 8 }
});
