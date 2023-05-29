import {React, useContext, useState, useCallback} from "react";
import { Text, View, Image, Pressable, StyleSheet, SafeAreaView,} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import themeContext from '../../../theme/themeContext';
import { useFonts } from 'expo-font'

//FONT


const CoinItem = ({ marketCoin }) => {
  const theme = useContext(themeContext)
  const [darkMode, setDarkMode] = useState(false)
  const {id,name,current_price,market_cap_rank,price_change_percentage_24h,symbol,market_cap,image,} = marketCoin;

  const [fontsLoaded] = useFonts({'R': require('../../assets/fonts/SFproRegular.otf'), 'M': require('../../assets/fonts/SFproMedium.otf'), 'B': require('../../assets/fonts/SFproBold.otf')});
  const onLayoutRootView = useCallback(async () => { if (fontsLoaded) {await SplashScreen.hideAsync();}}, [fontsLoaded]); if (!fontsLoaded) {return null; }

  const navigation = useNavigation();

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784" || 'white';

  const normalizeMarketCap = (marketCap) => {
    if (marketCap > 1e12) {
      return `${(marketCap / 1e12).toFixed(3)} T`;
    }
    if (marketCap > 1e9) {
      return `${(marketCap / 1e9).toFixed(3)} B`;
    }
    if (marketCap > 1e6) {
      return `${(marketCap / 1e6).toFixed(3)} M`;
    }
    if (marketCap > 1e3) {
      return `${(marketCap / 1e3).toFixed(3)} K`;
    }
    return marketCap;
  };

  return (
    <SafeAreaView style={[styles.galleryView]}>
    <TouchableOpacity style={[styles.coinContainer, {backgroundColor:theme.backgroundColor}]}>
      <Image source={{ uri: image }} style={{ height: 45, width: 45, marginRight: 10, alignSelf: "center" }} />
      <View>
        <Text style={[styles.title, {color:theme.color}]}>{name}</Text>
        <View style={{ flexDirection: "row", alignItems:'center', marginTop:3 }}>
          <Image source={require('../../assets/images/ethlogo.png')} style={{ height: 15, width: 15, marginRight: 5, alignSelf: "center" }} />
          <Text>0 </Text>
          <Text style={[styles.text, {color:theme.color}]}>{symbol.toUpperCase()}</Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={[styles.currentValue, {color:theme.color}]}>${current_price}</Text>
        <View style={{ borderRadius: 5, padding: 3, backgroundColor: percentageColor, opacity:0.1, width:55, height:18, padding:10, marginTop:1.5 }}/>
        <Text style={{color: percentageColor, position:'absolute', marginTop:22}}>{price_change_percentage_24h?.toFixed(2)}%</Text>
      </View>
    </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  
  title: {
    color: " #101115",
    fontSize: 16,
    fontFamily:'M',
  
  },
  currentValue:{
    color: " #101115",
    fontSize: 16,
    fontFamily:'M',
  },
  text: {
    color: " #101115",
    marginRight: 50,
    fontSize:15,
    fontFamily:'R',
  },
  coinContainer: {
    flexDirection: "row",
    paddingVertical:15,
    borderBottomColor:'#F8F8F8',
    borderBottomWidth:1,
  },
});

export default CoinItem;