import React, { Component } from 'react'
import { Text, View } from 'react-native'

import UserForm from './UserForm';

export default class CreateUser extends Component {
  createUser = () => {

  }

  render() {
    return (
      <View>
        <Text>Register</Text>
        <UserForm
          type="Register"
          onSubmit={this.createUser}
        />
      </View>
    )
  }
}