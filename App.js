import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar } from 'react-native';
import Style from './Style';

export default function App() {


  const [gasValue, setGasValue] = useState("000");
  const [ethValue, setEthValue] = useState("000");

  function gasValueChanged(){

  }

  function ethValueChanged(){

  }

  function formatValue(val){
    return `R$ ${parseFloat(val)/100}`
  }




  return ( 
  <>
    {/* <StatusBar barStyle="dark-content" backgroundColor="#330066" /> */}
    <View style={styles.containerAll}>
      <View style={styles.container}>
        <Text style={styles.mainText}>Preço da gasolina:</Text>
        <TextInput style={styles.input} backgroundColor="black" onChange={gasValueChanged}>{gasValue}</TextInput>
        <Text style={styles.mainText}>Preço do etanol:</Text>
        <TextInput style={styles.input} backgroundColor="black" onChange={ethValueChanged}>{ethValue}</TextInput>
        <Text style={styles.answerText}>Nesse caso, o etanol está compensando!</Text>

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
    padding: 20,
    borderRadius: 10,
    fontSize: 26
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
