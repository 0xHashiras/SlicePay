import { View, StyleSheet } from 'react-native'
import React from 'react'
import Text from './Text'

const FloatingButton = () => {
    return (
        <View style={styles.floatingButton}>
            <Text size='2xl' color='white' >+</Text>
        </View>
    )
}

export default FloatingButton

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 25,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: 'red',
        right: 25,
    }
})