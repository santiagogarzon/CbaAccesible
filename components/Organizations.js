import React from 'react';
import { AppRegistry, Text, View, ScrollView } from 'react-native';
import Header from './header';
import OrganizationsList from './OrganizationsList';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';

const Organizations = () => (
    <View style={{flex: 1}}>
        <StickyHeaderFooterScrollView
            renderStickyHeader={ () => (
                <Header headerText={'Organizaciones'}/>
            )}>
            <ScrollView>            
                <OrganizationsList />
            </ScrollView>
        </StickyHeaderFooterScrollView> 
    </View>
);

export default Organizations;