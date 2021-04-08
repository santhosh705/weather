import React from 'react';
import {ToastAndroid} from 'react-native';
import axios from 'axios';
import { Data } from '../Config';


export const listCity = async (setLoader, setCity, position) => {
    try {
        let ur = `http://api.openweathermap.org/data/2.5/find?lat=9.9163256&lon=78.124392&cnt=50&appid=${Data.apiKey}`
        if (position) {
            `http://api.openweathermap.org/data/2.5/find?lat=${position.coords.latitude}&lon=${position.coords.longitude}&cnt=50&appid=${Data.apiKey}`
        }
        let dt = await axios({
            url : ur,
            method: 'GET'
        });
        if(dt.data.cod == 200) {
            setCity(dt.data.list);
            setLoader(false)
        } else {
            ToastAndroid.show('Something Went Worng!', ToastAndroid.LONG)
            setLoader(false);
        }
    } catch (error) {
        console.log(error);
        setLoader(false);
        ToastAndroid.show('Network Error!', ToastAndroid.LONG)
    }
}