import React from "react";
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const cardImage = "https://blog.bitpreco.com/wp-content/uploads/2020/12/Arbitragem-de-Bitcoin-e-Criptomoedas-o-que-e-e-como-fazer-608x401.png"

export default function CardPlan(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={{uri: cardImage}} style={styles.image}/>
                <Text style={styles.contentText}>
                    Ops!{'\n'}Nenhum planejamento para mostrar!
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonPlan}>
                        <Text style={styles.btn}>Definir novo planejamento</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        height: 650,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    content: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '89%',
        height: '60%'
    },
    image: {
        width: 170,
        height: 170
    },
    contentText: {},
    buttonContainer: {},
    buttonPlan: {},
    btn: {}
}) 