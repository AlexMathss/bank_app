import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CardVantagem from "../../../Componentes/CardVantagem";

export default function Vantagens(){
    return(
        <View style={{alignItems: 'center',backgroundColor: '#FFF', paddingHorizontal: 15}}>
            <Text style={{fontSize: '25', fontWeight: '600'}}>Vantagens Exclusivas</Text>
            <View style={{height: 1150, width: '100%', justifyContent: 'space-between', marginTop: 30}}>
                <CardVantagem
                    imagem={require('../../../assets/imagens/home.png')}
                    title="Cadastro de contas ilimitados"
                    subTitle="Fique de olho em todas suas contas, de diferentes bancos, em um só lugar"
                />
                <CardVantagem
                    imagem={require('../../../assets/imagens/card.png')}
                    title="Cadastro de contas de crédito ilimitado"
                    subTitle="Não perca o controle dos seus gastos no crédito. Acompanhe todas as suas faturas."
                />
                <CardVantagem
                    imagem={require('../../../assets/imagens/form.png')}
                    title="Planejamentos mensais ilimitados"
                    subTitle="Crie planegamentos personalizados por categoria e não fique no vermelho!"
                />
                <CardVantagem
                    imagem={require('../../../assets/imagens/objetivo.png')}
                    title="Objetivos ilimitados"
                    subTitle="Acompanhe seus sonhos de perto e saiba o que fazer para realiza-los"
                />
                <CardVantagem
                    imagem={require('../../../assets/imagens/grafico.png')}
                    title="Importe dados financeiros"
                    subTitle="Facilidade para o controle detalhado das suas entradas e saídas no dia a dia"
                />
                <CardVantagem
                    imagem={require('../../../assets/imagens/grafico1.png')}
                    title="Gráficos detalhados"
                    subTitle="Acompanhe diariamente seus gastos e saiba para onde seu dinheito está indo!"
                />
                <CardVantagem
                    imagem={require('../../../assets/imagens/tags.png')}
                    title="Tags/etiquetas"
                    subTitle="Categorize todas as suas compras. Um diagnóstico detalhado traz mais economia!"
                />
                <CardVantagem
                    imagem={require('../../../assets/imagens/limpeza.png')}
                    title="Filtros personalizados"
                    subTitle="Quer saber o quanto gastou por conta, categoria ou tipo de transação? Te ajudamos nisso."
                />
                <CardVantagem
                    imagem={require('../../../assets/imagens/contatos.png')}
                    title="Multiplataforma (IOS, Web e outras)"
                    subTitle="Acesse o Bank onde quiser! Seja na plama da sua mão ou no seu computador!"
                />
            </View>
            <TouchableOpacity style={styles.cardPay}>
                <Text style={styles.cardpayTitle}>Seja Premium</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    cardPay: {
        backgroundColor: '#fe7e00',
        width: 250,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    cardpayTitle: {
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: '500',
        color: '#FFF'
    },
})