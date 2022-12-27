import React, { useState } from "react";
import { TouchableOpacity,View, Text, StyleSheet, Modal, TextInput } from "react-native";

export default function ButtonDespesas(){
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}
            style={styles.buttonCartao}>
                <Text style={styles.cartaoBtn}>Adicionar despesas</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}

            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.containerModal}>
                            <Text style={styles.modalTitle}>Adicionar Despesas</Text>
                            <View style={styles.input_1}>
                                <View style={styles.subInput}>
                                    <Text style={styles.inputTitle}>Titulo da Despesa</Text>
                                    <TextInput
                                        placeholder=" 'Mercado' "
                                        style={styles.inputText}
                                    />
                                </View>
                                <View style={styles.subInput}>
                                    <Text style={styles.inputTitle}>Valor</Text>
                                    <TextInput
                                        placeholder="0,00"
                                        keyboardType="decimal-pad"
                                        style={styles.inputText}
                                    />
                                </View>
                            </View>
                            <View style={styles.input_2}>
                                <Text style={styles.inputTitle}>Descrição</Text>
                                <TextInput
                                    multiline={true}
                                    numberOfLines={4}
                                    maxLength={50}
                                    resize
                                    style={styles.inputArea}
                                    placeholder="Descrição da despesa"
                                />
                            </View>
                            <View style={styles.input_1}>
                                <View style={styles.subInput}>
                                    <Text style={styles.inputTitle}>Vencimento:</Text>
                                    <TextInput
                                        placeholder="DD/MM/YYYY"
                                        style={styles.inputText}
                                    />
                                </View>
                                <View style={styles.subInput}>
                                    <Text style={styles.inputTitle}>Despesa Paga:</Text>
                                    <TextInput
                                        placeholder="DD/MM/YYYY"
                                        style={styles.inputText}
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
        </>
    )
}


const styles = StyleSheet.create({
    buttonCartao: {

    },
    cartaoBtn: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#008B8B'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 100
    },
      modalView: {
        width: '100%',
        height: '45%',
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
      containerModal: {
        height: '80%', 
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input_1: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input_2: {
        width: '100%',
        height: 85,
        justifyContent: 'space-between',
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgray'
    },
    subInput: {
        width: '45%',
        justifyContent: 'space-between',
        borderRadius: 5,
        borderWidth: 1,
        padding: 5,
        borderColor: 'lightgray'
    },
    inputText: {
        height: 30,
    },
    inputTitle: {
        fontSize: 16
    },
    inputArea: {
        height: 60
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
      modalTitle: {
        fontSize: 25
      }
})