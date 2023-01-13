import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function PartinersCard(){
    return(
        <View style={styles.container}>
            <Text style={styles.logo}>Imagem</Text>
            <View style={styles.content}>
                <Text style={styles.title}>Title</Text>
                <Text style={styles.conteudo}>Conteudo</Text>
                <TouchableOpacity style={btnPoint}>
                    <Text style={styles.btnText}>Pontos</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <Text>icon money</Text>
                    <Text style={styles.footerText}>Equivalente</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    logo: {

    },
    content: {

    },
    title: {

    },
    conteudo: {

    },
    btnPoint: {

    },
    btnText: {

    },
    footer: {

    },
    footerText: {
        
    },
})