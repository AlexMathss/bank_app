import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function QuestionsComp(){
    return(
        //formatar o tamanho da fonte.
        <View style={styles.container}>
            <View style={styles.container_card}>
                <View style={styles.content_1}>
                    <Text style={styles.content_1_title}>Regulamento Black Friday 2022</Text>
                </View>
                <View style={styles.content_2}>
                    <Text style={styles.conteudo}>Oferta válida de 21/11/2022 a 30/11/2022, confira o regulamento.</Text>
                    <TouchableOpacity>
                        <Text style={styles.link}>Ver mais</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.container_card, {height: 220}]}>
                <View style={[styles.content_1, {height: 90}]}>
                    <Text style={styles.content_1_title}>Quais as formas de pagamentos aceitas para me tornar Mobills Premium pela Apple?</Text>
                </View>
                <View style={styles.content_2}>
                    <Text style={{marginBottom: 15, fontSize: 17}}>Caso queira realizar seu pagamento através do seu Apple ID, você pode utilizar os seguintes meios de pagamento:</Text>
                    <Text style={{marginLeft: 20}}>
                        ◉ A maioria dos cartões de crédito;{'\n'}
                        ◉ Saldo de crédito do ID Apple (por meio de cartões-presente).
                    </Text>
                </View>
            </View>
            <View style={[styles.container_card, { height: 220}]}>
                <View style={[styles.content_1, {height: 90}]}>
                    <Text style={styles.content_1_title}>Fiz minha assinatura em uma plataforma. Ela vale também para as outras?</Text>
                </View>
                <View style={styles.content_2}>
                    <Text style={{marginBottom: 15, fontSize: 17}}>Ao assinar o Bank em qualquer plataforma, sua assinatura é válida em todas as outras em que o Bank está disponível</Text>
                    <TouchableOpacity>
                        <Text style={styles.link}>Ver mais</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: '1',
        paddingHorizontal: 15,
        justifyContent: 'space-around'
    },
    container_card: {
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 23
    },
    content_1: {
        backgroundColor: 'gray',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    content_1_title: {
        fontSize: 18,
        fontWeight: '600'
    },
    content_2: {
        paddingHorizontal: 15,
        height: 110,
        justifyContent: 'center'
    },
    conteudo: {
        marginBottom: 20,
        fontSize: 20
    },
    link: {
        fontSize: 18,
        color: '#4a2896'
    },
})