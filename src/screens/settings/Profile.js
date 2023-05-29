import * as  React from 'react';
import { View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

function Profile({ navigation }) {


    return(
        <SafeAreaView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    onPress={() => navigation.navigate('Home')}
                    style={{ fontSize: 26, fontWeight: 'bold' }} >Buy screen</Text>
            </View>

            <View>

            </View>
        </SafeAreaView>
)}

export default Profile;