import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';


export default function ListItems({
    iconeLegend,
    title,
    legend,
    valor,
    vencimento,
    pago
}){
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
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
                        <View style={styles.descricao}>
                            <Text style={styles.titleModal}>{title}</Text>
                            <View style={styles.contentModal}>
                                <Text style={{fontSize: 18}}>Descrição: {legend}</Text>
                                <Text style={[styles.value, {fontSize: 18}]}>Valor: R$ {valor}</Text>
                                <Text style={{fontSize: 18}}>Vencimento: {vencimento}</Text>
                                <Text style={{fontSize: 18}}>Pagamento: {pago}</Text>
                            </View>
                        </View>
                        
                        <View style={styles.modalButton}>
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



                <TouchableOpacity onPress={() =>  setModalVisible(!modalVisible)} style={styles.content}>
                    <View style={styles.iconeCat}>
                        {iconeLegend}
                    </View>
                    <View style={styles.cardText}>
                        <Text style={styles.description}>{title}</Text>
                        <Text style={styles.subDescription}>{vencimento}</Text>
                        <Text style={styles.subDescription}>{legend}</Text>
                    </View>
                    <View style={styles.cardValue}>
                        <Text style={styles.value}>R$ {valor}</Text>
                        <Text style={styles.subDescription}>{pago}</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="pushpino" size={15} color="#FFF"/>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        justifyContent: 'center',
        marginBottom: 20

    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60
    },
    iconeCat: {
        backgroundColor: '#FFF',
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#1C8BEB',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2,
    },
    cardText: {
        width: '35%',
        height: 55,
        justifyContent: 'space-between',
    },
    description: {
        fontSize: 20,
        fontWeight: '700'
    },
    subDescription: {
        fontSize: 17,
        color: 'gray'
    },
    cardValue: {
        width: '35%',
        height: 55,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    value: {
        fontSize: 20,
        fontWeight: '600',
        color: 'red'
    },
    iconContainer: {
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        padding: 15
    },
      modalView: {
        width: '80%',
        height: '30%',
        
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
      modalButton: {
        height: 40, 
        justifyContent: 'space-between', 
        width: '100%', 
        flexDirection: 'row',
        
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
    }
})