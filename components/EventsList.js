import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import EventsDetail from './EventsDetail';


class EventsList extends Component {

    state = { events : [] };

    componentWillMount() {
        axios.get('http://api.cbaaccesible.org/serviceevento/findall')
            .then(response => this.setState({events: response.data}));
    }

    renderEvents() {
        return this.state.events.map(event => 
            <EventsDetail key={event.nombre} data={event} />
        );
    }



    render() {

    return (
        <View>
          {this.renderEvents()}
        </View>
    );
  }
}

export default EventsList;
