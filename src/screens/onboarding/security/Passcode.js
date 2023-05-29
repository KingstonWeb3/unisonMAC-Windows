import {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IOSback from '../../../assets/images/iosback.svg';

function Passcode({ navigation }) {

  const screenWidth = Dimensions.get('window').width;
  const [firstPin, setFirstPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [isConfirming, setIsConfirming] = useState(false);

  const addToPin = (num) => {
    if (isConfirming) {
      if (confirmPin.length < 4) {
        setConfirmPin(prevState => {
          const newPin = prevState + num;
          if (newPin.length === 4) {
            if (newPin !== firstPin) {
              Alert.alert('Error', 'PIN does not match');
              setConfirmPin('');
            } else {
              // Here you can store PIN, e.g. in secure AsyncStorage or in Redux state
              Alert.alert('Success', 'PIN is set');
              // Navigate to Biometric screen once PIN is successfully set
              navigation.navigate('Biometric');
            }
          }
          return newPin;
        });
      }
    } else {
      if (firstPin.length < 4) {
        setFirstPin(prevState => {
          const newPin = prevState + num;
          if (newPin.length === 4) {
            setIsConfirming(true);
            // Add alert here
            Alert.alert('Notice', 'Please re-enter your PIN');
          }
          return newPin;
        });
      }
    }
  };

  const removeLastDigit = () => {
    if (isConfirming) {
      setConfirmPin(prevState => prevState.slice(0, -1));
    } else {
      setFirstPin(prevState => prevState.slice(0, -1));
    }
  };

  return(
    <SafeAreaView style={styles.container}>

        <Text style={styles.h1}>Create a pincode to protect your wallet</Text>

        <View style={styles.pincodeContainer}>
  <View style={styles.pinContainer}>
    {[1, 2, 3, 4].map((i) => (
      <View key={i} style={[styles.pin,(isConfirming ? confirmPin : firstPin).length >= i ? styles.filledPin : {},]}/>))}
  </View>
  <View style={styles.numbersContainer}>
{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
<TouchableOpacity key={num} style={styles.numberButton} onPress={() => addToPin(num)}>
  <Text style={styles.numberButtonText}>{num}</Text>
</TouchableOpacity>
))}
<View style={{flex:1}}></View>
<TouchableOpacity style={styles.numberButton} onPress={() => addToPin(0)}>
<Text style={styles.numberButtonText}>0</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.numberButton} onPress={removeLastDigit}>
</TouchableOpacity>
</View>
  
</View>

    </SafeAreaView>
)}

export default Passcode;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',paddingHorizontal:15,paddingVertical:60,flex:1,alignItems:'center',justifyContent:'space-between',
    },
    h1:{
      fontSize:35,color:'white',fontFamily:'B', alignSelf:'center',textAlign:'center'
  },
  textInput:{
      backgroundColor:'white',
      height:50,
      borderRadius:'10%'
  },
  button:{
      backgroundColor: 'white',  
      height:50, 
      justifyContent:'center',  
      borderRadius: 30,
      width:'90%',
  },
  buttonText:{
      color:'black',
      textAlign:'center',
      fontSize:20,
      fontFamily:'M',
  },
  pincodeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    width:'60%',
    alignSelf: 'center',
  },
  pin: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth:1,
    borderColor:'white',
  },
  filledPin: {
    backgroundColor: 'white',
  },
  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
    width: '80%',
  },
  numberButton: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: 'white',
  },
  numberButtonText: {
    fontSize: 24,
    color:'white',
  },
  clearButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F00',
    marginBottom: 20,
  },
  clearButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0F0',
  },
  nextButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  });