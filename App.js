import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import './GlobalStyles';
import { TextInputMask } from 'react-native-masked-text'
import GlobalStyles from './GlobalStyles';

export default function App() {

  const [gasValue, setGasValue] = useState(0);
  const [ethValue, setEthValue] = useState(0);

  return ( 
  <>
    {/* <StatusBar barStyle="dark-content" backgroundColor="#330066" /> */}
      <View style={styles.container}>
          <View style={styles.iconContainer}>

              <Image style={styles.icon} source={require("./assets/gas-sign.png")}></Image>
             
          </View>
      <View style={styles.bothPricesContainer} >
          <View style={styles.block}>
                <Text style={styles.mainText}>Preço da gasolina:</Text>
                <TextInputMask
                  style={[styles.input, gasValue > 0 && ethValue > 0 && ethValue < (70/100 * gasValue) ? styles.badOption : styles.betterOption]}
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
                  style={[styles.input, gasValue > 0 && ethValue > 0 && ethValue >= (70/100 * gasValue) ? styles.badOption : styles.betterOption]}
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
                (70/100 * gasValue) ? "Nesse caso, o etanol está compensando!" : "Nesse caso, a gasolina está compensando!" :
                 "Digite o preço por litro da gasolina e do etanol em sua cidade, e descubra qual está mais vantajoso no momento."} </Text>
           </View>

      </View>
  </>
  );
}

const styles = StyleSheet.create({

    block: {
      margin: 10,
      marginTop: 0,
    },
    initialText: {
      fontSize: 20,
      marginHorizontal: 70,
      textAlign: "justify",
      fontWeight: "700",
      paddingTop: 20,
      color: GlobalStyles.colors.oldGray,
    },
    iconContainer: {
      alignItems: "center",
      justifyContent: "flex-start",
      marginBottom: 30,
    },
    icon: {
      resizeMode: "contain",
      width: 120,
      height: 120,     
      opacity: 0.9
    },
    bothPricesContainer: {
      margin: 0, 
    },

    container: {
    paddingTop: 30,
    justifyContent: "center",

    flex: 1,
    alignContent: "center",
    backgroundColor: GlobalStyles.colors.offWhite,

  },
  input: {
    marginHorizontal: 60,
    marginTop: 20,
    alignSelf: "stretch",
    justifyContent: "center",
    fontFamily: "serif",
    textAlign: "center",
    backgroundColor: GlobalStyles.colors.offWhite,
    borderWidth: 2,
    borderRadius: 50,
    height: 70,
    borderColor: GlobalStyles.colors.almostClear,
    fontSize: 32,
    color: GlobalStyles.colors.yellow,
    textShadowColor: GlobalStyles.colors.offRed,
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontWeight: "bold",

  },

  betterOption: {
    color: GlobalStyles.colors.green,

  },

  badOption: {
    color: GlobalStyles.colors.red,

  },

  mainText: {
    color: GlobalStyles.colors.oldGray,
    fontSize: 30,
    alignSelf: "center",
    fontFamily: "serif",
    color: GlobalStyles.colors.darkGray,
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 4,
    textShadowColor: 'rgba(0, 30, 0, 0.25)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontWeight: "bold",

    
  },
  answerText: {
    textShadowColor: GlobalStyles.colors.oldGray,
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
    fontSize: 28,
    lineHeight: 30,
    marginTop: 40,
    backgroundColor: GlobalStyles.colors.darkGray,
    fontFamily: "sans-serif",
    fontWeight: "800",
    color: GlobalStyles.colors.offWhite,
    padding: 20,
    textAlign: "center",
  },
  answerContainer: {
    flex: 1,
    justifyContent: "center",

  }

});
