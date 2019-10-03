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

/*
'keyExtractor' tells the list to use the ids for the react keys instead of the default key property.

8. SectionList: to render sectioned lists.

example
-------*/

    import React, { Component } from 'react'
    import { Text, View, SectionList } from 'react-native'

    const DATA = [
      {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
      },
      {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
      },
      {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
      },
      {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
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
            <Text style={{fontSize: 10}} >{item}</Text>
          </View>
        );
      }    

      render() {
        return (      
          <View style={{flex: 1, justifyContent: 'center', padding: 100}}>
              <SectionList
                keyExtractor={(item, index) => index.toString()}
                sections={this.state.dataSource}
                renderItem={this.renderItem}
                renderSectionHeader={({ section: { title } }) => (
                  <Text style={{fontSize: 20}} >{title}</Text>
                )}
              />
          </View>
        )
      }
    }

/*
9. ScrollView: to show scroll view. ScrollViews must have a bounded height in order to work.

example
-------*/

    import React, { Component } from 'react'
    import { Text, View, ScrollView } from 'react-native'

    export default class App extends Component {

      render() {
        return (      
          <View>
            <ScrollView style={{marginHorizontal: 20,marginVertical: 20}}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </ScrollView>
          </View>
        )
      }
    }

/*
10. Modal: to show Modal window. React Native has it own Modal but it is better to use community Modal (react-native-modal). To setup use "npm i react-native-modal" or "yarn add react-native-modal".

example
-------*/

   import React, { Component } from 'react';
    import { Text, View, TouchableHighlight, Button } from 'react-native';
    import Modal from "react-native-modal";

    export default class App extends Component {

      constructor(props) {
        super(props);
        this.state = { 
          isModalVisible: false,
        }
        this.toggleModal = this.toggleModal.bind(this);
      }

      toggleModal(){
        this.setState({ isModalVisible: !this.state.isModalVisible });
      };

      render() {
        return (
          <View style={{ flex: 1 }}>
            <Button title="Show modal" onPress={this.toggleModal} />
            <Modal isVisible={this.state.isModalVisible} animationIn={'zoomInDown'}>
              <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <Text style={{ padding: 100, }}>Hello!</Text>
                <Button title="Hide modal" onPress={this.toggleModal} />
              </View>
            </Modal>
          </View>
        );
      }
    }
