import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { View,Text } from 'react-native'



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello Word</Text>
      <StatusBar style="auto" />
    </View>
  );
}

