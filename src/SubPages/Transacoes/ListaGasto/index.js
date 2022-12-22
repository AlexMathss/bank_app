import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import React from "react";
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';

export default function ListaGasto(){
    return(
        <View style={styles.lista}>
            <View style={styles.container}>
                    <View style={styles.value}>
                        <View style={styles.saldoCard}>
                            <AntDesign name="lock" size={35} color="black"/>
                            <View style={styles.valueText}>
                                <Text style={styles.saldo}>Saldo Atual</Text>
                                <Text style={[styles.saldoValue, {color: 'green'}]}>R$ 1.577,43</Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.saldoCard}>
                            <Entypo name="wallet" size={35} color="black"/>
                            <View style={styles.valueText}>
                                <Text style={styles.saldo}>Balanço Mensal</Text>
                                <Text style={[styles.saldoValue, {color: 'red'}]}>- R$ 742,96</Text>
                            </View>
                        </View>
                    </View>
            </View>
            <View style={styles.containerList}>
                <ScrollView>
                    <View style={styles.search}>
                        <View style={styles.searchCont}>
                            <Ionicons name="ios-search-outline" size={20} color="#FFF"/>
                            <TextInput
                                placeholder="Buscar"
                                style={styles.inputText}
                            />
                        </View>
                    </View>
                    <View style={{width: '100%', padding: 15, backgroundColor: '#FFF'}}>
                        <View style={{backgroundColor: 'orange', height: 60}}>
                            <Text>Alex</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        padding: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    lista: {
        height: 600,
        width: '100%',
    },
    value: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    saldoCard: {
        width: '45%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    valueText: {
        width: 100,
        height: 40,
        justifyContent: 'space-between',
    },
    saldo: {
        fontSize: 14,
        color: 'lightgray',
        fontWeight: '600'
    },
    saldoValue: {
        fontSize: 20,
        fontWeight: '600',
    },
    separator: {
        height: '90%',
        width: 1,
        backgroundColor: 'gray',
        marginBottom: 10
    },
    containerList: {
        flex: 1, 
        backgroundColor: 'red'
    },
    search: {
        height: 70,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchCont: {
        backgroundColor: 'lightgray',
        height: 30,
        width: '100%',
        borderRadius: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputText: {
        height: 30,
        width: '93%',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10
    }
})