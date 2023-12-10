import { View, Modal, Dimensions, Alert, FlatList, Text } from 'react-native'
import React, { FC, useContext, useState } from 'react'
import { List, TextInput } from 'react-native-paper'
import { Button } from '@react-native-material/core'
import Spacer from '../../Utils/Spacer'
import { Group } from '../../Screens/GroupListScreen'


type Props = {
    visible: boolean,
    onClose: () => void,
    list: any
}

const MemberList: FC<Props> = ({ visible, onClose, list }) => {
   
    return (
        <Modal animationType='slide' transparent style={{ backgroundColor: 'black' }} onRequestClose={() => onClose()} visible={visible}>
            <View style={{ flex: 1, backgroundColor: '#00000050', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1 }} />
                <View style={{ width: Dimensions.get('screen').width, borderTopEndRadius: 20, borderTopLeftRadius: 20, height: Dimensions.get('screen').height, paddingHorizontal: 20, backgroundColor: '#eee', marginHorizontal: 20, flex: 1 }}>
                    <Spacer height={20} />
                    <FlatList
                    data={list}
                    renderItem={({item}) => {
                        return <>
                        <Text>{item}</Text>
                        {/* <List.Item
                            title={item}
                        /> */}
                        </>
                    }}
                />
                    {/* <TextInput value={description} onChangeText={(text) => setDescription(text)} placeholder='Enter description' />
                    <Spacer height={20} />
                    <TextInput value={amount} onChangeText={(text) => setAmount(Number(text))} placeholder='Enter amount' />
                    <Spacer height={20} />*/}
                    <Button title="Close" onPress={() => onClose()} /> 
                </View>
            </View>
        </Modal>
    )
}

export default MemberList