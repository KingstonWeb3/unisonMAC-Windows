import * as  React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font'
import { SafeAreaView } from 'react-native-safe-area-context';

function Difference({ navigation }) {

    const [fontsLoaded] = useFonts({'R': require('../../assets/fonts/SFproRegular.otf'), 'M': require('../../assets/fonts/SFproMedium.otf'), 'B': require('../../assets/fonts/SFproBold.otf')});


    return(
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text onPress={() => navigation.navigate('Home')} style={{ fontSize: 32, fontFamily:'B', color:'white' }} >uKey</Text>
                <Text style={{color:'white', marginVertical:10, fontFamily:'M', fontSize:18}}>MPC Decentralized Storage (The New Way)</Text>
                <Text style={{color:'white', fontFamily:'R'}}>The Unison uKey uses decentralized storage to create a ...</Text>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text onPress={() => navigation.navigate('Home')} style={{ fontSize: 32, fontFamily:'B', color:'white' }} >Seed Phrase</Text>
                <Text style={{color:'white', marginVertical:10, fontFamily:'M', fontSize:18}}>12 Word Neumatic Phrase (The Old Way)</Text>
                <Text style={{color:'white', fontFamily:'R'}}>Write down your 12 word seed phrase generated by ...</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>

        </SafeAreaView>
)}

export default Difference;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15,
        paddingVertical:40,
        backgroundColor:'#1E1E1E', 
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
    },
    button:{
        backgroundColor: 'white', 
        width:'90%', 
        height: 50, 
        justifyContent:'center',  
        borderRadius: 30,
        marginVertical:10,
    },
    buttonText:{
        color:'black',
        textAlign:'center',
        fontSize:20,
        fontFamily:'M',
    },
})