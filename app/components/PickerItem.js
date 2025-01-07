import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AppText from './AppText';

function PickerItem({label,onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.txt}>{label}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    txt:{
        color: "#000",
        marginTop:5,
        padding:10,
        backgroundColor:"#f4f4f4",
        borderRadius:10
    }
})
export default PickerItem;