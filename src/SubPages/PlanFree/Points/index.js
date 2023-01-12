import React from "react";
import {ScrollView, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Parceiros from "../Parceiros";

export default function Points(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.buttonClose} onPress={() => navigation.goBack('Profile')}>
                        <AntDesign name="close" size={20} color="black"/>
                    </TouchableOpacity>
                    <View style={styles.containerTitle}>
                        <View style={styles.containerPoint}>
                            <View style={styles.pointIcon}/>
                            <View style={styles.containerDescription}>
                                <Text style={styles.title}>Pontos Bank</Text>
                                <Text style={styles.point}>119</Text>
                            </View>
                        </View>
                        <Text style={styles.subTitle}>Equivalem a <Text style={{color: 'green'}}>R$ 1,19</Text> ou mais</Text>
                    </View>
                </View>
                <Parceiros/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 65,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        backgroundColor: 'white'
    },
    buttonClose: {
        marginRight: 30
    },
    containerTitle: {
        height: '95%',
        width: 250,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerPoint: {
        width: 120,
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    pointIcon: {
        width: 35,
        height: 35,
        backgroundColor: 'yellow',
        borderRadius: 50
    },
    containerDescription: {
        height: '100%',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 13,
        color: '#c1c1c1'
    },
    point: {
        fontSize: 25,
    },
    subTitle: {
        fontSize: 16
    },
})