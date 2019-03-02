import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { Route, Switch, NativeRouter } from 'react-router-native';


import DemoContainer from './containers/demo/demo'
import BottomNav from './containers/bottom/BottomNav'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#247BA0',
    accent: '#F3FFBD',
  }
};

export default class App extends React.Component {

  _goBack = () => console.log('Went back');

  _onSearch = () => console.log('Searching');

  _onMore = () => console.log('Shown more');
  

  render() {
    return (
      <NativeRouter>
        <PaperProvider theme={theme}>
          <Appbar.Header>
            <Appbar.BackAction
              onPress={this._goBack}
            />
            <Appbar.Content
              title="Component Guide"
              subtitle="Demo State"
            />
            <Appbar.Action icon="search" onPress={this._onSearch} />
            <Appbar.Action icon="more-vert" onPress={this._onMore} />
          </Appbar.Header>

          <Switch>
            <Route path="/" component={DemoContainer}/>
            <Route path="/step1" component={ BottomNav }/>
          </Switch>
        </PaperProvider>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
});



