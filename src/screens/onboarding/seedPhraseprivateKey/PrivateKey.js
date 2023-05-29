import {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NetworkSelectLarge from '../../../components/networkSelect/NetworkSelectLarge';
import { useFonts } from 'expo-font';

function PrivateKey({ navigation }) {

    const [text, setText] = useState('');
    const screenWidth = Dimensions.get('window').width;

    const [fontsLoaded] = useFonts({'R': require('../../../assets/fonts/SFproRegular.otf'), 'M': require('../../../assets/fonts/SFproMedium.otf'), 'B': require('../../../assets/fonts/SFproBold.otf')});

    return(
        <SafeAreaView style={styles.container}>

            <View/>

            <View style={{width:'90%'}}>
                <NetworkSelectLarge/>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor: '#F8F8F8', width: '100%', height:60, borderRadius:10, paddingHorizontal:15,}}>
                <TextInput onChangeText={setText} value={text} placeholder="Insert private key" placeholderTextColor={'grey'}/>
                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{backgroundColor: 'white', height:50, justifyContent:'center', borderRadius:30,marginBottom:15,width: screenWidth * 0.9}} >
                <Text style={styles.buttonText}>Import Private Key</Text>
            </TouchableOpacity>

        </SafeAreaView>
)}

export default PrivateKey;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',paddingHorizontal:15,paddingVertical:40,flex:1,alignItems:'center',justifyContent:'space-between',
    },
    h1:{
        fontSize:40,color:'white',fontFamily:'B',
    },
    textInput:{
        
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
})