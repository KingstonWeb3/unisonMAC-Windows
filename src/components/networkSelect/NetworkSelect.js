import {useRef} from 'react';
import { View, TextInput, Image, Text, Button, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DownArrow from '../../assets/images/downarrow.svg';
import { BottomSheet } from 'react-native-btr';
import {useState} from 'react';

function NetworkSelect({ navigation }) {
    const [visible, setVisible] = useState(false);
    const [currentSelection, setCurrentSelection] = useState({
        label: 'Ethereum',
        image: require('../../assets/images/ethlogo.png')
    });

    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };

    const selectOption = (label, image) => {
        setCurrentSelection({ label, image });
        toggleBottomNavigationView();
    };

return(

    <SafeAreaView style={{ flex: 1, margin: 2, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems:'center', backgroundColor:'#F8F8F8', width:120, height:30, borderRadius:5, padding:5 }} onPress={toggleBottomNavigationView}>
                <Image style={{ width: 20, height: 20 }} source={currentSelection.image} />
                <Text style={{fontSize:15, color:'black', paddingRight:5, paddingLeft:5}}>{currentSelection.label}</Text>
                <DownArrow width={10} height={10}/>
            </TouchableOpacity>

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

                    <TouchableOpacity style={styles.modalBox} onPress={() => selectOption('Arbitrum', require('../../assets/propimages/apecoin.png'))}>
                        <Image source={require('../../assets/propimages/apecoin.png')} style={styles.chainImage}></Image>
                        <View style={styles.modalText}>
                            <Text style={{ fontSize:15, color:'black', fontFamily:'M' }}>Arbitrum</Text>
                            <Text style={{fontFamily:'R', color:'grey', fontSize:12, marginTop:3}}>$12,000,000</Text>
                        </View>
                    </TouchableOpacity>

                    
                </View>
            </BottomSheet>
        
    </SafeAreaView>
    )
}

export default NetworkSelect;

const styles = StyleSheet.create({
    bottomNavigationView: {
        backgroundColor: '#fff',
        margin:15,
        height: 300,
        borderRadius:25,
        padding:20
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
        alignItems:'center',
      },
    modalText:{
        alignContent:'center', 
        marginLeft:20,
    },
    });

