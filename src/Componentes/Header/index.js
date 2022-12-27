import React, { useState } from "react";

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Entypo, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import DropDown from "../DropDown";

// Anotações
// Criar um DROPLIST para selecionar os meses.
// Criar uma página para navegar até o perfil.
// Criar uma DROPLIST para notificações e Mais.

let fruits = [
    {id: 1, name:"mango"},
    {id: 2, name:"mango"},
    {id: 3, name:"mango"},
    {id: 4, name:"mango"}
]

export default function Header(){
    const [selectItem, setSelectItem] = useState(null)

    const onSelect = (item) => {
        setSelectItem(item)
    }

    return(
        <View style={styles.dataIcons}>
            <TouchableOpacity style={styles.userIcon}>
                    <FontAwesome name="user-circle" size={32} color="#828486"/>
                </TouchableOpacity>
                
                {/* Criar uma lista de opções */}
                {/* <DropDown
                    value={selectItem}
                    data={fruits}
                    onSelect={onSelect}
                /> */}

                <View style={styles.contentHeader}>
                    <TouchableOpacity style={styles.notification}>
                        <FontAwesome5 name="bell" size={22} color="#828486" style={styles.notificationIcon}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.notification}>
                        <Entypo name="dots-three-vertical" size={22} color="#828486"/>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dataIcons: {
        backgroundColor: '#FFF',
        width: '100%',
        minHeight: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgray',
        
    },
    userIcon: {

    },
    
    contentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 50,
        justifyContent: 'space-between',
    },
    notification: {

    },
    notificationIcon: {

    }
})