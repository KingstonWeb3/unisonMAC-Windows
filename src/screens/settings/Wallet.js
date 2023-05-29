import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useContext, useState, useRef} from 'react';
import { View, Text, Appearance, StyleSheet, Image, TextInput, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import themeContext from '../../../theme/themeContext';
import GlobalStyle from '../../../theme/GlobalStyle';
import BackArrow from '../../assets/images/backarrow.svg';


export default function Wallet({ navigation }) {
    
    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false)


    return(

        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <View style={GlobalStyle.splash}>

              <View style={styles.header}>
                   <TouchableOpacity onPress={() => navigation.navigate('Settings')}><BackArrow width={20} height={20}/></TouchableOpacity>
                   <Text style={styles.headerText}>Wallet</Text>
                   <View/>
               </View>

               <View style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.maintext, {color:theme.color}]}>Set a custom rate limit</Text>
                </View>

                <View style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.maintext, {color:theme.color}]}>Ignore signings on transactions under</Text>
                    <TextInput placeholder="0.08ETH"></TextInput>
                </View>

                <View style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.maintext, {color:theme.color}]}>Create an automatic payment</Text>
                </View>

                <View style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.maintext, {color:theme.color}]}>Select a wallet to sponsor transactions</Text>
                </View>

                <View style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.maintext, {color:theme.color}]}>Add this wallet as a Multi-sig</Text>
                </View>

                
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15,
        backgroundColor:'white', 
        flex:1,
    },
    header:{
        justifyContent:'space-between', 
        flexDirection:'row',
        alignItems:'center',  
        paddingTop:10,
    },
    headerText:{
        fontSize:25,
        marginLeft:-15,
    },
    settingsbox:{
        marginBottom: 15, 
        padding: 15, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width:0, height:0},
        shadowOpacity: 0.08,
        shadowRadius: 4,
    },
})

