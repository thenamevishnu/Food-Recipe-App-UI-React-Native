import { FontAwesome } from '@expo/vector-icons'
import React, { useRef, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput } from 'react-native'

export function SearchFilter({icon, placeholder}){

    return (
        <SafeAreaView>
            <TextInput style={styles.input} placeholder={placeholder}></TextInput>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input:{
        shadowColor:"#000",
        shadowOffset:{
            width:0, height:4
        },
        shadowOpacity:0.1,
        shadowRadius:1,
        backgroundColor:"#fff",
        marginHorizontal:10,
        marginTop:10,
        padding:16,
        borderRadius:10,
        elevation:10
    }
})