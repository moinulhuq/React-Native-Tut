/*
React Native Animation provides following two APIs to implement animation in both Android and iOS.

	a) 'Animated' API
	b) 'LayoutAnimation' API

Animated API: Can be used with the following animated components

	a) Animated.View
	b) Animated.Text
	c) Animated.ScrollView
	d) Animated.Image
	e) Animated.FlatList
	f) Animated.SectionList

Animated API: provides three different types of animations :

	a) Animated.timing() : animates a value over time.
	b) Animated.spring() : provides a simple spring physics model.
	c) Animated.decay()  : starts with an initial velocity and gradually slows to stop.

Composition functions: Sometimes you may need to have several animations work together. You can use composition functions to achieve different behavior.

	a) Animated.sequence() — Sequence is used to run several animations one after another.
	b) Animated.parallel() — Can start several animations at the same time.
	c) Animated.stagger() — Imagine we need to start an animation and then start another one before the first one is finished. It accepts the delay before starting list of animations.

There are two value types that you can use with Animated for initializing state variable:

	a) Animated.Value(n) for single values
	b) Animated.ValueXY({ x: n, y: m }) for vectors

    Example - Fading
    ----------------*/

    import React, { Component } from 'react'
    import { Text, View, FlatList, Animated, Button, StyleSheet } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          fadeValue: new Animated.Value(0), // Initialize variable to 0
        }
      }

      componentDidMount(){
        Animated.timing(         // Animated.timing() function
          this.state.fadeValue, // First argument  - Initial Animated Value
          {           
            toValue: 1,     
            duration: 1000    // Second argument - Configuration object
          }
        ).start();          // start() function to strat animation
      }

      render() {
        return (        
          <View>
            {/* Animated components, hook value to style attributes*/}
            <Animated.View style={{opacity: this.state.fadeValue}}>
              <Text>Fade </Text>
            </Animated.View>
          </View>
        );
      }
    }

/*
In the above example, we used "Animated.timing()". This function accepts “Initial Animated Value” as a first argument and a configuration object as second. Then we start the animation by calling a start() function on our animation component, just hook it up to style attributes of an animated component. When animation start, it will gradually change opacity value from 0 to 1.

    Example - Movement
    ------------------*/

    import React, { Component } from 'react'
    import { Text, View, FlatList, Animated, Button, StyleSheet } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          animation: new Animated.Value(0),
        }
      }

      componentDidMount(){
        this.startAnim();
      }

      startAnim(){
        Animated.timing(this.state.animation, {
          toValue: 250,
          duration: 1000,
        }).start();
      }

      render() {
        const animationStyles = {
          transform: [
            { translateY: this.state.animation },            
          ],
        };

        return (
          <View>
            <Animated.View style={[objectStyles.object, animationStyles]}>
              <Text>Fade </Text>
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
It's good pracice to split styles into two parts:

	a) objectStyles - Styles of animated component (How it looks like before animation)
	b) animationStyles - Styles that will change over time (How it looked like after animation)


    Example - Scale
    ---------------*/

    import React, { Component } from 'react'
    import { Text, View, FlatList, Animated, Button, StyleSheet } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          animation: new Animated.Value(1),
        }
      }

      componentDidMount(){
        this.startAnim();
      }

      startAnim(){
        Animated.timing(this.state.animation, {
          toValue: 2,
          duration: 1000,
        }).start();
      }

      render() {


        const animationStyles = {
          transform: [
            { scaleY: this.state.animation },            
          ],
        };

        return (
          <View>
            <Animated.View style={[objectStyles.object, animationStyles]}>
              <Text>Fade </Text>
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
    Example - Flip
    ---------------*/

    import React, { Component } from 'react'
    import { Text, View, FlatList, Animated, Button, StyleSheet } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          animation: new Animated.Value(1),
        }
      }

      componentDidMount(){
        this.startAnim();
      }

      startAnim(){
        Animated.timing(this.state.animation, {
          toValue: -2,
          duration: 1000,
        }).start();
      }

      render() {


        const animationStyles = {
          transform: [
            { scaleY: this.state.animation },            
          ],
        };

        return (
          <View>
            <Animated.View style={[objectStyles.object, animationStyles]}>
              <Text>Fade </Text>
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
    Example - Resizing
    ---------------*/

    import React, { Component } from 'react'
    import { Text, View, FlatList, Animated, Button, StyleSheet } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          animation: new Animated.Value(1),
        }
      }

      componentDidMount(){
        this.startAnim();
      }

      startAnim(){
        Animated.timing(this.state.animation, {
          toValue: 200,
          duration: 1000,
        }).start();
      }

      render() {


        const animationStyles = {
          width: this.state.animation,
          height: this.state.animation
        };

        return (
          <View>
            <Animated.View style={[objectStyles.object, animationStyles]}>
              <Text>Fade </Text>
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
          height: 100 
        }
    });

/*
In some cases, the result of changing the interger value from 0 to 1 is not sufficient. We may need to change some non-integer format value like "#FFFFFF" or "100%" or "360deg". In these cases we can use interpolate(). The function receives an object with two keys:

	a) inputRange - the range of animation value [0, 1]
	b) outputRange - the result of interpolated values mapped to the input range ['0%', '100%']

In this example, when animation changes its value from zero to one, it will gradually change the percentage from 0% to 100%.

    Example - interpolate(%)
    ------------------------*/

    import React, { Component } from 'react'
    import { Text, View, FlatList, Animated, Button, StyleSheet } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          animation: new Animated.Value(0),
        }
      }

      componentDidMount(){
        this.startAnim();
      }

      startAnim(){
        Animated.timing(this.state.animation, {
          toValue: 1,
          duration: 2000,
        }).start();
      }

      render() {

      const animationStyles = {
        width: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [ '0%', '100%']
        }),
        height: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [ '0%', '100%']
        })
      };

        return (
          <View>
            <Animated.View style={[objectStyles.object, animationStyles]}>
            </Animated.View>
          </View>
        );
      }
    }

    const objectStyles = StyleSheet.create({
      object: 
        { 
          backgroundColor: 'red',
          width: 200,
          height: 200 
        }
    });

/*
    Example - interpolate(deg)
    ------------------------*/

    import React, { Component } from 'react'
    import { Text, View, FlatList, Animated, Button, StyleSheet } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          animation: new Animated.Value(0),
        }
      }

      componentDidMount(){
        this.startAnim();
      }

      startAnim(){
        Animated.timing(this.state.animation, {
          toValue: 1,
          duration: 2000,
        }).start();
      }

      render() {

      const animationStyles = {
        transform: [
          {
            rotate: this.state.animation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })
          }
        ]
      };

        return (
          <View>
            <Animated.View style={[objectStyles.object, animationStyles]}>
            </Animated.View>
          </View>
        );
      }
    }

    const objectStyles = StyleSheet.create({
      object: 
        { 
          backgroundColor: 'red',
          width: 100,
          height: 100 
        }
    });

/*
    Example - interpolate(deg - rotateX or raotateY)
    ------------------------*/

    import React, { Component } from 'react'
    import { Text, View, FlatList, Animated, Button, StyleSheet } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          animation: new Animated.Value(0),
        }
      }

      componentDidMount(){
        this.startAnim();
      }

      startAnim(){
        Animated.timing(this.state.animation, {
          toValue: 1,
          duration: 2000,
        }).start();
      }

      render() {

      const animationStyles = {
        transform: [
          {
            rotateX: this.state.animation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })
          }
        ]
      };

        return (
          <View>
            <Animated.View style={[objectStyles.object, animationStyles]}>
            </Animated.View>
          </View>
        );
      }
    }

    const objectStyles = StyleSheet.create({
      object: 
        { 
          backgroundColor: 'red',
          width: 100,
          height: 100 
        }
    });

/*
    Example - Color change - interpolate(#FFFFFF)
    ---------------------------------------------*/

    import React, { Component } from 'react'
    import { Text, View, FlatList, Animated, Button, StyleSheet } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          animation: new Animated.Value(0),
        }
      }

      componentDidMount(){
        this.startAnim();
      }

      startAnim(){
        Animated.timing(this.state.animation, {
          toValue: 1,
          duration: 2000,
        }).start();
      }

      render() {

        const animationStyles = {
          backgroundColor: this.state.animation.interpolate({
            inputRange: [0, 0.3, 0.6, 1],
            outputRange: ['red', 'rgb(0, 200, 0)', '#000000' ,'purple']
          })
        };

        return (
          <View>
            <Animated.View style={[objectStyles.object, animationStyles]}>
            </Animated.View>
          </View>
        );
      }
    }

    const objectStyles = StyleSheet.create({
      object: 
        { 
          backgroundColor: 'red',
          width: 100,
          height: 100 
        }
    });
