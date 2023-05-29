import {useRef, useState, useCallback } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Pressable, Dimensions, Image } from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Checkbox from 'expo-checkbox';
import { useFonts } from 'expo-font'
import { TouchableOpacity } from 'react-native-gesture-handler';

function IntroScreen({ navigation }) {
    const [isChecked, setIsChecked] = useState(false);

    const screenWidth = Dimensions.get('window').width;
    const handleCheckboxPress = () => {setIsChecked(!isChecked);};
    const bottomSheetModalRef = useRef(null);
    const snapPoints = ["65%"];

    function handlePresentModal(){bottomSheetModalRef.current?.present();}
    //FONT
    const [fontsLoaded] = useFonts({'R': require('../../assets/fonts/SFproRegular.otf'), 'M': require('../../assets/fonts/SFproMedium.otf'), 'B': require('../../assets/fonts/SFproBold.otf')});
    const onLayoutRootView = useCallback(async () => { if (fontsLoaded) {await SplashScreen.hideAsync();}}, [fontsLoaded]); if (!fontsLoaded) {return null; }
     
    return(
        <SafeAreaView style={styles.container}>

            <View style={{ marginTop: 100}}>
               <Image source={require('../../assets/images/icon512.png')} style={{marginTop:-150,}}/>
            </View>

            <View style={{ marginHorizontal: 20, marginTop:-50 }}>
                <View style={{ alignItems: 'center'}}>
                    <Text style={styles.h1}>Welcome to Unison</Text>
                    <Text style={styles.text}>Create a new wallet or add your existing one to easily get started.</Text>
                </View>
            
            <TouchableOpacity onPress={() => navigation.navigate('Passcode')} style={{backgroundColor: 'white', height:50, justifyContent:'center', borderRadius:30,marginBottom:15,width: screenWidth * 0.9}} >
                <Text style={styles.buttonText}>Create a New Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WhichMethod')} style={{height: 50, justifyContent:'center', borderRadius: 30, width:'90%',borderWidth:1, borderColor:'white', width: screenWidth * 0.9}} >
                <Text style={styles.buttonTextInvert}>Add an Existing Wallet</Text>
            </TouchableOpacity>

                <View style={{marginHorizontal:30, alignItems:'center'}}>
                   <Text style={styles.smallText}>By using Unison, you agree to accept our</Text>
                   <View style={{flexDirection:'row', text:'center'}}>
                     <TouchableOpacity onPress={() => navigation.navigate('TCPP')}>
                       <Text style={styles.linkText}>Terms of Use</Text>
                     </TouchableOpacity> 
                   <Text style={{color: 'white',textAlign:'center',fontSize:15,fontFamily:'R'}}>and</Text>
                     <TouchableOpacity onPress={() => navigation.navigate('TCPP')}>
                       <Text style={styles.linkText}>Privacy Policy</Text>
                     </TouchableOpacity>
                     </View> 
                   
                </View>
            </View>            
        </SafeAreaView>
    )
}

export default IntroScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',paddingHorizontal:15,paddingVertical:40,flex:1,alignItems:'center',justifyContent:'space-between'
    },
    h1:{
        fontSize:40,color:'white',fontFamily:'B'
    },
    text:{
        color:'white',fontSize:20,marginVertical:15,textAlign:'center',fontFamily:'R'
    },
    smallText:{
        color: 'white',textAlign:'center',fontSize:15,fontFamily:'R', marginTop:15,
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
    buttonModal:{
        backgroundColor: 'black',  
        height: 50, 
        justifyContent:'center',  
        borderRadius: 30,
        width:'90%',
    },
    linkText:{
        color:'white',
        fontSize:15,
        fontFamily:'B',
        marginHorizontal:5,
    }
})