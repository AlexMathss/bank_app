import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';



export default function Partiners({
    imgLogo,
    pontos,
    descriptions
}){
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <View style={styles.logo}>
                    <Image source={imgLogo} style={{width: '100%', height: '100%', borderRadius: 50}}/>
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.5} style={styles.content}>
                <Text style={styles.title}>Ganhe</Text>
                <Text style={styles.subTitle}>{pontos}</Text>
            </TouchableOpacity>
            <Text style={styles.description}>{descriptions}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 120,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 20
    },
    containerLogo: {

    },
    logo: {
        width: 70,
        height: 70,
        backgroundColor: '#3e1190',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: '#11ba77',
        width: 120,
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        color: '#FFF',
        marginBottom: 2
    },
    subTitle: {
        fontSize: 16,
        color: '#FFF'
    },
    description: {
        color: '#747577',
        fontSize: 16,
        
    }
})