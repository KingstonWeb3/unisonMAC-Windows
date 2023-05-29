import {useRef, useState} from 'react';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import { useFonts } from 'expo-font';
import FaceID from '../../../assets/images/faceID.svg';
import TouchID from 'react-native-touch-id';

function BiometricScreen({ navigation }) {
    
    const screenWidth = Dimensions.get('window').width;
    const [fontsLoaded] = useFonts({'R': require('../../../assets/fonts/SFproRegular.otf'), 'M': require('../../../assets/fonts/SFproMedium.otf'), 'B': require('../../../assets/fonts/SFproBold.otf')});

    const enableFaceID = () => {
        const optionalConfigObject = {
          title: 'Authentication Required', 
          imageColor: '#e00606', 
          imageErrorColor: '#ff0000',
          sensorDescription: 'Touch sensor',
          sensorErrorDescription: 'Failed',
          cancelText: 'Cancel',
        };
      
        TouchID.authenticate('To enable FaceID', optionalConfigObject)
          .then(success => {
            // Authentication was successful, navigate or do other things
            console.log('Authenticated Successfully');
          })
          .catch(error => {
            // Failure code
            console.log('Authentication Failed');
          });
      };


    return(

        <SafeAreaView style={styles.container}>

            <View style={{alignItems:'center',marginTop:100}}>

            <FaceID/>
            <Text style={styles.h1}>Enable Face ID</Text>
            <Text style={styles.text}>Lorem Impsum test test tst test test </Text>

            </View>

            <View>
            <TouchableOpacity onPress={enableFaceID} style={{backgroundColor: 'white', height:50, justifyContent:'center', borderRadius:30,marginBottom:15,width: screenWidth * 0.9}}>
                    <Text style={styles.buttonText}>Enable Face ID</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{height: 50, justifyContent:'center', borderRadius: 30, width:'90%',borderWidth:1, borderColor:'white', width: screenWidth * 0.9}}>
                    <Text style={styles.buttonTextInvert}>Not Now</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',paddingHorizontal:15,paddingVertical:40,flex:1,alignItems:'center',justifyContent:'space-between',
    },
    h1:{
        fontSize:40,color:'white',fontFamily:'B',
    },
    codeFieldRoot: {
        backgroundColor:'white',
        height:50,
        width:'70%',
    },
    text:{
        color:'white',fontSize:20,textAlign:'center',fontFamily:'R'
    },
    buttonText:{
        color:'black',
        textAlign:'center',
        fontSize:20,
        fontFamily:'M',
    },
    buttonTextInvert:{
        color:'white',
        textAlign:'center',
        fontSize:20,
        fontFamily:'M',
    },
})

export default BiometricScreen;