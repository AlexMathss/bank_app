import { AntDesign, Entypo, FontAwesome, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import ListItems from "../../../Componentes/ListItems";

export default function ListaGasto(){
    return(
        <View style={styles.lista}>
            <View style={styles.container}>
                    <View style={styles.value}>
                        <View style={styles.saldoCard}>
                            <AntDesign name="lock" size={35} color="#FFF"/>
                            <View style={styles.valueText}>
                                <Text style={styles.saldo}>Saldo Atual</Text>
                                <Text style={[styles.saldoValue, {color: 'green'}]}>R$ 1.577,43</Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.saldoCard}>
                        <SimpleLineIcons name="wallet" size={35} color="#FFF"/>
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
                    <View style={styles.listContent}>
                        <ListItems
                            iconeLegend={<Ionicons name="car-outline" size={30} color="#1C8BEB"/>}
                            title={'Parcela Carro'}
                            legend={'Transporte'}
                            vencimento={'26/12/2022'}
                            valor={'400,00'}
                            pago={'23/12/2022'}
                        />
                        <ListItems
                            iconeLegend={<Ionicons name="ios-medkit-outline" size={30} color="#1C8BEB"/>}
                            title={'Plano de Saúde'}
                            legend={'Saúde'}
                            vencimento={'26/12/2022'}
                            valor={'120,00'}
                            pago={'23/12/2022'}
                        />
                        <ListItems
                            iconeLegend={<Ionicons name="ios-home-outline" size={30} color="#1C8BEB"/>}
                            title={'Internet'}
                            legend={'Casa'}
                            vencimento={'26/12/2022'}
                            valor={'132,17'}
                            pago={'23/12/2022'}
                        />
                        <ListItems
                            iconeLegend={<MaterialCommunityIcons name="umbrella-beach-outline" size={30} color="#1C8BEB"/>}
                            title={'HBO Max'}
                            legend={'Lazer'}
                            vencimento={'26/12/2022'}
                            valor={'19,99'}
                            pago={'23/12/2022'}
                        />
                        <ListItems
                            iconeLegend={<MaterialCommunityIcons name="umbrella-beach-outline" size={30} color="#1C8BEB"/>}
                            title={'Netflix'}
                            legend={'Lazer'}
                            vencimento={'26/12/2022'}
                            valor={'55,99'}
                            pago={'23/12/2022'}

                        />
                        <ListItems
                            iconeLegend={<Ionicons name="ios-home-outline" size={30} color="#1C8BEB"/>}
                            title={'Amazon Prime'}
                            legend={'Casa'}
                            vencimento={'26/12/2022'}
                            valor={'14,90'}
                            pago={'23/12/2022'}
                        />
                        <ListItems
                            iconeLegend={<FontAwesome name="tv" size={30} color="#1C8BEB"/>}
                            title={'Monitor'}
                            legend={'Eletrônico'}
                            vencimento={'26/12/2022'}
                            valor={'100,00'}
                            pago={'23/12/2022'}
                        />
                    </View>
                </ScrollView>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C8BEB',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        padding: 15,
    },
    lista: {
        height: 600,
        width: '100%',
        marginBottom: 50
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
        height: 600, 
        backgroundColor: '#FFF',
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
    },
    listContent: {
        width: '100%', 
        padding: 15, 
        backgroundColor: '#FFF',
    }
})