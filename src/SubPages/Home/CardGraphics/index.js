import React from "react";

import {View, Text, StyleSheet} from 'react-native';

const cardImage = "https://cdn.iconscout.com/icon/free/png-512/mastercard-25-675722.png"

// Anotações
// Criar um gráfico com as categorias de despesas.

export default function CardGraphics(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Despesas por Categorias</Text>
            <View style={styles.cards}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        padding: 10,
    },
    title: {
        fontSize: 30,
        color: 'gray'
    },
    cards: {
        marginTop: 10,
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        height: 200,
    }
})