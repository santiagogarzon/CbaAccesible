import React from 'react';
import { AppRegistry, Text, View, ScrollView } from 'react-native';
import Header from './header';
import EventsList from './EventsList';

const Events = () => (
    <View style={{flex: 1}}>
        <ScrollView>
            <Header headerText={'Eventos'}/>
            <EventsList />
        </ScrollView> 
    </View>
);

export default Events;