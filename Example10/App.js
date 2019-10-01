?*
React Native components
-----------------------

1. View: is designed to be nested inside other views.

	Example
	-------*/

	import React, { Component } from 'react'
	import { Text, View } from 'react-native'

	export default class App extends Component {
	  render() {
	    return (
	      <View style={{flex: 1, flexDirection: 'column'}}>
	        <View style={{width:50, height:50, backgroundColor: 'powderblue'}} />
	        <View style={{width:50, height:50, backgroundColor: 'steelblue'}} />
	      </View>
	    )
	  }
	}

/*
2. Text: For display text. 'Text' supports nesting, styling, and touch handling.

	Example
	-------*/

	import React, { Component } from 'react'
	import { Text, View } from 'react-native'

	export default class App extends Component {
	  render() {
	    return (      
	      <Text>moin
	        <Text style={{fontSize:50}} >tanim</Text>
	      </Text>
	    )
	  }
	}

/*	
3. Image: For displaying different types of images,including network images, static resources,
	temporary local images, and images from local disk, such as the camera roll.

	Example
	-------*/

	import React, { Component } from 'react'
	import { Image, Text, View } from 'react-native'

	export default class App extends Component {
	render() {
	  return (      
	    <View>{/* Displaying image form local folder (Create img folder in root directory)
	              Displaying image form Network
	              Displaying image form base64*/}
	      <Image
	        style={{width: 50, height: 100, resizeMode: 'stretch'}}
	        source={require('./img/tiny_logo.png')}
	      /> 
	      <Image
	        style={{width: 50, height: 50, resizeMode: 'cover'}}
	        source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
	      /> 
	      <Image
	        style={{width: 66, height: 58, resizeMode: 'contain'}}
	        source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
	      /> 
	    </View>
	  )
	}
	}
/*
4. ActivityIndicator: Displays a circular loading indicator.

	Example
	-------*/

	import React, { Component } from 'react'
	import { Image, Text, View, ActivityIndicator } from 'react-native'

	export default class App extends Component {
		render() {
		  return (      
		    <View style={{flex: 1, justifyContent: 'center', }}>
		      {/* ActivityIndicator display center of the mobile */}
		      <ActivityIndicator size="large" color="#0000ff" />
		    </View>
		  )
		}
	}

/*
5. Button: Display Button.

	Example
	-------*/

	import React, { Component } from 'react'
	import { Image, Text, View, ActivityIndicator, Button } from 'react-native'

	export default class App extends Component {
		render() {
		  return (      
		    <View style={{flex: 1, justifyContent: 'center', padding: 100}}>
		      <Button title="Click here" onPress={() => alert('Simple Button pressed')} />
		    </View>
		  )
		}
	}

/*
6. TouchableOpacity: give facility to build your own button.

	Example
	-------*/
	
	import React, { Component } from 'react'
	import { Image, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native'

	export default class App extends Component {
		render() {
		  return (      
		    <View style={{flex: 1, justifyContent: 'center', padding: 100}}>
		      <TouchableOpacity onPress={() => alert('Simple Button pressed')}>
		        <Image
		          style={{width: 100, height: 100}}              
		          source={require('./img/tiny_logo.png')}             
		        />
		      </TouchableOpacity>
		    </View>
		  )
		}
	}
