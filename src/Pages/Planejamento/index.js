import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal} from 'react-native';
import CardPlan from '../../SubPages/Planejamento/CardPlan';

//Adicionar uma DropDownList para selecionar os meses do ano.


export default function Planejamento(){
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <ScrollView>
            <View style={styles.cardMain}>
                <View style={styles.header}>
                    <View style={styles.options}>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.buttonMenu}>
                            <Text style={styles.btnText}>Mensal</Text>
                            <AntDesign name="down" size={15} color="#FFF"/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="ellipsis1" size={30} color="black"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.meses}>
                    <TouchableOpacity>
                        <AntDesign name="left" size={20} color="#FFF"/>
                    </TouchableOpacity>
                    <Text style={styles.mesText}>Outubro</Text>
                    <TouchableOpacity>
                        <AntDesign name="right" size={20} color="#FFF"/>
                    </TouchableOpacity>
                </View>
            </View>
            <CardPlan/>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardMain: {
        width: '100%',
        height: 100,
        backgroundColor: '#1C8BEB',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        padding: 15,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    header: {
        width: '65%',
        height: 30
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonMenu: {
        backgroundColor: '#4B0082',
        width: 120,
        height: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        padding: 5
    },
    btnText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: '500'
    },
    meses: {
        width: '100%',
        height: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    mesText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: '700'
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 150
    },
      modalView: {
        width: '50%',
        height: '20%',
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
})