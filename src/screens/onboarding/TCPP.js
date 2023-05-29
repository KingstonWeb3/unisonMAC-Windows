import {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function TCPP({ navigation }) {

    const [text, setText] = useState('');
    
    return(
        <SafeAreaView style={styles.container}>

            <Text> Privacy Policy / Terms and conditions

            </Text> 

        </SafeAreaView>
)}

export default TCPP;

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