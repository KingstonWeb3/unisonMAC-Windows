import {useRef, useCallback, useState} from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomSheet } from 'react-native-btr';
import DownArrow from '../../assets/images/downarrow.svg';
import Eth from '../../assets/images/eth.svg';
import { useFonts } from 'expo-font'
import theme from '../../../theme/Theme';

function NetworkSelectLarge({ navigation }) {
    const [visible, setVisible] = useState(false);

    const toggleBottomNavigationView = () => {setVisible(!visible);};

    const [currentSelection, setCurrentSelection] = useState({
        label: 'Ethereum',
        image: require('../../assets/images/ethlogo.png')});

    const selectOption = (label, image) => {
        setCurrentSelection({ label, image });
        toggleBottomNavigationView();};

    const [fontsLoaded] = useFonts({'R': require('../../assets/fonts/SFproRegular.otf'), 'M': require('../../assets/fonts/SFproMedium.otf'), 'B': require('../../assets/fonts/SFproBold.otf')});


return(

<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        

        <TouchableOpacity style={styles.networklargeBox} onPress={toggleBottomNavigationView}>
            <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Image style={{ width: 20, height: 20, marginRight:5 }} source={currentSelection.image} />
                <Text style={[styles.balanceText, { color: theme.color }]}>{currentSelection.label}</Text>
            </View>
            <DownArrow height={10} width={10} />
        </TouchableOpacity>

            <BottomSheet visible={visible} onBackButtonPress={toggleBottomNavigationView} onBackdropPress={toggleBottomNavigationView}>
                <View style={styles.bottomBox}>
                    <View style={styles.chainBox}>
                        <View/>
                        <Text style={{ fontSize: 25, fontFamily:'M' }}> Choose Network</Text>
                        <TouchableOpacity onPress={toggleBottomNavigationView}>
                            <Image source={require('../../assets/images/close.png')} style={{ width: 20, height: 20, }}></Image>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.modalBox} onPress={() => selectOption('Ethereum', require('../../assets/images/ethlogo.png'))}>
                        <Image source={require('../../assets/images/ethlogo.png')} style={styles.chainImage}></Image>
                        <View style={styles.modalText}>
                            <Text style={{ fontSize:15, color:'black', fontFamily:'M'  }}>Ethereum</Text>
                            <Text style={{fontFamily:'R', color:'grey', fontSize:12, marginTop:3}}>$12,000,000</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.modalBox} onPress={() => selectOption('Polygon', require('../../assets/propimages/polygon.png'))}>
                        <Image source={require('../../assets/propimages/polygon.png')} style={styles.chainImage}></Image>
                        <View style={styles.modalText}>
                            <Text style={{ fontSize:15, color:'black', fontFamily:'M' }}>Polygon</Text>
                            <Text style={{fontFamily:'R', color:'grey', fontSize:12, marginTop:3}}>$12,000,000</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.modalBox} onPress={() => selectOption('Arbitrum', require('../../assets/propimages/apecoin.png'))}>
                        <Image source={require('../../assets/propimages/apecoin.png')} style={styles.chainImage}></Image>
                        <View style={styles.modalText}>
                            <Text style={{ fontSize:15, color:'black', fontFamily:'M' }}>Polygon</Text>
                            <Text style={{fontFamily:'R', color:'grey', fontSize:12, marginTop:3}}>$12,000,000</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </BottomSheet>
    </SafeAreaView>

     )
}

export default NetworkSelectLarge;

const styles = StyleSheet.create({
    networklargeBox:{
        flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#F8F8F8', width:'100%',height:60,borderRadius:10,padding:15,
    },
    bottomBox: {
        backgroundColor: 'white',
        height: 300,
        borderRadius:25,
        padding:20,
        margin:15
      },
      chainBox:{
        justifyContent:'space-between', 
        flexDirection:'row',
        alignItems:'center'
      },
      modalBox:{
        flexDirection: 'row', 
        padding:10, 
        borderRadius:10, 
        alignItems:'center', 
        marginBottom:5,
        borderBottomColor:'#f8f8f8',
        borderBottomWidth:1,
        height:70,
    },
    chainImage:{
        width: 35, 
        height: 35, 
        alignSelf:'center',
    },
    modalText:{
        alignContent:'center', 
        marginLeft:20,
    },
    });