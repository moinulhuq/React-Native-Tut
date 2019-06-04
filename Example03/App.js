/*
1. All of the core components accept a prop named 'style'. 'style' property use for adding the inline styles as well as external style. We don't need to import 'style' but when we use inline 'style' we need to use with '{{}}' braces. Note that styles are in camelCase and do not use 'px' or '%'for styling.

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
		<View style={{marginLeft: 20, marginTop: 20}}>  
			<Text style={{fontSize: 18,color: 'red'}}>Some Text</Text>
		</View>
    );
  }
}

/*
2. To use external style we need to import 'StyleSheet' and use it with '{}'.

example
-------*/
import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';

export default class App extends Component<Props> {
  render() {
    return (
		<View style={styles.container}>  
			<Text style={styles.paragraph}>Some Text</Text>
		</View>
    );
  }
}

const styles = StyleSheet.create ({
   container: {
      marginLeft: 20, 
      marginTop: 20
   },
   paragraph: {
      fontSize: 18,
      color: 'red'
   }
})

/*
3. Better approach using 'StyleSheet'.

base.js
-------*/
export const colors  = {
  primary: '#226B74',
  secondary: '#254B5A',
  tertiary: '#5DA6A7'
}

export const paddings = {
  sm: 10,
  md: 20,
  lg: 30,
}

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
}

/*
App.js
------*/
import {colors, paddings, fonts} from './base.js'

export default class App extends Component<Props> {
  render() {
    return (
		<View style={styles.container}>  
			<Text style={styles.section}>Some Text</Text>
		</View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    paddingHorizontal: paddings.sm,
    paddingVertical: paddings.lg,
  },
  section: {
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
    paddingVertical: paddings.lg,
    paddingHorizontal: paddings.xl
  }
})


