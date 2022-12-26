import { EvilIcons } from "@expo/vector-icons";
import React from "react";

import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import Cards from "../../../Componentes/Cards";



//Anotações
// Colocar o estilo como se fosse um cartão de crédito real.
// Adicionar POP-UP para adicionar um novo cartão.
// Adicionar a opção de visualizar a fatura fechada.

export default function CreditCard(){
    return(
        <View style={styles.container}>
            <Text style={styles.titleContainer}>Cartões de Crédito</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Cards bankName={'Itaú'} nameCard={'Alex M. Paula'} dateValid={'06/25'} numberCard={'1234  5678  9012  3456'}/>
                <Cards bankName={'Santander'} nameCard={'Alex M. Paula'} dateValid={'06/28'} numberCard={'1234  5678  9012  3456'}/>
                <Cards bankName={'Bradesco'} nameCard={'Alex M. Paula'} dateValid={'06/26'} numberCard={'1234  5678  9012  3456'}/>
                <Cards bankName={'Safra'} nameCard={'Alex M. Paula'} dateValid={'06/29'} numberCard={'1234  5678  9012  3456'}/>
               
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10,
        padding: 10,
    },
    titleContainer: {
        fontSize: 30, 
        color: 'gray'
    },
    
})