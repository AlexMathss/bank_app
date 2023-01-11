import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import QuestionsComp from "../../../Componentes/QuestionsComp";

export default function Questions(){
    
    return(
        <View style={styles.container}>
           <Text style={styles.title}>Perguntas frequentes</Text>
           <QuestionsComp/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight : '600',
        marginBottom: 40
    }
})