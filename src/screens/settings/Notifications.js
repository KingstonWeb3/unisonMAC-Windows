import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useContext, useState, useRef} from 'react';
import { View, Text, Appearance, StyleSheet, Image, TextInput, SafeAreaView, TouchableOpacity, Switch } from 'react-native';
import themeContext from '../../../theme/themeContext';
import GlobalStyle from '../../../theme/GlobalStyle';
import RightArrow from '../../assets/images/rightarrow.svg';
import { EventRegister } from 'react-native-event-listeners';

import Plus from '../../assets/images/plus.svg';
import BackArrow from '../../assets/images/backarrow.svg'

export default function NotificationsSettings({ navigation }) {
    
    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false)

    const [mobileOff, mobileOn] = useState(false)


    return(

        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <View style={GlobalStyle.splash}>

               <View style={styles.header}>
                   <TouchableOpacity onPress={() => navigation.navigate('Settings')}><BackArrow width={20} height={20}/></TouchableOpacity>
                   <Text style={styles.headerText}>Notifications</Text>
                   <View/>
               </View>

                <View style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.maintext, {color:theme.color}]}>Mobile Notifications</Text>
                    <Switch value={mobileOff} onValueChange={(value) => { setDarkMode(value); EventRegister.emit('ChangeTheme', value) }} />
                </View>

                <View style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.maintext, {color:theme.color}]}>Mobile Notifications</Text>
                    <Switch value={darkMode} onValueChange={(value) => { setDarkMode(value); EventRegister.emit('ChangeTheme', value) }} />
                </View>

               <Text>Custom Notifications</Text>
                <View style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.maintext, {color:theme.color}]}>Set alert when Pudgy Penguins crosses</Text>
                    <TextInput placeholder="0.08ETH"></TextInput>
                    <Text style={[styles.maintext, {color:theme.color}]}>Set alert when Pudgy Penguins crosses</Text>
                </View>

                <View>
                    <Plus width={40} height={40} style={{backgroundColor:'grey', borderRadius:40}}/>
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
})