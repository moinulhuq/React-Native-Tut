/*
1. React Native is like React.
2. But React uses Web Components (<div>, <span>) where as React Native uses native components (<View>, <Text>).
3. To understand the basic of a React Native, you need to understand some of the basic React concepts, like JSX, components, state, and props.
4. JSX is an XML/HTML-like syntax used by React.
5. React components are like (<View>, <Text>) where as Web Components (<div>, <span>).
6. There are two types of data that control a React component
	a. state : is mutable. This means that state can be updated in the future where 'props' can’t. we can initialize state in the constructor, and then call setState when we want to change it.

	example
	--------
*/	export default class HelloWorldApp extends Component {
	  constructor (props) {
	     super(props)
	     this.state = {
	       text: 'Hello World'
	     }
	  }

	  updateState = () => { 
	  	this.setState({ text: 'The state is updated' }) 
	  }

	  render() {
	    return (
	      <View>
	        <Text onPress = {this.updateState}>{this.state.text}</Text>
	      </View>
	    );
	  }
	}

/*	b. props are stand for Properties : are immutable and are set by the parent and they are fixed throughout the lifetime of a component.

	example
	--------
*/	export default class HelloWorldApp extends Component {
	  render() {
	    
	    let pic = {
	      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
	    };
	    
	    return (
			<Image source={pic} style={{width: 193, height: 110}}/>
	    );

	  }
	}

/*
7. The above code might not look like JavaScript, this is the improvements of JavaScript done by ES2015 or ES6, for that you can use 'import', 'from', 'class', and 'extends'.*/
