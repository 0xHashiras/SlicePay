import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import ConnectWalletScreen from '../Screens/ConnectWalletScreen';
import SettlementPreference from '../Screens/SettlementPreference';
import SplashScreen from '../Screens/SplashScreen';
import GroupListScreen, { Group } from '../Screens/GroupListScreen';
import GroupDetailScreen from '../Screens/GroupDetailScreen';



export type RootNavigationStackParamsList = {
    ConnectWalletScreen: undefined;
    SettlementPreference: undefined;
    SplashScreen: undefined;
    GroupListScreen: undefined;
    GroupDetailScreen: { group: Group };
};

export type RootNavigationProps = StackNavigationProp<RootNavigationStackParamsList>;


const Stack = createStackNavigator<RootNavigationStackParamsList>();


export const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="ConnectWalletScreen" component={ConnectWalletScreen} />
            <Stack.Screen name="SettlementPreference" component={SettlementPreference} />
            <Stack.Screen name="GroupListScreen" component={GroupListScreen} />
            <Stack.Screen name="GroupDetailScreen" component={GroupDetailScreen} />
        </Stack.Navigator>
    );
}