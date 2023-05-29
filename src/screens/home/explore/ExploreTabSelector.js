import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image, ScrollView, Modal,Button } from 'react-native'
import { useFonts } from 'expo-font'
import axios from 'axios';

const ExploreTabSelector = (navigation) => {
    const [selectedTab, setSelectedTab] = useState(1);
    const [favourites, setFavourites] = useState([]);
    const [showModal, setShowModal] = useState(false);
    
    //Tokens
    const [cryptos, setCryptos] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {'X-CMC_PRO_API_KEY': '0a94b2ea-0c61-4ecb-8274-9c10c6628e41',},
            params: {start: '1', limit: '10', convert: 'USD',},});
  
          setCryptos(response.data.data);} catch (error) {console.error(error);}};
          fetchData();}, []);
    
    //NFTs
    const [collections, setCollections] = useState([]);
    useEffect(() => {
      const fetchTopCollections = async () => {
        try {
          const response = await axios.get('https://api.opensea.io/api/v1/collections', {
            headers: {'X-API-KEY': 'e95aba7f1608469094fbe659df865440', },params: {limit: 5, },});
  
          const allCollections = response.data.collections;
          const floorPrice = response.data.collection.floor_price;
  
          // Sort the collections by trading volume in descending order
          const sortedCollections = allCollections.sort((a, b) => b.stats.seven_day_volume - a.stats.seven_day_volume);
  
          // Select the top 5 collections
          const topCollections = sortedCollections.slice(0, 5);
  
          setCollections(topCollections);
        } catch (error) {
          console.error(error);
        }
      };fetchTopCollections();}, []);
  
  
    const handleTabPress = (tab) => {
      setSelectedTab(tab);
    }

    const handlePress = (item) => {
      setFavourites([...favourites, item]);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 1500);
    }
  
    const removeFavourite = (itemToRemove) => {
      setFavourites(favourites.filter(item => item !== itemToRemove));
    }

    const [fontsLoaded] = useFonts({'R': require('../../../assets/fonts/SFproRegular.otf'), 'M': require('../../../assets/fonts/SFproMedium.otf'), 'B': require('../../../assets/fonts/SFproBold.otf')});

    const renderBox = (item, isFavourite = false) => (
      <View>
      <TouchableOpacity onPress={() => !isFavourite && handlePress(item)} style={styles.trendingBox}>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Image source={{uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`}} style={{ width: 20, height: 20, marginRight: 5 }} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontFamily:'M' }}>{item.name}</Text>
            <Text style={{fontFamily:'R', fontSize:12}}>{item.symbol}</Text>
          </View>
        </View>
  
        <View>
          <View style={{ backgroundColor: item.quote.USD.percent_change_24h >= 0 ? '#2FD100' : '#FF3B30', padding: 12, borderRadius:5, width:50, opacity: 0.1, position:'absolute' }}/>
          <Text style={{marginLeft:5, color: item.quote.USD.percent_change_24h >= 0 ? '#2FD100' : '#FF3B30', fontFamily:'M', marginTop:3}}>{item.quote.USD.percent_change_24h.toFixed(2)}%</Text>
        </View>
  
        <View>
          <Text style={{ fontFamily:'M' }}>${item.quote.USD.price.toFixed(2)}</Text>
        </View>
      </TouchableOpacity>
      {isFavourite && <Button title="Remove" onPress={() => removeFavourite(item)} />}
    </View>
  );

  const renderNFTbox = ({ collection }) => {
    return (
      <View style={styles.trendingBox}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* Assuming collection.image_url provides the logo image */}
        <Image source={{ uri: collection.image_url }} style={{ width:40, height:40, marginRight:5 }} /> 
        <Text style={{maxWidth:100}}>{collection.name}</Text>
      </View>
      {/* Assuming collection.price_change_last_24h provides the 24-hour price change */}
      <View style={{ backgroundColor: collection.price_change_last_24h >= 0 ? '#2FD100' : 'red', padding:5, borderRadius:10, opacity:0.9 }}>
        <Text style={{}}>{collection.price_change_last_24h}</Text>
      </View>
      <View style={{flexDirection:'column', alignItems:'flex-end'}}>
        <View style={{flexDirection:'row'}}>
          <Image source={require('../../../assets/images/ethlogo2.png')} style={{width:10, height:15, marginRight:5}}/>
          {/* Assuming collection.floor_price provides the floor price in ETH */}
          <Text style={{fontWeight:'bold'}}>{collection.floor_price}</Text> 
        </View>
        {/* Dollar price could be calculated by multiplying the floor price with the current ETH price. If the API provides it, you can use that directly. */}
        <Text>{collection.floor_price * currentEthPriceInDollars}</Text>
      </View>
    </View>
  )
}

//ACTUAL RENDERED COMPONENTS

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} scrollEventThrottle={16} style={styles.tabContainer} >
                <TouchableOpacity style={[styles.tabButton, selectedTab === 1 && styles.selectedTabButton]} onPress={() => handleTabPress(1)}>
                    <Text style={[styles.tabText, selectedTab === 1 && styles.selectedTabText]}>Tokens</Text>
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
             {cryptos.slice(0, 5).map((item, index) => renderBox(item))}
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
                {collections.map((item, index) => renderNFTbox({ collection: item }))}
                  <TouchableOpacity style={styles.showAllButton} onPress={() => navigation.navigate('ExploreFS')}>
                      <Text style={{fontFamily:'M', color:'black'}} onPress>Show All</Text>
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
      paddingHorizontal:15,
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
      marginVertical:10,
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