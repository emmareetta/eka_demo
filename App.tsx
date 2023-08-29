import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

export default function App() {
  const [number, setNumber] = useState("");
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) +1);
  const [guesses, setGuesses] = useState(0);

  const [result, setResult] = useState("");

  const guessNumber = () => {
    setGuesses(guesses + 1)
    if (parseInt(number) < randomNumber){
      setResult(`Your guess ${number} is too low`)
    } else if (parseInt(number) > randomNumber){
      setResult(`Your guess ${number} is too high`)
    } else {
      Alert.alert("", `You guessed the number in ${guesses} guesses`, [
        {text: 'OK', onPress: () => {
          setNumber("")
          setRandomNumber(Math.floor(Math.random() * 100) +1)
          setGuesses(0)
          setResult("")
        }},
      ]);
    }
  }


  return (
    <View style={styles.container}>
      {result ? <Text>{result}</Text> : <Text>Guess a number between 1 - 100</Text>}
      <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text => setNumber(text)} value = {number} inputMode='numeric'/>
      <View style={{width: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Button
          onPress={guessNumber}
          title="MAKE GUESS"
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


