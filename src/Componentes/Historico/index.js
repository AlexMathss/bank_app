import React from "react";
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

export default function Historico({
    month,
    fatura,
    valor
}){
    return(
        <View style={styles.container}>
            <View style={styles.calendar}>
                <ImageBackground source={require('../../../assets/calendario.png')} resizeMode="cover" style={styles.image}>
                    <Text style={styles.calendarText}>{month}</Text>    
                </ImageBackground>
                
            </View>
            <Text style={styles.status}>{fatura}</Text>
            <Text style={styles.valor}>R$ {valor}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#1C8BEB',
        borderTopColor: '#1C8BEB'
    },
    calendar: {
        width: '16%',
        height: '90%'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    calendarText: {
        marginTop: 10,
        fontSize: 16,
        color: '#1C8BEB',
        fontWeight: '600'
    },
    status: {
        fontSize: 20,
        fontWeight: '600'
    },
    valor: {
        fontSize: 20,
        color: 'green'
    }
})