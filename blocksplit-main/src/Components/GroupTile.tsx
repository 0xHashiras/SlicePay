import { View, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import Text from './Text'

type Props = {
    name: string
    members: string[]
}

const GroupTile: FC<Props> = ({ name, members }) => {
    return (
        <View style={styles.groupTitle}>
            <Text size='md'>{name}</Text>
            <Text>{members.length}</Text>
        </View>
    )
}

export default GroupTile


const styles = StyleSheet.create({
    groupTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 10,
    }
})