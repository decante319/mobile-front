
How to run locally:

1. Install Node & Expo CLI if you don't have it:
   - `npm install -g expo-cli` (or use `npx` commands)
2. From `mobile/` folder:
   - `npm install` (if package.json present) or run the steps below.
3. Recommended quick flow:
   - `npx create-expo-app .`  (only if you didn't initialize earlier)
   - `npx expo install expo-image-picker @react-native-async-storage/async-storage react-native-screens react-native-safe-area-context`
   - `npm install @react-navigation/native @react-navigation/native-stack`
   - `npx expo start` → open in Expo Go on phone

Notes:
- This is a demo (simulated analysis). It uses AsyncStorage for logs.
- If camera doesn't open in browser, use the Expo Go app on your phone.
