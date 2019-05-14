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


