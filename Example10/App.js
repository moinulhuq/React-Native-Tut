/*
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

/*
11. Slider: A component used to select a single value from a range of values. React Native Slider is deprecated. We will use community Slider (react-native-slider). To setup use "npm i @react-native-community/slider --save" or "yarn add @react-native-community/slider".

example
-------*/

    import React, { Component } from 'react';
    import { Text, View, TouchableHighlight, Button } from 'react-native';
    import Slider from '@react-native-community/slider';

    export default class App extends Component {

      render() {
        return (
          <View style={{ flex: 1 }}>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
          </View>
        );
      }
    }

/*
12. StatusBar: Component to control the app status bar..

example
-------*/

    import React, { Component } from 'react';
    import { Text, View, StatusBar } from 'react-native';

    export default class App extends Component {

      render() {
        return (
          <View style={{ flex: 1 }}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
          </View>
        );
      }
    }

/*
13. Switch: is a component for getting/showing boolean value or to select from one out of two.

example
-------*/

    import React, { Component } from 'react';
    import { Text, View, Switch } from 'react-native';

    export default class App extends Component {

      constructor(props) {
        super(props);
        this.state = { 
          switchValue: false,
        }
        this.switchTrue = this.switchTrue.bind(this);
      }

      switchTrue(){
        this.setState({ switchValue: !this.state.switchValue });
      };

      render() {
        return (
          <View style={{ flex: 1 }}>
            <Switch onValueChange = {this.switchTrue} value = {this.state.switchValue} />
          </View>
        );
      }
    }

/*
14. DateTimePicker: date & time picker component. We will use community DateTimePicker (react-native-datetimepicker). To setup use "npm i @react-native-community/datetimepicker --save" or "yarn add @react-native-community/datetimepicker".

	i)  Add the following lines to android/settings.gradle:
		include ':react-native-datetimepicker'
		project(':react-native-datetimepicker').projectDir = new File(rootProject.projectDir, '../node_modules/@react-native-community/datetimepicker/android')

	ii) Add the compile line to the dependencies in android/app/build.gradle:
		dependencies {
		    ...
		    implementation project(':react-native-datetimepicker')
		}

example
-------*/

    import React, { Component } from 'react';
    import { Text, View, Button } from 'react-native';

    import DateTimePicker from '@react-native-community/datetimepicker';

    export default class App extends Component {

      constructor(props) {
        super(props);
        this.state = { 
          date: new Date('2020-06-12T14:42:42'),
          show: false,
        }
        this.datepicker = this.datepicker.bind(this);
        this.setDate = this.setDate.bind(this);
      }

      datepicker(){
        this.setState({ show: true });
      };

      setDate(event, date){
        this.setState({ date: date, show: false });
      }

      render() {
        return (
          <View style={{ flex: 1 }}>
            <View>
              <Button onPress={this.datepicker} title="Show date picker!" />
            </View>
            { this.state.show && <DateTimePicker 
                                    value={this.state.date}
                                    mode= {'date'}
                                    is24Hour={true}
                                    display="default"
                                    onChange={this.setDate}
                                  />
            }
          </View>
        );
      }
    }

/*
15. ImageBackground: use to handle background image. you must specify some width and height style attributes

example
-------*/

    import React, { Component } from 'react';
    import { Text, View, Button, ImageBackground } from 'react-native';

    export default class App extends Component {

      render() {
        return (
          <View>
            <ImageBackground source={require('./img/background.jpeg')} style={{width: '100%', height: '100%'}}>
              <Text>Inside</Text>
            </ImageBackground>
          </View>
        );
      }
    }

/*
16. Picker: Renders the native picker component on iOS and Android. We will use community Picker (@react-native-community/picker). To setup use "npm i @react-native-community/picker --save".

example
-------*/

    import React, { Component } from 'react';
    import { Text, View, Button } from 'react-native';
    import { Picker } from '@react-native-community/picker';

    export default class App extends Component {

      constructor(props) {
        super(props);
        this.state = { 
          launguage: 'java', 
          car: 'toyota', 
          book: 'history', 
          country: 'japan', 
        }
      }      

      render() {

        return (
          <View style={{flex: 1, justifyContent: 'center', padding: 100}}>

            {/* Basic picker */}
            <Picker
              selectedValue={this.state.language}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) =>
                  this.setState({language: itemValue}
                )}>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
            
            {/* Disable picker */}            
            <Picker
              selectedValue={this.state.language}
              style={{height: 50, width: 100}}
              enabled={false}
              onValueChange={(itemValue, itemIndex) =>
                  this.setState({car: itemValue}
                )}>
              <Picker.Item label="Toyota" value="toyota" />
              <Picker.Item label="Nissan" value="nissan" />
            </Picker>

            {/* Dropdown picker */}            
            <Picker
              selectedValue={this.state.language}
              style={{height: 50, width: 100}}
              mode={"dialog"}
              onValueChange={(itemValue, itemIndex) =>
                  this.setState({book: itemValue}
                )}>
              <Picker.Item label="History" value="history" />
              <Picker.Item label="Geography" value="geography" />
            </Picker>

            {/* Prompt message picker */}
            <Picker              
              selectedValue={this.state.language}
              style={{height: 50, width: 100}}
              prompt={"Pick one"}
              onValueChange={(itemValue, itemIndex) =>
                  this.setState({country: itemValue}
                )}>
              <Picker.Item label="Japan" value="japan" />
              <Picker.Item label="Korea" value="korea" />
            </Picker>

            {/* Colourful picker */}
            <Picker 
              selectedValue={this.state.language}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) =>
                  this.setState({country: itemValue}
                )}>
              <Picker.Item label="Japan" color="#32CD32" value="japan" />
              <Picker.Item label="Japan" color="red" value="japan" />
              <Picker.Item label="Korea" color="blue" value="korea" />
            </Picker>

          </View>
        );
      }
    }

/*
17. ProgressBarAndroid: used to indicate that the app is loading or there is some activity in the app.

example 01
---------*/

    import React, { Component } from 'react';
    import { Text, View, Button, ProgressBarAndroid } from 'react-native';

    export default class App extends Component {

      constructor(props) {
        super(props);
        this.state = { 
          launguage: 'java', 
          car: 'toyota', 
          book: 'history', 
          country: 'japan', 
        }
      }      

      render() {

        return (
          <View style={{flex: 1, justifyContent: 'center', padding: 100}}>
            <ProgressBarAndroid />
            <ProgressBarAndroid styleAttr="Horizontal" />
            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.5} />
          </View>
        );
      }
    }

/*
Click on Progress

example 02
---------*/

    import React, { Component } from 'react';
    import { Text, View, Button, ProgressBarAndroid } from 'react-native';

    export default class App extends Component {

      constructor(props) {
        super(props);
        this.state = { 
          progress: 0.5, 
        }
        this.changeProgress = this.changeProgress.bind(this);
      }

      changeProgress(){
        this.setState({ progress: this.state.progress+0.1 });
      };

      render() {

        return (
          <View style={{flex: 1, justifyContent: 'center', padding: 100}}>
            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={this.state.progress} />
            <Button title="Press for Progress" onPress={this.changeProgress} />
          </View>
        );
      }
    }

/*
Animated Progress

example 03
---------*/

    import React, { Component } from 'react';
    import { Text, View, Button, ProgressBarAndroid } from 'react-native';

    export default class App extends Component {

      constructor(props) {
        super(props);
        this.state = { 
          progress: 0.5, 
        }
      }

      componentDidMount(){
        let that = this;         
        setInterval(function(){that.setState({progress: that.state.progress+0.01})}, 500);
      }

      render() {
        return (
          <View style={{flex: 1, justifyContent: 'center', padding: 100}}>
            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={this.state.progress} />
          </View>
        );
      }
    }

/*
18. RefreshControl: This component is used inside a ScrollView to add pull to refresh functionality. When the ScrollView is at scrollY: 0, swiping down triggers an onRefresh event.

example
-------*/

    import React, { Component } from 'react'
    import { Text, View, ScrollView, RefreshControl } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          refreshing: false,
        }
        this.onRefresh = this.onRefresh.bind(this);
      }

      onRefresh(){
        this.setState({refreshing: true});

        let that = this;
        setInterval(function(){that.setState({refreshing: false})}, 2000);
      }

      render() {
        return (      
          <View>
            <ScrollView 
              style={{marginHorizontal: 20,marginVertical: 20}}
              refreshControl={ <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} /> }>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Text>
                Pull down to see refresh icon
              </Text>
            </ScrollView>
          </View>
        )
      }
    }
