import {useContext, useState} from 'react';
import { View, SafeAreaView, Dimensions, TouchableOpacity, Text, StyleSheet } from 'react-native';
import GlobalStyle from '../../../../theme/GlobalStyle';
import themeContext from '../../../../theme/themeContext';
import NetworkSelectLarge from '../../../components/networkSelect/NetworkSelectLarge';
import TokenSelect from '../../../components/networkSelect/TokenSelect';
import DownArrow from '../../../assets/images/downarrow.svg';
import SwapIcon from '../../../assets/images/swap.svg';
import { useFonts } from 'expo-font';

function Swap({ navigation }) {

    const theme = useContext(themeContext)
    const screenWidth = Dimensions.get('window').width;
    const [darkMode, setDarkMode] = useState(false)
    const [fontsLoaded] = useFonts({'R': require('../../../assets/fonts/SFproRegular.otf'), 'M': require('../../../assets/fonts/SFproMedium.otf'), 'B': require('../../../assets/fonts/SFproBold.otf')});

    return(
        <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
            <View style={styles.header}>
                   <Text style={styles.headerText}>Swap</Text>
            </View>

            <View>
               <View>
                    <Text style={{fontSize:15,fontFamily:'R',marginLeft:5, marginBottom:-10}}>Network</Text>
                    <NetworkSelectLarge/>
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

                <TouchableOpacity style={{justifyContent:'center', flexDirection:'row', margin:10 }}>
                    <SwapIcon width={30} height={30}/>
                </TouchableOpacity>

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


                <View style={{ paddingHorizontal:15, paddingVertical:5, backgroundColor: 'white', borderRadius: 10, marginTop: 20, shadowColor: '#171717', marginBottom:20, shadowOffset: {width:0, height:0}, shadowOpacity: 0.08, shadowRadius: 4, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'column', }}>
                            <Text style={{ fontSize: 15 }}>Top up your gas!</Text>
                            <Text style={{ fontSize: 13, color: 'grey', marginTop: 3 }}>You need ETH to use VERO on Ethereum.</Text>
                        </View>
                        <TouchableOpacity style={styles.MAXbox}>
                            <Text style={styles.MAX}>Buy ETH</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                </View>
                <View>
                
                </View>

                

                <TouchableOpacity style={{ backgroundColor:theme.backgroundColorButton, height: 50, justifyContent:'center', borderRadius: 30, width: screenWidth * 0.9, alignSelf:'center' }}>
                    <Text style={[styles.buttonText, { color: theme.colorInvert }]}>Swap</Text>
                </TouchableOpacity>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:25,
        paddingVertical:40, 
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
        fontSize:15,
        marginTop:10,
    },
    amountBox:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center', 
        backgroundColor:'white', 
        borderRadius:10, 
        padding:15,
        marginVertical:5,
        height:60,
        backgroundColor:'#f8f8f8',
    },
    button:{
        backgroundColor: '#101115', 
        width:'100%', 
        height: 50, 
        justifyContent:'center',  
        borderRadius: 30,
    },
    buttonText:{
        color:'white',
        textAlign:'center',
        fontSize:20,
    },
    textLine:{
        flexDirection: 'row', justifyContent: 'space-between', marginTop:15, alignItems:'center', marginBottom:-15
    },
    MAX:{
        color:'grey', fontFamily:'M'
    },
    MAXbox:{
        borderWidth:1,borderRadius:15,paddingVertical:1,paddingHorizontal:5,marginRight: 5, borderColor: 'grey' 
    },
    smallText:{
        fontSize:12, color:'grey', marginLeft:5, fontFamily:'R'
    },

})

export default Swap;