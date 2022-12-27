import { EvilIcons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

export default function Profile(){
    return(
        <View style={styles.container}>

            <View style={styles.container_top}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <EvilIcons name="chevron-left" size={30} color="#FFF"/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Perfil</Text>
                    <TouchableOpacity>
                        <Feather name="settings" size={20} color="#FFF"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <View style={{backgroundColor: 'purple', width: '60%', height: '60%', borderRadius: '100%', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        <View style={{width: '50%', height: '50%', backgroundColor: 'red', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                            <MaterialCommunityIcons name="pencil-outline" size={30} color="#FFF"/>
                        </View>
                    </View>
                    <View style={{backgroundColor: 'purple', width: '100%', height: 50, alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 20, fontWeight: '600', color: '#FFF'}}>Alex Matheus</Text>
                        <Text style={{fontSize: 18, fontWeight: '500', color: 'lightgray'}}>alex93@hotmail.com.br</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={{width: '45%', backgroundColor: 'purple', flexDirection: 'row', height: '100%', alignItems: 'center', justifyContent: 'space-between'}}>
                        <MaterialCommunityIcons name="crown-circle" size={40} color="#FFF"/>
                        <View>
                            <Text>Situação</Text>
                            <Text>Free</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container_bottom}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        flex: 1,
        justifyContent: 'flex-end'
    },
    container_top: {
        height: '55%',
        backgroundColor: 'red',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container_bottom: {
        backgroundColor: '#FFF',
        height: '45%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    header: {
        backgroundColor: 'orange',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        width: '100%'
    },
    content: {
        backgroundColor: 'orange',
        width: '60%',
        height: '55%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footer: {
        backgroundColor: 'orange',
        width: '70%',
        height: '20%'
    },
    btn_back: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFF'
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFF'
    }
})