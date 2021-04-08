import React, { useState, useEffect } from 'react';
import {View, Text, Dimensions, StatusBar, FlatList, RefreshControl, TouchableOpacity, PermissionsAndroid} from 'react-native';
import { Data } from '../../Config';
import { MusicBarLoader, ColorDotsLoader, PulseLoader } from 'react-native-indicator'
import { home } from './style';
import { listCity } from '../../functions/listCity';
let {height, width} = Dimensions.get('window')
import PushNotification from 'react-native-push-notification';
import GeoLocation from '@react-native-community/geolocation';
export default function Home ({navigation}) {
    const [loader, setLoader] = useState(true);
    const [city, setCity] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        reqnotify(setRefreshing);
    }, []);
    
    // PushNotification.configure({
    //     onRegister: (token)=> {
    //         console.log(token)
    //     }
    // })

    PushNotification.localNotification({
        channelId: 'idfsh',
        ongoing:true,
        autoCancel: false,
        bigText: 'Weather',
        subText: 'New Weather',
        priority: 'high',
        ignoreInForeground: false,
    })

    let reqnotify = async (setLoader1) =>{
        try {
            const grand = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
                title: "Infinity",
                message:
                "Need to access Location",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"

            })
            if(grand === PermissionsAndroid.RESULTS.GRANTED){
                console.log(grand);
                GeoLocation.getCurrentPosition(position => {
                    listCity(setLoader1, setCity, position);
                    console.log(position);
                })
            } else {
                listCity(setLoader1, setCity);
                console.log('No Access');
            }
        } catch (error) {
            console.log('---------------',error)
        }
    }
    useEffect(()=>{
        reqnotify(setLoader)
    },[])
    return (
        <View style={home.container}>
            <StatusBar backgroundColor={Data.baseColor} />
            <View style={home.header}>
                <Text style={home.headerText}>Weather App</Text>
            </View>
            {loader && <View style={home.loaderContainer}>
                <PulseLoader size={50} color='#000' />
            </View>}
            {!loader && <View style={home.viewContainer}>
                <FlatList
                    data={city}
                    renderItem={({item}) =>{
                    return (
                        <TouchableOpacity style={home.buttonContainer}
                            onPress={()=>{
                                navigation.navigate('MapLocation',{item: item})
                            }}
                        >
                        <View style={home.descriptionContainer}>
                            <Text style={home.title}>{item.name}</Text>
                            <Text style={home.subTitle}>{item.weather[0].description}</Text>
                        </View>
                        <View style={{height : '100%', width : '30%', justifyContent: 'center'}}>
                            <Text style={{fontSize: 20}}>{(item.main.temp - 273.15).toFixed(2)}&deg; <Text style={{fontSize: 16}}>C</Text> </Text>
                        </View>
                        </TouchableOpacity>)}
                    }
                    keyExtractor={(item) => item.id}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['red', 'green']} />}
                />
                </View>
            } 
        </View>
    )
}