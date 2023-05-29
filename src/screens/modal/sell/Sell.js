import { useContext,useState, React, useCallback } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import themeContext from '../../../../theme/themeContext';
import DownArrow from '../../../assets/images/downarrow.svg';
import NetworkSelectLarge from '../../../components/networkSelect/NetworkSelectLarge';
import { useFonts } from 'expo-font'
import TokenSelect from '../../../components/networkSelect/TokenSelect';

function Sell({ navigation }) {

    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false)
    const screenWidth = Dimensions.get('window').width;

    //FONT
    const [fontsLoaded] = useFonts({'R': require('../../../assets/fonts/SFproRegular.otf'), 'M': require('../../../assets/fonts/SFproMedium.otf'), 'B': require('../../../assets/fonts/SFproBold.otf')});
    const onLayoutRootView = useCallback(async () => { if (fontsLoaded) {await SplashScreen.hideAsync();}}, [fontsLoaded]); if (!fontsLoaded) {return null; }

    return(
        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            
                <View style={styles.header}>
                    <Text style={[styles.headerText,{color:theme.color}]}>Sell</Text>
                </View>  
  
                <View >
                <View>
                   <Text style={{fontSize:15,fontFamily:'R',marginLeft:5, marginBottom:-10}}>Network</Text>
                   <NetworkSelectLarge />
                </View>

                <View>
                   <View style={styles.textLine}>
                      <Text style={styles.h3}>You Send</Text>
                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.MAXbox}>
                            <Text style={styles.MAX}>MAX</Text>
                        </TouchableOpacity>
                        <Text style={{fontFamily:'R'}}>0 ETH</Text>
                     </View>
                   </View>
                    <TokenSelect/>
                    <Text style={styles.smallText}>$0.000</Text>
                </View>
  
                </View>
  
                <TouchableOpacity style={{ backgroundColor:theme.backgroundColorButton, height: 50, justifyContent:'center', borderRadius: 30, width: screenWidth * 0.9, alignSelf:'center' }}>
                    <Text style={[styles.buttonText, { color: theme.colorInvert }]}>Sell</Text>
                </TouchableOpacity>
            
        </SafeAreaView>
  )}
  
  const styles = StyleSheet.create({
    container:{
        paddingHorizontal:25,
        backgroundColor:'white', 
        flex:1,
        justifyContent:'space-between',
    },
    header:{
        justifyContent:'space-between', 
        alignItems:'center',  
        paddingTop:20
    },
    headerText:{
        fontSize:25,
        fontFamily:'M',
    },
    h3:{
        fontSize:15,fontFamily:'R',marginLeft:5
  },
  box:{
      flexDirection:'row', 
      justifyContent:'space-between', 
      alignItems:'center', 
      backgroundColor:'white', 
      borderRadius:15, 
      padding:15,
      marginVertical:5,
      height:60,
      backgroundColor:'#f8f8f8',
  },
  button:{
      backgroundColor: 'black',  
      height: 50, 
      justifyContent:'center',  
      borderRadius: 30,
      width:'90%',
      alignSelf:'center',
  },
  buttonText:{
    color:'white',
    textAlign:'center',
    fontSize:20,
    fontFamily:'M',
  },
  MAX:{
    color:'grey', fontFamily:'M'
  },
  textLine:{
    flexDirection: 'row', justifyContent: 'space-between', marginTop:15, alignItems:'center', marginBottom:-15
},
MAXbox:{
    borderWidth:1,borderRadius:15,paddingVertical:1,paddingHorizontal:5,marginRight: 5, borderColor: 'grey' 
},
smallText:{
    fontSize:12, color:'grey', marginLeft:5, fontFamily:'R'
},
  
  })
  
  export default Sell;