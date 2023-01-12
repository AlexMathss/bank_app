import React from "react";
import {ScrollView, StyleSheet,TouchableOpacity,View, Text} from 'react-native';

export default function Parceiros(){
    return(
        <View style={styles.container}>
            <View style={styles.options}>
                <TouchableOpacity style={styles.buttonActive}>
                    <Text style={styles.activeText}>Ganhar Pontos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDesabled}>
                    <Text style={styles.desabledText}>Trocar Pontos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ofertas}>
                <Text style={styles.title}>Ofertas</Text>
                <View style={styles.wallets}>
                    <ScrollView>
                        
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
    container: {},
    options: {},
    buttonActive: {},
    activeText: {},
    buttonActive: {},
    activeText: {},
    buttonDesabled: {},
    desabledText: {},
    ofertas: {},
    title: {},
    wallets: {},
    banner: {},
    bannerTitle: {},
    bannerSubtitle: {},
    ofertasPartners: {},
    linkButton: {},
    linkText: {},
    cardOfertas: {}
})