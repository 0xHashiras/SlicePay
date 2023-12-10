import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { globalStyles } from '../Utils/styles'
import { Button } from '../neopop/components'
import { WagmiConfig, mainnet, useAccount } from 'wagmi'
import { arbitrum, opBNB, polygon } from 'viem/chains'
import { W3mButton, Web3Modal, createWeb3Modal, defaultWagmiConfig, useWeb3Modal } from '@web3modal/wagmi-react-native'
import { useNavigation } from '@react-navigation/native'
import { RootNavigationProps } from '../Navigators/RootNavigator'
import { useGestureHandlerRef } from '@react-navigation/stack'


const ConnectWalletScreen = () => {
    const { open } = useWeb3Modal()





    const connectWalletHandler = async () => {
        try {
            await open()
        } catch (error) {

        }
    }

    return (
        <View style={globalStyles.screenCenterItem}>
            <Button onPress={() => connectWalletHandler()} variant='secondary' kind='elevated'>Connect Wallet</Button>
            <Web3Modal />
        </View >
    )
}

export default ConnectWalletScreen