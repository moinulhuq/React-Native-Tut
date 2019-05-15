/*
1. React Native Lifecycle Api Contains 4 types of methods
  a. Mounting method
  b. Updating method
  c. Unmounting method
  d. Error handling method

2. Mounting methods are 4 types in react native.
  
  1. constructor() : It is the first method called when we open a screen, it is mostly used to create States.

  example
  -------*/
  constructor(props){
     super(props);
     this.state={
           message:'hello world'
     };
  }

/*
  2. componentWillMount(): It is called only once, right after constructor(), It is used for the network calls.

  example
  -------*/
  componentWillMount(){
    console.log("I will get call")
  }

/*
  3. render(): Render is the most important Lifecycle method because it is used to render UI or we can say the main View of the screen. The render method must return a React Element to render (or null, to render nothing).

  example
  -------*/
  render(){
      return(
        <View>
              <Text>{this.state.message}</Text>
        </View>
      )
  }

/*
  4. componentDidMount(): Is called only once after render method, used to call asynchronous tasks or network calls.

  example
  -------*/
  componentDidMount(){
    fetch('http://my.api/users')
    .then(res=>res.json())
    .then(res=>this.setState({
      data:res
    });
    this.setState({
      message:'i got changed'
    };
  }
  
  
  
