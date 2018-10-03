import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Helloworld from "./src/components/Helloworld";
import {setTechnology} from "./src/actions";

import {store} from "./src/store";

export default class App extends Component {
    constructor(props) {
        super(props);
        store.subscribe(() => this.forceUpdate());
    }

    onDispatchAction(buttonId) {
        const tech = buttonId === 1 ? "React" : buttonId === 2 ? "Elm" : "React-redux";
        store.dispatch(setTechnology(tech));
    }

    render() {
        return (
            <View>
                <Helloworld tech={store.getState().tech}/>
                <View style={{flexDirection: "row", marginTop: 20,}}>
                    <TouchableOpacity style={{marginLeft: 20, backgroundColor: "#f9c536", padding: 10}}
                        onPress={() => this.onDispatchAction(1)}>
                        <Text style={{fontSize: 20}}>React</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 20, backgroundColor: "#39e949", padding: 10}}
                        onPress={() => this.onDispatchAction(2)}>
                        <Text style={{fontSize: 20}}>Elm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 20, backgroundColor: "#f15056", padding: 10}}
                        onPress={() => this.onDispatchAction(3)}>
                        <Text style={{fontSize: 20}}>React-redux</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
