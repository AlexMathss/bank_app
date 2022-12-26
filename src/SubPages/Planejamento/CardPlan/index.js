import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import {View, Text, Image, StyleSheet, Alert, Modal, Pressable, TouchableOpacity} from 'react-native';
import Teste from "../../../Componentes/Teste";

const cardImage = "https://cdn.iconscout.com/icon/free/png-512/mastercard-25-675722.png"

export default function CardPlan(){
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    return(
        <>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Fatura Aberta</Text>
                    <Text style={styles.valor}>Valor: 139,99</Text>
                    <Text style={styles.vencimento}>Vencimento: 29 dez 2022 </Text>
                    <View style={{height: 40, justifyContent: 'space-between', width: '100%', flexDirection: 'row'}}>
                        <TouchableOpacity
                        style={[styles.button, styles.buttonClose, {borderBottomLeftRadius: 20}]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={styles.textStyle}>OK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[styles.button, styles.buttonClose, {borderBottomRightRadius: 20}]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={styles.textStyle}>Histórico</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        </Modal>
        <Pressable
         onPress={() => setModalVisible(true)}
        style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>
                    BANK NAME
                </Text>
            </View>
            <View style={styles.containerDados}>
                <Text style={styles.numberCard}>1234  5678  9012  3456</Text>
                <View style={styles.dadosCliente}>
                    <Text style={styles.name}>Alex M. de Paula</Text>
                    <View style={styles.date}>
                        <Text style={{textTransform: 'uppercase', color: '#e0e0de', fontWeight: '500', fontSize: 12}}>Expiry</Text>
                        <Text style={{fontSize: 17, color: '#e0e0de'}}>06/13</Text>
                        <Text style={{fontSize: '12', color: '#e0e0de'}}>MM  YY</Text>
                    </View>
                    <Image source={{uri: cardImage}} style={styles.image}/>
                </View>
            </View>
        </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 185,
        marginLeft: 50,
        marginTop: 50,
        borderRadius: 20,
        padding: 15,
        justifyContent: 'space-between',
        backgroundColor: 'black'
    },
    containerTitle: {
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerDados: {
        height: 80,
        justifyContent: 'space-between'
    },
    numberCard: {
        fontSize: 30,
        fontWeight: '600',
        color: '#e0e0de'
    },
    image:{
        width: 40,
        height: 40
    },
    dadosCliente: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
      modalView: {
        margin: 20,
        width: 250,
        height: 150,
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
        justifyContent: 'center',
        width: '50%'
      },
      name: {
        color: '#e0e0de', 
        fontSize: 17, 
        fontWeight: '600'
      }
}) 