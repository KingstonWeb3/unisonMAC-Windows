import {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font'

function WhichMethod({ navigation }) {

    const screenWidth = Dimensions.get('window').width;
    const [fontsLoaded] = useFonts({'R': require('../../assets/fonts/SFproRegular.otf'), 'M': require('../../assets/fonts/SFproMedium.otf'), 'B': require('../../assets/fonts/SFproBold.otf')});
    
    return(
        <SafeAreaView style={styles.container}>

            <View style={{alignItems:'center', marginTop:150}}>
                <Text style={styles.h1}>Which method do you want to use to import your existing wallet</Text>
            </View>

            

            <View>
            <TouchableOpacity onPress={() => navigation.navigate('SeedPhrase')} style={{backgroundColor: 'white', height:50, justifyContent:'center', borderRadius:30,marginBottom:15,width: screenWidth * 0.9}}>
                    <Text style={styles.buttonText}>Import Secret Recovery Phrase</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PrivateKey')} style={{height: 50, justifyContent:'center', borderRadius: 30, width:'90%',borderWidth:1, borderColor:'white', width: screenWidth * 0.9}}>
                    <Text style={styles.buttonTextInvert}>Import Private Key</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
)}

export default WhichMethod;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',paddingHorizontal:15,paddingVertical:40,flex:1,alignItems:'center',justifyContent:'space-between',
    },
    h1:{
        fontSize:40,color:'white',fontFamily:'B',
    },
    textInput:{
        backgroundColor:'white',
        height:50,
        borderRadius:'10%'
    },
    buttonText:{
        color:'black',textAlign:'center',fontSize:20,fontFamily:'M',
    },
    buttonTextInvert:{
        color:'white',textAlign:'center',fontSize:20,fontFamily:'M',
    },
})