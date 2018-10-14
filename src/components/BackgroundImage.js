import React, { Component } from 'react'
import { Image, StyleSheet,ImageBackground } from 'react-native';
import images from '../config/images'

export default class BackgroundImage extends Component {

    render() {
        return (
            <ImageBackground source={images.splash.background} style={splashStyle.backgroundImage}>
                {this.props.children}
            </ImageBackground>
        )
    }
}


const splashStyle = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        resizeMode: 'cover'
    }
});