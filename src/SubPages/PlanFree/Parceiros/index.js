import React from "react";
import {ScrollView, StyleSheet,TouchableOpacity,View, Text, Image} from 'react-native';
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
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Partiners pontos={'5000 Pts'} descriptions={'Mobils'}/>
                        <Partiners pontos={'1600 Pts'} descriptions={'Cartão Will'}/>
                        <Partiners pontos={'4500 Pts'} descriptions={'Empréstimo'}/>
                        <Partiners pontos={'2000 Pts'} descriptions={'Investimentos'}/>
                        <Partiners pontos={'150 Pts'} descriptions={'Sair das Dividas'}/>
                    </ScrollView>
                </View>
            </View>
            <View style={styles.bannerContainer}>
                <TouchableOpacity style={styles.banner} activeOpacity={0.5}>
                    <Image source={require('../../../assets/imagens/cartao.png')} style={styles.imagemBanner}/>
                    <View style={styles.bannerConteudo}>
                        <Text style={styles.bannerTitle}>Conheça o cartão de crédito <Text style={{fontWeight: 'bold'}}>ideal</Text> para você.</Text>
                        <Text style={styles.bannerSubtitle}>Descubra o cartão que te entrega os melhores benefícios.</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
            <View style={styles.ofertasPartners}>

                <Text style={styles.title}>Pareceiros</Text>
                <TouchableOpacity>
                    <Text style={styles.linkText}>Ver mais</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardOfertas}>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        flex: 1
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
        backgroundColor: '#FFF',
        height: 190,
        paddingLeft: 20,
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    wallets: {
        height: 140
    },
    bannerContainer: {
        height: 100,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    banner: {
        backgroundColor: '#b8c2fd',
        height: '90%',
        width: '100%',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bannerConteudo: {
        width: '70%',
        height: '80%',
        justifyContent: 'space-between'
    },
    imagemBanner: {
        width: 80, 
        height: 80, 
        marginLeft: 10
    },
    bannerTitle: {
        fontSize: 18,
        color: '#3154a6'
    },
    bannerSubtitle: {
        fontSize: 13,
        color: '#414b6f'
    },
    ofertasPartners: {
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    linkText: {
        fontSize: 20,
        color: '#3461e2'
    },
    cardOfertas: {
    
    }
})