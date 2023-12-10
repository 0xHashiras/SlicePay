import { View, TouchableOpacity, Alert, TouchableHighlight, StyleSheet } from 'react-native'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { globalStyles } from '../Utils/styles'
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import GroupTile from '../Components/GroupTile'
import FloatingButton from '../Components/FloatingButton'
import CreateGroupModal from '../Components/Modal/CreateGroupModal'
import Text from '../Components/Text'
import { useNavigation } from '@react-navigation/native'
import { RootNavigationProps, RootNavigationStackParamsList } from '../Navigators/RootNavigator'
import { GroupContext } from '../Context/GroupContext'
import { Typography } from '../neopop/components'
import { fontVariant, mainColors } from '../neopop/primitives'
import Spacer from '../Utils/Spacer'
import { useAccount, useContractRead } from 'wagmi'
import { abi } from '../abi'
import { getContract } from 'viem'
import { readContract } from 'wagmi/actions'
import { uniqBy } from 'lodash'
import { Divider } from '@react-native-material/core'
// import { CreateGroupModal as PushModal } from "@pushprotocol/uiweb";



export type Group = {
    UID: number,
    name: string,
    members: string[],
    owed?: number,
    amountToBeGiven?: number
}

const GroupListScreen = () => {
    const { address } = useAccount()
    const { navigate } = useNavigation<RootNavigationProps>()
    const [visible, setVisible] = useState(false)
    const { groups, setGroups } = useContext(GroupContext)
    const [owedSum, setOwedSum] = useState(0)
    const [amountToBeGivenSum, setAmountToBeGivenSum] = useState(0)
    const { data } = useContractRead({
        abi: abi,
        address: "0x606257276Fcc74D94D323C1F9455035A43c0e5c8",
        functionName: "getUserGroups",
        args: [address]
    })


    useEffect(() => {
        if (data) {
            setAmountToBeGivenSum(0);
            setOwedSum(0);
            setGroups([]);
            (data as any).map(async (groupId: any) => {
                const group = await readContract({
                    abi: abi,
                    account: address,
                    address: "0x606257276Fcc74D94D323C1F9455035A43c0e5c8",
                    functionName: "getGroupDetails",
                    args: [groupId]
                }) as Group
                const owed = await readContract({
                    abi: abi,
                    account: address,
                    address: "0x606257276Fcc74D94D323C1F9455035A43c0e5c8",
                    functionName: "amountOwed",
                    args: [groupId, address]
                })
                const amountToBeGiven = await readContract({
                    abi: abi,
                    account: address,
                    address: "0x606257276Fcc74D94D323C1F9455035A43c0e5c8",
                    functionName: "amountToBeGiven",
                    args: [groupId, address]
                })
                setOwedSum((prev) => prev + Number(owed))
                setAmountToBeGivenSum((prev) => prev + Number(amountToBeGiven))
                group.owed = Number(owed)
                group.amountToBeGiven = Number(amountToBeGiven);
                (setGroups as any)((prev: any) => [...prev, group] as any)
                console.log(owed)
            })
        }
    }, [data])

    const setAllGroupData = (singleGroup: Group) => {
        console.log("Address", address)
        console.log("singleGroup", singleGroup.members.push(address as any))
        setGroups([...groups, singleGroup])
    }




    return (
        <View style={globalStyles.screen}>
            <Spacer height={10} />
            <Typography style={{ textAlign: "center", fontSize: 12 }} {...fontVariant.CapsBold10} color={mainColors.yellow}>Summary</Typography>
            <Spacer height={10} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ alignItems: 'center' }}>
                    <Text>Amount Owed</Text>
                    <Text color='red'>{owedSum}</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text>Amount to be given</Text>
                    <Text color='green'>{amountToBeGivenSum}</Text>
                </View>
            </View>
            <Spacer height={20} />
            <Divider />
            <Spacer height={5} />
            <Typography style={{ textAlign: "center", fontSize: 12 }} {...fontVariant.CapsBold10} color={mainColors.yellow}>Groups</Typography>
            <Spacer height={5} />
            <FlatList
                ListEmptyComponent={<Text>No groups found</Text>}
                data={groups}
                renderItem={({ item: group }) =>
                    <TouchableOpacity onPress={() => navigate('GroupDetailScreen', { group: { ...group, UID: Number(group.UID) } })}>
                        <GroupTile name={group.name} members={group.members} />
                    </TouchableOpacity>}
            />
            <CreateGroupModal onCreate={(group) => setAllGroupData(group)} onClose={() => setVisible(() => false)} visible={visible} />
            <TouchableWithoutFeedback onPress={() => setVisible(true)}>
                <FloatingButton />
            </TouchableWithoutFeedback>
        </View>
    )
}

export default GroupListScreen


const styles = StyleSheet.create(
    {
        contentContainer: {
            flex: 1,
            alignItems: 'center',
        },
    }
)