/**
 * @format
 */

import 'react-native-gesture-handler';
import '@walletconnect/react-native-compat';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import paper from 'react-native-paper';

const Main = () => {
    return (
        <App />
    )
}

AppRegistry.registerComponent(appName, () => Main);
