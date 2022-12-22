import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import ListaGasto from '../../SubPages/Transacoes/ListaGasto';

//Anotações
//Mudar a cor do meu transações ou altrar a cor dos icones e botão

export default function Transacoes(){
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.options}>
                        <TouchableOpacity style={styles.buttonMenu}>
                            <Text style={styles.title}>Transações</Text>
                            <AntDesign name="down" size={15} color="black"/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="ellipsis1" size={30} color="black"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.month}>
                    <TouchableOpacity>
                        <AntDesign name="left" size={20} color="white"/>
                    </TouchableOpacity>
                    <Text style={styles.monthTitle}>Outubro</Text>
                    <TouchableOpacity>
                        <AntDesign name="right" size={20} color="white"/>
                    </TouchableOpacity>
                </View>
            </View>
            <ListaGasto/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C8BEB',
        height: 100,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        padding: 15,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    header: {
        width: '65%',
        height: 30,
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonMenu: {
        backgroundColor: '#1C8BEB',
        width: 120,
        height: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        padding: 5        
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FFF'
    },
    month: {
        width: '100%',
        height: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    monthTitle: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
})