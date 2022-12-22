import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function ListItems({
    iconeLegend,
    title,
    legend,
    valor
}){
    return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.content}>
                    <View style={styles.iconeCat}>
                        {iconeLegend}
                    </View>
                    <View style={styles.cardText}>
                        <Text style={styles.description}>{title}</Text>
                        <Text style={styles.subDescription}>{legend}</Text>
                    </View>
                    <View style={styles.cardValue}>
                        <Text style={styles.value}>R$ {valor}</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="pushpino" size={15} color="#FFF"/>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        justifyContent: 'center',
        marginBottom: 20

    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconeCat: {
        backgroundColor: '#FFF',
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#1C8BEB',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2,
    },
    cardText: {
        width: '35%',
        height: 55,
        justifyContent: 'space-between',
    },
    description: {
        fontSize: 20,
        fontWeight: '700'
    },
    subDescription: {
        fontSize: 17,
        color: 'gray'
    },
    cardValue: {
        width: '35%',
        height: 55,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    value: {
        fontSize: 20,
        fontWeight: '600',
        color: 'red'
    },
    iconContainer: {
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})