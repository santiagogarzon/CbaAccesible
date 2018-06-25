import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableHighlight } from 'react-native';

class Home extends React.Component  {
    render() {
        
    return (
        <View style={styles.container}>
        <ImageBackground source={require('./images/backgroundHome2.jpg')}
            resizeMode= 'cover'
            style={styles.background}
        >
            <View
                style= {styles.buttonRow}
            >
                <TouchableHighlight activeOpacity={0} underlayColor='transparent' onPress={() => this.props.navigation.navigate('OrganizationsPage')}>
                    <Image
                        style={styles.button}
                        source={require('./images/places.png')}
                    />
                </TouchableHighlight>

                <TouchableHighlight activeOpacity={0} underlayColor='transparent' onPress={() => this.props.navigation.navigate('EventsPage')}>
                    <Image
                        style={styles.buttonRight}
                        source={require('./images/event.png')}
                    />
                </TouchableHighlight>
            </View>
        </ImageBackground>
        <Image source={require('./images/logo_blanco_2.png')}
                resizeMode= 'contain'
                style={styles.logo}
        />  
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    buttonRow: {
        position: 'relative',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    logo: {
        position: 'absolute',
        flex: 1,
        top: 50,
        width: '75%',
        height: '20%',
    },
    button: {
        position: 'relative',
        width: 100,
        height: 100,
        marginRight: 50
    },
    buttonRight: {
        position: 'relative',
        width: 100,
        height: 100
    }
});

export default Home;