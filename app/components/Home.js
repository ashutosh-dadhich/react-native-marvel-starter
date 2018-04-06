import React, { Component } from 'react';
import  { Dimensions } from 'react-native';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    Image
} from 'react-native';

export default class Home extends Component {

    componentDidMount(){
        console.log(this.props.searchText)
        this.props.getCharacters(this.props.searchText);
    }

    render() {
        let characters = ""
        if(this.props.characters){
            var {height, width} = Dimensions.get('window');
            console.log(this.props.characters);
            characters = this.props.characters.map((item, index)=>{
                
                return <View >
                    <Text style={styles.header} key={index}>{item.name}</Text>
                    <Image style={{ height:width, width:width}} source={{uri:item.thumbnail.path + "." + item.thumbnail.extension}}/>
                </View>
            });
        }
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Marvel Characters</Text>

                <ScrollView>
                    {characters}
                </ScrollView>
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
    }
})