import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

export default function CardVantagem({
    imagem,
    title,
    subTitle
}){
    return(
        <View style={styles.container}>
            <Image source={imagem} style={styles.imagem}/>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eef2fb',
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'lightgray'
    },
    imagem: {
        width: 90,
        height: 100,
        marginRight: 10,
        resizeMode: "center"
    },
    content: {
        height: 70,
        justifyContent: 'space-between',
        width: '75%'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        
    },
    subTitle: {
        fontSize: 15,
        color: 'gray'
    }
})