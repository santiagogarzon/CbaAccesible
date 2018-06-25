import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableHighlight } from 'react-native';


class Home extends React.Component  {
    
    _handlePress() {
    console.log('Pressed!');
    }
    render() {
        
    return (
        <View style={styles.container}>
        <ImageBackground source={require('./images/backgroundHome2.jpg')}
            resizeMode= 'cover'
            style={{
            position: 'relative',
            width: '100%',
            height: '100%'
            }}
        >   
            <View
                style= {{
                    position: 'relative',
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%'
                }}
            >
                <TouchableHighlight activeOpacity={0} underlayColor='transparent' onPress={() => this.props.navigation.navigate('OrganizationsPage')}>
                    <Image
                        style={{
                            position: 'relative',
                            width: 100,
                            height: 100,
                            marginRight: 50
                        }}
                        source={require('./images/places.png')}
                    />
                </TouchableHighlight>

                <TouchableHighlight activeOpacity={0} underlayColor='transparent' onPress={() => this.props.navigation.navigate('EventsPage')}>
                    <Image
                        style={{
                            position: 'relative',
                            width: 100,
                            height: 100
                        }}
                        source={require('./images/event.png')}
                    />
                </TouchableHighlight>
            </View>
        </ImageBackground>
        <Image source={require('./images/logo_blanco_2.png')}
                resizeMode= 'contain'
                style={{
                position: 'absolute',
                flex: 1,
                top: 50,
                width: '75%',
                height: '20%',
                }}
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
});

export default Home;