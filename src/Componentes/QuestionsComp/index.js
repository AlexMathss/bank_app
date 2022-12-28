import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function QuestionsComp(){
    return(
        <View style={styles.container}>
            <View style={styles.content_1}>
                <Text>Regulamento Black Friday 2022</Text>
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
    container: {},
    content_1: {},
    content_2: {},
    conteudo: {},
    link: {},
})