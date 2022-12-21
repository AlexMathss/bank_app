import React from "react";

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Entypo, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function Header(){
    return(
        <View style={styles.dataIcons}>
            <TouchableOpacity style={styles.userIcon}>
                    <FontAwesome name="user-circle" size={32} color="#828486"/>
                </TouchableOpacity>
                
                {/* Criar uma lista de opções */}
                <View style={styles.month}>
                    <Text style={styles.dataMonth}>Outubro</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="#828486"/>
                </View>

                <View style={styles.contentHeader}>
                    <TouchableOpacity style={styles.notification}>
                        <FontAwesome5 name="bell" size={22} color="#828486" style={styles.notificationIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notification}>
                        <Entypo name="dots-three-vertical" size={22} color="#828486"/>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dataIcons: {
        backgroundColor: '#FFF',
        width: '100%',
        minHeight: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgray'
    },
    userIcon: {

    },
    month: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around'
    },
    dataMonth: {
        fontWeight: 'bold',
        fontSize: '20'
    },
    contentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 50,
        justifyContent: 'space-between',
    },
    notification: {

    },
    notificationIcon: {

    }
})