import { EvilIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";

import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Alert} from 'react-native';
import Cards from "../../../Componentes/Cards";
import Historico from "../../../Componentes/Historico";



//Anotações
// Adicionar a opção de visualizar a fatura fechada.

export default function CreditCard(){
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    return(
        <View style={styles.container}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("modal has been closed.");
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ScrollView style={{width: '100%'}}>
                            <Historico month={'Dez/22'} fatura={'Fatura Aberta!'} valor={'6500'}/>
                            <Historico month={'Nov/22'} fatura={'Fatura Fechada!'} valor={'451,00'}/>
                            <Historico month={'Out/22'} fatura={'Fatura Fechada!'} valor={'345,00'}/>
                            <Historico month={'Set/22'} fatura={'Fatura Fechada!'} valor={'135,00'}/>
                            <Historico month={'Ago/22'} fatura={'Fatura Fechada!'} valor={'650,00'}/>
                            <Historico month={'Jul/22'} fatura={'Fatura Fechada!'} valor={'120,00'}/>
                            <Historico month={'Jun/22'} fatura={'Fatura Fechada!'} valor={'450,00'}/>
                            <Historico month={'Mai/22'} fatura={'Fatura Fechada!'} valor={'190,00'}/>
                            <Historico month={'Abr/22'} fatura={'Fatura Fechada!'} valor={'200,00'}/>
                            <Historico month={'Mar/22'} fatura={'Fatura Fechada!'} valor={'150,00'}/>
                            <Historico month={'Fev/22'} fatura={'Fatura Fechada!'} valor={'520,00'}/>
                            <Historico month={'Jan/22'} fatura={'Fatura Fechada!'} valor={'220,00'}/>

                            <View style={styles.btnFaturas}>
                                <TouchableOpacity onPress={() => navigation.navigate('Transactions', setModalVisible(!modalVisible))}
                                style={styles.btnContent}>
                                    <Text style={styles.btnText}>Para mais detalhes consultar transações</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </ScrollView>
                        <View style={styles.modalButton}>
                            <TouchableOpacity
                            style={[styles.button, styles.buttonClose, {borderBottomLeftRadius: 20}]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Text style={styles.titleContainer}>Cartões de Crédito</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Cards bankName={'Itaú'} nameCard={'Alex M. Paula'} dateValid={'06/25'} numberCard={'1234  5678  9012  3456'}/>
                <Cards bankName={'Santander'} nameCard={'Alex M. Paula'} dateValid={'06/28'} numberCard={'1234  5678  9012  3456'}/>
                <Cards bankName={'Bradesco'} nameCard={'Alex M. Paula'} dateValid={'06/26'} numberCard={'1234  5678  9012  3456'}/>
                <Cards bankName={'Safra'} nameCard={'Alex M. Paula'} dateValid={'06/29'} numberCard={'1234  5678  9012  3456'}/>
                <View style={styles.historicContainer}>
                    <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={styles.btnHistoric}>
                        <Text style={styles.btnTitle}>Histórico</Text>
                        <AntDesign name="caretright" size={20} color="#1C8BEB"/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10,
        padding: 10,
    },
    titleContainer: {
        fontSize: 30, 
        color: 'gray'
    },
    historicContainer: {
        width: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnHistoric: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTitle: {
        fontSize: 20,
        marginBottom: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
      modalView: {
        width: '100%',
        height: '90%',
        backgroundColor: "white",
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
      btnFaturas: {
        height: 40, 
        justifyContent: 'space-between', 
        width: '100%', 
        flexDirection: 'row',
        backgroundColor: '#1C8BEB',
        borderBottomWidth: 1,
        borderBottomColor: '#FFF'
      },
      btnContent: {
        height: '100%', 
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'center'
      },
      btnText: {
        fontSize: 17, 
        color: 'white', 
        fontWeight: '600'
      },
      modalButton: {
        height: 40, 
        justifyContent: 'space-between', 
        width: '100%', 
        flexDirection: 'row'
      },
      modalText: {
        fontSize: 20,
        color: 'green'
      },
      valor: {
        fontSize: 18
      },
      vencimento: {
        fontSize: 16,
        color: 'orange'
      },
      button: {
        elevation: 2,
        backgroundColor: '#1C8BEB',
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
      }
})