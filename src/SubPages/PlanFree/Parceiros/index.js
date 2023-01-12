import React from "react";
import {ScrollView, StyleSheet,TouchableOpacity,View, Text} from 'react-native';
import Partiners from "../../../Componentes/Partiners";

export default function Parceiros(){
    return(
        <View style={styles.container}>
            <View style={styles.options}>
                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={styles.buttonActive}>
                        <Text style={styles.activeText}>Ganhar Pontos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonDesabled}>
                        <Text style={styles.desabledText}>Trocar Pontos</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.ofertas}>
                <Text style={styles.title}>Ofertas</Text>
                <View style={styles.wallets}>
                    <ScrollView horizontal={true}>
                        <Partiners/>
                    </ScrollView>
                </View>
            </View>
            <TouchableOpacity style={styles.banner}>
                {/* Imagem de fundo */}
                <Text>Imagem</Text>
                <Text style={styles.bannerTitle}>Conheça o cartão de crédito ideal para você.</Text>
                <Text style={styles.bannerSubtitle}>Descubra o cartão que te entrega os melhores benefícios.</Text>
            </TouchableOpacity>
            <View style={styles.ofertasPartners}>
                <Text style={styles.title}>Pareceiros</Text>
                <TouchableOpacity style={styles.linkButton}>
                    <Text style={styles.linkText}>Ver mais</Text>
                </TouchableOpacity>
                <View style={styles.cardOfertas}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        height: 390
    },
    options: {
        height: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionsContainer: {
        backgroundColor: '#eae9ef',
        width: 300,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 30
    },
    buttonActive: {
        backgroundColor: '#FFF',
        height: '100%',
        width: '50%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activeText: {
        color: '#2b5adc',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    buttonDesabled: {
        height: '100%',
        width: '50%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    desabledText: {
        color: '#6e6e70',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    ofertas: {
        backgroundColor: 'purple',
        height: 150,
        paddingLeft: 20,
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    wallets: {
        backgroundColor: 'gray',
        height: 120
    },
    banner: {},
    bannerTitle: {},
    bannerSubtitle: {},
    ofertasPartners: {},
    linkButton: {},
    linkText: {},
    cardOfertas: {}
})