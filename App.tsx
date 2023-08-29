import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [luku1, setLuku1] = useState("");
  const [luku2, setLuku2] = useState("");

  const [result, setResult] = useState<number | undefined>(undefined);

  const laskeYhteen = () => {
    setResult(parseInt(luku1) + parseInt(luku2)) 
  }

  const laskeErotus = () => {
    setResult(parseInt(luku1) - parseInt(luku2)) 
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text => setLuku1(text)} value = {luku1} inputMode='numeric'/>
      <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text => setLuku2(text)} value = {luku2} inputMode='numeric'/>
      <View style={{width: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Button
          onPress={laskeYhteen}
          title="+"
          />
        <Button
          onPress={laskeErotus}
          title="-"
          />
      </View>
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


