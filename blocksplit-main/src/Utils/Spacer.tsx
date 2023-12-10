import { View, Text } from 'react-native'
import React, { FC } from 'react'

type Props = {
    height?: number,
    width?: number,
    fill?: boolean
}
const Spacer: FC<Props> = ({ width, height, fill }) => {
    return (
        <View style={{ height, width, flex: fill ? 1 : undefined }} />
    )
}

export default Spacer