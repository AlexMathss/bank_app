import React, {useState} from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, Pressable, Alert, Modal} from 'react-native';

const cardImage = "https://cdn.iconscout.com/icon/free/png-512/mastercard-25-675722.png"
import ModalFat from "../../Componentes/ModalFat";

export default function Cards({
    bankName,
    numberCard,
    nameCard,
    dateValid,
}){
    const [modalVisible, setModalVisible] = useState(false);
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
                    <View style={{height: 40, width: '100%'}}>
                        <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={styles.textStyle}>OK</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        </Modal>
        <Pressable
        style={styles.containerCard}
        onPress={() => setModalVisible(true)}
        >
            <View style={styles.containerTitle}>
                <Text style={styles.title}>
                    {bankName}
                </Text>
            </View>
            <View style={styles.containerDados}>
                <Text style={styles.numberCard}>{numberCard}</Text>
                <View style={styles.dadosCliente}>
                    <Text style={styles.name}>{nameCard}</Text>
                    <View style={styles.date}>
                        <Text style={styles.vencimentoCard}>Expiry</Text>
                        <Text style={styles.validade}>{dateValid}</Text>
                        <Text style={styles.month}>MM  YY</Text>
                    </View>
                    <Image source={{uri: cardImage}} style={styles.image}/>
                </View>
            </View>
        </Pressable>
        </>
        
    )
}

const styles = StyleSheet.create({
    containerCard: {
        width: 320,
        height: 185,
        borderRadius: 20,
        padding: 15,
        justifyContent: 'space-between',
        backgroundColor: '#1C8BEB',
        marginRight: 10,
        borderWidth: 1,
        borderColor: 'lightgray'
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
    name: {
        color: '#e0e0de',
        fontSize: 17,
        fontWeight: '600'
    },
    vencimentoCard: {
        textTransform: 'uppercase', 
        color: '#e0e0de', 
        fontWeight: '500', 
        fontSize: 12
    },
    validade: {
        fontSize: 17, 
        color: '#e0e0de'
    },
    month: {
        fontSize: '12', 
        color: '#e0e0de'
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
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
      }
})