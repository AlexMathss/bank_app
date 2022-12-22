import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ListPoint from "../../../Componentes/ListPoint";

const cardImage = "https://ajuda.mobills.com.br/hc/article_attachments/4404664088987/MOEDA_CERTA.png";

export default function CardPontos(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>CardPontos</Text>
            <View style={styles.cards}>
                <View style={styles.header}>
                    <View style={styles.cardTitle}>
                        <Image source={{uri: cardImage}} style={styles.image}/>
                        <View style={styles.subHeader}>
                            <Text style={styles.titleHeader}>Pontos Mob</Text>
                            <Text style={styles.pontosHeader}>106</Text>
                        </View>
                    </View>
                    <View style={styles.cardButton}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Trocar Pontos</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.cardPoint}>
                    <ListPoint
                        title={'Adicionar a primeira transação do dia'}
                        points={'+ 3 Pts Mob'}
                        day={'14'}
                        month={'JUL'}
                    />
                    <ListPoint
                        title={'Usar primeiro filtro'}
                        points={'+ 3 Pts Mob'}
                        day={'14'}
                        month={'JUL'}
                    />
                    <ListPoint
                        title={'Adicionar a primeira transação do dia'}
                        points={'+ 3 Pts Mob'}
                        day={'06'}
                        month={'JUL'}
                    />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        padding: 10
    },
    title: {
        fontSize: 30,
        color: 'gray'
    },
    cards: {
        marginTop: 10,
        width: '100%',
        height: 400,
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 20,
        justifyContent: 'space-between'
    },
    header: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        width: '50%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        width: 50,
        height: 50
    },
    subHeader: {
        height: '100%',
        width: '60%',
        justifyContent: 'space-between'
    },
    titleHeader: {
        fontSize: 17,
        fontWeight: '600',
        color: 'gray'
    },
    pontosHeader: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    cardButton: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#1C8BEF',
        width: 160,
        height: '100%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: '600'
    },
    cardPoint: {
        height: 250,
        justifyContent: 'space-between',
        
    }
})