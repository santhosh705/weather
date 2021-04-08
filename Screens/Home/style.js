import React from 'react';
import {Dimensions, StyleSheet, StatusBar} from 'react-native';
import { Data } from '../../Config';
let {height, width} = Dimensions.get('window')
export const home = StyleSheet.create({
    container : {
        height,
        width
    },
    header : {
        height: height/12, 
        width, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: Data.baseColor
    },
    headerText : {
        fontSize: 20, 
        color : '#fff'
    },
    loaderContainer : {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    viewContainer : {
        height : height - ((height/12) + StatusBar.currentHeight + 10)
    },
    buttonContainer : {
        marginVertical: 5,
        marginHorizontal: 10,
        height : height/10,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    descriptionContainer : {
        height : '100%', 
        width : '70%', 
        justifyContent: 'center', 
        paddingLeft: 20
    },
    title : {
        fontSize: 18
    },
    subTitle: {
        paddingTop:5, 
        color: '#999'
    }
})
