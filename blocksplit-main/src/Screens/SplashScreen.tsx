import { View, Text, Linking } from 'react-native'
import React, { useEffect } from 'react'
import { useAccount } from 'wagmi'
import { useNavigation } from '@react-navigation/native'
import { RootNavigationProps } from '../Navigators/RootNavigator'
import { globalStyles } from '../Utils/styles'
// import MetaMaskSDK from '@metamask/sdk';
// import BackgroundTimer from 'react-native-background-timer';
// import BackgroundTimer from 'react-native-background-timer';
// import MetaMaskSDK from '@metamask/sdk'

const SplashScreen = () => {
    const { isConnected, isConnecting, status } = useAccount()
    const { navigate } = useNavigation<RootNavigationProps>()

    // const MMSDK = new MetaMaskSDK({
    //     openDeeplink: (link) => {
    //       Linking.openURL(link); // Use React Native Linking method or another way of opening deeplinks.
    //     },
    //     timer: BackgroundTimer, // To keep the dapp alive once it goes to background.
    //     dappMetadata: {
    //       name: 'My dapp', // The name of your dapp.
    //       url: 'https://mydapp.com', // The URL of your website.
    //     },
    //   });

    // const ethereum = MMSDK.getProvider(); 


    useEffect(() => {
        if (isConnected) {
            navigate('GroupListScreen')
        }
        else {
            navigate('ConnectWalletScreen')
        }
    }, [isConnected])
    return (
        <View style={globalStyles.screenCenterItem}>
            <Text>SplashScreen</Text>
        </View>
    )
}

export default SplashScreen