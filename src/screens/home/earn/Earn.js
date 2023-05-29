import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {useContext, useState, useStatus, useRef, useCallback} from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, FlatList, button, TextInput, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font'
import themeContext from '../../../../theme/themeContext';
import NetworkSelectLarge from '../../../components/networkSelect/NetworkSelectLarge';
import theme from '../../../../theme/Theme';

function Earn({ navigation }) {
    const [text, onChangeText] = React.useState('Enter site name or URL');

    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false)
    //FONT
    const [fontsLoaded] = useFonts({'R': require('../../../assets/fonts/SFproRegular.otf'), 'M': require('../../../assets/fonts/SFproMedium.otf'), 'B': require('../../../assets/fonts/SFproBold.otf')});
    const onLayoutRootView = useCallback(async () => { if (fontsLoaded) {await SplashScreen.hideAsync();}}, [fontsLoaded]); if (!fontsLoaded) {return null; }

return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
        <ScrollView style={{paddingHorizontal:15}}>
        
           <View style={[styles.header, {color:theme.color }]}>
                    <Text style={styles.headerText}>Earn</Text>
            </View>

            <NetworkSelectLarge/>

            <View style={styles.containerBox}>
                <Text style={styles.h2}>Staking</Text>

                <View style={styles.box}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../assets/images/ethlogo.png')} style={styles.logo}></Image>
                        <View style={{ justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 15, fontFamily:'M' }}>Ethereum</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                                <Text style={{fontFamily:'R'}}>ETH</Text>
                                <Image source={require('../../../assets/images/ethlogo.png')} style={{width:15, height:15, marginHorizontal:5 }}></Image>
                                <Text style={{fontFamily:'R'}}>Ethereum</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: '600', fontSize: 16, marginBottom: 5, fontFamily:'M' }}>8.00%</Text>
                        <View style={{ backgroundColor: '#01DC94', padding: 3, borderRadius: 20, paddingHorizontal: 10 }}>
                            <Text style={{ color: 'white', fontFamily:'M' }}>Staking</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../assets/images/ethlogo.png')} style={styles.logo}></Image>
                        <View style={{ justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 15, fontFamily:'M' }}>Ethereum</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                                <Text style={{fontFamily:'R'}}>ETH</Text>
                                <Image source={require('../../../assets/images/ethlogo.png')} style={{width:15, height:15, marginHorizontal: 5 }}></Image>
                                <Text style={{fontFamily:'R'}}>Ethereum</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: '600', fontSize: 16, marginBottom: 5, fontFamily:'M' }}>8.00%</Text>
                        <View style={{ backgroundColor: '#01DC94', padding: 3, borderRadius: 20, paddingHorizontal: 10 }}>
                            <Text style={{ color: 'white', fontFamily:'M' }}>Staking</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../assets/images/ethlogo.png')} style={styles.logo}></Image>
                        <View style={{ justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 15, fontFamily:'M' }}>Ethereum</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                                <Text style={{fontFamily:'R'}}>ETH</Text>
                                <Image source={require('../../../assets/images/ethlogo.png')} style={{width:15, height:15, marginHorizontal: 5 }}></Image>
                                <Text style={{fontFamily:'R'}}>Ethereum</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: '600', fontSize: 16, marginBottom: 5, fontFamily:'M' }}>8.00%</Text>
                        <View style={{ backgroundColor: '#01DC94', padding: 3, borderRadius: 20, paddingHorizontal: 10 }}>
                            <Text style={{ color: 'white', fontFamily:'M' }}>Staking</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={{ borderRadius: 30, borderColor: '#f8f8f8', borderWidth: 1, alignItems: 'center', height: 30, justifyContent: 'center', marginVertical: 10 }}>
                    <Text style={{fontFamily:'M'}}>Show All</Text>
                </TouchableOpacity>
            </View> 

            <View style={styles.containerBox}> 
                <Text style={styles.h2}>Vaults</Text>

                <View style={styles.box}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../assets/images/ethlogo.png')} style={styles.logo}></Image>
                        <View style={{ justifyContent: 'space-between' }}>
                            <Text style={{ fontSize:15, fontFamily:'M' }}>Ethereum</Text>
                            <View style={{ flexDirection:'row', alignItems:'center', marginBottom:5 }}>
                                <Text style={{fontFamily:'R'}}>ETH</Text>
                                <Image source={require('../../../assets/images/ethlogo.png')} style={{ width:15, height:15, marginHorizontal:5}}></Image>
                                <Text style={{fontFamily:'R'}}>Ethereum</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: '600', fontSize: 16, marginBottom:5, fontFamily:'M' }}>8.00%</Text>
                        <View style={{ backgroundColor: '#01DC94', padding: 3, borderRadius: 20, paddingHorizontal: 10 }}>
                            <Text style={{ color: 'white', fontFamily:'M' }}>Yearn v3</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../assets/images/ethlogo.png')} style={styles.logo}></Image>
                        <View style={{ justifyContent: 'space-between' }}>
                            <Text style={{ fontSize:15, fontFamily:'M' }}>Ethereum</Text>
                            <View style={{ flexDirection:'row', alignItems:'center', marginBottom:5 }}>
                                <Text style={{fontFamily:'R'}}>ETH</Text>
                                <Image source={require('../../../assets/images/ethlogo.png')} style={{ width:15, height:15, marginHorizontal:5}}></Image>
                                <Text style={{fontFamily:'R'}}>Ethereum</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: '600', fontSize: 16, marginBottom:5, fontFamily:'M' }}>8.00%</Text>
                        <View style={{ backgroundColor: '#01DC94', padding: 3, borderRadius: 20, paddingHorizontal: 10 }}>
                            <Text style={{ color: 'white', fontFamily:'M' }}>Yearn v3</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../assets/images/ethlogo.png')} style={styles.logo}></Image>
                        <View style={{ justifyContent: 'space-between' }}>
                            <Text style={{ fontSize:15, fontFamily:'M' }}>Ethereum</Text>
                            <View style={{ flexDirection:'row', alignItems:'center', marginBottom:5 }}>
                                <Text style={{fontFamily:'R'}}>ETH</Text>
                                <Image source={require('../../../assets/images/ethlogo.png')} style={{ width:15, height:15, marginHorizontal:5}}></Image>
                                <Text style={{fontFamily:'R'}}>Ethereum</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: '600', fontSize: 16, marginBottom:5, fontFamily:'M' }}>8.00%</Text>
                        <View style={{ backgroundColor: '#01DC94', padding: 3, borderRadius: 20, paddingHorizontal: 10 }}>
                            <Text style={{ color: 'white', fontFamily:'M' }}>Yearn v3</Text>
                        </View>
                    </View>
                </View>


                <TouchableOpacity style={{ borderRadius: 30, borderColor: '#f8f8f8', borderWidth: 1, alignItems: 'center', height: 30, justifyContent: 'center', marginVertical: 10 }}>
                    <Text>Show All</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerBox}>
                <Text style={styles.h2}>Lend on AAVE</Text>

                <View style={styles.box}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../assets/images/ethlogo.png')} style={styles.logo}></Image>
                        <View style={{ justifyContent: 'space-between' }}>
                            <Text style={{ fontSize:15, fontFamily:'M' }}>Ethereum</Text>
                            <View style={{ flexDirection:'row', alignItems:'center', marginBottom:5 }}>
                                <Text style={{fontFamily:'R'}}>ETH</Text>
                                <Image source={require('../../../assets/images/ethlogo.png')} style={{ width:15, height:15, marginHorizontal:5}}></Image>
                                <Text style={{fontFamily:'R'}}>Ethereum</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: '600', fontSize: 16, marginBottom:5, fontFamily:'M' }}>8.00%</Text>
                        <View style={{ backgroundColor: '#01DC94', padding: 3, borderRadius: 20, paddingHorizontal: 10 }}>
                            <Text style={{ color: 'white', fontFamily:'M' }}>Yearn v3</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.box}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../assets/images/ethlogo.png')} style={styles.logo}></Image>
                        <View style={{ justifyContent: 'space-between' }}>
                            <Text style={{ fontSize:15, fontFamily:'M' }}>Ethereum</Text>
                            <View style={{ flexDirection:'row', alignItems:'center', marginBottom:5 }}>
                                <Text style={{fontFamily:'R'}}>ETH</Text>
                                <Image source={require('../../../assets/images/ethlogo.png')} style={{ width:15, height:15, marginHorizontal:5}}></Image>
                                <Text style={{fontFamily:'R'}}>Ethereum</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: '600', fontSize: 16, marginBottom:5, fontFamily:'M' }}>8.00%</Text>
                        <View style={{ backgroundColor: '#01DC94', padding: 3, borderRadius: 20, paddingHorizontal: 10 }}>
                            <Text style={{ color: 'white', fontFamily:'M' }}>Yearn v3</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.box}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../assets/images/ethlogo.png')} style={styles.logo}></Image>
                        <View style={{ justifyContent: 'space-between' }}>
                            <Text style={{ fontSize:15, fontFamily:'M' }}>Ethereum</Text>
                            <View style={{ flexDirection:'row', alignItems:'center', marginBottom:5 }}>
                                <Text style={{fontFamily:'R'}}>ETH</Text>
                                <Image source={require('../../../assets/images/ethlogo.png')} style={{ width:15, height:15, marginHorizontal:5}}></Image>
                                <Text style={{fontFamily:'R'}}>Ethereum</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: '600', fontSize: 16, marginBottom:5, fontFamily:'M' }}>8.00%</Text>
                        <View style={{ backgroundColor:'#01DC94', padding: 3, borderRadius: 20, paddingHorizontal: 10 }}>
                            <Text style={{ color: 'white', fontFamily:'M' }}>Yearn v3</Text>
                        </View>
                    </View>
                </View>


                <TouchableOpacity style={{ borderRadius:30, borderColor: '#f8f8f8', borderWidth: 1, alignItems:'center', height:30, justifyContent:'center', marginVertical: 10 }}>
                    <Text>Show All</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
    </SafeAreaView>

)
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        flex:1,
        paddingVertical:40,
    },
    header:{
        paddingTop:20,
        alignItems:'center', 
    },
    headerText:{
        fontSize:25,
        fontFamily:'M',
    },
    h2:{
        justifyContent:'space-between',  
        alignItems:'center',  
        paddingVertical:10,
        fontSize:18,
        fontFamily:'M'
    },
    containerBox:{
        marginTop: 20, 
        height: 320, 
        padding: 15, 
        borderRadius: 15,
        shadowColor: '#171717',
        shadowOffset: {width:0, height:0},
        shadowOpacity: 0.08,
        shadowRadius: 4,
        backgroundColor:'white',
    },
    box:{
        backgroundColor:'white',
        height:70,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#F8F8F8',
      },
      logo:{
        width:50,
        height:50,
        marginRight:10,
      }
    
})

export default Earn;