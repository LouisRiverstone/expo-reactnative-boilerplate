import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import HomePage from "./scenes/homepage"

const HomePageStackNavigator = createStackNavigator(
    {
        HomePage
    },
)

export default createAppContainer(HomePageStackNavigator)