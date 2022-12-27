import React, {Component, useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import imagesPath from "../constants/imagesPath";


export default function DropDown({
    data = [],
    value = {},
    onSelect = () => {}
}){
    console.log("selected value", !!value)
    const [showOption, setShowOption] = useState(false)
    const onSelectedItem = (val) => {
        setShowOption(false)
        onSelect(val)
    }
    return(
        <View>
            <TouchableOpacity
            onPress={() => setShowOption(!showOption)}
            style={styles.dropDownStyle}>
                <Text>{!!value? value?.name: `Choose an options`}</Text>
                <Image style={{width: '15%', height: '15%', transform: [{rotate: showOption? '180deg': '0deg'}]}}
                source={imagesPath.icDropDown} />
            </TouchableOpacity>
            {showOption && (<View style={{backgroundColor: 'orange', padding: 8, borderRadius: 6, maxHeight: 150}}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                {data.map((val, i) =>{
                    return(
                        <TouchableOpacity  key={String(i)} onPress={() => onSelectedItem(val)}
                        style={{...styles.selectedItemStyle, backgroundColor: value.id == val.id ? 'pink' : 'white'}}
                        >
                        <Text>{val.name}</Text>
                        </TouchableOpacity>
                    )
                })}
                </ScrollView>
            </View>)}
        </View>
    )
}

const styles = StyleSheet.create({
    dropDownStyle: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 8,
        borderRadius: 6,
        minHeight: 42,
        // justifyContent: 'center'.
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6
    },
    selectedItemStyle: {
        paddingVertical: 8, 
        borderRadius: 4, 
        paddingHorizontal: 6, 
        marginBottom: 4
    }
})