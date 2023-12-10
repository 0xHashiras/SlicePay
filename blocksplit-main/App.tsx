/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Linking,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';

import { RootNavigator } from './src/Navigators/RootNavigator';
import { mainnet, WagmiConfig } from 'wagmi';
import { arbitrum, polygon, sepolia } from 'viem/chains';
import { createWeb3Modal, defaultWagmiConfig, Web3Modal } from '@web3modal/wagmi-react-native';
import { GroupContext } from './src/Context/GroupContext';
import { Group } from './src/Screens/GroupListScreen';
import BackgroundTimer from 'react-native-background-timer';
import MetaMaskSDK from '@metamask/sdk';
import { SafeConnector } from 'wagmi/connectors/safe'


const projectId = '5435ec8758ffc6598b9b4d0231728d33'

const metadata = {
  name: 'Web3Modal RN',
  description: 'Web3Modal RN Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
}

// const MMSDK = new MetaMaskSDK({
//   openDeeplink: (link) => {
//     Linking.openURL(link); // Use React Native Linking method or another way of opening deeplinks.
//   },
//   timer: BackgroundTimer, // To keep the dapp alive once it goes to background.
//   dappMetadata: {
//     name: 'My dapp', // The name of your dapp.
//     url: 'https://mydapp.com', // The URL of your website.
//   },
// });

// const ethereum = MMSDK.getProvider();

// ethereum.request({ method: 'eth_requestAccounts' }).then((data) => {
//   console.log("eth address", data)
// })

const chains = [sepolia, mainnet, polygon, arbitrum]

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata  })

createWeb3Modal({
  projectId,
  chains,
  wagmiConfig
})

// W3mConnectButton({label: "tt", "loadingLabel": "load", })


function App(): React.JSX.Element {
  const [groups, setGroups] = React.useState<Group[]>([])
  const isDarkMode = useColorScheme() === 'dark';
  const [isChecked, setIsChecked] = React.useState(false)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <WagmiConfig config={wagmiConfig}>
      <GroupContext.Provider value={{ groups: groups, setGroups: setGroups }}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </GroupContext.Provider>
    </WagmiConfig>
  );
}

export default App;
