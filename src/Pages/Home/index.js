import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import DropList from '../../Componentes/DropList';
import CreditCard from '../../SubPages/CreditCard';
import CardGraphics from '../../SubPages/CardGraphics';
import CardPlans from '../../SubPages/CardPlans';
import CardEducation from '../../SubPages/CardEducation';
import CardBalance from '../../SubPages/CardBalance';

export default function Home(){

    const [showValues, setShowValues] = useState(false);

    const handleShowValues = () => {
        setShowValues(!showValues);
    }

    return(
        <ScrollView >
            <View style={styles.container}>
                <View style={styles.dataBalance}>
                    <Text style={styles.saldoText}>Saldo em conta</Text>
                    <View style={styles.saldo}>
                        <Text style={styles.totalText}>{showValues ? `R$ 6.360,56` : <View style={styles.valueHidden}/>}</Text>
                    </View>
                    <TouchableOpacity>
                        <Entypo onPress={handleShowValues} name={showValues ? "eye" : "eye-with-line"} size={22} color="black"/>
                    </TouchableOpacity>
                </View>

                <View style={styles.dataValues}>
                    <View style={styles.receitas}>
                        <MaterialCommunityIcons name="arrow-up-circle" size={40} color="#197A0A" style={styles.valueIcon}/>
                        <View style={styles.cardReceitas}>
                            <Text style={styles.receitasText}>Receitas</Text>
                            <Text style={[styles.saldoReceita, {color: 'green'}]}>{showValues ? `R$ 1.360,56` : <View style={styles.valueHidden}/>}</Text>
                        </View>
                    </View>
                    <View style={styles.despesas}>
                        <MaterialCommunityIcons name="arrow-down-circle" size={40} color="#DD111C" style={styles.valueIcon}/>
                        <View style={styles.cardReceitas}>
                            <Text style={styles.receitasText}>Despesas</Text>
                            <Text style={[styles.saldoReceita, {color: 'red'}]}>{showValues ? `R$ 3.360,56` : <View style={styles.valueHidden}/>}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <CreditCard/>
            <CardGraphics/>
            <CardPlans/>
            <CardEducation/>
            <CardBalance/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 250,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        backgroundColor: '#FFF'
    },
    dataBalance: {
        width: '100%',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    saldoText: {
        color: 'gray',
        marginBottom: 5,
        fontSize: 18,
        fontWeight: '500'
    },
    totalText: {
        fontSize: 30,
        fontWeight: '600',
    },
    dataValues: {
        width: '100%',
        flex: 1,
        flexDirection: 'row'
    },
    receitas: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    despesas: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    valueIcon: {
        marginRight: 5
    },
    cardReceitas: {
        width: 100,
        height: 40,
        justifyContent: 'space-between'
    },
    receitasText: {
        fontSize: 20
    },
    saldoReceita: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    valueHidden: {
        width: 100,
        backgroundColor: '#828486',
        height: 10,
        borderRadius: 10
    },
    saldo: {
        width: 150,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    }
})