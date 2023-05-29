import React, {useState, useRef, useContext} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image, FlatList, Dimensions,Animated,Button} from 'react-native'
import cryptocurrencies from '../../assets/data/cryptocurrencies.json';
import CoinItem from '../coinItem/index';
import { BottomSheet } from 'react-native-btr';
import Dots from './../../assets/images/3dots.svg';
import Tick from '../../assets/images/tick.svg';
import Info from '../../assets/images/info.svg';

const ButtonGroup = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    const [visible, setVisible] = useState(false);
  
    const handleTabPress = (tabIndex) => {
      setSelectedTab(tabIndex);};

      const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };

    return (
        <View>
            <View style={styles.tabContainer}>
                <TouchableOpacity style={[styles.tabButton, selectedTab === 1 && styles.selectedTabButton]} onPress={() => handleTabPress(1)}>
                    <Text style={[styles.tabText, selectedTab === 1 && styles.selectedTabText]}>Tokens</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tabButton, selectedTab === 2 && styles.selectedTabButton]} onPress={() => handleTabPress(2)}>
                    <Text style={[styles.tabText, selectedTab === 2 && styles.selectedTabText]}>Gallery</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tabButton, selectedTab === 3 && styles.selectedTabButton]} onPress={() => handleTabPress(3)}>
                    <Text style={[styles.tabText, selectedTab === 3 && styles.selectedTabText]}>Activity</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tabContent}>
                {selectedTab === 1 && //Tokens
                    (<View>
                        <FlatList data={cryptocurrencies} renderItem={({ item }) => <CoinItem marketCoin={item} />} />
                    </View>)}

                {selectedTab === 2 && //NFTGallery
                    (<View style={styles.galleryView}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../assets/propimages/NFT.jpg')} style={{ width: '50%', height:180, borderRadius: 10, marginRight: 5 }} />
                            <Image source={require('../../assets/propimages/NFT.jpg')} style={{ width: '50%', height:180, borderRadius: 10 }} />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Image source={require('../../assets/propimages/NFT.jpg')} style={{ width: '50%', height: 180, borderRadius: 10, marginRight: 5 }} />
                            <Image source={require('../../assets/propimages/NFT.jpg')} style={{ width: '50%', height: 180, borderRadius: 10 }} />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Image source={require('../../assets/propimages/NFT.jpg')} style={{ width: '50%', height: 180, borderRadius: 10, marginRight: 5 }} />
                        </View>
                    </View>)}

                {selectedTab === 3 && //Activity
                    (<View style={styles.galleryView}>
                        <TouchableOpacity style={{ height: 60, width: '90%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', justifyContent: 'space-between', borderColor: '#E5E2E2', borderTopWidth: 1, borderBottomWidth: 1 }} onPress={toggleBottomNavigationView}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../../assets/propimages/NFT.jpg')} style={{ height: 30, width: 30, borderRadius: 5, margin: 5, alignItems: 'center', marginRight: 5 }} />
                                <Text>Curve</Text>
                            </View>
                            <Text style={{  color: 'grey' }}>Decentralized Exchange</Text>
                        </TouchableOpacity>
                    </View>)}
                    <BottomSheet visible={visible} onBackButtonPress={toggleBottomNavigationView} onBackdropPress={toggleBottomNavigationView}>
                    <View style={styles.bottomNavigationView}>


                      <View style={{flexDirection:'column', padding:10, flex:1, justifyContent:'space-between'}}>
                         <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                           <Image source={require('../../assets/images/ethlogo.png')} style={{width:50, height:50}}/>
                             <View>
                               <Text style={{fontSize:20}}>Received from Binance</Text>
                               <Text style={{color:'grey'}}>June 13th 2022 / 4:48PM</Text>
                             </View>
                             <View>
                              <Dots width={30} height={30}/>
                             </View>                       
                         </View>

                         <View style={{alignItems:'center'}}>
                          <Text style={{fontSize:40}}>$730.07</Text>
                          <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Image source={require('../../assets/images/ethlogo.png')} style={{width:20, height:20, marginRight:5}}/>
                            <Text>0.41267ETH</Text>
                          </View>
                         </View>

                         <View style={{backgroundColor:'green', borderRadius:20, justifyContent:'space-between',flexDirection:'row', alignItems:'center', padding:5}}>
                         <Tick width={30} height={30}/>
                          <Text style={{fontSize:20}}>Completed</Text>
                          <Info width={30} height={30}/>
                          
                         </View>

                      </View>

                      <View >
                        <View style={{flexDirection:'row'}}>
                          <Text>Wallet</Text>

                        </View>
                        <View>
                          <Text>Network Fee</Text>
                        </View>
                        
                      </View>


                    </View>

            </BottomSheet>
                
            </View>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        margin:20,
        borderRadius: 10, 
        backgroundColor: '#F8F8F8', 
        padding: 5,
        height:50,
    },
    tabButton: {
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 8,
      
    },
    selectedTabButton: {
      backgroundColor: '#FFFFFF',
      
    },
    tabText: {
      fontSize:16,
      color: 'grey',
   
    },
    selectedTabText: {
      fontSize:16,
      color: 'black',
  
    },
    tabContent: {
      paddingHorizontal: 20,
    },
    tabContentText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    bottomNavigationView: {
      backgroundColor: '#fff',
      height: 300,
      borderRadius:20,
      paddingHorizontal:20,
      marginHorizontal:15,
      marginBottom:15,
      flexDirection:'column'
    },
    chainBox:{
      justifyContent:'space-between', 
      marginVertical:20, 
      flexDirection:'row'
    },
    
  });

export default ButtonGroup;