/*
1. 'constructor' for a React component is called before it is mounted.

2. 'constructor' call only once thoughout the lifecycle.

3. You must call 'super(props)' before any other statement otherwise 'this.props' will be undefined in the constructor.

4. 'constructor' are only used for two purposes

  a. Initializing local 'state' by assigning an object to 'this.state'.

  example
  -------*/
  export default class App extends Component<Props> {

    constructor(props) {
      super(props);
      this.state = {
        Uname: ''
      };
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
  b. Binding event handler methods to an instance.

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
Note: If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.

5. Never call 'setState()' inside 'constructor()' instead use 'this.state'.*/


