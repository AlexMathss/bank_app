import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import React, {useState} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput} from 'react-native';
import ButtonDespesas from "../../../Componentes/ButtonDespesas";

const cardImage = "https://cdn.iconscout.com/icon/free/png-512/mastercard-25-675722.png"

export default function CardInfo(){
    const [modalVisible, setModalVisible] = useState(false);
    return(
        
            <View style={styles.container}>
                <View style={styles.cardMain}>
                    <View style={styles.containerCard}>
                        <View style={styles.cardTitulo}>
                            <View style={styles.principal}>
                                <AntDesign name="exclamationcircleo" size={20} color="gray"/>
                                <Text style={styles.principalText}>O melhor cartão para comprar hoje é</Text>
                            </View>
                            <Text style={styles.cardText}>Cartão de Crédito - Andrei</Text>
                        </View>
                        <View style={styles.values}>
                            <View style={styles.cardValue}>
                                <FontAwesome5 name="coins" size={25} color="black"/>
                                <View style={styles.total}>
                                    <Text style={styles.totalTitle}>Limite disponível</Text>
                                    <Text style={styles.totalSub}>R$ 3.631,00</Text>
                                </View>
                            </View>
                            <View style={styles.cardValue}>
                                <FontAwesome5 name="coins" size={25} color="black"/>
                                <View style={styles.total}>
                                    <Text style={styles.totalTitle}>Total das faturas</Text>
                                    <Text style={styles.totalSub}>R$ 0,00</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.bandeira}>
                            <View style={styles.user}>
                                <Image style={styles.image} source={{uri: cardImage}}/>
                                <Text style={styles.cartaoTxt}>Cartão de Crédito - Andrei</Text>
                            </View>
                            <Entypo name="dots-three-horizontal" size={20} color="black"/>
                        </View>
                        <View style={styles.valores}>
                            <View style={styles.parcial}>
                                <Text style={styles.parcialText}>Valor parcial</Text>
                                <Text style={[styles.parcialText, {color: 'green'}]}>R$ 0,00</Text>
                            </View>
                            <View style={styles.cardGraph}>
                                <View style={styles.medidor}/>
                                <Text style={styles.graphText}>9.22%</Text>
                            </View>
                        </View>
                        <ButtonDespesas/>
                    </View>

                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.addBtn}>Adicionar Cartão</Text>
                    </TouchableOpacity>
                    
                </View>
                
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView} behavior="padding">
                        <View style={styles.modalView}>
                            <View style={styles.containerModal}>
                                <Text style={styles.titleModal}>Preencha os campos</Text>
                                <View style={styles.inputDados}>
                                    <Text style={styles.inputTitle}>Nome do Titular</Text>
                                    <TextInput
                                        placeholder="Alex Matheus"
                                        style={styles.inputSize}
                                    />
                                </View>
                                <View style={styles.inputDados}>
                                    <Text style={styles.inputTitle}>Numero do Cartão</Text>
                                    <TextInput
                                        placeholder="xxxx xxxx xxxx xxxx"
                                        keyboardType="number-pad"
                                        style={styles.inputSize}
                                    />
                                </View>
                                <View style={styles.inputDates}>
                                    <View style={styles.seguranca}>
                                        <Text style={styles.inputTitle}>Validade</Text>
                                        <TextInput
                                            placeholder="00/00"
                                            keyboardType="numeric"
                                            style={styles.inputSize}
                                        />
                                    </View>
                                    <View style={styles.seguranca}>
                                        <Text style={styles.inputTitle}>Cód. Segurança</Text>
                                        <TextInput
                                            placeholder="000"
                                            keyboardType="numeric"
                                            style={styles.inputSize}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity
                                    style={[styles.button, styles.buttonClose, {borderBottomLeftRadius: 20}]}
                                    activeOpacity={0.8}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                <Text style={styles.textStyle}>OK</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.button, styles.buttonClose, {backgroundColor: 'red', borderBottomRightRadius: 20}]}
                                    activeOpacity={0.8}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                <Text style={[styles.textStyle, {color: '#FFF'}]}>Cancelar</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    </View>

                </Modal>
            </View>
       
    )
}

const styles = StyleSheet.create({
    cardMain: {
        height: '100%', 
        alignItems: 'center'
    },
    container: {
        height: 600,
        backgroundColor: '#DCDCDC',
    },
    containerCard: {
        backgroundColor: '#FFF',
        height: 170,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    cardTitulo: {
        width: 270,
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    principal: {
        width: '100%',
        height: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    principalText: {
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold'
    },
    cardText: {
        fontSize: 20,
        fontWeight: '500'
    },
    values: {
        width: 380,
        flexDirection: 'row',
        height: 90,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardValue: {
        width: 170,
        height: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    total: {
        width: 130,
        height: '60%',
        justifyContent: 'space-between'
    },
    totalTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: 'gray'
    },
    totalSub: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black'
    },
    card: {
        backgroundColor: '#FFF',
        width: '90%',
        height: 200,
        borderRadius: 20,
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: 20,
        marginBottom: 40
    },
    bandeira: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    user: {
        width: '75%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    image: {
        width: 40,
        height: 40
    },
    cartaoTxt: {
        fontSize: 17,
        fontWeight: '600'
    },
    valores: {
        width: '100%',
        height: 70,
        justifyContent: 'space-between'
    },
    parcial: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    parcialText: {
        fontSize: 17,
        color: 'gray'
    },
    cardGraph: {
        backgroundColor: 'lightgray',
        width: '100%',
        height: 35,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    medidor: {
        width: '15%',
        height: '100%',
        backgroundColor: '#008B8B',
        borderRadius: 30
    },
    graphText: {
        color: 'gray',
        marginRight: 10
    },
    buttonCartao: {},
    cartaoBtn: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#008B8B'
    },
    addBtn: {
        fontSize: 20,
        color: 'purple',
        fontWeight: 'bold'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
      modalView: {
        width: '100%',
        height: '35%',
        backgroundColor: "#fff",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'space-between',
        paddingTop: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      modalButton: {
        height: 40, 
        justifyContent: 'space-between', 
        width: '100%', 
        flexDirection: 'row',
        
      },
      button: {
        elevation: 2,
        backgroundColor: '#1C8BEB',
        width: '50%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
      },
      textStyle: {
         fontWeight: '600'
      },
      descricao: { 
        height: '80%', 
        width: '90%', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    titleModal: {
        fontSize: 25
    },
    contentModal: { 
        width: '100%', 
        height: 120, 
        justifyContent: 'space-between'
    },
    containerModal: {
        height: '80%', 
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputDados: { 
        height: 50, 
        width: '100%', 
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,
        padding: 5
    },
    inputTitle: {
        fontSize: 16
    },
    inputSize: {
        height: 30,
    },
    inputDates: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    seguranca: {
        width: '45%',
        height: 50,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,
        padding: 5
    }
})