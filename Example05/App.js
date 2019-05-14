/*
1. To make left Top.

-----------------
|+				      |
|+				      |
|				        |
-----------------

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width:50, height:50, backgroundColor: 'powderblue'}} />
        <View style={{width:50, height:50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

/*
2. To make left Bottom.

-----------------
|				        |
|+				      |
|+				      |
-----------------

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column-reverse'}}>
        <View style={{width:50, height:50, backgroundColor: 'powderblue'}} />
        <View style={{width:50, height:50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

/*
3. To make row left Top.

-----------------
|++				      |
|				        |
|				        |
-----------------

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width:50, height:50, backgroundColor: 'powderblue'}} />
        <View style={{width:50, height:50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

/*
4. To make row right Top.

-----------------
|			        ++|
|				        |
|				        |
-----------------

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row-reverse'}}>
        <View style={{width:50, height:50, backgroundColor: 'powderblue'}} />
        <View style={{width:50, height:50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

/*
5. To make left Top.

-----------------
|+				      |
|+				      |
|				        |
-----------------

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <View style={{width:50, height:50, backgroundColor: 'powderblue'}} />
        <View style={{width:50, height:50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

/*
6. To make left Bottom.

-----------------
|				        |
|+				      |
|+				      |
-----------------

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={{width:50, height:50, backgroundColor: 'powderblue'}} />
        <View style={{width:50, height:50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

/*
7. To make left center.

-----------------
|				        |
|+				      |
|+				      |
|				        |
-----------------

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={{width:50, height:50, backgroundColor: 'powderblue'}} />
        <View style={{width:50, height:50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

/*
8. To make space between.

-----------------
|+				      |
|				        |
|+				      |
-----------------

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{width:50, height:50, backgroundColor: 'powderblue'}} />
        <View style={{width:50, height:50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

/*
9. To make space around.

-----------------
|				        |
|+				      |
|				        |
|+				      |
|				        |
-----------------

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <View style={{width:50, height:50, backgroundColor: 'powderblue'}} />
        <View style={{width:50, height:50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

/*
10. To make left Top.

-----------------
|+				      |
|+				      |
|				        |
-----------------

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        <View style={{width:50, height:50, backgroundColor: 'powderblue'}} />
        <View style={{width:50, height:50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

/*
11. To make center Top.

-----------------
|		    +       |
|		    +       |
|				        |
-----------------

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{width:50, height:50, backgroundColor: 'powderblue'}} />
        <View style={{width:50, height:50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

/*
12. To make right Top.

-----------------
|			         +|
|			         +|
|				        |
-----------------

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <View style={{width:50, height:50, backgroundColor: 'powderblue'}} />
        <View style={{width:50, height:50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

/*
13. To make stretch.

-----------------
|+++++++++++++++|
|+++++++++++++++|
|				        |
-----------------

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'stretch'}}>
        <View style={{height:50, backgroundColor: 'powderblue'}} />
        <View style={{height:50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

/*
14. To center an object.

-----------------
|				        |
|		    ++      |
|				        |
-----------------

example
-------*/
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width:50, height:50, backgroundColor: 'powderblue'}} />
        <View style={{width:50, height:50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

