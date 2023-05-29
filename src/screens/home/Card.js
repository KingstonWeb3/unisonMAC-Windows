import {useRef, useContext, useCallback } from 'react';
import { View, TextInput, Text, Dimensions, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalStyle from '../../../theme/GlobalStyle';
import { useFonts } from 'expo-font';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useState} from 'react';
import themeContext from '../../../theme/themeContext';

export default function CardScreen({ navigation }) {
    const bottomSheetModalRef = useRef(null);

    const snapPoints = ["75%"];
    const screenWidth = Dimensions.get('window').width;

    function handlePresentModal(){
        bottomSheetModalRef.current?.present();}

    const printButtonLabel = (item) => {
        console.log(item)}

    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false)

    //FONT
    const [fontsLoaded] = useFonts({'R': require('../../assets/fonts/SFproRegular.otf'), 'M': require('../../assets/fonts/SFproMedium.otf'), 'B': require('../../assets/fonts/SFproBold.otf')});
    const onLayoutRootView = useCallback(async () => { if (fontsLoaded) {await SplashScreen.hideAsync();}}, [fontsLoaded]); if (!fontsLoaded) {return null; }


   
    return(
        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}> 
            
            <View style={[styles.header, {color:theme.color }]}>
                    <Text style={styles.headerText}>Unison Card</Text>
                </View>

                <View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom:90}}>
                    <Text style={styles.text}>Join the Unison Card waitlist</Text>
                </View>

                <Image source={require('../../assets/images/card.png')} style={{ width:'70%',height:150, borderRadius:10, position:'absolute', alignSelf:'center'}} />
                <View style={styles.box}>
                    <TouchableOpacity style={{ backgroundColor: '#f8f8f8', width:'90%', borderRadius:7.5, padding:10, height:50, marginTop:80, flexDirection:'row', justifyContent:'space-between',  }}>
                        <TextInput placeholder="Email Address"></TextInput>
                    </TouchableOpacity>
                </View>
                </View>
                
                <TouchableOpacity style={{ backgroundColor:theme.backgroundColorButton, height: 50, justifyContent:'center', borderRadius: 30, width: screenWidth * 0.9, alignSelf:'center' }}>
                    <Text style={[styles.buttonText, { color: theme.colorInvert }]}>Buy</Text>
                </TouchableOpacity>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white', 
        paddingVertical:40,
        paddingHorizontal:15,
        flex:1,
        justifyContent:'space-between',
    
    },
    header:{
        justifyContent:'space-between', 
        alignItems:'center',  
        paddingTop:10,
        marginTop:-30,
    },
    headerText:{
        fontSize:25,
        fontFamily:'M',
    },
    text:{
        fontSize:20,
        marginBottom:25,
        fontFamily:'M',
    },
    box:{
        width:'100%',
        alignSelf:'center', 
        borderRadius:15,
        marginTop:0,
        alignItems:'center',
        backgroundColor:'white',
        height:150,
        marginTop:-40,
        zIndex:-1,
        shadowColor:'#171717',
        shadowOffset:{width:0, height:0},shadowOpacity: 0.08,shadowRadius: 4,
    },
    
    button:{
        backgroundColor: '#101115', 
        width:'90%', 
        height: 50, 
        justifyContent:'center',  
        borderRadius: 30,
        alignSelf:'center'
    },
    buttonText:{
        color:'white',
        textAlign:'center',
        fontSize:20,
        fontFamily:'M',
    },

})