import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';

export default function Comentarios(){
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/imagens/coments.png')} style={styles.imagem}/>
            <View style={styles.content}>
                <View style={styles.avaliation}>
                    <Text style={styles.title}>Histórias de sucesso</Text>
                    <View style={styles.stars}>
                        <AntDesign name="star" size={20} color="#fec107"/>
                        <AntDesign name="star" size={20} color="#fec107"/>
                        <AntDesign name="star" size={20} color="#fec107"/>
                        <AntDesign name="star" size={20} color="#fec107"/>
                        <AntDesign name="star" size={20} color="#fec107"/>
                    </View>
                </View>
                <View style={styles.cardComents}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={[styles.card, styles.shadowProp, {marginLeft: 10}]}>
                            <Text style={styles.comentario}>"Testei vários apps gratuitos e pagos, porém o Bank é o que melhor me atendeu e o que possui o melhor suporte. Realmente vale o investimento."</Text>
                            <View style={styles.footer}>
                                <View style={styles.stars}>
                                <AntDesign name="star" size={20} color="#fec107"/>
                                <AntDesign name="star" size={20} color="#fec107"/>
                                <AntDesign name="star" size={20} color="#fec107"/>
                                <AntDesign name="star" size={20} color="#fec107"/>
                                <AntDesign name="star" size={20} color="#fec107"/>
                                </View>
                                <Text style={styles.user}>Antônio Alves</Text>
                            </View>
                        </View>
                        <View style={[styles.card,styles.shadowProp, {marginRight: 20, marginLeft: 20}]}>
                            <Text style={styles.comentario}>"Depois que assinei o Bank pela primeira vez vi sobrar dinheiro na minha conta, devido a organização financeira. Aprendendo e economizando!"</Text>
                            <View style={styles.footer}>
                                <View style={styles.stars}>
                                <AntDesign name="star" size={20} color="#fec107"/>
                                <AntDesign name="star" size={20} color="#fec107"/>
                                <AntDesign name="star" size={20} color="#fec107"/>
                                <AntDesign name="star" size={20} color="#fec107"/>
                                <AntDesign name="star" size={20} color="#fec107"/>
                                </View>
                                <Text style={styles.user}>Karine Estevão</Text>
                            </View>
                        </View>
                        <View style={[styles.card, styles.shadowProp]}>
                            <Text style={styles.comentario}>"De maneira simples e prática consigo identificar seus gastos do dia-a-dia, e agora posso gerenciar tudo e controlar as dívidas. Vale o investimento."</Text>
                            <View style={styles.footer}>
                                <View style={styles.stars}>
                                <AntDesign name="star" size={20} color="#fec107"/>
                                <AntDesign name="star" size={20} color="#fec107"/>
                                <AntDesign name="star" size={20} color="#fec107"/>
                                <AntDesign name="star" size={20} color="#fec107"/>
                                <AntDesign name="star" size={20} color="#fec107"/>
                                </View>
                                <Text style={styles.user}>Anderson Dias</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    content: {
        width: '100%',
        height: 300,
        justifyContent: 'space-between',
        marginBottom: 30
    },
    imagem: {
        width: 230,
        height: 230,
        marginTop: 40
    },
    avaliation: {
        alignItems: 'center',
        height: 60,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 25,
        fontWeight: '500'
    },
    stars: {
        width: 120,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardComents: {
        height: 210,
        flexDirection: 'row',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#FFF',
        width: 280,
        height: 180,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20
    },
    shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    },
    comentario: {
        fontSize: 15,
        textAlign: 'center',
        lineHeight: 25
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    user: {
        fontSize: 15,
        fontWeight: '600'
    },
})