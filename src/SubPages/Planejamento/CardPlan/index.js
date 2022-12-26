import React from "react";
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const cardImage = "https://cdn.iconscout.com/icon/free/png-512/mastercard-25-675722.png"

export default function CardPlan(){
    return(
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>
                    BANK NAME
                </Text>
            </View>
            <View style={styles.containerDados}>
                <Text style={styles.numberCard}>1234  5678  9012  3456</Text>
                <View style={styles.dadosCliente}>
                    <Text style={{color: '#e0e0de', fontSize: 17, fontWeight: '600'}}>Alex M. de Paula</Text>
                    <View style={styles.date}>
                        <Text style={{textTransform: 'uppercase', color: '#e0e0de', fontWeight: '500', fontSize: 12}}>Expiry</Text>
                        <Text style={{fontSize: 17, color: '#e0e0de'}}>06/13</Text>
                        <Text style={{fontSize: '12', color: '#e0e0de'}}>MM  YY</Text>
                    </View>
                    <Image source={{uri: cardImage}} style={styles.image}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 185,
        marginLeft: 50,
        marginTop: 50,
        borderRadius: 20,
        padding: 15,
        justifyContent: 'space-between',
        backgroundColor: 'black'
    },
    containerTitle: {
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