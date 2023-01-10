import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function QuestionsComp(){
    return(
        //dividir os container igualmente
        <View style={styles.container}>
            <View style={styles.content_1}>
                <Text style={styles.content_1_title}>Regulamento Black Friday 2022</Text>
            </View>
            <View style={styles.content_2}>
                <Text style={styles.conteudo}>Oferta válida de 21/11/2022 a 30/11/2022, confira o regulamento.</Text>
                <TouchableOpacity>
                    <Text style={styles.link}>Ver mais</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: '1'
    },
    content_1: {
        backgroundColor: 'gray',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    content_1_title: {
        fontSize: 18,
        fontWeight: '600'
    },
    content_2: {
        backgroundColor: 'green',
        paddingHorizontal: 15,
        height: 110,
        justifyContent: 'center'
    },
    conteudo: {
        marginBottom: 20,
        fontSize: 20
    },
    link: {
        fontSize: 18,
        color: '#4a2896'
    },
})