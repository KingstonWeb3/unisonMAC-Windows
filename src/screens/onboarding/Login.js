import React from 'react';
import { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet,Dimensions } from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import { useFonts } from 'expo-font';

function Login({ navigation }) {

    const screenWidth = Dimensions.get('window').width;
    const bottomSheetModalRef1 = useRef(null); const bottomSheetModalRef2 = useRef(null);
    const snapPoints = ["25%"];

    function handlePresentModal1(){bottomSheetModalRef1.current?.present();}
    function handlePresentModal2(){bottomSheetModalRef2.current?.present();}

    const [fontsLoaded] = useFonts({'R': require('../../assets/fonts/SFproRegular.otf'), 'M': require('../../assets/fonts/SFproMedium.otf'), 'B': require('../../assets/fonts/SFproBold.otf')});

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ marginTop: 150, textAlign: 'center', alignItems: 'center', alignContent: 'center' }}>
                <Text style={styles.h1}>Which type of wallet do you want to create?</Text>
            </View>

            
                <BottomSheetModalProvider>
                <View style={{ justifyContent:'space-around', marginTop:250}}>
                    <TouchableOpacity onPress={handlePresentModal1} style={{backgroundColor: 'white', height:50, justifyContent:'center', borderRadius: 30, marginTop:40, width: screenWidth * 0.9}}>
                        <Text style={styles.buttonText}>Local</Text>
                    </TouchableOpacity>
                    <BottomSheetModal ref={bottomSheetModalRef1} index={0} snapPoints={snapPoints} backgroundStyle={{borderRadius:10,backgroundColor:'white'}}>
                        <View style={{flex:1, justifyContent:'space-between', alignItems:'center', paddingVertical:20}}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{fontSize:20,fontFamily:'B'}}>Disclaimer</Text>
                            <Text>Local Unison wallets use seed phrases for recovery</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Passcode')} style={{height:50, justifyContent:'center', borderRadius:30, width:'90%',borderWidth:1, borderColor:'white', width: screenWidth * 0.9, backgroundColor:'black'}}>
                                <Text style={styles.buttonTextInvert}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </BottomSheetModal>
                
                    <TouchableOpacity onPress={handlePresentModal2} style={{height:50, justifyContent:'center', borderRadius:30, width:'90%',borderWidth:1, borderColor:'white', width: screenWidth * 0.9, marginTop:15}}>
                        <Text style={styles.buttonTextInvert}>Hosted</Text>
                    </TouchableOpacity>
                    <BottomSheetModal ref={bottomSheetModalRef2} index={0} snapPoints={snapPoints} backgroundStyle={{borderRadius:10,backgroundColor:'white'}}>
                        <View style={{flex:1, justifyContent:'space-between', alignItems:'center', paddingVertical:20}}>
                            <View style={{alignItems:'center'}}>
                            <Text style={{fontSize:20,fontFamily:'B'}}>Disclaimer</Text>
                            <Text>Unison uses uKey for recovery</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Passcode')} style={{height:50, justifyContent:'center', borderRadius: 30, width:'90%',borderWidth:1, borderColor:'white', width: screenWidth * 0.9, backgroundColor:'black'}}>
                                <Text style={styles.buttonTextInvert}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </BottomSheetModal>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Difference')}>
                    <Text style={{color:'white', fontSize:15}}>Learn the Difference?</Text>
                </TouchableOpacity>

                </BottomSheetModalProvider>
                
   
        </SafeAreaView>
        
);
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',paddingHorizontal:15,paddingVertical:40,flex:1,alignItems:'center',justifyContent:'space-between',
    },
    h1:{
        fontSize:50,color:'white',fontFamily:'B',marginHorizontal:15,lineHeight:55
    },
    buttonText:{
        color:'black',textAlign:'center',fontSize:20,fontFamily:'M',
    },
    buttonTextInvert:{
        color:'white',textAlign:'center',fontSize:20,fontFamily:'M',
    },
})

export default Login; 