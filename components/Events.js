import React from 'react';
import { AppRegistry, Text, View, ScrollView } from 'react-native';
import Header from './header';
import EventsList from './EventsList';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';


const Events = () => (
    <View style={{flex: 1}}>
        <StickyHeaderFooterScrollView
            renderStickyHeader={ () => (
                <Header headerText={'Eventos'}/>
            )}>
            <ScrollView>
                <EventsList />
            </ScrollView>
        </StickyHeaderFooterScrollView> 
    </View>
);

export default Events;