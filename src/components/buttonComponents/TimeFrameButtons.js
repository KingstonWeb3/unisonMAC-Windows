import React, {useState, useContext} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native'
import { EventRegister } from 'react-native-event-listeners'

export const TimeFrameButtons = ({buttons, doSomethingAfterClick}) => {
    
    const [clickedId, setClickedId] = useState(0)
    const handleClick = (item, id) => {
        setClickedId(id)
        doSomethingAfterClick(item)
    }

    return (
        <View style={styles.activityBox}>
            {buttons.map((buttonLabel, index) => {
                    return (
                    <TouchableOpacity key={index} style={[index === clickedId ? styles.buttonActive : styles.buttonInactive]} onPress={(item) => handleClick(item, index)}>
                        <Text style={index === clickedId ? styles.textActive : styles.textInactive}>{buttonLabel}</Text>
                    </TouchableOpacity>)})}
        </View>
)}


const styles = StyleSheet.create({
    activityBox:{
        flexDirection: 'row',   
        justifyContent:'space-between',
        marginTop:10,
    },
    buttonActive:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor: '#f8f8f8', 
        borderRadius: 8, 
        width: 40, 
        alignItems: 'center',
        margin:5,
        padding:5
    },
    buttonInactive:{
        flexDirection:'row',
        justifyContent:'center', 
        borderRadius: 10, 
        width: 40, 
        alignItems: 'center',
        margin:5,
        padding:5
    },
    
   
})

export default TimeFrameButtons;