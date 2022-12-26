import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const cardImage = "https://cdn.iconscout.com/icon/free/png-512/mastercard-25-675722.png"

export default function Cards({
    bankName,
    numberCard,
    nameCard,
    dateValid,
}){
    return(
        <TouchableOpacity activeOpacity={0.6} style={styles.containerCard}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>
                    {bankName}
                </Text>
            </View>
            <View style={styles.containerDados}>
                <Text style={styles.numberCard}>{numberCard}</Text>
                <View style={styles.dadosCliente}>
                    <Text style={{color: '#e0e0de', fontSize: 17, fontWeight: '600'}}>{nameCard}</Text>
                    <View style={styles.date}>
                        <Text style={{textTransform: 'uppercase', color: '#e0e0de', fontWeight: '500', fontSize: 12}}>Expiry</Text>
                        <Text style={{fontSize: 17, color: '#e0e0de'}}>{dateValid}</Text>
                        <Text style={{fontSize: '12', color: '#e0e0de'}}>MM  YY</Text>
                    </View>
                    <Image source={{uri: cardImage}} style={styles.image}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerCard: {
        width: 320,
        height: 185,
        borderRadius: 20,
        padding: 15,
        justifyContent: 'space-between',
        backgroundColor: 'black',
        marginRight: 10
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerDados: {
        height: 80,
        justifyContent: 'space-between'
    },
    numberCard: {
        fontSize: 30,
        fontWeight: '600',
        color: '#e0e0de'
    },
    image:{
        width: 40,
        height: 40
    },
    dadosCliente: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})