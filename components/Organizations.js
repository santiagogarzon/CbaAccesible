import React from 'react';
import { AppRegistry, Text, View, ScrollView } from 'react-native';
import Header from './header';
import OrganizationsList from './OrganizationsList';

const Organizations = () => (
    <View style={{flex: 1}}>
        <ScrollView>
            <Header headerText={'Organizaciones'}/>
            <OrganizationsList />
        </ScrollView> 
    </View>
);

export default Organizations;