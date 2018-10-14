import React, { Component } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import BackgroundImage from '../../components/BackgroundImage'
import { Toast } from 'antd-mobile-rn'
import { Colors, Images, Strings } from '../../config'
import style from './AuthStyle'
import { Button, Item, Input, Title, Subtitle } from 'native-base'

export default class AuthComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            phone: '',
            isLoading: false
        }
        this.changeInputValue = this.changeInputValue.bind(this);
        this.submitPhoneNumber = this.submitPhoneNumber.bind(this);
    }


    submitPhoneNumber() {
        let that = this;
        Toast.info("this is toast");
        console.log(this.state)
        this.setState({ isLoading: true })
        setTimeout(function () {
            that.setState({ isLoading: false })
        }, 5000)
    }

    changeInputValue(value) {
        this.setState({ phone: value })
    }


    changePhoneNumber(text) {
        if (text.length <= 11)
            this.setState({ phone: text })
        else Toast.fail('Phone number length  must be less than 11')
    }

    render() {

        return (

            <View style={{ flex: 1 }}>
                <BackgroundImage>
                    <View style={[style.darkBoxWithOpacity]}>
                        <View style={style.logoContainer}>
                            <Image source={Images.splash.logo} style={style.logo} ></Image>
                            <Text style={style.AppName}>{Strings.APP_NAME}</Text>
                        </View>
                        <View style={[style.textInputContainer]}>
                            <View >
                                <Title>{Strings.splash.SIGN_UP_TO_MOON_LESSON}</Title>
                                <Subtitle>{Strings.splash.Please_Enter_Your_Phone_Number_to_Continue}</Subtitle>
                            </View>
                            <Item style={style.ItemStyle}>
                                <Input placeholderTextColor={Colors.placeHolderColor}
                                    placeholder={Strings.splash.usernameInput}
                                    style={style.textInput} />
                            </Item>
                            <Item style={style.ItemStyle}>
                                <Input secureTextEntry={true}
                                    placeholderTextColor={Colors.placeHolderColor}
                                    placeholder={Strings.splash.passwordInput}
                                    style={style.textInput} />
                            </Item>
                            <TouchableOpacity style={[style.submitButton]}
                                loading={this.state.isLoading}
                                onPress={this.submitPhoneNumber}>
                                <Text style={style.submitButtonText}>{Strings.splash.submit}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </BackgroundImage>
            </View>

        )
    }
}
