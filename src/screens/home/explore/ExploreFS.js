import React, {useState, useRef, useContext, useCallback} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image, ScrollView, Modal,Button } from 'react-native'
import { useFonts } from 'expo-font'

const ExploreFullScreen = (navigation) => {
    const [selectedTab, setSelectedTab] = useState(1);
    const [favourites, setFavourites] = useState([]);
    const [showModal, setShowModal] = useState(false);
  
    const handleTabPress = (tab) => {
      setSelectedTab(tab);}

    const handlePress = (item) => {
      setFavourites([...favourites, item]);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 1500);}
  
    const removeFavourite = (itemToRemove) => {
      setFavourites(favourites.filter(item => item !== itemToRemove));}

    const [fontsLoaded] = useFonts({'R': require('../../../assets/fonts/SFproRegular.otf'), 'M': require('../../../assets/fonts/SFproMedium.otf'), 'B': require('../../../assets/fonts/SFproBold.otf')});

    const renderBox = (item, isFavourite = false) => (
      <View>
      <TouchableOpacity onPress={() => !isFavourite && handlePress(item)} style={styles.trendingBox}>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Image source={require('../../../assets/images/ethlogo.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontFamily:'M' }}>{item.name}</Text>
          </View>
        </View>
  
        <View>
          <View style={{ backgroundColor:'#2FD100', padding: 12, borderRadius:5, width:50, opacity: 0.1, position:'absolute' }}/>
          <Text style={{marginLeft:5, color:'#2FD100', fontFamily:'M', marginTop:3}}>+0.75</Text>
        </View>
  
        <View>
          <Text style={{ fontFamily:'M' }}>{item.price}</Text>
        </View>
      </TouchableOpacity>
      {isFavourite && <Button title="Remove" onPress={() => removeFavourite(item)} />}
    </View>
    );
  

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} scrollEventThrottle={16} style={styles.tabContainer} >
                <TouchableOpacity style={[styles.tabButton, selectedTab === 1 && styles.selectedTabButton]} onPress={() => handleTabPress(1)}>
                    <Text style={[styles.tabText, selectedTab === 1 && styles.selectedTabText]}>Top Tokens</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tabButton, selectedTab === 2 && styles.selectedTabButton]} onPress={() => handleTabPress(2)}>
                    <Text style={[styles.tabText, selectedTab === 2 && styles.selectedTabText]}>Favorites</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tabButton, selectedTab === 3 && styles.selectedTabButton]} onPress={() => handleTabPress(3)}>
                    <Text style={[styles.tabText, selectedTab === 3 && styles.selectedTabText]}>NFT</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tabButton, selectedTab === 4 && styles.selectedTabButton]} onPress={() => handleTabPress(4)}>
                    <Text style={[styles.tabText, selectedTab === 4 && styles.selectedTabText]}>News</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tabButton, selectedTab === 5 && styles.selectedTabButton]} onPress={() => handleTabPress(5)}>
                    <Text style={[styles.tabText, selectedTab === 5 && styles.selectedTabText]}>Top Tokens</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tabButton, selectedTab === 6 && styles.selectedTabButton]} onPress={() => handleTabPress(6)}>
                    <Text style={[styles.tabText, selectedTab === 6 && styles.selectedTabText]}>Optimism</Text>
                </TouchableOpacity>
            </ScrollView>
            

            <View style={[styles.tabContent]}>
                {selectedTab === 1 && 
                    (<View> 
            {renderBox({ name: 'Ethereum', price: '$1,456.34' })}
            <TouchableOpacity style={styles.showAllButton} onPress={() => navigation.navigate('ExploreFS')}>
            <Text style={{fontFamily:'M', color:'black'}} onPress>Show All</Text>
            </TouchableOpacity>
                      
                    </View>)}

                {selectedTab === 2 && 
                    (<View >
                      {favourites.map((item, index) => renderBox(item, true))}
                    </View>)}

                {selectedTab === 3 && 
                    (<View>
            <View>
              <Text style={{ fontSize: 20, marginTop: 5, marginBottom: 15 }}>Trending NFT's</Text>
            </View>
            <View style={styles.trendingBox}>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Image source={require('../../../assets/propimages/apecoin.png')} style={{ width:40, height:40, marginRight:5 }} />
                <Text style={{maxWidth:100}}>Otherdeed for otherside</Text>
              </View>
              <View style={{ backgroundColor:'#2FD100', padding:5, borderRadius:10, opacity:0.9 }}>
                <Text style={{}}>+0.75</Text>
              </View>
              <View style={{flexDirection:'column', alignItems:'flex-end'}}>
                <View style={{flexDirection:'row'}}>
                  <Image source={require('../../../assets/images/ethlogo2.png')} style={{width:10, height:15, marginRight:5}}/>
                  <Text style={{fontWeight:'bold'}}>1.84</Text>
                   </View>

                <Text>$1,456.34</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.showAllButton}>
            <Text style={{fontFamily:'M'}}></Text>
            </TouchableOpacity>
                        
                    </View>)}

                {selectedTab === 4 && 
                    (<View>
                      <View>
              <Text style={{ fontSize: 20, marginTop: 5, marginBottom: 15 }}>News</Text>
            </View>
            <View style={styles.trendingBoxNews}>
                <Image source={require('../../../assets/propimages/apecoin.png')} style={{ width: 70, height: 70, marginRight: 5, borderRadius:5 }} />
                <View>
                <Text style={{maxWidth:290, fontWeight:'bold', fontSize:15}}>Circle announces USDC launch for Cosmos via Noble Network</Text>
                <Text>22h ago   Decrypt</Text>
                <Text style={{marginTop:10}}>bullish:▲ 28      bearish:▼ 8</Text>
              </View>
              
            </View>

            <TouchableOpacity style={{ borderRadius: 30, borderColor: '#f8f8f8', borderWidth: 1, alignItems: 'center', height: 30, justifyContent: 'center', marginVertical: 10 }}>
              <Text style={{fontFamily:'R'}}>Show All News</Text>
            </TouchableOpacity>
                        
                    </View>)}
                {selectedTab === 5 && 
                    (<View>
                        
                    </View>)}
                {selectedTab === 6 && 
                    (<View>
                        
                    </View>)}
                    

                    
                    
            </View>

            <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
              setShowModal(!showModal);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image source={require('../../../assets/images/star.png')} style={{ width: 20, height: 20, marginBottom: 15 }} />
                <Text style={styles.modalText}>Added to Favourites</Text>
              </View>
            </View>
          </Modal>

        </View>

    );
  };

  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabButton: {
      paddingHorizontal: 15,
      marginRight:10,
      paddingVertical: 5,
      borderRadius: 15,
      borderWidth:1,
      borderColor:'#f8f8f8',
      height:30,
    },
    tabContainer:{
      paddingVertical:5,

    },
    selectedTabButton: {
      backgroundColor: '#F8F8F8',
    },
    tabText: {
      fontSize:15,
      color: 'black',
      fontFamily:'R',
    },
    tabContent: {
      backgroundColor:'white',
      borderRadius:15,
      padding:15,
      width:'100%',   
      height:350,
      shadowColor: '#171717',
      shadowOffset: {width:0, height:0},
      shadowOpacity: 0.08,
      shadowRadius: 4,
      
    },
    trendingBox:{
      height:60,
      justifyContent:'space-between',
      flexDirection:'row',
      alignItems:'center',
      paddingVertical:10,
      borderBottomWidth:1,
      borderColor:'#F8F8F8',
    },
    trendingBoxNews:{
      height:100,
      flexDirection:'row',
      alignItems:'center',
      paddingVertical:10,
      borderTopWidth:1,
      borderBottomWidth:1,
      borderColor:'#F8F8F8',
    },
    showAllButton:{
      borderRadius:30,
      borderColor:'#f8f8f8',
      borderWidth:1,
      alignItems:'center',
      height:30,
      justifyContent:'center',
      marginVertical:10
    }
    
    
  });

  export default ExploreTabSelector