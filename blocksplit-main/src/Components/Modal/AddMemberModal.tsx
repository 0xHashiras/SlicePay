import { View, Modal, Dimensions, Alert } from 'react-native'
import React, { FC, useContext, useState } from 'react'
import { TextInput } from 'react-native-paper'
import { Button } from '@react-native-material/core'
import Spacer from '../../Utils/Spacer'
import { Group } from '../../Screens/GroupListScreen'
import uuid from 'react-native-uuid';
import { GroupContext } from '../../Context/GroupContext'


type Props = {
    visible: boolean,
    onClose: () => void,
    onCreate: (member: string) => void
}

const AddMemberModal: FC<Props> = ({ visible, onClose, onCreate }) => {
    const [memberName, setMemberName] = useState("")
    const onGroupCreateHandler = () => {
        onCreate(memberName)
        setMemberName("")
        onClose()
    }
    return (
        <Modal animationType='slide' transparent style={{ backgroundColor: 'black' }} onRequestClose={() => onClose()} visible={visible}>
            <View style={{ flex: 1, backgroundColor: '#00000050', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1 }} />
                <View style={{ width: Dimensions.get('screen').width, borderTopEndRadius: 20, borderTopLeftRadius: 20, height: Dimensions.get('screen').height, paddingHorizontal: 20, backgroundColor: '#eee', marginHorizontal: 20, flex: 1 }}>
                    <Spacer height={20} />
                    <TextInput value={memberName} onChangeText={(text) => setMemberName(text)} placeholder='Enter member name' />
                    <Spacer height={20} />
                    <Button title="Add member" onPress={onGroupCreateHandler} />
                </View>
            </View>
        </Modal>
    )
}

export default AddMemberModal