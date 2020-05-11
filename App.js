import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';


import Echo from 'laravel-echo/dist/echo';
import Socketio from 'socket.io-client';

export default class App extends Component {
    state = {
        onlineCount: 0,
        color: '#f1f1f1'
    };

    constructor(props) {
        super(props);
        const localIp = "172.18.0.1";
        let channelName = 'user-channel';
        let eventName = '.UserEvent';

        let echo = new Echo({
            broadcaster: 'socket.io',
            host: `http://${localIp}:6001`,
            client: Socketio,
        });

        echo.channel(channelName)
            .listen(eventName, event => {
                console.log('test ge')
                alert('test')
            });
    }


    render() {
        return (
            <View style={[styles.container, {backgroundColor: this.state.color}]}>
                <Text>test</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    countContainer: {
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        padding: 15,
        borderRadius: 5
    },
    count: {
        fontSize: 32
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    color: {
        fontSize: 28,
        padding: 10
    }
});
