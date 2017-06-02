/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry
} from 'react-native';
import Card from '@lal/card';

const App = () =>
  <Card title="Some sort of property"
        uri="https://lid.zoocdn.com/645/430/14b6a430b76a235e8de2ba02d695e7a0bd789b40.jpg"
  />;

AppRegistry.registerComponent('test', () => App);
