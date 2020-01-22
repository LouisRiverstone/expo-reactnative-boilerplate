import React, { Component } from 'react'
import { View, Text, Button } from 'native-base'
import { AppLoading } from "expo";
import * as Font from "expo-font"

class HomePage extends Component {

    static navigationOptions = {
        headerShown: false
    }

    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            loading: true
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false });
    }

    addNumber() {
        this.setState({ number: this.state.number + 1 })
    }

    render() {
        return (
            !this.state.loading ? (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Number: {this.state.number}</Text>
                    <Button onPress={() => { this.addNumber() }}><Text>Add</Text></Button>
                </View>
            ) : <View><AppLoading /></View>
        );
    }
}

export default HomePage;