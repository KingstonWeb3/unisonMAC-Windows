import * as  React from 'react';
import { useState, useContext} from 'react';
import { View, TextInput, StyleSheet, SafeAreaView, Image, Text, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Scan from '../../../assets/images/scan.svg';
import Search from '../../../assets/images/search.svg';
import themeContext from '../../../../theme/themeContext';
import { useFonts } from 'expo-font'
import ExploreTabSelector from './ExploreTabSelector';

function Explore({ navigation }) {
    const [text, onChangeText] = React.useState('Enter site name or URL');
    const printButtonLabel = (item) => {console.log(item)}

    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false)

    const { width } = Dimensions.get('window');

    const [fontsLoaded] = useFonts({'R': require('../../../assets/fonts/SFproRegular.otf'), 'M': require('../../../assets/fonts/SFproMedium.otf'), 'B': require('../../../assets/fonts/SFproBold.otf')});

    return(
        <SafeAreaView style={[styles.container, {backgroundColor: theme.backgroundColor }]}>
            
                <View style={[styles.header, {color:theme.color }]}>
                    <Text style={[styles.headerText, {color:theme.color}]}>Explore</Text>
                </View>

                    <TouchableOpacity style={styles.searchBox}>
                        <Search width={20} height={20}/>
                        <TextInput style={{width:'80%', fontFamily:'R', color:'#f8f8f8'}} placeholder="Search for Asset, Address (0x...) or .ens domain" placeholderTextColor='grey'></TextInput>
                        <Scan width={20} height={20}/>
                    </TouchableOpacity>

                    <ScrollView horizontal={true} scrollEventThrottle={16} snapToInterval={width} decelerationRate={0} snapToAlignment="center" style={{height:230, marginTop:15, flexGrow:1 }}>
                    <View>
                        <Image source={require('../../../assets/propimages/apecoinbanner.png')} style={{width: width*0.93, height: 230,borderRadius:10, marginHorizontal:15}}/>
                    </View>
                    <View>
                        <Image source={require('../../../assets/propimages/apecoinbanner.png')} style={{width: width*0.93, height: 230,borderRadius:10, marginHorizontal:15}}/>
                    </View>
                    <View>
                        <Image source={require('../../../assets/propimages/apecoinbanner.png')} style={{width: width*0.93, height: 230,borderRadius:10, marginRight:15}}/>
                    </View>
                </ScrollView>

                    <ExploreTabSelector/>
        
            
            </SafeAreaView>
    )
}

export default Explore;

const styles = StyleSheet.create({
    container:{
        paddingVertical:40, 
        paddingHorizontal:15,
        flex:1,
        backgroundColor:'white',
    },
    profile:{
        width:40,
        height:40,
        backgroundColor:'#f8f8f8',
        borderRadius:5
    },
    header:{
        justifyContent:'space-between', 
        alignItems:'center',  
        paddingTop:10,
    },
    headerText:{
        fontSize:25,
        fontFamily:'M',
    },
    searchBox:{
        borderRadius: 10,  
        alignItems:'center', 
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#f8f8f8', 
        height:40, 
        marginTop:20, 
        padding:10,
        marginHorizontal:15,
    },
    trendingTokenImage:{
        width: 20, 
        height: 20, 
        marginBottom:5, 
        marginRight:5,
    },
    heading:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5,
    },
    seeAllText:{
        color:'grey',
    },
    headingText:{
        fontSize:18,
    },
})