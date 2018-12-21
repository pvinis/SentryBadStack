/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {NativeModules, Button, Platform, StyleSheet, Text, View} from 'react-native';

import { Sentry } from 'react-native-sentry';

Sentry.config('https://72d857bcfa5541cea22ebcdc8cca73cf@sentry.io/1357781').install();

const CoolCrash = NativeModules.CoolCrash

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  niceCrash = () => {
    const a = {}
    a.b.c = true // js crash report should show this line
  }

  coolCrash = () => {
    CoolCrash.letsDoIt()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Button title="CRASH JS" onPress={this.niceCrash} />
        <Button title="CRASH NATIVE" onPress={this.coolCrash} />
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
