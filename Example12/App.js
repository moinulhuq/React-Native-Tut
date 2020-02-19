/*
React Native API
-----------------------

1. AccessibilityInfo: API is designed to know whether or not the device has a screen reader that is currently active. You can use it to query the current state of the screen reader.

    Example
    -------*/

    import React, { Component } from 'react'
    import { Text, View, FlatList, AccessibilityInfo } from 'react-native'

    export default class App extends Component {

      constructor(props) {
        super(props);
        this.state = { 
          screenReaderEnabled: false,
        }
      }

      componentDidMount() {
        AccessibilityInfo.addEventListener(
          'screenReaderChanged',
          this._handleScreenReaderToggled,
        );

        AccessibilityInfo.isScreenReaderEnabled().then((screenReaderEnabled) => {
          this.setState({screenReaderEnabled});
        });
      }

      _handleScreenReaderToggled = (screenReaderEnabled) => {
        this.setState({screenReaderEnabled});
      };

      render() {
        return (
          <View>
            <Text>
              The screen reader is{' '}
              {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
            </Text>
          </View>
        );
      }

    }

/*
2. ActionSheetIOS: display options to choose in IOS. It pop's up from the bottom of the screen.

    Example: IOS
    ------------- */

    import React, { Component } from 'react'
    import { Text, ActionSheetIOS, SafeAreaView } from 'react-native'

    var BUTTONS = [
      'Option 0',
      'Option 1',
      'Option 2',
      'Delete',
      'Cancel',
    ];

    var DESTRUCTIVE_INDEX = 3;
    var CANCEL_INDEX = 4;

    export default class App extends Component {

      render() {
        return (
          <SafeAreaView>
            <Text onPress={this.showActionSheet} >
              Click to show the ActionSheet
            </Text>
          </SafeAreaView>
        );
      }

      showActionSheet = () => {
        ActionSheetIOS.showActionSheetWithOptions(
          {
            options: BUTTONS,
            cancelButtonIndex: CANCEL_INDEX,
            destructiveButtonIndex: DESTRUCTIVE_INDEX,
          },
          buttonIndex => {
            if(buttonIndex == 0){
              this.youClick();
            }
          }
        );
      };

      youClick = () => {
        alert('You select First')
      }
    }

/*
3. ActionSheet: display options to choose in Android. To setup use "npm i native-base --save" then run 'react-native link'. For ActionSheet to work, you need to wrap your topmost component inside <Root> from native-base.

    Example: Android
    ------------- */

    import React, { Component } from 'react'
    import { Text, View } from 'react-native'
    import { Root, ActionSheet } from 'native-base'

    var BUTTONS = [
      'Option 0',
      'Option 1',
      'Option 2',
      'Delete',
      'Cancel',
    ];

    var DESTRUCTIVE_INDEX = 3;
    var CANCEL_INDEX = 4;

    export default class App extends Component {

      render() {
        return (
          <Root>
            <View>
              <Text onPress={this.showActionSheet} >
                Click to show the ActionSheet
              </Text>
            </View>
          </Root>
        );
      }

      showActionSheet = () => {
        ActionSheet.show(
          {
            options: BUTTONS,
            cancelButtonIndex: CANCEL_INDEX,
            destructiveButtonIndex: DESTRUCTIVE_INDEX,
          },
          buttonIndex => {
            if(buttonIndex == 0){
              this.youClick();
            }
          }
        );
      };

      youClick = () => {
        alert('You select First')
      }
    }

/*    
4. Alert: dialog with the specified title and message. Optionally provide a list of buttons. On iOS you can specify any number of buttons but on Android at most three buttons can be specified. Use 'onDismiss' if you want to close the alert window tapping outside of the modal or use 'cancelable' if you don't want to close the alert window tapping outside of the modal.

    Example
    -------*/

    import React, { Component } from 'react'
    import { Text, View, Alert } from 'react-native'

    export default class App extends Component {

      render() {
        return (
          <View>
            <Text onPress={this.showAlert} >
              Click to show the Custom Alert
            </Text>
          </View>
        );
      }

      showAlert = () => {
        Alert.alert(
          'Alert Title',
          'My Alert Msg',
          [
            {text: 'Ask me later', onPress: () => console.warn('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.warn('Cancel Pressed'), style: 'cancel',},
            {text: 'OK', onPress: () => console.warn('OK Pressed')},
          ],
          // { onDismiss: () => {} }
          {cancelable: false},
        );
      };
    }

/*
5. AlertIOS: provides functionality to create an iOS alert dialog with a message or create a prompt for user input.

    Example
    -------*/

    import React, { Component } from 'react'
    import { Text, View, Alert, AlertIOS } from 'react-native'

    export default class App extends Component {

      render() {
        return (
          <View>
            <Text onPress={this.showAlert} >
              Click to show the Custom Alert
            </Text>
          </View>
        );
      }

      showAlert = () => {                
        AlertIOS.alert('Sync Complete', 'All your data are belong to us.');
        
        //or
        
        AlertIOS.prompt('Enter a value', null, (text) =>
          alert('You entered ' + text),
        );
      };
    }

/*
6. AppState: can tell you if the app is in the foreground or background, and notify you when the state changes.

AppState will provide the following different App states:

	a) active – The app is running in the foreground
	b) background – The app is running in the background.
	c) inactive - This is a state that occurs when transitioning between foreground & background

    Example
    -------*/

    import React, { Component } from 'react'
    import { Text, View, Animated, StyleSheet, AppState } from 'react-native'
    
    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          appState: AppState.currentState,
        }
      }

      componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
      }

      handleAppStateChange = (nextAppState) => {
        this.setState({appState: nextAppState});

        if (nextAppState === 'background') {
          console.warn("App is in Background Mode.")
        }     
        if (nextAppState === 'active') {
          console.warn("App is in Active Foreground Mode.")
        }
        if (nextAppState === 'inactive') {
          console.warn("App is in inactive Mode.")
        }
      };

      render() {        
        return (
          <Text>Current state is: {this.state.appState}</Text>
        );
      }
    }

/*
7. AsyncStorage: is an key-value storage system that is global to the app. We will use "react-native-community/react-native-async-storage". To install "yarn add @react-native-community/async-storage".

    Example
    -------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet } from 'react-native'
    import AsyncStorage from '@react-native-community/async-storage';

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          abc: '0'
        }
      }

      componentDidMount() {
        this.setValueFunction();
        this.getValueFunction();
      }

      setValueFunction(){
        AsyncStorage.setItem('id', '20');
      };

      getValueFunction(){
        AsyncStorage.getItem('id').then(value =>
          this.setState({ abc: value })
        );
      };

      render() {        
        return (
          <Text>Your ID: {this.state.abc}</Text>
        );
      }
    }

/*
Async/await: use to work with promises.

	a) Async - before a function means a function always returns a promise.

    Example - Async
    ---------------*/

	async function f() {
	  return 1;
	}

	f().then(alert); // 1

	// (or)

	async function f() {
	  return Promise.resolve(1);
	}

	f().then(alert); // 1

/*
	b) Await - works only inside async functions.

	in this example, The function execution “pauses” at the line (*) and resumes when the promise settles.

    Example - Async/await
    --------------------*/

	async function f() {

	  let promise = new Promise((resolve, reject) => {
	    setTimeout( () => resolve("done!"), 1000 )
	  });

	  let result = await promise; // wait until the promise resolves (*)

	  alert(result); // "done!"
	}

	f();

/*
	Async/await with anonymous function

    Example - Async/await - anonymous
    ---------------------------------*/

	async () => {
	  let response = await fetch('/article/promise-chaining/user.json');
	  let user = await response.json();
	}

/*
	If a promise resolves normally, then await promise returns the result. But in case of a rejection, it throws the error.

    Example - Async/await - Try/catch
    ---------------------------------*/

	async function f() {

	  try {
	    let response = await fetch('/article/promise-chaining/user.json');
	    let user = await response.json();
	  } catch(err) {
	    alert(err); // TypeError: failed to fetch
	  }
	}

	f();


/*
AsyncStorage with Async/await.

    Example - 02
    ------------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet } from 'react-native'
    import AsyncStorage from '@react-native-community/async-storage';

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          abc: ''
        }
      }

      componentDidMount() {
        this.setValueFunction();
        this.getValueFunction();
      }

      async setValueFunction(){
        try {
              let response = await fetch('https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22');
              let user = await response.json();
              AsyncStorage.setItem('weather', JSON.stringify(user));
        }
        catch(err) {
          throw err;
        }        
      };

      getValueFunction(){
        AsyncStorage.getItem('weather').then(value =>
          this.setState({ abc: value })
        );
      };

      render() {        
        return (
          <Text>Your ID: {this.state.abc}</Text>
        );
      }
    }

/*
8. BackHandler: Detect hardware back button presses. Invoke the default back button functionality to exit the app if there are no listeners or if none of the listeners return true.

    Example
    -------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet, Alert } from 'react-native'
    import { BackHandler } from 'react-native';

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
      }

      componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
      }

      handleBackButtonClick() {
        alert("Are you sure you want to go back?");
        return true;

        // (Or) if you are using navigation of react native 'https://reactnavigation.org/'

        this.props.navigation.navigate("Dashboard");
      }

      render() {        
        return (
          <Text>Please click on back button</Text>
        );
      }
    }

/*
9. Clipboard: Clipboard gives you an interface for setting and getting content from Clipboard.

    Example - Copy and Show it
    --------------------------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet, TouchableOpacity, TextInput  } from 'react-native'
    import { Clipboard } from 'react-native';

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          abc: ''
        }
        this.setClipboard = this.setClipboard.bind(this);
        this.getClipboard = this.getClipboard.bind(this);
      }

      setClipboard(){
        Clipboard.setString('moin');
      }

      async getClipboard(){
        let content = await Clipboard.getString();
        alert(content);
      }

      render() {
        return (      
          <View style={{flex: 1, justifyContent: 'center', padding: 100}}>
            <TouchableOpacity style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
            onPress={this.setClipboard}>
              <Text>Click here to set 'moin' to Clipboard</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
            onPress={this.getClipboard}>
              <Text>Click here to get from Clipboard</Text>
            </TouchableOpacity>
          </View>
        )
      }
    }

/*
    Example - Copy from Textbox and Show it
    ---------------------------------------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
    import { Clipboard } from 'react-native';

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          clipboardText: "",
          textBoxText: ""

        }
        this.setClipboard = this.setClipboard.bind(this);
        this.getClipboard = this.getClipboard.bind(this);
      }

      setClipboard(){
        Clipboard.setString(this.state.textBoxText);
      }

      async getClipboard(){
        let content = await Clipboard.getString();
        this.setState({
          clipboardText: content
        })
      }

      render() {
        return (      
          <View>
            <TextInput
              placeholder = "please enter..."
              style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
              onChangeText={(value) => this.setState({textBoxText: value})}
              value={this.state.textBoxText}
            />
            <TouchableOpacity 
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.setClipboard}>
              <Text>Copy to Clipborad</Text>
            </TouchableOpacity>
            <TouchableOpacity  
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.getClipboard}>
              <Text>Paste It</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20 }}>{this.state.clipboardText}</Text>
          </View>
        )
      }
    }

/*
10. DatePickerAndroid: is an date and time picker . We will use "react-native-community
/react-native-datetimepicker". To install "yarn add @react-native-community/datetimepicker".

    Example
    -------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet, TouchableOpacity  } from 'react-native'
    import DateTimePicker from '@react-native-community/datetimepicker';

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          date: new Date('2020-01-03T14:42:42'),
          mode: 'date',
          //mode: 'time', // To show time window
          show: false,
        }
        this.showDatepicker = this.showDatepicker.bind(this);
        this.setDate = this.setDate.bind(this);
      }

      /*This is called when the user changes the date or time in the UI. 
      It receives the event and the date as parameters.*/

      setDate(event, date) {
        date = date || this.state.date;
        alert("You select = " + date);
      } 

      showDatepicker() {
        this.setState({
          show: true,
        });
      }      

      render() {
        const { date, mode, show } = this.state;
        return (      
          <View>
            <TouchableOpacity style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
            onPress={this.showDatepicker}>
              <Text>Show Calendar</Text>
            </TouchableOpacity>
            {show && <DateTimePicker value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={this.setDate} />}
          </View>
        )
      }
    }

/*
11. Dimensions: dimension helps to detect android or ios device screen width and height.

    Example
    -------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
    import { Clipboard } from 'react-native';

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          screenHeight: "_",
          screenWidth: "_"

        }
        this.getDimension = this.getDimension.bind(this);
      }

      getDimension(){
        const screenHeight = Math.round(Dimensions.get('window').height);
        const screenWidth = Math.round(Dimensions.get('window').width);
        this.setState({
          screenHeight: screenHeight,
          screenWidth: screenWidth
        });
      }

      render() {
        return (      
          <View>
            <TouchableOpacity 
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.getDimension}>
              <Text>Get Dimension</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20 }}>
              Height = {this.state.screenHeight} and Width {this.state.screenWidth} 
            </Text>
          </View>
        )
      }
    }

/*
12. ImageEditor: use to Crop image. We will use "react-native-community
/react-native-image-editor". To install "yarn add @react-native-community/image-editor".

    Example
    -------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
    import ImageEditor from "@react-native-community/image-editor";

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          ImageUrl: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          ImageHeight: 0,
          ImageWidth: 0,
          cropImageUrl: 'null',
          cropImageHeight: 0,
          cropImageWidth: 0,
        }
        this.cropIt = this.cropIt.bind(this);
      }

      componentDidMount(){
        Image.getSize(this.state.ImageUrl, (width, height) => {
          this.setState({ImageWidth: width, ImageHeight: height})
        });
      }

      cropIt(){
        const cropData = {
          offset: { x: 0, y: 0 },
          size: { width: this.state.ImageWidth, height: this.state.ImageHeight },
          displaySize: { width: 20, height: 20 },
          resizeMode: 'contain',
        }

        ImageEditor.cropImage(this.state.ImageUrl, cropData).then(url => {
          Image.getSize(url, (width, height) => {
            this.setState({ cropImageWidth: width, cropImageHeight: height, cropImageUrl: url });
          }); 
        });       
      }

      render() {
        return (      
          <View>
            <TouchableOpacity 
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.cropIt}>
              <Text>Crop It</Text>
            </TouchableOpacity>
            <Text> Image</Text>
            <Image source={{ uri: this.state.ImageUrl }} style={{ width: this.state.ImageWidth, height: this.state.ImageHeight }} />
            <Text>Crop Image</Text>
            <Image source={{ uri: this.state.cropImageUrl }} style={{ width: this.state.cropImageWidth, height: this.state.cropImageHeight }} />
          </View>
        )
      }
    }

/*
13. ImagePickerIOS: allows you to use native UI to select a photo/video from the device library or directly from the camera. We will use "react-native-community
/react-native-image-picker". To install "yarn add react-native-image-picker". Add the required permissions in android/app/src/main/AndroidManifest.xml

<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>

    Example - withOutOptions
    ----------------------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
    import ImagePicker from 'react-native-image-picker';

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          imageSource: null, 
        }
        this.PickIt = this.PickIt.bind(this);
      }

      PickIt(){
        ImagePicker.showImagePicker((response) => {  
          this.setState({
            imageSource: response.uri,
          });
        });
      }

      render() {
        return (      
          <View>
            <TouchableOpacity 
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.PickIt}>
              <Text>Image Picker</Text>
            </TouchableOpacity>
            <Image style={{ width: 200, height: 200}} source={{uri: this.state.imageSource}} />
          </View>
        )
      }
    }


/*
    Example - withOptions - 01
    ------------------------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
    import ImagePicker from 'react-native-image-picker';

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          imageSource: null, 
          imageData: null, 
        }
        this.PickIt = this.PickIt.bind(this);
      }

      PickIt(){
        
        const options = {
          title: 'Select Avatar',
          customButtons: [
            { name: 'fb', title: 'Choose Photo from Facebook' },
            { name: 'twt', title: 'Choose Photo from Twitter' },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };

        ImagePicker.showImagePicker(options, (response) => {          
          this.setState({
            imageSource: response.uri,
            imageData: response.data,
          });

          if (response.customButton == 'fb') {
            alert('You click on custom fb Button');
          } else if(response.customButton == 'twt') {
            alert('You click on custom twt Button');
          } 

        });
      }

      render() {
        return (      
          <View>
            <TouchableOpacity 
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.PickIt}>
              <Text>Image Picker</Text>
            </TouchableOpacity>
            <Image style={{ width: 200, height: 200}} source={{uri: this.state.imageSource}} />
          </View>
        )
      }
    }

/*
    Example - withOptions - 02
    ------------------------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
    import ImagePicker from 'react-native-image-picker';

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          imageSource: null, 
          imageData: null, 
        }
        this.PickIt = this.PickIt.bind(this);
        this.customCamPick = this.customCamPick.bind(this);
        this.customVdoPick = this.customVdoPick.bind(this);
      }

      customCamPick(){
        const options = {
          quality: 0.5,
          maxWidth: 500,
          maxHeight: 500,
          rotation: 100,
          storageOptions: {
            skipBackup: true,
          },
        };
        
        ImagePicker.launchCamera(options, (response) => {
          this.setState({
            imageSource: response.uri,
          });          
        });
      }

      customVdoPick(){
        const options = {
          title: 'Video Picker',
          takePhotoButtonTitle: 'Take Video...',
          mediaType: 'video',
          videoQuality: 'medium',
        };

        ImagePicker.launchImageLibrary(options, (response) => {
          this.setState({
            imageSource: response.uri,
          });          
        });
      }


      PickIt(){
        const options = {
          title: 'Select Avatar',
          customButtons: [
            { name: 'cam', title: 'Choose Photo from Custom Camera' },
            { name: 'vdo', title: 'Choose Photo from Video Library' },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };

        ImagePicker.showImagePicker(options, (response) => {          
          this.setState({
            imageSource: response.uri,
            imageData: response.data,
          });

          if (response.customButton == 'cam') {
            this.customCamPick()
          } else if(response.customButton == 'vdo') {
            this.customVdoPick()
          }
        });
      }

      render() {
        return (      
          <View>
            <TouchableOpacity 
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.PickIt}>
              <Text>Image Picker</Text>
            </TouchableOpacity>
            <Image style={{ width: 200, height: 200}} source={{uri: this.state.imageSource}} />
          </View>
        )
      }
    }

/*
14. ImagePicker: Here we are going to use another ImagePicker "react-native-image-crop-picker" through which you can do Multiple image selection, more control over the crop tool, and landscape support. We will use "ivpusic/react-native-image-crop-picker". To install "yarn add react-native-image-picker". 

As it can pick video as well, we will use "react-native-community/react-native-video" to display video. To install "yarn add react-native-video".

    Example - Select from gallery
    ---------------------------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
    import Video from 'react-native-video';
    import ImagePicker from 'react-native-image-crop-picker';

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          image: '', 
          images: [], 
          video: '', 
          videos: [], 
        }
        this.PickSingleImgWithCropping = this.PickSingleImgWithCropping.bind(this);
        this.PickMultipleImages = this.PickMultipleImages.bind(this);
        this.PickSingleVideo = this.PickSingleVideo.bind(this);
        this.PickMultipleVideos = this.PickMultipleVideos.bind(this);
		this.renderImage = this.renderImage.bind(this);
		this.renderVideo = this.renderVideo.bind(this);
        }

      PickSingleImgWithCropping(){
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
          includeExif: true,
          mediaType:'photo'
        }).then(image => {
          this.setState({
            image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
          });
        });
      }

      PickMultipleImages(){
        ImagePicker.openPicker({
          multiple: true
        }).then(images => {
          let arr = [];
          for (i = 0; i < images.length; i++) {
            arr.push(images[i])            
          }
          this.setState({
            images: arr,
          });
        });
      }

      PickSingleVideo(){
        ImagePicker.openPicker({
          mediaType: "video",
        }).then((video) => {
          this.setState({
            video: {uri: video.path, type: video.mime}
          });
        });
      }

      PickMultipleVideos(){
        ImagePicker.openPicker({
          mediaType: "video",
          multiple: true
        }).then((videos) => {
          let arr = [];
          for (i = 0; i < videos.length; i++) {
            arr.push(videos[i])            
          }
          this.setState({
            videos: arr,
          });
        });
      }

      renderImage({ item, index }){
        return (
          <View>
            <Image style={{ width: 200, height: 200}} source={{uri: item.path}} />
          </View>
        )
      }

      renderVideo({ item, index }){
        return (
          <View>
            <Video style={{ width: 200, height: 200}} source={{uri: item.path}} repeat={true} paused={false} resizeMode={'cover'} />
          </View>
        )
      }

      render() {
        return (      
          <ScrollView>
            <TouchableOpacity 
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.PickSingleImgWithCropping}>
              <Text>Pick Single With Cropping</Text>
            </TouchableOpacity>            
            <Image style={{ width: 200, height: 200}} source={{uri: this.state.image.uri}} />
            <TouchableOpacity 
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.PickMultipleImages}>
              <Text>Pick Multiple Images</Text>
            </TouchableOpacity>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={this.state.images}
              horizontal={true}
              renderItem={this.renderImage}
            />
            <TouchableOpacity 
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.PickSingleVideo}>
              <Text>Pick Video</Text>
            </TouchableOpacity>
            <Text>  
            { this.state.video &&
              <Video style={{ width: 200, height: 200}} source={{uri: this.state.video.uri}} repeat={true} paused={false} resizeMode={'cover'}/>
            }
            </Text>
            <TouchableOpacity 
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.PickMultipleVideos}>
              <Text>Pick Multiple Video</Text>
            </TouchableOpacity>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={this.state.videos}
              horizontal={true}
              renderItem={this.renderVideo}
            />
          </ScrollView>
        )
      }
    }

/*
    Example - Select from camera
    ---------------------------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
    import Video from 'react-native-video';
    import ImagePicker from 'react-native-image-crop-picker';

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          image: '', 
          video: '', 
        }
        this.PickSingleImgFromCamera = this.PickSingleImgFromCamera.bind(this);
        this.PickSingleVideoFromCamera = this.PickSingleVideoFromCamera.bind(this);
        }

      PickSingleImgFromCamera(){
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
          includeExif: true,
          mediaType:'photo'
        }).then(image => {
          this.setState({
            image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
          });
        });
      }

      PickSingleVideoFromCamera(){
        ImagePicker.openCamera({
          mediaType: "video",
        }).then((video) => {
          console.warn(video)
          this.setState({
            video: {uri: video.path, type: video.mime}
          });
        });
      }

      render() {
        return (      
          <ScrollView>
            <TouchableOpacity 
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.PickSingleImgFromCamera}>
              <Text>Pick Single Image From Camera</Text>
            </TouchableOpacity>            
            <Image style={{ width: 200, height: 200}} source={{uri: this.state.image.uri}} />
            <TouchableOpacity 
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.PickSingleVideoFromCamera}>
              <Text>Pick Single Video From Camera</Text>
            </TouchableOpacity>
            <Text>  
            { this.state.video &&
              <Video style={{ width: 200, height: 200}} source={{uri: this.state.video.uri}} repeat={true} paused={false} resizeMode={'cover'}/>
            }
            </Text>
          </ScrollView>
        )
      }
    }

/*
    Example - Crop single picture
    ---------------------------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'    
    import ImagePicker from 'react-native-image-crop-picker';

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          image: './img/paris.jpg', 
        }
        this.PickSingleImg = this.PickSingleImg.bind(this);
        this.CropIt = this.CropIt.bind(this);
      }

      PickSingleImg(){
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          includeExif: true,
          mediaType:'photo'
        }).then(image => {
          this.setState({
            image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
          });
        });
      }

      CropIt(){
        ImagePicker.openCropper({
          path: this.state.image.uri,
          width: 300,
          height: 400
        }).then(image => {
          this.setState({
            image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
          });
        });
      }

      render() {
        return (      
          <ScrollView>
            <TouchableOpacity 
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.PickSingleImg}>
              <Text>Pick Single Image</Text>
            </TouchableOpacity>
            <Image style={{ width: 200, height: 200}} source={{uri: this.state.image.uri}} />
            <TouchableOpacity 
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.CropIt}>
              <Text>CropIt</Text>
            </TouchableOpacity>            
          </ScrollView>
        )
      }
    }

/*
    Example - Crop and Remove single picture
    --------------------------------------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'    
    import ImagePicker from 'react-native-image-crop-picker';

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          image: '', 
        }
        this.PickSingleImg = this.PickSingleImg.bind(this);
        this.CropIt = this.CropIt.bind(this);
        this.RemoveIt = this.RemoveIt.bind(this);
      }

      PickSingleImg(){
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          includeExif: true,
          mediaType:'photo'
        }).then(image => {
          this.setState({
            image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
          });
        });
      }

      CropIt(){
        if(this.state.image.uri != null){
          ImagePicker.openCropper({
            path: this.state.image.uri,
            width: 300,
            height: 400
          }).then(image => {
              this.setState({
                image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
              });
          });
        }else{
          alert('No Image Selected');
        }
      }

      RemoveIt(){
        ImagePicker.cleanSingle(this.state.image.uri ? this.state.image.uri : null).then(() => {
          this.setState({
            image: {uri: null},
          });          
        }).catch(e => {
          alert(e);
        });
      }

      render() {
        return (      
          <ScrollView>
            <TouchableOpacity 
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.PickSingleImg}>
              <Text>Pick Single Image</Text>
            </TouchableOpacity>
            <Image style={{ width: 200, height: 200}} source={{uri: this.state.image.uri}}/>
            <TouchableOpacity 
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.CropIt}>
              <Text>CropIt</Text>
            </TouchableOpacity>  
            <TouchableOpacity 
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.RemoveIt}>
              <Text>RemoveIt</Text>
            </TouchableOpacity>            
          </ScrollView>
        )
      }
    }

/*
    Example - Crop and Remove Multiple picture
    ----------------------------------------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, Alert } from 'react-native'    
    import ImagePicker from 'react-native-image-crop-picker';

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          image: '', 
          images: [], 
        }
        this.PickMultipleImages = this.PickMultipleImages.bind(this);
        this.CropIt = this.CropIt.bind(this);
        this.RemoveIt = this.RemoveIt.bind(this);
        this.renderImage = this.renderImage.bind(this);
        this.showOption = this.showOption.bind(this);
      }

      PickMultipleImages(){
        ImagePicker.openPicker({
          multiple: true
        }).then(images => {
          let arr = [];
          for (i = 0; i < images.length; i++) {
            arr.push(images[i])            
          }
          this.setState({
            images: arr,
          });
        });
      }

      CropIt(item, index){
        if(item.path != null){
          ImagePicker.openCropper({
            path: item.path,
            width: 300,
            height: 400
          }).then(image => {
            this.state.images[index].path = image.path;
            this.setState({
              images: this.state.images,
            });
          });
        }else{
          alert('No Image Selected');
        }
      }

      showOption(item, index) {
        Alert.alert(
          'Options',
          'Crop or Remove?',
          [
            {text: 'Remove', onPress: () => this.RemoveIt(item, index)},
            {text: 'Crop',   onPress: () => this.CropIt(item, index)},
            {text: 'cancel', onPress: () => console.warn('Cancel Pressed'), style: 'cancel',},
          ],
          {cancelable: false},
        );
      };

      RemoveIt(item, index){
        ImagePicker.cleanSingle(item.path ? item.path : null).then(() => {          
          this.state.images.splice(index,1);
          this.setState({
            images: this.state.images,
          });
        }).catch(e => {
          alert(e);
        });
      }

      renderImage({ item, index }){
        return (
          <View>
            <TouchableOpacity onPress={()=>this.showOption(item, index)}>
              <Image style={{ width: 200, height: 200}} source={{uri: item.path}} />
            </TouchableOpacity>
          </View>
        )
      }

      render() {
        return (      
          <View>
            <TouchableOpacity 
              style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 4,}}
              onPress={this.PickMultipleImages}>
              <Text>Pick Multiple Images and Click on for Edit</Text>
            </TouchableOpacity>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={this.state.images}
              horizontal={true}
              renderItem={this.renderImage}
            />
          </View>
        )
      }
    }

/*
15. InteractionManager: InteractionManager allows long-running work to be scheduled after any interactions/animations have completed.

    Example - 01
    -----------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet, InteractionManager, Animated } from 'react-native'    

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          loader: false, 
        }
        this.loadingView = this.loadingView.bind(this);
      }

      componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
          this.setState({loader: true});
        });        
      }

      loadingView(){
        return (
          <View>
            <Text>Welcome</Text>
          </View>
        )
      }

      render() {
        if(this.state.loader){
          return this.loadingView();
        }

        return (      
          <View>
            <Text>Loading...</Text>
          </View>
        )
      }
    }

/*
    Example - 02
    -----------*/

    import React, { Component } from 'react'
    import { Text, View, FlatList, Animated, Button, StyleSheet, InteractionManager } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          loader: false,
          animation: new Animated.Value(0),
          fadeValue: new Animated.Value(1),
        }
      }

      componentDidMount(){
        this.startAnim();
        InteractionManager.runAfterInteractions(() => {
          this.setLoader();
        });
      }

      setLoader(){
        this.setState({loader: true});
      }

      startAnim(){
        const animate =  Animated.timing(this.state.animation, {
          toValue: 250,
          duration: 1000,
        });

        const fadeVal =  Animated.timing(this.state.fadeValue, {           
          toValue: 0,     
          duration: 1000
        });

        Animated.parallel([
          animate,
          fadeVal
        ]).start();
      }

      welcomeView(){
        return (
          <View>
            <Text>Welcome</Text>
          </View>
        );
      }

      render() {
        if (this.state.loader) {
          return this.welcomeView();
        }

        const animationStyles = {
          transform: [
            { translateY: this.state.animation },            
          ],
          opacity: this.state.fadeValue,
        };

        return (
          <View>
            <Animated.View style={[objectStyles.object, animationStyles]}>
              <Text>Loading...</Text>
            </Animated.View>
          </View>
        );
      }
    }

    const objectStyles = StyleSheet.create({
      object: 
        { 
          flex: 1, 
          justifyContent: 'center', 
          padding: 30, 
          backgroundColor: 'red',
          width: 200,
          height: 200 
        }
    });

/*
16. Keyboard: Keyboard module to control keyboard events and react to them.

    Example - 01
    -----------*/

    import React, { Component } from 'react'
    import { Text, View, TextInput, Keyboard } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
        }
      }

      componentDidMount() {
        Keyboard.addListener(
          'keyboardDidShow',
          this.keyboardShow,
        );
        Keyboard.addListener(
          'keyboardDidHide',
          this.keyboardHide,
        );
      }

      keyboardShow() {
        alert('Keyboard Shown');
      }

      keyboardHide() {
        alert('Keyboard Hidden');
      }

      render() {
        return <TextInput 
          onSubmitEditing={Keyboard.dismiss} 
          placeholder = "User name"
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          />;
      }
    }

/*
17. PanResponder: PanResponder that is responsible for track user gestures.

    Example - Move Object With Touch
    -------------------------------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet, PanResponder, Animated } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          previousLeft: 0,
          previousTop: 0,
          pressed: true,
          panResponder: 0,
          position: new Animated.ValueXY({x: 0, y: 0}),
        }        
        this.handleMove = this.handleMove.bind(this);
        this.handleRelease = this.handleRelease.bind(this);
        // this.handleGrant = this.handleGrant.bind(this);
        // this.handleTerminate = this.handleTerminate.bind(this);
        // this.NativeResponder = this.NativeResponder.bind(this);
      }

      componentDidMount(){
        const panResponder = PanResponder.create({          
          onStartShouldSetPanResponder: (evt, gestureState) =>  true,
          onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
          onMoveShouldSetPanResponder: (evt, gestureState) => true,
          onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
          onPanResponderTerminationRequest: (evt, gestureState) => true,
          onPanResponderMove: this.handleMove,
          onPanResponderRelease: this.handleRelease,
          // onPanResponderGrant: this.handleGrant,
          // onPanResponderTerminate: this.handleTerminate,
          // onShouldBlockNativeResponder: this.NativeResponder,
        });

        this.setState({panResponder: panResponder});
      }

      handleMove(evt, gestureState){
        this.state.position.setValue({ x: this.state.previousLeft+gestureState.dx, y: this.state.previousTop+gestureState.dy });
        this.setState({pressed: false});
      }

      handleRelease(evt, gestureState){
        this.setState({
          previousLeft: this.state.previousLeft+gestureState.dx, 
          previousTop: this.state.previousTop+gestureState.dy,
          pressed: true
        })
        
      }

      render() {
        const animationStyles = {
          left: this.state.position.x,
          top: this.state.position.y,
          backgroundColor: this.state.pressed ? 'blue' : 'green',
        };

        return (
          <Animated.View style={[objectStyles.object, animationStyles]} {...this.state.panResponder.panHandlers} >
            <Text>Drag to move</Text>
          </Animated.View>
        );
      }      
    }

    const objectStyles = StyleSheet.create({
      object: 
        { 
          backgroundColor: 'blue',
          width: 100,
          height: 100 
        }
    });

/*
    Example - Move Object return to origin
    -------------------------------------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet, PanResponder, Animated } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          previousLeft: 0,
          previousTop: 0,
          pressed: true,
          panResponder: 0,
          position: new Animated.ValueXY({x: 0, y: 0}),
        }        
        this.handleMove = this.handleMove.bind(this);
        this.handleRelease = this.handleRelease.bind(this);
        // this.handleGrant = this.handleGrant.bind(this);
        // this.handleTerminate = this.handleTerminate.bind(this);
        // this.NativeResponder = this.NativeResponder.bind(this);
      }

      componentDidMount(){
        const panResponder = PanResponder.create({          
          onStartShouldSetPanResponder: (evt, gestureState) =>  true,
          onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
          onMoveShouldSetPanResponder: (evt, gestureState) => true,
          onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
          onPanResponderTerminationRequest: (evt, gestureState) => true,
          onPanResponderMove: this.handleMove,
          onPanResponderRelease: this.handleRelease,
          // onPanResponderGrant: this.handleGrant,
          // onPanResponderTerminate: this.handleTerminate,
          // onShouldBlockNativeResponder: this.NativeResponder,
        });
        this.setState({panResponder: panResponder});
      }

      handleMove(evt, gestureState){
        this.state.position.setValue({ x: this.state.previousLeft+gestureState.dx, y: this.state.previousTop+gestureState.dy });
        this.setState({pressed: false});
      }

      handleRelease(evt, gestureState){
        this.setState({ pressed: true });
        Animated.spring(this.state.position, {
          toValue: { x: 0, y: 0 },
          duration: 2000,
          friction: 5,
          tention: 20
        }).start();
      }

      render() {
        const animationStyles = {
          left: this.state.position.x,
          top: this.state.position.y,
          backgroundColor: this.state.pressed ? 'blue' : 'green',
        };

        return (
          <Animated.View style={[objectStyles.object, animationStyles]} {...this.state.panResponder.panHandlers} >
            <Text>Drag to move</Text>
          </Animated.View>
        );
      }      
    }

    const objectStyles = StyleSheet.create({
      object: 
        { 
          backgroundColor: 'blue',
          width: 100,
          height: 100 
        }
    });

/*
    Example - Move Object with Opacity to zero
    -----------------------------------------*/

    import React, { Component } from 'react'
    import { Text, View, StyleSheet, PanResponder, Animated } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          previousLeft: 0,
          previousTop: 0,
          pressed: true,
          panResponder: 0,
          position: new Animated.ValueXY({x: 0, y: 0}),
          fadeValue: new Animated.Value(1),
        }        
        this.handleMove = this.handleMove.bind(this);
        this.handleRelease = this.handleRelease.bind(this);
        // this.handleGrant = this.handleGrant.bind(this);
        // this.handleTerminate = this.handleTerminate.bind(this);
        // this.NativeResponder = this.NativeResponder.bind(this);
      }

      componentDidMount(){
        const panResponder = PanResponder.create({          
          onStartShouldSetPanResponder: (evt, gestureState) =>  true,
          onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
          onMoveShouldSetPanResponder: (evt, gestureState) => true,
          onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
          onPanResponderTerminationRequest: (evt, gestureState) => true,
          onPanResponderMove: this.handleMove,
          onPanResponderRelease: this.handleRelease,
          // onPanResponderGrant: this.handleGrant,
          // onPanResponderTerminate: this.handleTerminate,
          // onShouldBlockNativeResponder: this.NativeResponder,
        });
        this.setState({panResponder: panResponder});
      }

      handleMove(evt, gestureState){
        this.state.position.setValue({ x: this.state.previousLeft+gestureState.dx, y: this.state.previousTop+gestureState.dy });
        this.setState({pressed: false});
      }

      handleRelease(evt, gestureState){
        this.setState({ 
          previousLeft: this.state.previousLeft+gestureState.dx, 
          previousTop: this.state.previousTop+gestureState.dy,
          pressed: true,
        });
        if (this.isDropArea(gestureState)) {
          Animated.timing(this.state.fadeValue, {           
            toValue: 0,     
            duration: 1000    
            }
          ).start();
        }
      }

      isDropArea(gestureState) {
        return gestureState.moveY > 200;
      }

      render() {
        const dropingAreaStyles = {
          left: 0, top: 48, borderBottomColor: 'black', borderBottomWidth: 1,
        };

        const animationStyles = {
          left: this.state.position.x,
          top: this.state.position.y,
          backgroundColor: this.state.pressed ? 'blue' : 'green',
          opacity: this.state.fadeValue
        };

        return (
          <View>
            <Animated.View style={[objectStyles.object, animationStyles]} {...this.state.panResponder.panHandlers} >
              <Text>Drag to move</Text>
            </Animated.View>
            <View style={[dropingAreaStyles]}>
              <Text>Drop After</Text>
            </View>
          </View>
        );
      }      
    }

    const objectStyles = StyleSheet.create({
      object: 
        { 
          backgroundColor: 'blue',
          width: 100,
          height: 100 
        }
    });
