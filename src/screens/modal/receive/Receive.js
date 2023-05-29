import {useContext, useState, useCallback} from 'react';
import { View, Text, SafeAreaView, Button, Image, TouchableOpacity, Linking, backgroundColor, StyleSheet } from 'react-native';
import GlobalStyle from '../../../../theme/GlobalStyle';
import themeContext from '../../../../theme/themeContext';
import NetworkSelectLarge from '../../../components/networkSelect/NetworkSelectLarge';
import QR from '../../../assets/images/qr.svg'
import Copy from '../../../assets/images/copy.svg'
import {useFonts} from 'expo-font'

function Receive({ navigation }) {

    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false)

    //FONT
    const [fontsLoaded] = useFonts({'R': require('../../../assets/fonts/SFproRegular.otf'), 'M': require('../../../assets/fonts/SFproMedium.otf'), 'B': require('../../../assets/fonts/SFproBold.otf')});
    const onLayoutRootView = useCallback(async () => { if (fontsLoaded) {await SplashScreen.hideAsync();}}, [fontsLoaded]); if (!fontsLoaded) {return null; }

       return(
         <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
           <View style={GlobalStyle.splash}>

             <View style={[styles.header, {color:theme.color }]}>
               <Text style={styles.headerText}>Receive</Text>
             </View>

             <NetworkSelectLarge />

             <View style={styles.disclaimerBox}>
               <Text style={{ fontSize:14, color:'grey', textAlign:'center', fontFamily:'R' }}>Use this address to send crypto from an exchange or a wallet to Vero. This address works on the following chains: Ethereum, Polygon, Binance Smart Chain, Avalanche, Fantom, Optimism, Arbitrum</Text>
             </View>
             


             <TouchableOpacity style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
               <QR width={250} height={250} fill='white' />
             </TouchableOpacity>



             <View style={{ alignItems: 'center' }}>
               <View style={{ flexDirection: 'row', alignItems: 'center', height: 50 }}>
                 <Text style={{ fontSize: 20, marginRight:8, fontFamily:'M' }}>0x00000...000</Text>
                 <Copy width={30} height={30} />

               </View>
               <Text style={{ color: 'grey', width: 350, textAlign: 'center', fontFamily:'R' }}>0x600ECeBB717CCC1307E9385374Bf9f18CBaC3ED1</Text>
             </View>

             

           </View>
         </View>
    )
}

export default  Receive;

const styles = StyleSheet.create({
container:{
    paddingHorizontal:25,paddingVertical:40, backgroundColor:'white', flex:1, justifyContent:'space-between',
},
header:{
    justifyContent:'space-between', 
    alignItems:'center',  
    paddingTop:10,
},
headerText:{
    fontSize:25,
    fontFamily:'M',

},
disclaimerBox:{
  alignItems:'center', 
  backgroundColor:'white', 
  borderRadius:10, 
  height:100, 
  justifyContent:'center', 
  padding:15, 
  marginTop:15,
  shadowColor: '#171717',
  shadowOffset: {width:0, height:0},
  shadowOpacity: 0.08,
  shadowRadius: 4,
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
