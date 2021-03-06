// npm libs
import React from 'react';
// import { Provider } from 'react-redux';
import { TabNavigator } from 'react-navigation';
import { Platform, View } from 'react-native';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Font } from 'expo';

// screens
import JobsScreen from './JobsScreen';
import LikedJobsScreen from './LikedJobsScreen';
import InfoScreen from './InfoScreen';

// redux
// import store from './../redux';

// constants
import constants from './../constants';

// styles
import createStylesheet, { theme as globalTheme } from './../styles/createStylesheet';

const stylesheet = createStylesheet(theme => ({
  viewContainer: {
    flex: 1,
    paddingTop: theme.statusBarHeight,
  },
  mainNavigator: {
    width: theme.screenWidth,
  },
}));

const tabBarOptions = Platform.select({
  android: {
    activeTintColor: globalTheme.tabBar.activeTintColor,
    inactiveTintColor: globalTheme.tabBar.inactiveTintColor,
    showIcon: true,
    scrollEnabled: false,
    tabStyle: {
      padding: 0,
    },
    labelStyle: {
      fontSize: globalTheme.fontSize.xsmall - 2,
    },
    indicatorStyle: {
      backgroundColor: globalTheme.tabBar.activeTintColor,
    },
    style: {
      backgroundColor: globalTheme.tabBar.backgroundColor,
      borderTopColor: globalTheme.tabBar.borderTopColor,
      borderTopWidth: globalTheme.tabBar.borderTopWidth,
    },
  },
  ios: {
    labelStyle: {
      fontSize: globalTheme.fontSize.normal,
    },
  },
});

export default class App extends React.Component {
  /* eslint-disable */
  mainNavigator = TabNavigator(
    {
      Home: { screen: JobsScreen },
      LikedJobs: { screen: LikedJobsScreen },
      Info: { screen: InfoScreen },
    },
    {
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      lazy: true,
      animationEnabled: true,
      tabBarOptions: {
        showLabel: true,
        ...tabBarOptions,
      },
    },
  );

  client = new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: `${constants.BACKEND_URL}/graphql`,
    }),
  });

  state = {
    isReady: false,
  };

  componentDidMount() {
    Font.loadAsync({
      'open-sans-bold': require('./../../assets/fonts/OpenSans-Bold.ttf'),
      'open-sans': require('./../../assets/fonts/OpenSans-Light.ttf'),
    });
    this.setState({ isReady: true });
  }
  /* eslint-enable */

  render() {
    const MainNavigator = this.mainNavigator;
    // return (
    //   <ApolloProvider client={this.client}>
    //     <Provider store={store}>
    //       <View style={stylesheet.viewContainer}>
    //         <MainNavigator style={stylesheet.mainNavigator} />
    //       </View>
    //     </Provider>
    //   </ApolloProvider>
    // );
    return this.state.isReady ? (
      <ApolloProvider client={this.client}>
        <View style={stylesheet.viewContainer}>
          <MainNavigator style={stylesheet.mainNavigator} />
        </View>
      </ApolloProvider>
    ) : null;
  }
}
