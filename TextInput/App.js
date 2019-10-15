/*
1. 'TextInput' enter text (single line).

example
-------*/
import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {Uname: ''};
  }

  render() {
    return (
      <View>
        <TextInput 
        	underlineColorAndroid = "transparent"
        	placeholder = "User name"
        	placeholderTextColor = "gray"
        	autoCapitalize = "none"
		style={{height: 40, borderColor: 'gray', borderWidth: 1}}
		onChangeText={(Uname) => this.setState({Uname})}
		value={this.state.Uname}
        />
        <Text>{this.state.Uname}</Text>
      </View>
    );
  }
}

/*
2. 'TextInput' enter text (multiple line).

example
-------*/
import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {Uname: ''};
  }

  render() {
    return (
      <View>
        <TextInput 
        	underlineColorAndroid = "transparent"
        	placeholder = "User name"
        	placeholderTextColor = "gray"
        	autoCapitalize = "none"
		style={{height: 40, borderColor: 'gray', borderWidth: 1}}
		onChangeText={(Uname) => this.setState({Uname})}
		value={this.state.Uname}
		multiline={true}
        />
        <Text>{this.state.Uname}</Text>
      </View>
    );
  }
}

/*
3. 'TextInput' enter numeric (multiple line).

example
-------*/
import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {Uname: ''};
  }

  render() {
    return (
      <View>
        <TextInput 
        	underlineColorAndroid = "transparent"
        	placeholder = "User name"
        	placeholderTextColor = "gray"
        	autoCapitalize = "none"
		style={{height: 40, borderColor: 'gray', borderWidth: 1}}
		onChangeText={(Uname) => this.setState({Uname})}
		value={this.state.Uname}
		keyboardType="numeric"
        />
        <Text>{this.state.Uname}</Text>
      </View>
    );
  }
}



