import { EvilIcons } from "@expo/vector-icons";
import React from "react";

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const cardImage = "https://cdn.iconscout.com/icon/free/png-512/mastercard-25-675722.png"

//Anotações
// Colocar o estilo como se fosse um cartão de crédito real.
// Adicionar POP-UP para adicionar um novo cartão.
// Adicionar a opção de visualizar a fatura fechada.

export default function CreditCard(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cartões de Crédito</Text>
            <View style={styles.card}>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.buttonOpen}>
                        <Text style={styles.textOpen}>Faturas abertas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonClose}>
                        <Text style={styles.textClose}>Faturas fechadas</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.values}>
                    <Image source={{uri: cardImage}} style={styles.image}/>
                    <View style={styles.valuesTexts}>
                        <View style={styles.bank}>
                            <Text style={styles.bankText}>Itau</Text>
                            <Text style={styles.fatura}>- fatura fecha em 29 set, 2022</Text>
                        </View>
                        <Text style={styles.faturaTotal}>R$ 139,99</Text>
                    </View>
                    <TouchableOpacity>
                        <EvilIcons name="plus" size={35} color="#1E90FF"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.separator}/>
                <View style={styles.total}>
                    <Text style={[styles.totalText, {fontWeight: '500'}]}>Total</Text>
                    <Text style={[styles.totalText, {color: 'red'}]}>R$ 139,99</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10,
        padding: 10,
    },
    title: {
        fontSize: 30, 
        color: 'gray'
    },
    card: {
        width: '100%',
        marginTop: 10,
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 20,
        borderWidth: 0.5
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 10,
    },
    buttonOpen: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 20
    },
    textOpen: {
        color: '#FFF',
        fontWeight: '500'
    },
    buttonClose: {
        backgroundColor: 'lightgray',
        marginLeft: 10,
        padding: 10,
        borderRadius: 20
    },
    textClose: {
        fontWeight: '500'
    },
    values: {
        marginTop: 20,
        marginBottom: 15,
        flexDirection: 'row',
    },
    image: {
        width: 40,
        height: 40
    },
    valuesTexts: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'space-between',
        marginLeft: 10
    },
    bank: {
        flexDirection: 'row'
    },
    bankText: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    fatura: {
        color: 'gray'
    },
    faturaTotal: {
        color: '#DD111C'
    },
    separator: {
        height: 0.5,
        width: '100%',
        backgroundColor: 'lightgray'
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginTop: 10
    },
    totalText: {
        fontSize: 20
    },
})