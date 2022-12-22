import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function CardBalance(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Balance</Text>
            <View style={styles.cards}>
                <View style={styles.balanceCont}>
                    {/* Mudar o visual do indicador de gastos */}
                    <View style={styles.indicator}/> 
                    <View style={styles.cardDados}>
                        <View style={styles.cardValue}>
                            <Text style={styles.legend}>Receita</Text>
                            <Text style={[styles.total, {color: 'green'}]}>R$ 0,00</Text>
                        </View>
                        <View style={styles.cardValue}>
                            <Text style={styles.legend}>Despesas</Text>
                            <Text style={[styles.total, {color: 'red'}]}>R$ 742,96</Text>
                        </View>

                        <View style={styles.separator}/>

                        <View style={styles.cardValue}>
                            <Text style={styles.legend}>Balanço</Text>
                            <Text style={[styles.total, {color: 'red'}]}>- R$ 742,96</Text>
                        </View>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Detalhes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        padding: 10
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
        alignItems: 'flex-end'
    },
    balanceCont: {
        width: '90%',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    indicator: {
        width: '5%',
        height: '70%',
        backgroundColor: 'red',
        borderRadius: 20,
        marginLeft: 20
    },
    cardDados: {
        width: '80%',
        height: '90%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    cardValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    legend: {
        fontSize: 20,
        fontWeight: '500'
    },
    total: {
        fontSize: 20
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: 'gray'
    },
    btn: {
        backgroundColor: '#1C8BEF',
        width: 85,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    btnText: {
        fontSize: 17,
        color: '#FFF'
    }
})