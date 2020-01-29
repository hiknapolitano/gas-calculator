import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
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
          <View style={styles.iconContainer}>
              <Image style={styles.icon} source={require("./assets/gas-sign.png")}></Image>
              <Text style={styles.initialText}>Digite o preço por litro da gasolina e do etanol em sua cidade, e descubra 
              qual está mais vantajoso no momento. Economize dinheiro.</Text>
          </View>
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

          <View answerContainer>
              <Text style={styles.answerText}> {gasValue > 0 && ethValue > 0 ? ethValue  <
                (70/100 * gasValue) ? "Está compensando o etanol!" : "A gasolina está compensando!" : ""} </Text>
           </View>
      </View>
  </>
  );
}

const styles = StyleSheet.create({

    block: {
      margin: 20,
      marginTop: 0,
    },
    initialText: {
      fontSize: 22,
      marginHorizontal: 70,
      textAlign: "justify",
      fontWeight: "700",
      paddingTop: 50,
      color: GlobalStyles.colors.oldGray,
    },
    iconContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      resizeMode: "contain",
      width: 120,
      height: 120,     
      opacity: 0.8
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
    marginHorizontal: 60,
    marginVertical: 20,
    alignSelf: "stretch",
    justifyContent: "center",
    fontFamily: "serif",
    textAlign: "center",
    backgroundColor: GlobalStyles.colors.offWhite,
    borderWidth: 2,
    borderRadius: 50,
    height: 80,
    borderColor: GlobalStyles.colors.almostClear,
    fontSize: 32,
    color: GlobalStyles.colors.red,
    textShadowColor: GlobalStyles.colors.offRed,
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontWeight: "bold",

  },
  mainText: {
    color: GlobalStyles.colors.oldGray,
    fontSize: 34,
    alignSelf: "center",
    fontFamily: "serif",
    color: GlobalStyles.colors.oldGray,
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 4,
    textShadowColor: 'rgba(0, 30, 0, 0.25)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontWeight: "bold",

    
  },
  answerText: {
    textShadowColor: 'rgba(55, 255, 55, 0.8)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    margin: 5,
    fontSize: 38,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: GlobalStyles.colors.green,
    textAlign: "center"
  },
  answerContainer: {
    flex: 1,
    justifyContent: "center",

  }

});
