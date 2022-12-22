import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function CardPlans(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Planejamento Mensal</Text>
            <View style={styles.card}>
                <FontAwesome name="list-alt" size={45} color="#828486" style={styles.icone}/>
                <Text style={styles.alert}>Ops! Você não tem um planejamento definido para esse mês.</Text>
                <Text style={styles.subText}>Melhore seu controle financeiro agora!</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Definir meu planejamento</Text>
                </TouchableOpacity>
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
    card: {
        marginTop: 10,
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center'
    },
    icone: {
        marginBottom: 20
    },
    alert: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    subText: {
        color: '#828486',
        marginBottom: 20
    },
    btn: {
        paddingVertical: 20,
        backgroundColor: '#1C8BEB',
        borderRadius: 50,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: '600'
    }
})