import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { LoginScreen, StudentComponent } from '../containers/Auth'


const RootNavigator = createStackNavigator({
    Login: LoginScreen,
    Register: StudentComponent
},
    {
        initialRouteName: 'Login',
    });

export default RootNavigator
