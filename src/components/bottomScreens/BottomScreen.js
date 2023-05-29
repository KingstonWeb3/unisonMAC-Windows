import {useRef} from 'react';
import { View, TextInput, Image, Text, Button, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { BottomSheet } from 'react-native-btr';
import Sell from '../../assets/images/minus.svg';
import Send from '../../assets/images/send.svg';
import Buy from '../../assets/images/plus.svg';
import Swap from '../../assets/images/swap.svg';
import Bridge from '../../assets/images/bridge.svg';
import Earn from '../../assets/images/earn.svg';
import Receive from '../../assets/images/qr.svg';

import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import {useState} from 'react';

function BottomScreen() {
    const [visible, setVisible] = useState(false);
    const navigation = useNavigation();

    const toggleBottomNavigationView = () => {
        //Toggling the visibility state of the bottom sheet
        setVisible(!visible);
      };

return(

    <SafeAreaView style={{flex:1, margin:2, justifyContent:'center', alignItems:'center'}}>
        <View style={{ flex:1, margin:2, justifyContent:'center', alignItems:'center' }}>
            <Pressable onPress={toggleBottomNavigationView}>
              <Image source={require('../../assets/images/icon256.png')} style={{ width: 65, height: 65, marginTop:-45, borderRadius:20}}/>
            </Pressable>
                <BottomSheet
                
                    visible={visible}
                     //setting the visibility state of the bottom sheet
                     onBackButtonPress={toggleBottomNavigationView}
                     //Toggling the visibility state
                     onBackdropPress={toggleBottomNavigationView}
                     //Toggling the visibility state
                     >
                     {/*Bottom Sheet inner View*/}
                    
                    <View style={styles.bottomNavigationView}>
                    

                            <TouchableOpacity style={styles.modalBox} onPress={() => {
                                navigation.navigate('Buy');
                                toggleBottomNavigationView();
                            }}>
                            <View style={styles.accentModalBox}>
                               <Buy width={30} height={30} style={styles.image}/>
                            </View>
                                <View style={styles.modalText}>
                                    <Text style={{ fontSize: 20, color: 'black' }}>Buy</Text>
                                    <Text style={{ color: 'grey' }}>Buy crypto with bank account / card</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalBox} onPress={() => {
                                navigation.navigate('Sell');
                                toggleBottomNavigationView();
                            }}>
                            <View style={styles.accentModalBox}>
                               <Sell  width={30} height={30} style={styles.image}/>
                            </View>
                                <View style={styles.modalText}>
                                    <Text style={{ fontSize: 20, color: 'black' }}>Sell</Text>
                                    <Text style={{ color: 'grey' }}>Sell your Crypto for Fiat</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalBox} onPress={() => {
                                navigation.navigate('Send')
                                toggleBottomNavigationView();
                            }}>
                            <View style={styles.accentModalBox}>
                            <Send  width={30} height={30} style={styles.image}/>
                            </View>
                                <View style={styles.modalText}>
                                    <Text style={{ fontSize: 20, color: 'black' }}>Send</Text>
                                    <Text style={{ color: 'grey' }}>Send crypto to other wallets</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalBox} onPress={() => {
                                navigation.navigate('Receive');
                                toggleBottomNavigationView();
                            }}>
                                <View style={styles.accentModalBox}>
                                <Receive  width={30} height={30} style={styles.image}/>
                               </View>
                                <View style={styles.modalText}>
                                    <Text style={{ fontSize: 20, color: 'black' }}>Receive</Text>
                                    <Text style={{ color: 'grey' }}>Receive crypto into your wallet</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalBox} onPress={() => {
                                navigation.navigate('Swap');
                                toggleBottomNavigationView()
                            }}>
                                <View style={styles.accentModalBox}>
                                <Swap  width={30} height={30} style={styles.image}/>
                               </View>
                                <View style={styles.modalText}>
                                    <Text style={{ fontSize: 20, color: 'black' }}>Swap</Text>
                                    <Text style={{ color: 'grey' }}>Swap any crypto over any blockchain</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalBox} onPress={() => {
                                navigation.navigate('Bridge');
                                toggleBottomNavigationView();
                            }}>
                                <View style={styles.accentModalBox}>
                                <Bridge  width={30} height={30} fill={'green'} style={styles.image}/>
                               </View>
                                <View style={styles.modalText}>
                                    <Text style={{ fontSize: 20, color: 'black' }}>Bridge</Text>
                                    <Text style={{ color: 'grey' }}>Bridge your assets across chains</Text>
                                </View>
                            </TouchableOpacity>

                            
                    </View>

            </BottomSheet>
        </View>
    </SafeAreaView>
    )
}


export default BottomScreen;

const styles = StyleSheet.create({
    bottomNavigationView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 520,
        padding:20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

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
        backgroundColor:'#f8f8f8',
        width:50,
        height:50,
        justifyContent:'center',
        borderRadius:10,
    },
    image:{
        justifyContent:'center',
        alignSelf:'center',

    },
    modalText:{
        alignContent:'center', 
        marginLeft:20,
        color: 'grey'
    },
    });

