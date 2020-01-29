import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import './GlobalStyles';
import { TextInputMask } from 'react-native-masked-text'
import GlobalStyles from './GlobalStyles';

export default function App() {

  const [gasValue, setGasValue] = useState(0);
  const [ethValue, setEthValue] = useState(0);

  function calculateAnswer(){
    
  }
  return ( 
  <>
    {/* <StatusBar barStyle="dark-content" backgroundColor="#330066" /> */}
      <View style={styles.container}>
      <View style={styles.bothPricesContainer} >
      <View style={styles.block}>
        <Text style={styles.mainText}>Preço da gasolina:</Text>
        <TextInputMask
          style={styles.input}
          maxLength={7}
          type={'money'}
          value={gasValue}
          includeRawValueInChangeText={true}
          onChangeText={(text, rawText) => {
            setGasValue(rawText);
          }}/>
       </View>

       <View style={styles.block}>
        <Text style={styles.mainText}>Preço do etanol:</Text>
        <TextInputMask
          style={styles.input}
          maxLength={7}
          type={'money'}
          value={ethValue}
          includeRawValueInChangeText={true}
          onChangeText={(text, rawText) => {
            setEthValue(rawText);
          }}/>
       </View>
       </View>

        <Text style={styles.answerText}> {ethValue  <
           (70/100 * gasValue) ? "Está compensando o etanol!" : "A gasolina está compensando!"} </Text>

      </View>
  </>
  );
}

const styles = StyleSheet.create({

    block: {
      margin: 20,
    },
    bothPricesContainer: {
      margin: 0, 
    },
    container: {
    paddingTop: 60,
    justifyContent: "center",

    flex: 1,
    alignContent: "center",
    backgroundColor: GlobalStyles.colors.oldBlue,

  },
  input: {
    margin: 20,
    alignSelf: "stretch",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: GlobalStyles.colors.offWhite,
    borderWidth: 4,
    borderRadius: 50,
    height: 90,
    borderColor: GlobalStyles.colors.almostClear,
    fontSize: 42,
    color: GlobalStyles.colors.oldGray
  },
  mainText: {
    color: GlobalStyles.colors.oldGray,
    fontSize: 34,
    alignSelf: "center",
    fontFamily: "monospace",
    textShadowColor: GlobalStyles.colors.lightGray,
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  answerText: {
    textShadowColor: 'rgba(0, 30, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    margin: 20,
    fontSize: 44,
    fontFamily: "monospace",
    fontWeight: "bold",
    color: GlobalStyles.colors.green,
    justifyContent: "center",
    textAlign: "center"
  }
});
