import React from "react";
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Entypo } from "@expo/vector-icons";

export default function Button(){
    return(
        <TouchableOpacity style={styles.container}>
            <Entypo name="plus" size={30} color="white"/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#1C8BEF',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    }
})