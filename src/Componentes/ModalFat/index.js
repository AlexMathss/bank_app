import React from "react";
import {View, Text, TouchableOpacity, Image, StyleSheet, Alert, Modal, Pressable } from 'react-native';

export default function ModalFat(){
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
                        <Text style={{fontSize: 18}}>Valor: 139,99</Text>
                        <Text style={{fontSize: 16, color: 'orange'}}>Vencimento: 29 dez 2022 </Text>
                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={styles.textStyle}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({

})