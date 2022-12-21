import React from "react";
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native';

const cardPrimeiro = "https://respostas.sebrae.com.br/wp-content/uploads/2020/05/Ideias-de-Neg%C3%B3cios-para-Ganhar-Dinheiro-em-Casa-em-Tempos-de-Coronav%C3%ADrus-660x330.jpg"
const cardSegundo = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnAbez_ILCmFC4lYRQqmbMAGg9pXDAi4kvpQ&usqp=CAU"
const cardTerceiro = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYF-sjVfE1mhDa2Lv_BTVG6s0C_SOotCMh5A&usqp=CAU"


export default function CardEducation(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Education</Text>
            <View style={styles.content}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.scroll}>
                        <View style={styles.cards}>  
                            <Image source={{uri: cardPrimeiro}} style={styles.imgCard}/>
                            <View style={styles.containerText}>
                                <Text style={styles.titleCard}>Como reduzir as despesas e cortar os gastos</Text>
                                <View style={styles.btnCard}>
                                    <TouchableOpacity>
                                        <Text style={styles.artigos}>Mais Artigos</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.more}>Leia Mais</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.cards, {marginRight: 20, marginLeft: 20}]}>  
                            <Image source={{uri: cardSegundo}} style={styles.imgCard}/>
                            <View style={styles.containerText}>
                                <Text style={styles.titleCard}>Como reduzir as despesas e cortar os gastos</Text>
                                <View style={styles.btnCard}>
                                    <TouchableOpacity>
                                        <Text style={styles.artigos}>Mais Artigos</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.more}>Leia Mais</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.cards}>  
                            <Image source={{uri: cardTerceiro}} style={styles.imgCard}/>
                            <View style={styles.containerText}>
                                <Text style={styles.titleCard}>Como reduzir as despesas e cortar os gastos</Text>
                                <View style={styles.btnCard}>
                                    <TouchableOpacity>
                                        <Text style={styles.artigos}>Mais Artigos</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.more}>Leia Mais</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10,
        padding: 10,
    },
    title: {
        fontSize: 30,
        color: 'gray'
    },
    content: {
        height: 290
    },
    scroll: {
        height: '100%',
        width: '100%',
        flexDirection: 'row'
    },
    cards: {
        width: width - 100,
    },
    imgCard: {
        width: '100%',
        height: 250,
        borderRadius: 12
    },
    containerText: {
        backgroundColor: 'blue',
        width: '100%',
        height: '50%',
        padding: 10,
        position: 'absolute',
        borderRadius: 12,
        bottom: 0,
        backgroundColor: '#FFF'
    },
    titleCard: {
        fontSize: 20
    },
    btnCard: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flex: 1
    },
    artigos: {
        color: '#1C8BEB',
        marginRight: 20,
        fontSize: 20
    },
    more: {
        color: '#1C8BEB',
        fontSize: 20
    }
})