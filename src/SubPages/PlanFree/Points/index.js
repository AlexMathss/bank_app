import React from "react";
import {ScrollView, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import { AntDesign } from "@expo/vector-icons";

export default function Points(){
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.buttonClose}>
                        <AntDesign size={20} color="black"/>
                    </TouchableOpacity>
                    <View style={styles.containerTitle}>
                        <View style={styles.containerPoint}>
                            <View style={styles.pointIcon}/>
                            <View style={styles.containerDescription}>
                                <Text style={styles.title}>Pontos Bank</Text>
                                <Text style={styles.point}>119</Text>
                            </View>
                        </View>
                        <Text style={styles.subTitle}>Equivalem a R$ 1,19 ou mais</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    header: {

    },
    buttonClose: {

    },
    containerTitle: {

    },
    containerPoint: {

    },
    pointIcon: {

    },
    containerDescription: {

    },
    title: {

    },
    point: {

    },
    subTitle: {

    },
})