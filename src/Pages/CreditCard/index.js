import { AntDesign, Entypo } from '@expo/vector-icons';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import CardInfo from '../../SubPages/CreditCard/CardInfo';

export default function CreditCard(){
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={{height: 150, backgroundColor: '#008B8B',}}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.iconLeft}>
                            <AntDesign name="left" size={25} color="#FFF"/>
                        </TouchableOpacity>

                        <View style={styles.iconRight}>
                            <AntDesign name="inbox" size={25} color="#FFF"/>
                            <Entypo name="dots-three-horizontal" size={25} color="#FFF"/>
                        </View>
                    </View>

                    <View style={styles.subHeader}>
                        <Text style={styles.headerTitle}>Cartões de Crédito</Text>
                        <View style={styles.headerButton}>
                            <TouchableOpacity style={styles.buttonOpen}>
                                <Text style={styles.btnText}>Abertas</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonClose}>
                                <Text style={[styles.btnText, {color: 'gray'}]}>Fechadas</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <CardInfo/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 30
    },
    iconLeft: {
        height: '100%',
        width: 50,
    },
    iconRight: {
        height: '100%',
        width: 80,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subHeader: {
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontSize: 20,
        color: '#FFF'
    },
    headerButton: {
        width: '70%',
        backgroundColor: '#20B2AA',
        borderRadius: 30,
        height: 65,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonOpen: {
        backgroundColor: 'white',
        width: 135,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    btnText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#20B2AA'
    },
    buttonClose: {
        width: 135,
        height: '100%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
})