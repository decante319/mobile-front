
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Finance() {
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState(null);

  const requestLoan = () => {
    const a = parseInt(amount || '0');
    if (!a) return alert('Enter amount');
    // fake decision rule
    setTimeout(() => {
      const ok = a <= 50000;
      setStatus(ok ? 'Approved (demo)' : 'Rejected (demo) — too large for micro-loan');
    }, 700);
  };

  return (
    <View style={s.container}>
      <Text style={s.title}>Finance — Micro-loan (demo)</Text>
      <View style={s.card}>
        <Text>Request amount (KES)</Text>
        <TextInput keyboardType="number-pad" value={amount} onChangeText={setAmount} style={s.input} />
        <Button title="Request Loan" onPress={requestLoan} />
      </View>

      {status && <View style={s.card}><Text style={{ fontWeight: '700' }}>{status}</Text></View>}
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f4f7fb' },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  card: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 8 },
  input: { padding: 8, borderRadius: 8, borderWidth: 1, borderColor: '#e6edf3', marginTop: 8 }
});
