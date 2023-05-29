
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomScreen from '../bottomScreens/BottomScreen';
//Screens
import Earn from '../../screens/home/earn/Earn';
import BottomSheetStack from './BottomSheetStack';
import Home from '../../screens/home/home/Home';
import Explore from '../../screens/home/explore/Explore';
import Card from '../../screens/home/Card';

  const AddScreenComponent = () => {return null;}
  const Tab = createBottomTabNavigator();

function TabNav() {
    return (
        
            <Tab.Navigator shifting={true} initialRouteName='Home' screenOptions={({ route }) => ({tabBarIcon: ({ focused, color, size, }) => {
                        let iconName;

                        if (route.name === 'Wallet') {
                            iconName = focused ? 'ios-wallet' : 'ios-wallet-outline';
                        } else if (route.name === 'Explore') {
                            iconName = focused ? 'ios-search' : 'ios-search-outline';
                        } else if (route.name === 'Earn') {
                            iconName = focused ? 'ios-leaf' : 'ios-leaf-outline';
                        } else if (route.name === 'Card') {
                            iconName = focused ? 'ios-card' : 'ios-card-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                    tabBarShowLabel: false,
                    tabBarStyle:{
                        height:100,
                    },                
                })}
            >
                <Tab.Screen name='Wallet' component={BottomSheetStack} options={{ headerShown: false }}/>
                <Tab.Screen name='Explore' component={Explore} options={{ headerShown: false }} />
                <Tab.Screen name='Vero' component={AddScreenComponent} options={{tabBarButton: () => <BottomScreen/>}} />
                <Tab.Screen name='Earn' component={Earn} options={{ headerShown: false }} />

                <Tab.Screen name='Card' component={Card} options={{ headerShown: false }} />
            </Tab.Navigator>
    
    )
}


export default TabNav;