import { View, Text as RNText } from 'react-native'
import React, { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode
    size?: 'sm' | 'md' | 'lg' | '2xl'
    color?: string,
    stike?: boolean
}
const Text: FC<Props> = ({ children, size, color, stike }) => {
    return <RNText style={{ fontSize: size ? sizeMaping[size] : undefined, color: color ?? 'black', textDecorationLine: stike ? 'line-through' : undefined }}>{children}</RNText>
}

export default Text

const sizeMaping = {
    'sm': 14,
    'md': 16,
    'lg': 20,
    '2xl': 24
}