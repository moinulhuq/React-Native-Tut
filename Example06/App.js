/*
1. 'Button' onPress inline function(Bad because a new function is being created every time it re-renders).

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
      <View>
		<Button
		  onPress={() => { console.log(this); }} // 'this' is avialable
		  title="Learn More"
		  color="#841584"
		  accessibilityLabel="Learn more about this purple button"
		/>
      </View>
    );
  }
}

/*
React does not automatically bind member functions to its class component. For that we need to explicitly 'bind(this)' otherwise 'this' remain undefine.

2. 'Button' onPress external function - 1st Approach(Bad, 'this' is undefined)

example
-------*/
export default class App extends Component<Props> {
	
  onPress(){
  	console.log(this); // 'this' is undefined
  }

  render() {
    return (
      <View>
		<Button
		  onPress={this.onPress}
		  title="Learn More"
		  color="#841584"
		  accessibilityLabel="Learn more about this purple button"
		/>
      </View>
    );
  }
}

/*
We don’t we need to bind ‘this’ explicitly for Arrow functions as its automatically bind to the class component.

3. 'Button' onPress external function - 2nd Approach(Good because it is call only one time)

example
-------*/
export default class App extends Component<Props> {
	
  onPress = () => {
  	console.log(this); // 'this' is avialable
  }

  render() {
    return (
      <View>
		<Button
		  onPress={this.onPress}
		  title="Learn More"
		  color="#841584"
		  accessibilityLabel="Learn more about this purple button"
		/>
      </View>
    );
  }
}

/*
4. 'Button' onPress external function - 3rd Approach(Bad because a new function is being created every time it re-renders)

example
-------*/
export default class App extends Component<Props> {
	
  onPress(){
  	console.log(this); // 'this' is avialable
  }

  render() {
    return (
      <View>
		<Button
		  onPress={() => this.onPress()}
		  title="Learn More"
		  color="#841584"
		  accessibilityLabel="Learn more about this purple button"
		/>
      </View>
    );
  }
}

/*
Explicitly binding ‘this’ to the class Component

5. 'Button' onPress external function - 4th Approach(Bad because a new function is being created every time it re-renders)

example
-------*/
export default class App extends Component<Props> {
	
  onPress(){
  	console.log(this); // 'this' is avialable
  }

  render() {
    return (
      <View>
		<Button
		  onPress={this.onPress.bind(this)}
		  title="Learn More"
		  color="#841584"
		  accessibilityLabel="Learn more about this purple button"
		/>
      </View>
    );
  }
}

/*
6. 'Button' onPress external function - 5th Approach(Good because it is not createing new function every time it re-renders)

example
-------*/
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress(){
  	console.log(this);
  }

  render() {
    return (
      <View>
		<Button
		  onPress={this.onPress}
		  title="Learn More"
		  color="#841584"
		  accessibilityLabel="Learn more about this purple button"
		/>
      </View>
    );
  }
}

/*
7. FlatList: is simple list support Optional horizontal mode, Header support, Footer support, Separator support, Pull to Refresh, Scroll loading.

Example 01
----------*/
    import React, { Component } from 'react'
    import { Text, View, FlatList } from 'react-native'

    const DATA = ['First Item','Second Item','Third Item'];

    export default class App extends Component {

      renderItem({ item, index }){
        return (
          <View>
            <Text>{item}</Text>
          </View>
        );
      }    

      render() {
        return (      
          <View style={{flex: 1, justifyContent: 'center', padding: 100}}>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={DATA}
                renderItem={this.renderItem}
              />
          </View>
        )
      }
    }

/*
Flatlist with array object (assigned to state var)

Example 02
----------*/
    import React, { Component } from 'react'
    import { Text, View, FlatList } from 'react-native'

    const DATA = [
      {
        id: '1',
        title: 'First Item',
      },
      {
        id: '2',
        title: 'Second Item',
      },
      {
        id: '3',
        title: 'Third Item',
      },
    ];

    export default class App extends Component {

      constructor(props) {
        super(props);
        this.state = { 
          dataSource: [],  
        }
        this.renderItem = this.renderItem.bind(this);
      }


      componentDidMount(){
        this.setState({dataSource: DATA}) 
      }

      renderItem({ item, index }){
        return (
          <View>
            <Text>{item.title}</Text>
          </View>
        );
      }    

      render() {
        return (      
          <View style={{flex: 1, justifyContent: 'center', padding: 100}}>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={this.state.dataSource}
                renderItem={this.renderItem}
              />
          </View>
        )
      }
    }
