
import React, { useState } from 'react';
import { View, Text, Button, Image, ActivityIndicator, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CropScan() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    // request camera permissions and capture image
    const res = await ImagePicker.launchCameraAsync({ quality: 0.5, base64: true });
    // older/newer expo returns different shapes — handle both
    const uri = res?.assets?.[0]?.uri ?? res?.uri;
    if (uri) setImage(uri);
  };

  const analyze = async () => {
    if (!image) return alert('Take a photo first');
    setLoading(true);
    setResult(null);

    // simulate analysis (replace with real TFLite / model later)
    setTimeout(async () => {
      const fake = Math.random() > 0.5
        ? { label: 'Leaf Spot', advice: 'Apply fungicide X' }
        : { label: 'Healthy', advice: 'No action required' };

      setResult(fake);

      // store log
      const log = { time: new Date().toLocaleString(), type: 'scan', label: fake.label };
      const old = JSON.parse(await AsyncStorage.getItem('maono_logs') || '[]');
      old.unshift(log);
      await AsyncStorage.setItem('maono_logs', JSON.stringify(old.slice(0, 100)));

      setLoading(false);
    }, 900);
  };

  return (
    <View style={s.container}>
      <Text style={s.title}>Crop Health Scan</Text>
      <View style={s.card}>
        {image ? <Image source={{ uri: image }} style={{ width: '100%', height: 240 }} /> : <Text>No image yet</Text>}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button title="Take Photo" onPress={pickImage} />
        <Button title="Analyze" onPress={analyze} disabled={!image || loading} />
      </View>
      {loading && <ActivityIndicator style={{ marginTop: 12 }} />}
      {result && (
        <View style={s.result}>
          <Text style={{ fontWeight: '700' }}>{result.label}</Text>
          <Text>{result.advice}</Text>
        </View>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f4f7fb' },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  card: { backgroundColor: '#fff', borderRadius: 8, padding: 8, marginBottom: 12 },
  result: { marginTop: 12, backgroundColor: '#fff', padding: 12, borderRadius: 8 }
});
