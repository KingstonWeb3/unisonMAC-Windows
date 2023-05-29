import React, {useState, useRef} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import { useFonts } from 'expo-font';

function SeedPhrase({ navigation }) {

  const screenWidth = Dimensions.get('window').width;
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["25%"];
  function handlePresentModal(){bottomSheetModalRef.current?.present();}
  const [fontsLoaded] = useFonts({'R': require('../../../assets/fonts/SFproRegular.otf'), 'M': require('../../../assets/fonts/SFproMedium.otf'), 'B': require('../../../assets/fonts/SFproBold.otf')});


  return (
      <SafeAreaView style={styles.container}>

          <View style={{alignItems:'center'}}>
            <Text style={styles.h1}>Secret Recovery Phrase</Text>
            <Text style={styles.text}>LoremIpsum test test test test test test test</Text>
            
              <View style={{backgroundColor:'white', width: screenWidth * 0.9, height:200, borderRadius:15,padding:20  }}>
                <TextInput></TextInput>

              </View>
            </View>


            <BottomSheetModalProvider>
                
                <TouchableOpacity onPress={handlePresentModal} style={{backgroundColor:'white',height: 50,justifyContent:'center',borderRadius:30,width: screenWidth * 0.9}} >
              <Text style={styles.buttonText}>Import Secret Recovery Phrase</Text>
                    </TouchableOpacity>
                    <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints} backgroundStyle={{borderRadius:10,backgroundColor:'white'}}>
                        <View style={{flex:1, justifyContent:'space-between', alignItems:'center', paddingVertical:20}}>
                        
                            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{height:50, justifyContent:'center', borderRadius:30, width:'90%',borderWidth:1, borderColor:'white', width: screenWidth * 0.9, backgroundColor:'black'}}>
                                <Text style={styles.buttonTextInvert}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </BottomSheetModal>
                    </BottomSheetModalProvider>
          

          

      </SafeAreaView>
  );
};

export default SeedPhrase;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',paddingHorizontal:15,paddingVertical:40,flex:1,alignItems:'center',justifyContent:'space-between'
      },
      h1:{
        fontSize:30, color:'white',fontFamily:'B',marginTop:150
      },
      text:{
        color:'white',fontSize:20,marginVertical:15,textAlign:'center',fontFamily:'R'
    },
    buttonText:{
        color:'black',textAlign:'center',fontSize:20,fontFamily:'M',
    },
    buttonTextInvert:{
        color:'white',textAlign:'center',fontSize:20,fontFamily:'M',
    },
    });