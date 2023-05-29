import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useContext, useState, useRef} from 'react';
import { View, Text, Appearance, StyleSheet, Image, TextInput, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import themeContext from '../../../theme/themeContext';
import GlobalStyle from '../../../theme/GlobalStyle';

export default function Address({ navigation }) {
    
    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false)

    return(

        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <View style={GlobalStyle.splash}>
                
                
                
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

})