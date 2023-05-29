import {useRef, useState} from 'react';
import { View, TextInput, Image, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DownArrow from '../../assets/images/downarrow.svg';
import { BottomSheet } from 'react-native-btr';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import { useFonts } from 'expo-font';

function TokenSelect({ navigation }) {
    const [visible, setVisible] = useState(false);
    

    const toggleBottomNavigationView = () => {
        setVisible(!visible);};

    const [currentSelection, setCurrentSelection] = useState({
        label: 'Ethereum',
        image: require('../../assets/images/ethlogo.png')
     });

     const selectOption = (label, image) => {
        setCurrentSelection({ label, image });
        toggleBottomNavigationView();};

    const [fontsLoaded] = useFonts({'R': require('../../assets/fonts/SFproRegular.otf'), 'M': require('../../assets/fonts/SFproMedium.otf'), 'B': require('../../assets/fonts/SFproBold.otf')});

return(

    <SafeAreaView style={{ flex: 1, margin: 2, justifyContent: 'center', alignItems: 'center' }}>

        <View style={styles.amountBox}>
            <TouchableOpacity style={{paddingVertical:5, paddingRight:5}}>
                <TextInput placeholder="$0" placeholderTextColor='grey' styles={{width:50}}></TextInput>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 10, }} onPress={toggleBottomNavigationView}>
                        <Image source={currentSelection.image} style={{ width: 25, height: 25, borderRadius: 20}} />
                        <Text style={{ color:'black', fontSize:20, marginHorizontal:5, fontFamily:'M' }}>ETH</Text>
                        <DownArrow width={10} height={10} />
            </TouchableOpacity>

        </View>
        <Text style={{fontSize:12, color:'grey', marginTop:3, fontFamily:'R'}}>$0.000</Text>

            <BottomSheet visible={visible} onBackButtonPress={toggleBottomNavigationView} onBackdropPress={toggleBottomNavigationView}>
                {/*Bottom Sheet inner View*/}
                <View style={styles.bottomNavigationView}>
                    <View style={styles.chainBox}>
                        <View/>
                        <Text style={{ fontSize: 25, fontFamily:'M' }}> Choose Network</Text>
                        <TouchableOpacity onPress={toggleBottomNavigationView}>
                            <Image source={require('../../assets/images/close.png')} style={{ width: 20, height: 20, }}></Image>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.modalBox} onPress={() => selectOption('Ethereum', require('../../assets/images/ethlogo.png'))} >
                        <Image source={require('../../assets/images/ethlogo.png')} style={styles.chainImage}></Image>
                        <View style={styles.modalText}>
                            <Text style={{ fontSize:15, color:'black', fontFamily:'M'  }}>Ethereum</Text>
                            <Text style={{fontFamily:'R', color:'grey', fontSize:12, marginTop:3}}>$12,000,000</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.modalBox} onPress={() => selectOption('Polygon', require('../../assets/propimages/polygon.png'))} >
                        <Image source={require('../../assets/propimages/polygon.png')} style={styles.chainImage}></Image>
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

export default TokenSelect;

const styles = StyleSheet.create({
    bottomNavigationView: {
        backgroundColor: 'white',
        height: 300,
        borderRadius:15,
        padding:20,
        margin:15
      },
      modalBox:{
        flexDirection: 'row', 
        padding:10, 
        borderRadius:10, 
        alignItems:'center', 
        marginBottom:5,
        borderBottomColor:'#f8f8f8',
        borderBottomWidth:1,
    },
    accentModalBox:{
        width:50,
        height:50,
        justifyContent:'center',
        borderRadius:10,
    },
    chainImage:{
        width: 35, 
        height: 35, 
        alignSelf:'center',
    },
    chainBox:{
        justifyContent:'space-between', 
        flexDirection:'row',
        alignContent:'center',

      },
    modalText:{
        alignContent:'center', 
        marginLeft:20,
    },
    amountBox:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center', 
        borderRadius:10, 
        width:'100%',
        padding:15,
        marginVertical:5,
        height:60,
        backgroundColor:'#f8f8f8',
    },
    });

