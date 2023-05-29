import {useContext, useState, useCallback} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native';
import themeContext from '../../../../theme/themeContext';
import Eth from '../../../assets/images/eth.svg'
import { useFonts } from 'expo-font'
import NetworkSelectLarge from '../../../components/networkSelect/NetworkSelectLarge';
import TokenSelect from '../../../components/networkSelect/TokenSelect';


function Send({ navigation }) {

    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false)
    const screenWidth = Dimensions.get('window').width;
    const [fontsLoaded] = useFonts({'R': require('../../../assets/fonts/SFproRegular.otf'), 'M': require('../../../assets/fonts/SFproMedium.otf'), 'B': require('../../../assets/fonts/SFproBold.otf')});
    const onLayoutRootView = useCallback(async () => { if (fontsLoaded) {await SplashScreen.hideAsync();}}, [fontsLoaded]); if (!fontsLoaded) {return null; }


    return(
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            
             <View style={styles.header}>
                    <Text style={[styles.headerText,{color:theme.color}]}>Send</Text>
             </View>

             <View>
                <NetworkSelectLarge/>
                <TokenSelect/>
                <TokenSelect/>

                <View style={styles.topupGas}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 15 }}>Top up your gas!</Text>
                        <Text style={{ color: 'grey'}}>You need ETH to use ETH on Ethereum</Text>
                    </View>
                    <TouchableOpacity style={styles.MAXbox}>
                        <Text style={styles.MAX}>Buy ETH</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginVertical: 15 }}>
                    <Text style={{ justifyContent: 'center', fontSize: 15, marginRight:5 }}>Send on</Text>
                    <Eth width={20} height={20} />
                    <Text style={{ justifyContent: 'center', fontSize: 15, marginLeft:5 }}>Ethereum</Text>
                </View>

                </View>


                <TouchableOpacity style={{ backgroundColor:theme.backgroundColorButton, height: 50, justifyContent:'center', borderRadius: 30, width: screenWidth * 0.9, alignSelf:'center' }}>
                    <Text style={[styles.buttonText, { color: theme.colorInvert }]}>Continue</Text>
                </TouchableOpacity>

        </View>
    )}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:25,
        paddingVertical:40,
        flex:1,
        justifyContent:'space-between',
    },
    header:{
        justifyContent:'space-between', 
        alignContent:'center', 
        alignItems:'center',  
        paddingTop:10
    },
    headerText:{
        fontSize:25,
        fontFamily:'M',
   
    },
    topupGas:{
        backgroundColor: "white", 
        padding:10,
        borderRadius: 10, 
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: {width:0, height:0},
        shadowOpacity: 0.08,
        shadowRadius: 4,
        marginTop:10,
        height:60,
    },
    buttonText:{
        textAlign:'center',fontSize:20,fontFamily:'M',
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
})

export default Send