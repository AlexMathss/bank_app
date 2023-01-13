import React from "react";
import {ScrollView, StyleSheet,TouchableOpacity,View, Text, Image} from 'react-native';
import Partiners from "../../../Componentes/Partiners";
import PartinersCard from "../../../Componentes/PartinersCard";

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
                        <Partiners pontos={'200 Pts'} descriptions={'Mobils'} imgLogo={require('../../../assets/imagens/jeitoo.png')}/>
                        <Partiners pontos={'1600 Pts'} descriptions={'Cartão Will'} imgLogo={require('../../../assets/imagens/will.png')}/>
                        <Partiners pontos={'4500 Pts'} descriptions={'Empréstimo'} imgLogo={require('../../../assets/imagens/sim.png')}/>
                        <Partiners pontos={'2000 Pts'} descriptions={'Investimentos'} imgLogo={require('../../../assets/imagens/toro.png')}/>
                        <Partiners pontos={'150 Pts'} descriptions={'Sair das Dividas'} imgLogo={require('../../../assets/imagens/acordo.png')}/>
                        <Partiners pontos={'2200 Pts'} descriptions={'Limpe seu nome'} imgLogo={require('../../../assets/imagens/resolvvi.png')}/>
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
                <PartinersCard 
                    title={'Jeitto'} 
                    conteudo={'Crédito para você usar como quiser. Dê um jeito na sua vida financeira e saia do vermelho. Sem precisar de conta bancária e sem anuidade'}
                    btnText={'Ganhe 200 Pts'}
                    value={'2,00'}
                    logoPng={require('../../../assets/imagens/jeitoo.png')}
                />
                <PartinersCard 
                    title={'Acordo Certo'} 
                    conteudo={'Negocie suas dividas com até 95% de desconto e sem precisar sair de casa!'}
                    btnText={'Ganhe 150 Pts'}
                    value={'1,50'}
                    logoPng={require('../../../assets/imagens/acordo.png')}
                />
                <PartinersCard 
                    title={'Resolvvi'} 
                    conteudo={'Limpe seu nome, receba sua indenização e você só paga se ganhar!'}
                    btnText={'Ganhe 2200 Pts'}
                    value={'1,50'}
                    logoPng={require('../../../assets/imagens/resolvvi.png')}
                />
                <PartinersCard 
                    title={'Toro Investimentos'} 
                    conteudo={'Invista com a Toro e ganhe taxa de corretagem ZERO e CASHBACK!'}
                    btnText={'Ganhe 2000 Pts'}
                    value={'20,00'}
                    logoPng={require('../../../assets/imagens/toro.png')}
                />
                <PartinersCard 
                    title={'Cartão Will'} 
                    conteudo={'Cartão de crédito com tarifa 0 e anuidade 0 repleto de beneficios para você!'}
                    btnText={'Ganhe 1600 Pts'}
                    value={'16,00'}
                    logoPng={require('../../../assets/imagens/will.png')}
                />
                <PartinersCard 
                    title={'Resolvvi'} 
                    conteudo={'Limpe seu nome, receba sua indenização e você só paga se ganhar!'}
                    btnText={'Ganhe 2200 Pts'}
                    value={'1,50'}
                    logoPng={require('../../../assets/imagens/sim.png')}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
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
        paddingHorizontal: 20
    }
})