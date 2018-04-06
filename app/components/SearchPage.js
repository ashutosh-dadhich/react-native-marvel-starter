import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

export default class Home extends Component {

    componentDidMount(){
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Search Marvel Characters</Text>
                <TextInput onChangeText={(text) => {this.props.updateSearch(text)}}></TextInput>
                <Button title='Search' onPress={() =>{this.props.navigation.navigate('Home')}}/>
            </View>
        );
    
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header:{
        fontWeight: "bold",
        marginBottom:20
    },

})