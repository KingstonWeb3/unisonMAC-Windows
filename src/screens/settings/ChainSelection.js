import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

function ChainSelection({ navigation }) {
  const [isPressed, setIsPressed] = useState(Array(8).fill(false));

  const handlePress = (index) => {
    setIsPressed((prevState) =>
      prevState.map((state, idx) => (idx === index ? !state : state)));};

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => navigation.navigate('Home')} style={styles.h1}>Choose your blockchains?</Text>
      </View>

      <View style={styles.blockchainbox}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {['Ethereum', 'Solana', 'Bitcoin', 'Arbitrum'].map((chain, index) => (
            <TouchableOpacity key={chain} style={[styles.clickableBox, { backgroundColor: isPressed[index] ? 'grey' : 'black' }]} onPress={() => handlePress(index)}>
              <Text style={{ color: 'white' }}>{chain}</Text>
            </TouchableOpacity>))}
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
          {['Avalanche', 'Optimism', '?', 'Arbitrum'].map((chain, index) => (
            <TouchableOpacity key={chain + index} style={[styles.clickableBox, { backgroundColor: isPressed[index + 4] ? 'grey' : 'black' }]} onPress={() => handlePress(index + 4)}>
              <Text style={{ color: 'white' }}>{chain}</Text>
            </TouchableOpacity>))}
        </View>
      </View>

      <Pressable onPress={() => navigation.navigate('Biometric')} style={styles.button} >
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>

    </SafeAreaView>
  );
}

export default ChainSelection;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',paddingHorizontal:15,paddingVertical:40,flex:1,alignItems:'center',justifyContent:'space-between',
  },
  h1:{
    fontSize:40,color:'white',fontFamily:'B',
},
  clickableBox: {
    borderColor: 'white',
    borderWidth: 1,
    width:70,
    height:50,
    alignItems:'center',
    borderRadius: 5,
    justifyContent: 'center',
  },
  blockchainbox:{
    marginBottom:50,
    marginHorizontal:20,
    width:'90%',
  },
  button: {
    backgroundColor: 'white',
    height:50,
    justifyContent: 'center',
    borderRadius: 30,
    width:'90%',
    alignSelf:'center',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'M',
  },
});