import React, { Component } from 'react';
import Home from './HomeComponent';
import Shop from './ShopComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Constants from 'expo-constants';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';


const ShopNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Shop: { screen: Shop },
        About: { screen: About },
        Contact: {screen: Contact }
    }, 
    {
        initialRouteName: 'Shop',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#195640'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#195640'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About},
    }, 
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#195640'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact},
    }, 
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#195640'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Shop: { screen: ShopNavigator },
        About: { screen: AboutNavigator},
        Contact: { screen: ContactNavigator}
    },
    {
        drawerBackgroundColor: '#d6d6d6'
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;