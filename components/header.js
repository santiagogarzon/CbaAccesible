// Import libraries for amking a comp
import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;    
    return (         
    <View style={viewStyle}>           
    <Text style={textStyle}>{props.headerText}</Text></View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#4A708B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        paddingTop: 20,
        fontSize: 32,
        color: 'white'
    }
};

export default Header;