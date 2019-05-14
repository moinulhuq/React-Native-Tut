/*
1. Fixed Dimensions: Use 'Dimensions' to get screen resolution to set the 'width' and 'height' of Component.

example
-------*/
import {View, Dimensions} from 'react-native';

let dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}

export default class App extends Component<Props> {
  render() {
    return (
		<View style={{width: dimensions.fullWidth, height: dimensions.fullHeight, backgroundColor: 'powderblue'}} />
    );
  }
}

/*
2. Flex Dimensions: Use 'flex' in a component style to have the component expand and shrink dynamically based on available space.

example
-------*/

export default class App extends Component<Props> {
  render() {
    return (
		<View style={{flex: 1, backgroundColor: 'powderblue'}} />
    );
  }
}

/*
3. Mixing 'Flex Dimensions' with 'Fixed Dimensions'.

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}>
        <View style={{width:50, height:50, backgroundColor: 'powderblue'}} />
        <View style={{height:50, backgroundColor: 'powderblue'}} />
        <View style={{height:50, backgroundColor: 'skyblue'}} />
      </View>
    );
  }
}



