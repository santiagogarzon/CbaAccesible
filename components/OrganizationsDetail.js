import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { showLocation } from 'react-native-map-link';

const OrganizationsDetail = ({data}) => {

    const { nombre, email, thumbnail_image, image, sitioWeb, urlFotoPerfil, direccion } = data;
    var imageUrl,
        lat = data.direccion.latitud,
        long = data.direccion.longitud;

    if(urlFotoPerfil == null) {
        imageUrl = 'https://typographya.files.wordpress.com/2011/09/null-21.jpg';
    } else {
        imageUrl = 'http://api.cbaaccesible.org/serviceorganizacion/images-upload/' + urlFotoPerfil;
    }

    const { 
        thumbnailStyle, 
        headContentStyle, 
        thumbnailContainerStyle, 
        headerTextStyle, 
        imageStyle 
    } = styles;

    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: imageUrl }} />
                </View>
                <View style={headContentStyle}>
                    <Text style={headerTextStyle}>{nombre}</Text>
                    <Text>{email}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{ uri: imageUrl }} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(sitioWeb)}>
                    Ver Sitio Web
                </Button>
            </CardSection>

            <CardSection>
                <Button onPress={() => showLocation({ latitude: lat, longitude: long})}>
                    Ver Ubicacion
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerTextStyle: {
        fontSize: 18
    },

    thumbnailStyle: {
        height: 50,
        width: 50,
        borderRadius:100
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default OrganizationsDetail;