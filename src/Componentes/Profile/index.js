import { EvilIcons, Feather, Foundation, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

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
                    <View style={styles.imageProfile}>
                        <TouchableOpacity style={styles.editButton}>
                            <MaterialCommunityIcons name="pencil-outline" size={30} color="#FFF"/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.name}>Alex Matheus</Text>
                        <Text style={styles.email}>alex93@hotmail.com.br</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity activeOpacity={1} style={styles.buttonLeft}>
                        <MaterialCommunityIcons name="crown-circle" size={40} color="#FFF"/>
                        <View style={styles.btntextContainer}>
                            <Text style={styles.situation}>Situação</Text>
                            <Text style={styles.plan}>Free</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={styles.buttonRight}>
                        <MaterialCommunityIcons name="crown-circle" size={40} color="#FFF"/>
                        <View style={styles.btntextContainer}>
                            <Text style={styles.situation}>Pontos Mob</Text>
                            <Text style={styles.plan}>Free</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container_bottom}>
                <ScrollView style={styles.scrollStyle}>
                        <TouchableOpacity style={styles.scrollButton}>
                            <Feather name="user" size={30} color="lightgray"/>
                            <Text style={styles.btnText}>Meu Cadastro</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.scrollButton}>
                            <MaterialCommunityIcons name="crown-outline" size={30} color="lightgray"/>
                            <Text style={styles.btnText}>Mobills Premium</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.scrollButton}>
                            <MaterialCommunityIcons name="material-design" size={30} color="lightgray"/>
                            <Text style={styles.btnText}>Meus pontos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.scrollButton}>
                            <MaterialCommunityIcons name="account-multiple" size={30} color="lightgray"/>
                            <Text style={styles.btnText}>Convidou, ganhou!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.scrollButton, {borderBottomWidth: 0}]}>
                            <MaterialCommunityIcons name="exit-to-app" size={30} color="lightgray"/>
                            <Text style={styles.btnText}>Convidou, ganhou!</Text>
                        </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6215dd',
        flex: 1,
        justifyContent: 'flex-end'
    },
    container_top: {
        height: '55%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container_bottom: {
        backgroundColor: '#FFF',
        height: '45%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        width: '100%'
    },
    content: {
        width: '60%',
        height: '55%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footer: {
        width: '70%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    },
    imageProfile: {
        backgroundColor: 'orange', 
        width: '60%', 
        height: '60%', 
        borderRadius: '100%', 
        justifyContent: 'flex-end', 
        alignItems: 'flex-end'
    },
    editButton: {
        width: '50%', 
        height: '50%', 
        backgroundColor: 'red', 
        borderRadius: 50, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    profileInfo: {
        width: '100%', 
        height: 50, 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 20, 
        fontWeight: '600', 
        color: '#FFF'
    },
    email: {
        fontSize: 18, 
        fontWeight: '500', 
        color: 'lightgray'
    },
    buttonLeft: {
        width: '50%',
        flexDirection: 'row', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        borderTopLeftRadius: 30, 
        borderBottomLeftRadius: 30
    },
    btntextContainer: {
        width: '60%', 
        height: '50%', 
        justifyContent: 'space-between'
    },
    situation: {
        fontSize: 15, 
        color: 'lightgray'
    },
    plan: {
        fontSize: 25, 
        fontWeight: '500', 
        color: '#FFF'
    },
    buttonRight: {
        width: '50%', 
        flexDirection: 'row', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        borderTopRightRadius: 30, 
        borderBottomRightRadius: 30
    },
    scrollStyle: { 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20, 
        height: '100%', 
        paddingTop: 5, 
        paddingHorizontal: 20
    },
    scrollButton: {
        alignItems: 'center' ,
        flexDirection: 'row', 
        height: 50, 
        borderBottomColor: 'lightgray', 
        borderBottomWidth: 1, 
        paddingHorizontal: 5, 
        marginBottom: 10
    },
    btnText: {
        marginLeft: 30, 
        fontSize: 20, 
        fontWeight: '500'
    }
})