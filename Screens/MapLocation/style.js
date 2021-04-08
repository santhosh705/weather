import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import { Data } from '../../Config';
let {height, width} = Dimensions.get('window')
export const mapLoc = StyleSheet.create({
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
    mpView: {
        height , 
        width , 
        position: 'absolute'
    },
    headerIconContainer : {
        position: 'absolute',
        left: 0,
        width: width/5,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentContainer : {
        position: 'absolute',
        height: height/2.4,
        width,
        bottom: 0,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    content1: {
        height: '100%', 
        width: '60%',
        paddingLeft: 25,
    },
    content2 : {
        height: '100%',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeading : {
        marginTop: 25,
        fontSize: 20,
        fontWeight: 'bold'
    },
    text1 : {
        marginTop: 15,
        fontSize: 15
    },
    text2 : {
        marginTop: 10, 
        fontSize: 15
    },
    text3: {
        fontSize: 20
    }
})
