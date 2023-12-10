import { View, Modal, Dimensions, Alert } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { ActivityIndicator, RadioButton, TextInput } from 'react-native-paper'
import { Button } from '@react-native-material/core'
import Spacer from '../../Utils/Spacer'
import { Group } from '../../Screens/GroupListScreen'
import uuid from 'react-native-uuid';
import { waitForTransaction, writeContract } from 'wagmi/actions'
import { abi } from '../../abi'
import { useAccount } from 'wagmi'
import axios from 'axios';
import Text from '../Text'
import { ethers } from 'ethers'
import { parseGwei } from 'viem'


type Props = {
    visible: boolean,
    onClose: () => void,
    onCreate: (group: Group) => void
}

const Auth = Buffer.from(
    "64571107ec604729832133ff2c127435" + ":" + "GXT5rp74qUOyUbH4wHoMmA6oB3nRjg85CgLAuenIEZNWfWWOmO0vMg",
  ).toString("base64");
  

const CreateGroupModal: FC<Props> = ({ visible, onClose, onCreate }) => {
    const { address } = useAccount()
    const [groupName, setGroupName] = useState("")
    const [memberList, setMemberList] = useState("")
    const [loading, setLoading] = useState(false);
    const [feeObj, setFeeObj] = useState<any>({});
    const [checked, setChecked] = React.useState('');
    const [maxFee, setMaxFee] = useState("");
    const [mmFee, setMMFee] = useState("")

    const getFeeData = async () => {
        let {data} = await axios.get('https://gas.api.infura.io/networks/1/suggestedGasFees', 
        {
            headers: {
              Authorization: `Basic ${Auth}`,
            },
          },)
          setFeeObj(data)
          console.log("feedata", data)
    }

    useEffect(() => {
        getFeeData()
        setInterval(() => {
            getFeeData()
        }, 15000)
        
    }, [])

    const onGroupCreateHandler = async () => {
        try {
            console.log("maxFee", maxFee, parseGwei(maxFee))
            setLoading(() => true)
            const UID = Math.floor(10000000 + Math.random() * 90000000)
            const members = memberList.split(",").map((address) => address.trim())
            members.push(address!.toString())
            const result = await writeContract({
                abi: abi,
                address: "0x606257276Fcc74D94D323C1F9455035A43c0e5c8",
                account: address,
                functionName: "createGroup",
                args: [groupName, UID, members],
                maxFeePerGas: mmFee ? parseGwei('10') : undefined,
                maxPriorityFeePerGas: mmFee ? parseGwei('2') : undefined
            },
            )
            await waitForTransaction({ hash: result.hash })
            onCreate({ UID, name: groupName, members: memberList.split(",") })
            setGroupName("")
            onClose()
            setLoading(() => false)
            console.log(result.hash)
        } catch (error) {
            console.log(error)
            setLoading(() => false)
        }
    }

    const configGas = (check: 'first'| 'second'| 'third') => {
        setChecked(check)
        if(check === 'first') setMaxFee(feeObj.low?.suggestedMaxFeePerGas)
        if(check === 'second') setMaxFee(feeObj.medium?.suggestedMaxFeePerGas)
        if(check === 'third') setMaxFee(feeObj.high?.suggestedMaxFeePerGas)
    }

    return (
        <Modal animationType='slide' transparent style={{ backgroundColor: 'black' }} onRequestClose={() => onClose()} visible={visible}>
            <View style={{ flex: 1, backgroundColor: '#00000050', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1 }} />
                <View style={{ width: Dimensions.get('screen').width, borderTopEndRadius: 20, borderTopLeftRadius: 20, height: Dimensions.get('screen').height, paddingHorizontal: 20, backgroundColor: '#eee', marginHorizontal: 20, flex: 1 }}>
                    <Spacer height={20} />
                    <TextInput value={groupName} onChangeText={(text) => setGroupName(text)} placeholder='Enter Group name' />
                    <Spacer height={20} />
                    <TextInput value={memberList} onChangeText={(text) => setMemberList(text)} placeholder='Enter members list' />
                    <Spacer height={20} />
                    <Text>Gas : </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Low</Text>
                    <RadioButton
                        value="first"
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => configGas('first')}
                    />
                    <Text>{feeObj.low?.suggestedMaxFeePerGas || 0}</Text>
                    </View>
                    <Text>Medium</Text>
                    <View style={{flexDirection: 'row'  ,alignContent: 'center'}}>
                    <RadioButton
                        value="second"
                        status={ checked === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => configGas('second')}
                    />
                     <Text>{feeObj.medium?.suggestedMaxFeePerGas || 0}</Text>
                     </View>
                     <View style={{flexDirection: 'row', alignContent: 'center'}}>
                     <Text>High</Text>
                    <RadioButton
                        value="third"
                        status={ checked === 'third' ? 'checked' : 'unchecked' }
                        onPress={() => configGas('third')}
                    />
                     <Text>{feeObj.high?.suggestedMaxFeePerGas || 0}</Text>
                     </View>
                    <Spacer height={20} />
                    {loading ? <ActivityIndicator /> : <Button title="Create group" onPress={onGroupCreateHandler} />}

                </View>
            </View>
        </Modal>
    )
}

export default CreateGroupModal