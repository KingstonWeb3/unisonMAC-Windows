import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext, useRef } from 'react';
import { LineChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import * as d3 from 'd3';
import { G, Line, Rect, Text as SVGText } from 'react-native-svg';
import { View, Text, Appearance, StyleSheet, Image, TextInput, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import themeContext from '../../../theme/themeContext';
import GlobalStyle from '../../../theme/GlobalStyle';
import BackArrow from '../../assets/images/backarrow.svg';




export default function Test({ navigation }) {
    
    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false)

    


    return(

        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <View style={GlobalStyle.splash}>

              <View style={styles.header}>
                   <TouchableOpacity onPress={() => navigation.navigate('Settings')}><BackArrow width={20} height={20}/></TouchableOpacity>
                   <Text style={styles.headerText}>Testing Station</Text>
                   <View/>
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

