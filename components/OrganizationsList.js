import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import OrganizationsDetail from './OrganizationsDetail';

class OrganizationsList extends Component {
    state = { organizations : [] };

    componentWillMount() {
        axios.get('http://api.cbaaccesible.org/serviceorganizacion/findall')
            .then(response => this.setState({organizations: response.data}));
    }

    renderOrganizations() {
        return this.state.organizations.map(organization => 
            <OrganizationsDetail key={organization.nombre} data={organization} />
        );
    }

    render() {
        return (
            <View>
            {this.renderOrganizations()}
            </View>
        );
    }
}

export default OrganizationsList;
