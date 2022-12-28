import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Text, Image, View, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

import * as Animatable from 'react-native-animatable'
import Comentarios from "../../SubPages/PlanFree/Comentarios";
import Vantagens from "../../SubPages/PlanFree/Vantagens";


export default function PlanFree(){
    const navigation = useNavigation();
    return(
            <ScrollView>
            <Animatable.View
                animation="fadeInUp" delay={500}
                style={styles.container}
                
            >   
                <View style={{width: '100%', marginTop: 15}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <AntDesign name="closecircleo" size={20} color="#2879fe"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardImagem}>
                    <Image source={require('../../assets/imagens/gift.png')} style={styles.imagem}/>
                </View>
               

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
                    <Text style={styles.textInfo}>Assinatura Bank Premium adiquiradas pelo app serão cobradas na sua conta ITunes, onde você pode gerenciar ou cancelar sua assinatura 
                    através das configurações da conta. Sua avaliação gratuita será convertida em assinatura com renovação automática e seu pagamento será renovado automaticamente a menos que efetue o cancelamento 24h antes do término dos respectivos periodos.</Text>
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
            <Vantagens/>
            <Comentarios/>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    cardImagem: {
        width: 220,
        height: 220,
    },
    imagem: {
        width: '100%',
        height: '100%'
    },
    containerTitle: {
        height: 150,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    title: {
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 18,
        lineHeight: 30,
        color: 'lightgray',
        textAlign: 'center'
    },
    containerPlanos: {
        width: '100%',
        height: 250,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    card: {
        backgroundColor: 'white',
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'lightgray'
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '500'
    },
    cardValue: {
        alignItems: 'center'
    },
    value: {
        fontSize: 23,
        fontWeight: '600',
        marginBottom: 5,
    },
    subValue: {
        fontSize: 13,
        color: 'lightgray'
    },
    cardPay: {
        backgroundColor: '#fe7e00',
        width: 250,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardpayTitle: {
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: '500',
        color: '#FFF'
    },
    cardInfo: {
        height: 200,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    textInfo: {
        fontSize: 15,
        textAlign: 'center',
        color: 'lightgray',
        lineHeight: 25
    },
    cardLink: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    links: {
        fontSize: 17,
        color: '#469cff'
    },
    separator: {
        fontSize: 25,
        color: 'gray'
    },
})