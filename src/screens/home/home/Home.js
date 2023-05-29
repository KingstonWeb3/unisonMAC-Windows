import React, { useState, useRef, useEffect, useContext, useCallback } from 'react';
import { Image, FlatList, Text, StyleSheet, View, SafeAreaView, TouchableOpacity, Button, Flatlist, ScrollView, Animated, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Hamburger from '../../../assets/images/hamburgericon.svg';
import Dots from '../../../assets/images/3dots.svg';
import Scan from '../../../assets/images/scan.svg';
import { useFonts } from 'expo-font'
import NetworkSelect from '../../../components/networkSelect/NetworkSelect';
import themeContext from '../../../../theme/themeContext';
import ButtonGroup from '../../../components/buttonComponents/ButtonGroupTGA';
import TimeFrameButtons from '../../../components/buttonComponents/TimeFrameButtons';

function Home({ navigation }) {

    const scrollY = useRef(new Animated.Value(0)).current;
    const {height}=Dimensions.get('window');
    const clampedScrollY = Animated.diffClamp(scrollY, 0, height * 0.9);

    const bottomBoxTranslateY = clampedScrollY.interpolate({
        inputRange: [0, height * 0.9],
        outputRange: [0, -height * 0.9],
        extrapolate: 'clamp'
    });

    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false)
    const printButtonLabel = (item) => {console.log(item)}
    const [fontsLoaded] = useFonts({'R': require('../../../assets/fonts/SFproRegular.otf'), 'M': require('../../../assets/fonts/SFproMedium.otf'), 'B': require('../../../assets/fonts/SFproBold.otf')});
 
     return (     
         
         <SafeAreaView style={[styles.container, {backgroundColor: theme.backgroundColor }]}>
             
             <StatusBar style="inverted"/>
                 
                 <View style={styles.topBox} >
                     <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                         <Hamburger width={25} height={25} />
                     </TouchableOpacity>
                     <NetworkSelect />
                     <TouchableOpacity>
                         <Scan width={30} height={30} />
                     </TouchableOpacity>
                 </View>
 
                 <View style={[styles.firstContainer, {backgroundColor:theme.backgroundColor, shadowColor:theme.shadowColor }]}>
                     <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                         <View style={{ flexDirection: 'row' }}>
                             
                             <View style={{ justifyContent: 'space-between' }}>
                                 <Text style={[styles.balanceText, {color: theme.color }]}>$1,100.00</Text>
                                 <Text style={{ fontSize: 15, color: '#2FD100', fontFamily:'R' }}>+5.19% ($647.19)</Text>
                             </View>
                         </View>
                         <TouchableOpacity style={{ padding: 5 }}>
                             <Dots width={25} height={25} />
                         </TouchableOpacity>
                     </View>
                     <Image source={require('../../../assets/images/graph.png')} style={{ width:'105%', marginTop:10 }} />
                     <TimeFrameButtons buttons={['Live', '1D', '1W', '1M', '1Y', 'Max']} doSomethingAfterClick={printButtonLabel} />
                 </View>
 
                 <Animated.ScrollView 
                style={[styles.bottomBox, 
                    {transform: [{translateY: bottomBoxTranslateY}]}]} 
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={16} // This prop will ensure that you're getting the scroll position data after every 16 milliseconds
            >
                <ButtonGroup />
            </Animated.ScrollView>
         </SafeAreaView> 
         
     )
 }
 
 const styles = StyleSheet.create({
     container:{
         paddingHorizontal:15,
         paddingVertical:40,
         backgroundColor:'white', 
         flex:1,
     },
     topBox:{
         flexDirection: 'row',
         justifyContent: 'space-between', 
         alignItems: "center",   
         height:50,
         marginTop:5,
         paddingHorizontal:20,
     },
     firstContainer:{
         marginTop: 15, 
         height: 320, 
         padding: 15, 
         borderRadius: 15,
         shadowColor: '#171717',
         shadowOffset: {width:0, height:0},
         shadowOpacity: 0.08,
         shadowRadius: 4,
         marginHorizontal:15,
         zIndex:-1,
     },
     balanceText:{
         fontSize: 30, 
         fontWeight: 'bold',
         color:'black',
         fontFamily:'M',
     },
 
     timeframeSelected:{
         backgroundColor: '#F0F0F0', 
         justifyContent: 'center', 
         height: 30, 
         width: 45, 
         paddingHorizontal:7, 
         borderRadius: 7.5, 
         alignItems: 'center', 
         borderColor: 'white', 
         borderWidth: 2
     },
     timeframeUnselected:{
         textAlign:'center',
         justifyContent: 'center', 
         height: 30, 
         width: 45, 
         paddingHorizontal: 7, 
         borderRadius: 5, 
         alignItems: 'center', 
         borderColor: 'white', 
         borderWidth: 2
     },
     tokenBox:{
         backgroundColor:'white',
         marginLeft:15,
         marginRight:15,
         borderRadius:10,
         shadowColor: '#171717',
         shadowOffset: {width:3, height:2},
         shadowOpacity: 0.05,
         shadowRadius: 6,
     },
 
     avatar:{
         width:60,
         height:60,
         backgroundColor:'#f8f8f8',
         marginRight:10,
         borderRadius:10,
     },
     bottomBox:{
         marginTop:50,
         marginHorizontal:15,
         borderRadius:10,
         backgroundColor:'white',
         shadowColor: '#171717',
         shadowOffset: {width:0, height:0},
         shadowOpacity: 0.08,
         shadowRadius: 4,
     }
 })
 export default Home; 