import React from "react";
import {Text, Image, View, TouchableOpacity, StyleSheet} from 'react-native';

import * as Animatable from 'react-native-animatable'


export default function PlanFree(){
    return(
        <Animatable.View
            animation="fadeInUp" delay={500}
            style={styles.container}
            
        >
            <Image source={require('../../assets/imagens/gift.png')} style={styles.imagem}/>

            <View style={styles.containerTitle}>
                <Text style={styles.title}>Garanta agora seu{'\n'} Bank Premium</Text>
                <Text style={styles.subTitle}>Você sabia que tem 4 vezes mais{'\n'}probabilidade de atingir suas metas{'\n'}financeiras com o Bank Premium?</Text>
            </View>

            <View style={styles.containerPlanos}>
                <TouchableOpacity style={styles.card}>
                    <Text style={styles.cardTitle}>Plano anual</Text>
                    <View style={styles.cardValue}>
                        <Text style={styles.value}>R$ 159,90</Text>
                        <Text style={styles.subValue}>Cobrado a cada 12 meses</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Text style={styles.cardTitle}>Plano mensal</Text>
                    <View style={styles.cardValue}>
                        <Text style={styles.value}>R$ 34,90</Text>
                        <Text style={styles.subValue}>Cobrado mensalmente</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardPay}>
                    <Text style={styles.cardpayTitle}>Seja Premium</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardInfo}>
                <Text style={styles.textInfo}>Assinatura Bank Premium adiquiradas pelo app serão cobradas na{'\n'}sua conta ITunes, onde você pode gerenciar ou cancelar sua assinatura{'\n'}
                através das configurações da conta. Sua avaliação gratuita será{'\n'} convertida em assinatura com renovação automática e seu pagamento{'\n'}será renovado automaticamente a menos que efetue o cancelamento{'\n'} 24h antes do término dos respectivos periodos.</Text>
                <View style={styles.cardLink}>
                    <TouchableOpacity>
                        <Text style={styles.links}>Restaurar assinatura</Text>
                    </TouchableOpacity>
                    <Text style={styles.separator}>-</Text>
                    <TouchableOpacity>
                        <Text style={styles.links}>Termos e privacidades</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container: {},
    imagem: {},
    containerTitle: {},
    title: {},
    subTitle: {},
    containerPlanos: {},
    card: {},
    cardTitle: {},
    value: {},
    subValue: {},
    cardPay: {},
    cardpayTitle: {},
    cardInfo: {},
    textInfo: {},
    cardLink: {},
    links: {},
    separator: {},
})