import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";

export default function PartinersCard({
    title,
    conteudo,
    btnText,
    value,
    logoPng
}){
    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={logoPng} style={{width: '100%', height: '100%', borderRadius: 50}}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.conteudo}>
                    {conteudo}
                </Text>
                <TouchableOpacity style={styles.btnPoint} activeOpacity={0.5}>
                    <Text style={styles.btnText}>{btnText}</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <Image source={require('../../assets/imagens/cifrao.png')} style={styles.footerImg}/>
                    <Text style={styles.footerText}>Equivale a <Text style={{color: '#5f9f62', fontWeight: 'bold'}}>R$ {value}</Text> ou mais</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'gray'
    },
    logo: {
        backgroundColor: 'green',
        width: 90,
        height: 90,
        borderRadius: 50
    },
    content: {
        width: '70%',
        height: '100%',
    },
    title: {
        fontSize: 20,
        marginBottom: 10
    },
    conteudo: {
        fontSize: 16,
        color: '#979797',
        marginBottom: 10
    },
    btnPoint: {
        backgroundColor: '#11ba77',
        width: 140,
        height: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    btnText: {
        color: '#FFF',
        fontSize: 17
    },
    footer: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center'
    },
    footerImg: {
        width: 20,
        height: 20,
        marginRight: 15
    },
    footerText: {
        fontSize: 14,
        color: '#919191'
    },
})