import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Helloworld extends Component {
    render() {
        return (
            <View style={{margin: 30}}>
                <Text style={{fontSize: 30}}>{this.props.tech}</Text>
            </View>
        );
    }
}   