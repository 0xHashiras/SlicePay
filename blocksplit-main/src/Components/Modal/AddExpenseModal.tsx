import { View, Modal, Dimensions, Alert } from 'react-native'
import React, { FC, useContext, useEffect, useState } from 'react'
import { ActivityIndicator, RadioButton, TextInput } from 'react-native-paper'
import { Button } from '@react-native-material/core'
import Spacer from '../../Utils/Spacer'
import { Group } from '../../Screens/GroupListScreen'
import uuid from 'react-native-uuid';
import { GroupContext } from '../../Context/GroupContext'
import { abi } from '../../abi'
import { useAccount } from 'wagmi'
import { waitForTransaction, writeContract } from 'wagmi/actions'
import { ethers } from 'ethers'
import { Expense } from '../../typings'
import axios from 'axios';
import Text from '../Text'
import { parseGwei } from 'viem'
// import ImagePicker from "react-native-image-picker"



type Props = {
    visible: boolean,
    groupId: number,
    onClose: () => void,
    members: string[],
    onCreate: (expense: Expense) => void
}

const Auth = Buffer.from(
    "64571107ec604729832133ff2c127435" + ":" + "GXT5rp74qUOyUbH4wHoMmA6oB3nRjg85CgLAuenIEZNWfWWOmO0vMg",
  ).toString("base64");

const AddExpenseModal: FC<Props> = ({ visible, onClose, groupId, members, onCreate }) => {
    const { address } = useAccount()
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState<number>(0)
    const [loading, setLoading] = useState(false)
    const [feeObj, setFeeObj] = useState<any>({});
    const [checked, setChecked] = React.useState('');
    const [maxFee, setMaxFee] = useState("");
    const [mmFee, setMMFee] = useState("")
    const [imageUri, setImageUri] = useState(null);

    // const options = {
    //     title: 'Select Image',
    //     storageOptions: {
    //       skipBackup: true,
    //       path: 'images',
    //     },
    //   };
  
    //   ImagePicker.showImagePicker(options, (response) => {
    //     if (response.didCancel) {
    //       console.log('User cancelled image picker');
    //     } else if (response.error) {
    //       console.log('ImagePicker Error: ', response.error);
    //     } else {
    //       const source = { uri: response.uri };
  
    //       // Set the selected image URI
    //       setImageUri(source.uri);
    //     }
    //   });
    // };
    

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

    const addExpenseHandler = async () => {
        try {
            setLoading(() => true)
            console.log(amount / members.length)
            const result = await writeContract({
                abi: abi,
                address: "0x606257276Fcc74D94D323C1F9455035A43c0e5c8",
                account: address,
                functionName: "addExpenseToGroup",
                args: [groupId, {
                    context: description,
                    amount: amount,
                    paidby: address,
                    involvedAddresses: members,
                    splitamount: new Array(members.length).fill(Math.round(amount / members.length)),
                    settlementTracking: new Array(members.length).fill(false),
                    json_deatils: ""
                }],
                maxFeePerGas: mmFee ? parseGwei('10') : undefined,
                maxPriorityFeePerGas: mmFee ? parseGwei('2') : undefined
            })
            await waitForTransaction({ hash: result.hash })
            onCreate({
                amount: amount,
                context: description,
                involvedAddresses: members,
                json_deatils: "",
                paidby: address!.toString(),
                settlementTracking: new Array(members.length).fill(false),
                splitamount: new Array(members.length).fill(Math.round(amount / members.length))
            })
            setDescription("")
            setAmount(0)
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

    const fileHandler = (e: any) => {
        console.log(e)
    }

    return (
        <Modal animationType='slide' transparent style={{ backgroundColor: 'black' }} onRequestClose={() => onClose()} visible={visible}>
            <View style={{ flex: 1, backgroundColor: '#00000050', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1 }} />
                <View style={{ width: Dimensions.get('screen').width, borderTopEndRadius: 20, borderTopLeftRadius: 20, height: Dimensions.get('screen').height, paddingHorizontal: 20, backgroundColor: '#eee', marginHorizontal: 20, flex: 1 }}>
                    <Spacer height={20} />
                    <TextInput value={description} onChangeText={(text) => setDescription(text)} placeholder='Enter description' />
                    <Spacer height={20} />
                    <TextInput value={amount.toString()} keyboardType='number-pad' onChangeText={(text) => setAmount(Number(text))} placeholder='Enter amount' />
                    <Spacer height={20} />
                    
                    {/* <Spacer height={20} /> */}
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
                    {loading ? <ActivityIndicator /> : <Button title="Add expense" onPress={addExpenseHandler} />}

                </View>
            </View>
        </Modal>
    )
}

export default AddExpenseModal