import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Typography } from '../neopop/components'
import { fontVariant, mainColors } from '../neopop/primitives'
import { useAccount, useDisconnect } from 'wagmi'
import { globalStyles } from '../Utils/styles'
import { CommonActions, useNavigation } from '@react-navigation/native'
import Spacer from '../Utils/Spacer'

const SettlementPreference = () => {
    const { dispatch } = useNavigation()
    const { disconnectAsync } = useDisconnect()
    const { address } = useAccount()
    const [mode, setMode] = useState<'crypto' | 'fiat' | ''>("")


    const disconnectWalletHandler = async () => {
        await disconnectAsync()
        return dispatch(CommonActions.reset({
            index: 1,
            routes: [
                { name: 'ConnectWalletScreen' },
            ],
        }))
    }
    return (
        <View style={globalStyles.screen}>
            <View style={styles.mainContent}>
                <Text>Choose Settlement Preference</Text>
                {/* <Text>Connected address: {address}</Text> */}
                <Spacer height={20} />
                <Button onPress={() => setMode('crypto')} variant='secondary' kind='elevated'>Settle with Crypto</Button>
                <Spacer height={10} />
                <Button onPress={() => setMode('fiat')} variant='secondary' kind='elevated'>Settle with Fiat</Button>
                <Spacer height={25} />
                 {mode && <Text>You Choose : {mode}</Text> }
            </View>
           
            <Button onPress={() => { disconnectWalletHandler() }} variant='secondary' kind='elevated'>Disconnect</Button>            
        </View>
    )
}

export default SettlementPreference


const styles = StyleSheet.create({
    mainContent: {
        flex: 1
    }
})