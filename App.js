import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Style from './Style';
import NumericInput from '@wwdrew/react-native-numeric-textinput';

export default function App() {

  const [gasValue, setGasValue] = useState("0.00");
  const [ethValue, setEthValue] = useState("0.00");

  return ( 
  <>
    {/* <StatusBar barStyle="dark-content" backgroundColor="#330066" /> */}
    <View style={styles.containerAll}>
      <View style={styles.container}>
        <Text style={styles.mainText}>Preço da gasolina:</Text>
        <NumericInput style={styles.input}  
          type='decimal'
          decimalPlaces={2}
          value={gasValue}
          onUpdate={(value) => setGasValue(value)}

          />
        <Text style={styles.mainText}>Preço do etanol:</Text>
        <NumericInput style={styles.input}  
          type='decimal'
          decimalPlaces={2}
          value={ethValue}
          onUpdate={(value) => setEthValue(value)}

          />
        <Text style={styles.answerText}> {parseFloat(ethValue)  <
           (70/100 * parseFloat(gasValue)) ? "Está compensando o etanol!" : "A gasolina está compensando!"} </Text>

      </View>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  containerAll: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: "flex-end"
  },
  container: {
    flex: 0.9,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: "white",
    borderColor: "black",
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    fontSize: 26,
    color: "#000"
  },
  mainText: {
    color: "#000",
    padding: 10,
    fontSize: 30
  },
  answerText: {
    fontSize: 30,
    color: "red",
    padding: 40,
    textAlign: "center"
  }
});
