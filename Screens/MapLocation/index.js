import React, { useState } from 'react';
import {StatusBar, View, Text, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
let {height, width} = Dimensions.get('window');
import { mapLoc } from './style';
import { Data } from '../../Config';
import { Icon } from 'react-native-elements';
export default function MapLocation ({route, navigation}) {
    const [obj, setObj] = useState(route.params.item)
    return (
        <View style={mapLoc.container}>
            <MapView 
                style={mapLoc.mpView}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: obj.coord.lat,
                    longitude: obj.coord.lon,
                    latitudeDelta: 0.0600,
                    longitudeDelta: 0.0421
                }}
            >
                <Marker coordinate={{latitude: obj.coord.lat, longitude: obj.coord.lon }}>
                    <Icon name='location-pin' type='entypo' color='red' size={35} />
                </Marker>
            </MapView>
            <StatusBar backgroundColor={Data.baseColor} />
            <View style={mapLoc.header}>
                <View style={mapLoc.headerIconContainer}>
                    <Icon name='arrowleft' type='antdesign' color='#fff' size={25} onPress={()=>{
                        navigation.goBack(null);
                    }} />
                </View>
                <Text style={mapLoc.headerText}>Weather App</Text>
            </View>
            <View style={mapLoc.contentContainer}>
                <View style={mapLoc.content1}>
                    <Text style={mapLoc.textHeading}>{obj.name}</Text>
                    <Text style={mapLoc.text1}>{obj.weather[0].description}</Text>
                    <Text style={mapLoc.text2}><Text>Humidity : </Text> {obj.main.humidity}</Text>
                    <Text style={mapLoc.text2}><Text>Wind Speed : </Text> {obj.wind.speed}</Text>
                    <Text style={mapLoc.text2}><Text>Max. Temp : </Text> {(obj.main.temp_max - 273.15).toFixed(2)}&deg; <Text style={{fontSize: 13}}>C</Text></Text>
                    <Text style={mapLoc.text2}><Text>Min Temp : </Text> {(obj.main.temp_min - 273.15).toFixed(2)}&deg; <Text style={{fontSize: 13}}>C</Text></Text>
                </View>
                <View style={mapLoc.content2}>
                    <Text style={mapLoc.text3}>{(obj.main.temp - 273.15).toFixed(2)}&deg; <Text style={{fontSize: 16}}>C</Text> </Text>
                    <Icon name='cloudy-outline' type='ionicon' size={65} color='#108' />
                </View>
            </View>
        </View>
    )
}
