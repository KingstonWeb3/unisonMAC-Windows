import { useState, useContext, useCallback} from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Switch, Appearance, colorScheme, Stack, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalStyle from '../../../theme/GlobalStyle';
import { useFonts } from 'expo-font'
import themeContext from '../../../theme/themeContext';
import { EventRegister } from 'react-native-event-listeners';
import RightArrow from '../../assets/images/rightarrow.svg';
import BackArrow from '../../assets/images/backarrow.svg';

export default function SettingsScreen({ navigation }) {
    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false)
    //FONT
    const [fontsLoaded] = useFonts({'R': require('../../assets/fonts/SFproRegular.otf'), 'M': require('../../assets/fonts/SFproMedium.otf'), 'B': require('../../assets/fonts/SFproBold.otf')});
    

    return(
        
        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
        <ScrollView style={GlobalStyle.splash}>

            <View style={styles.header}>
                   <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                   <BackArrow width={20} height={20} />
                    </TouchableOpacity>
                   <Text style={[styles.headerText, {color:theme.color}]}>Settings</Text>
                   <View/>
               </View>

            <View style={{marginTop:30}}> 
                <TouchableOpacity  onPress={() => navigation.push('Wallet')} style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../../assets/images/blockie.png')} style={{width:60, height:60, borderRadius:20}}></Image>
                        <View style={{marginLeft:10}}>
                            <Text style={[styles.maintext, {color:theme.color}]}>Wallet 1</Text>
                            <Text style={{color:'grey'}}>0x162.....</Text>
                        </View>
                    </View>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('ChainSelection')} style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.maintext, {color:theme.color}]}>Select Blockchains</Text>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('Test')} style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.maintext, {color:theme.color}]}>Testing Screen</Text>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('Personal')} style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.maintext, {color:theme.color}]}>Personal Info</Text>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('AddressBook')} style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.maintext, {color:theme.color}]}>Address Book</Text>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Referral</Text>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('WalletBenefits')} style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Wallet Benefits</Text>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Currency')} style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Currency</Text>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Darkmode</Text>
                    <Switch value={darkMode} onValueChange={(value) => { setDarkMode(value); EventRegister.emit('ChangeTheme', value) }} />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Sign in with Face ID</Text>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Connected Sites</Text>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Notifications</Text>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Reset App</Text>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Share Vero</Text>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>

                <TouchableOpacity  style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Follow us on Twitter</Text>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Join our Discord</Text>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Rate us</Text>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Feedback & FAQ</Text>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}> Support</Text>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('Intro')} style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.maintext, {color:theme.color}]}>Sign Out</Text>
                    <RightArrow width={10} height={10}/>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'white', 
        flex:1,
        justifyContent:'space-between',
    },
    mainBox:{
        marginBottom: 15, 
        padding: 20, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: 'white', 
        borderRadius: 10
    },
    settingsbox:{
        marginBottom: 15, 
        padding: 15, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width:0, height:0},
        shadowOpacity: 0.08,
        shadowRadius: 4,
    },
    maintext:{
        fontSize:18,
        fontFamily:'R',
    },
    header:{
        justifyContent:'space-between', 
        flexDirection:'row',
        alignItems:'center',  
        paddingTop:10,
    },
    headerText:{
        fontSize:25,
        fontFamily:'M',
        marginLeft:-20
    },
})

    

