import React, {useState} from "react";
import {View, Modal, Alert, Pressable, Text, StyleSheet, TextInput} from 'react-native';

export default function ModalComp(){
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                trasparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has beem closed.")
                    setModalVisible(!modalVisible);
                }}
            >
            
                <View style={[styles.centeredView, {backgroundColor: 'rgba(12,10,18,0.9)'}]}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Preencha as informações</Text>
                        <View style={styles.cardInput}>
                            <TextInput
                                placeholder="Digite seu e-mail"
                                style={styles.inputText}
                                placeholderTextColor= 'white'
                            />
                            <TextInput
                                placeholder="Confirme seu e-mail"
                                style={styles.inputText}
                                placeholderTextColor= 'white'
                            />
                        </View>
                        <View style={styles.btns}>
                            <Pressable
                                style={[styles.buttonModal, {backgroundColor: '#3CB371'}]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={[styles.textStyle, {color: 'white'}]}>Confirmar</Text>
                            </Pressable>
                            <Pressable
                            style={[styles.buttonModal, {backgroundColor: '#B22222'}]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={[styles.textStyle, {color: 'white'}]}>Cancelar</Text>
                        </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <Pressable
                onPress={() => setModalVisible(true)}
                style={styles.button}
            >
                <Text style={styles.textStyle}>Forgot Password</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    width: 350,
    height: 400,
    backgroundColor: '#6c63ff',
    borderRadius: 20,
    alignItems: "center",
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingTop: 10,
    paddingBottom: 10
  },
  button: {
    borderRadius: 20,
    elevation: 2
  },
  buttonModal: {
    width: 130,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "#6c63ff",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF'
  },
  inputText: {
    width: '100%',
    height: '40%',
    backgroundColor:'rgba(12,10,18,0.9)',
    paddingLeft: 10,
    borderRadius: 10,
    color: '#FFF'
  },
  cardInput: {
    width: '90%',
    height: '30%',
    justifyContent: 'space-between'
  },
  btns: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})