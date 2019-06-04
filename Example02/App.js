/*
1. Once you setup react native, you can see 'index.js' and 'App.js' where 'index.js' importing 'App.js'.

App.js
------*/
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Text>Hello world!</Text>
      </View>
    );
  }
}

/*
index.js
--------*/
import {AppRegistry} from 'react-native';
import App from './App'; /*Here you are importing*/
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

/*
2. if you do not want to import 'App.js' you can do your program directly in one page in 'index.js' like this

index.js
--------*/
import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {name as appName} from './app.json';

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Text>Hello world!</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);

/*
3. Here, to define a component we need to import 'React' and 'Component' classes from 'react' module and define our component class by extending Component class.

example
-------*/
import React, {Component} from 'react';

export default class App extends Component<Props> {
/*...*/
}

/*
4. Exporting and Importing Components is easy in React Native.
5. In ES6 there are two kinds of exports:

	a. Named exports: You can have multiple named exports per file. The name of imported module has to be the same as exported module name. You must use '{}' braces to import those modules.

	example
	-------*/
	export class Template {}
	export class AnotherTemplate {}

	/*(Or)*/

	class Template {}
	class AnotherTemplate {}

	export { Template, AnotherTemplate }

	/*
	to import these exports

	example
	-------*/
	import {Template, AnotherTemplate} from './MyComponent'

	/*(Or)*/

	import {Template, AnotherTemplate as Template2} from './MyComponent'

	/*(Or)*/

	import * as MainComponents from "./MyComponent";
	
	MainComponents.Template /*can use like this.*/
	MainComponents.AnotherTemplate

	/*
	b. Default export: You can have only one default export per file. The name of imported module dose not have to be the same as exported module name. You can use any name you like wihtout '{}' braces.

	example
	-------*/
	export default class MyComponent extends Component {}

	/*
	to import these export

	example
	-------*/
	import MyComponentApp from './MyComponent';

/*
6. A module can contain both 'named exports' and a 'default export'.

example
-------*/
import MyComponentApp, {Template, AnotherTemplate} from './MyComponent';

/*
7. 'render()' render props basically render the 'JSX' inside and return it.

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Text>Hello world!</Text>
      </View>
    );
  }

/*8. 'AppRegistry' is the JS entry point to running all React Native apps. App root components register themselves with 'AppRegistry.registerComponent' and run the app when it is ready by invoking 'AppRegistry.runApplication'

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Text>Hello world!</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);






