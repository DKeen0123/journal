import React, { Component } from 'react'
import { Text, View } from 'react-native'

import UserForm from './UserForm';

export default class LoginUser extends Component {
  LoginUser = () => {

  }

  render() {
    return (
      <View>
        <Text>Login</Text>
        <UserForm
          type="Login"
          onSubmit={this.LoginUser}
        />
      </View>
    )
  }
}