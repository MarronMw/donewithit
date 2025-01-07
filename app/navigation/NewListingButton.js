import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors'

export default function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.main}>
            <View style={styles.container}>
                <MaterialCommunityIcons style={styles.self} name='plus-circle' color={colors.white} size={30}/>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        borderColor:colors.white,
        borderWidth:10,
        justifyContent:'center',
        alignItems:'center',
        height:80,
        width:80,
        borderRadius:40,
        },
    main:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    self:{
        textAlign:'center',
    }
})