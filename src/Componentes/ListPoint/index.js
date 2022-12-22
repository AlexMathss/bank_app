import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import {View, Text, StyleSheet} from 'react-native';


export default function ListPoint({
    title,
    points,
    day,
    month
}){
    return(
        <View style={styles.premios}>
            <View style={styles.iconeDollar}>
                <FontAwesome5 name="dollar-sign" size={20} color="black"/>
            </View>
            <View style={styles.cardText}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardSub}>{points}</Text>
            </View>
            <View style={styles.date}>
                <Text style={styles.day}>{day}</Text>
                <Text style={styles.month}>{month}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    premios: {
        height: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    iconeDollar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardText: {
        height: '100%',
        width: '60%',
        justifyContent: 'space-between'
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '700'
    },
    cardSub: {
        fontSize: 17,
        fontWeight: '700',
        color: 'green'
    },
    date: {
        width: '20%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },   
    day: {
        fontSize: 20,
        fontWeight: '700'
    },
    month: {
        fontSize: 12,
        fontWeight: '700'
    }
})