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

Here are couple of exmaples of Animated.timing()

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
    --------------*/

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

/*
Spring: give us three groups of options to control the behavior of the spring. We can only use one at a time.

	a) friction/tension
	b) speed/bounciness
	c) swiftness/damping/mass

Friction controls how quickly the spring calms down. tension is the energy of that spring. The default values are 7 for friction, and 40 for tension.

Here are couple of exmaples of Animated.spring() : 

    Example - friction/tension
    --------------------------*/

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
        Animated.spring(this.state.animation, {
          toValue: 250,
          duration: 2000,
          friction: 1,
          tention: 20
        }).start();
      }

      render() {

        const animationStyles = {
          transform: [
            { translateY: this.state.animation }
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
Speed controls the speed of the animation. bounciness controls the bounciness. 

The default values are 12 for speed, and 8 for bounciness.

    Example - friction/tension
    --------------------------*/

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
        Animated.spring(this.state.animation, {
          toValue: 250,
          duration: 2000,
          speed: 5,
          bounciness: 40
        }).start();
      }

      render() {

        const animationStyles = {
          transform: [
            { translateY: this.state.animation }
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
Stiffness define the spring stiffness coefficient. Damping defines how the spring’s motion should be damped due to the forces of friction. Mass define the mass of the object attached to the end of the spring..

The default values are 100 for stiffness, and 10 for damping and 1 for mass.

    Example - swiftness/damping/mass
    --------------------------------*/

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
        Animated.spring(this.state.animation, {
          toValue: 250,
          duration: 2000,
          stiffness: 200,
          damping: 2  ,
          mass: 15
        }).start();
      }

      render() {

        const animationStyles = {
          transform: [
            { translateY: this.state.animation }
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
Decay: used to animate the value from its initial velocity down to zero using the deceleration option.

Here are couple an exmaple of Animated.decay() :

    Example - decay
    ---------------*/

    import React, { Component } from 'react'
    import { Text, View, FlatList, Animated, Button, StyleSheet } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          animation: new Animated.Value(-150),
        }
      }

      componentDidMount(){
        this.startAnim();
      }

      startAnim(){
        Animated.decay(this.state.animation, {
          toValue: 200,
          duration: 2000,
          velocity: 0.95,
          deceleration: 0.998 // By default equals to 0.997
        }).start();
      }

      render() {

        const animationStyles = {
          transform: [
            { translateY: this.state.animation }
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
Here we are moving the box down to the screen. Once the box reaches the finishing line at 200 points below the center, the decay effect applies. The box keeps moving, but its speed is slowing down until it stops.

There are two ways of doing loop in animation.

	a) Iteration 
	b) Animation.loop()

    Example - Iteration
    -------------------*/

    import React, { Component } from 'react'
    import { Text, View, FlatList, Animated, Button, StyleSheet } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          animation: new Animated.Value(0),
        }
        this.startAnim = this.startAnim.bind(this);
      }

      componentDidMount(){
        this.startAnim();
      }

      startAnim(){
        this.state.animation.setValue(0);
        const rotateAnimation = Animated.timing(this.state.animation, {
          toValue: 1,
          duration: 2000,
        }).start(this.startAnim);
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
    Example - Animation.loop()
    --------------------------*/

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
        const rotateAnimation = Animated.timing(this.state.animation, {
          toValue: 1,
          duration: 2000,
        });

        Animated.loop(
          rotateAnimation,
          {
            iterations: 2
          }
        ).start();
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
By default, the number of iterations is -1. That makes the animation repeat an infinite amount of times. but we can put any integer number for Number of iteration.

Native driver: Animated module performs animations on the JavaScript side of React Native which help animations works smoothly but there is a way to move animations into the native UI using useNativeDriver: true option.

    Example - Native driver
    -----------------------*/

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
        const rotateAnimation = Animated.timing(this.state.animation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true
        });

        Animated.loop(
          rotateAnimation,
          {
            iterations: 2
          }
        ).start();
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
Easing: module implements common easing functions which is used by Animated.timing().

Easing module provides several predefined animations

	a) back: provides a basic animation where the object goes slightly back before moving
	b) bounce: provides a bouncing animation
	c) ease: provides a basic inertial animation
	d) elastic: provides a basic spring interaction

Three standard easing functions

	a) linear
	b) quad
	c) cubic

Additional mathematical functions

	a) bezier provides a cubic bezier curve
	b) circle provides a circular function
	c) sin provides a sinusoidal function
	d) exp provides an exponential function

The following helpers are used to modify other easing functions.

	a) in runs an easing function forwards
	b) inOut makes any easing function symmetrical
	c) out runs an easing function backwards

    Example - Easing
    ----------------*/

    import React, { Component } from 'react'
    import { Text, View, FlatList, Animated, Button, StyleSheet, Easing } from 'react-native'

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
          easing: Easing.bounce
          // easing: Easing.cubic
          // easing: Easing.back(2)
          // easing: Easing.elastic(2)
          // easing: Easing.ease
          // easing: Easing.inOut(Easing.quad)
          // easing: Easing.in(Easing.quad)
          // easing: Easing.out(Easing.quad)
          // easing: Easing.sin
          // easing: Easing.linear
          // easing: Easing.quad
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
Composition functions: Sometimes you may need to have several animations work together. You can use composition functions to achieve different behavior.

	a) Animated.sequence() — Sequence is used to run several animations one after another.
	b) Animated.parallel() — Can start several animations at the same time.
	c) Animated.stagger() — Imagine we need to start an animation and then start another one before the first one is finished. It accepts the delay before starting list of animations.
	d) Animated.delay() — starts an animation after a given delay.

    Example - Sequence
    ------------------*/

    import React, { Component } from 'react'
    import { Text, View, FlatList, Animated, Button, StyleSheet, Easing } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          transformAnimation: new Animated.Value(0),
          fallAnimation: new Animated.Value(0)
        }
      }

      componentDidMount(){
        this.startAnim();
      }

      startAnim(){
        const transformToBall =  Animated.timing(this.state.transformAnimation, {
          toValue: 250,
          duration: 1000,
        });

        const fallToptoBottom =  Animated.timing(this.state.fallAnimation, {
          toValue: 250,
          duration: 1000,
          easing: Easing.bounce
        });

        Animated.sequence([
          transformToBall,
          fallToptoBottom
        ]).start();
      }

      render() {
        const animationStyles = {
          borderRadius: this.state.transformAnimation,
          transform: [
            { translateY: this.state.fallAnimation },            
          ],
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
As you can see the ball doesn’t start to move until the transformation animation is in progress.

    Example - Parallel
    ------------------*/

    import React, { Component } from 'react'
    import { Text, View, FlatList, Animated, Button, StyleSheet, Easing } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          transformAnimation: new Animated.Value(0),
          fallAnimation: new Animated.Value(0)
        }
      }

      componentDidMount(){
        this.startAnim();
      }

      startAnim(){
        const transformToBall =  Animated.timing(this.state.transformAnimation, {
          toValue: 250,
          duration: 1000,
        });

        const fallToptoBottom =  Animated.timing(this.state.fallAnimation, {
          toValue: 250,
          duration: 1000,
          easing: Easing.bounce
        });

        Animated.parallel([
          transformToBall,
          fallToptoBottom
        ]).start();
      }

      render() {
        const animationStyles = {
          borderRadius: this.state.transformAnimation,
          transform: [
            { translateY: this.state.fallAnimation },            
          ],
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
As you can see, the box starts moving and transforming at the same time.

Imagine we need to start our first animation and then start another after a certain amount of time. To achieve this we need Animated.stagger function. It accepts the delay before starting following animations, and the list of animations.

    Example - Stagger
    -----------------*/

    import React, { Component } from 'react'
    import { Text, View, FlatList, Animated, Button, StyleSheet, Easing } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          transformAnimation: new Animated.Value(0),
          fallAnimation: new Animated.Value(0)
        }
      }

      componentDidMount(){
        this.startAnim();
      }

      startAnim(){
        const transformToBall =  Animated.timing(this.state.transformAnimation, {
          toValue: 250,
          duration: 1000,
        });

        const fallToptoBottom =  Animated.timing(this.state.fallAnimation, {
          toValue: 250,
          duration: 1000,
          easing: Easing.bounce
        });

        Animated.stagger(5000, [
          transformToBall,
          fallToptoBottom
        ]).start();
      }

      render() {
        const animationStyles = {
          borderRadius: this.state.transformAnimation,
          transform: [
            { translateY: this.state.fallAnimation },            
          ],
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
we can define a delay in between two animations.

    Example - Delay
    ---------------*/

    import React, { Component } from 'react'
    import { Text, View, FlatList, Animated, Button, StyleSheet, Easing } from 'react-native'

    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = { 
          transformAnimation: new Animated.Value(0),
          fallAnimation: new Animated.Value(0)
        }
      }

      componentDidMount(){
        this.startAnim();
      }

      startAnim(){
        const transformToBall =  Animated.timing(this.state.transformAnimation, {
          toValue: 250,
          duration: 1000,
        });

        const fallToptoBottom =  Animated.timing(this.state.fallAnimation, {
          toValue: 250,
          duration: 1000,
          easing: Easing.bounce
        });

        Animated.sequence([
          transformToBall,
          Animated.delay(1000),
          fallToptoBottom
        ]).start();
      }

      render() {
        const animationStyles = {
          borderRadius: this.state.transformAnimation,
          transform: [
            { translateY: this.state.fallAnimation },            
          ],
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


    
