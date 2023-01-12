import React from "react";
import {View, StyleSheet, Text} from 'react-native';



export default function Partiners({
    imgLogo,
    pontos,
    descriptions
}){
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <View style={styles.logo}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Ganhe</Text>
                <Text style={styles.subTitle}>5000 Pts</Text>
            </View>
            <Text style={styles.description}>Descriptions</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        width: 120,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerLogo: {

    },
    logo: {
        width: 70,
        height: 70,
        backgroundColor: 'orange'
    },
    content: {

    },
    title: {

    },
    subTitle: {

    },
    description: {

    }
})