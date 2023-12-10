import { StyleSheet, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { globalStyles } from '../Utils/styles'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootNavigationProps, RootNavigationStackParamsList } from '../Navigators/RootNavigator'
import Text from '../Components/Text'
import { Button, Typography } from '../neopop/components'
import { Divider, Icon } from '@react-native-material/core'
import Spacer from '../Utils/Spacer'
import AddMemberModal from '../Components/Modal/AddMemberModal'
import { GroupContext } from '../Context/GroupContext'
import { FlatList } from 'react-native-gesture-handler'
import { fontVariant, mainColors } from '../neopop/primitives'
// import {ScoreMaster} from "../neopop/primitives/"
import { List } from 'react-native-paper';
import AddExpenseModal from '../Components/Modal/AddExpenseModal'
import PieChart from 'react-native-pie-chart'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import MemberList from '../Components/Modal/MemberListModal'
import { useAccount, useContractRead } from 'wagmi'
import { abi } from '../abi'
import { readContract, waitForTransaction, writeContract } from 'wagmi/actions'
import { uniqBy } from 'lodash'
import { Expense } from '../typings'

const GroupDetailScreen = () => {
    const { address } = useAccount()
    const [expenses, setExpenses] = useState<Expense[]>([])
    const { navigate } = useNavigation<RootNavigationProps>()
    const [addExpenseModal, setAddExpenseModal] = useState(false)
    const { groups, setGroups } = useContext(GroupContext)
    const [openMembers, setOpenMembers] = useState(false)
    const [list, setList] = useState<any>([])
    const [currentGroup, setCurrentGroup] = useState<any>([])
    const route = useRoute<RouteProp<RootNavigationStackParamsList>>();


    const widthAndHeight = 200
    const series = [700, 321, 101, 789, 537]
    const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00']
    console.log(route.params?.group.UID)
    const { data, refetch } = useContractRead({
        abi: abi,
        address: "0x606257276Fcc74D94D323C1F9455035A43c0e5c8",
        functionName: "getGroupExpenses",
        args: [Number(route.params?.group.UID)]
    })

    useEffect(() => {
        setCurrentGroup(groups.find((group) => group.UID === route.params?.group.UID))
    }, [])


    useEffect(() => {
        if (data) {
            setExpenses(prev => []);
            (data as any).map(async (expenseId: any) => {
                const expense = await readContract({
                    abi: abi,
                    account: address,
                    address: "0x606257276Fcc74D94D323C1F9455035A43c0e5c8",
                    functionName: "getExpenseDetails",
                    args: [expenseId]
                }) as Expense
                expense.id = expenseId
                setExpenses((prev) => [...prev, expense])
                console.log(expense)

            })
        }
    }, [data])


    const onAddExpense = (expense: Expense) => {
        setExpenses(prev => [...prev, expense])
    }

    const onSettleNowHandler = async (groupId: number, expenseId: number) => {
        const result = await writeContract({
            abi: abi,
            address: "0x606257276Fcc74D94D323C1F9455035A43c0e5c8",
            account: address,
            functionName: "settleUp",
            args: [groupId, [expenseId]]
        })
        await waitForTransaction({ hash: result.hash })
        await refetch()
    }
    return (
        <View style={globalStyles.screen}>
            <View style={styles.expenseView}>
                <View style={styles.header}>
                    <Typography style={{ textAlign: "center", fontSize: 12 }} {...fontVariant.CapsBold10} color={mainColors.yellow}>{route.params?.group.name}</Typography>
                    {/* <Text size='lg'>{route.params?.group.name}</Text> */}
                </View>
                <Spacer height={10} />
                <Divider />
                <View>
                    {/* <TouchableOpacity onPress={()=> setOpenMembers(e => !e)}> */}
                    {/* <Button> */}

                    <Typography style={{ textAlign: "center", fontSize: 12 }} onPress={() => setOpenMembers(e => !e)} {...fontVariant.CapsBold10} color={mainColors.yellow}>{"See Member List"}</Typography>
                    {/* </View> */}
                    {/* </TouchableOpacity> */}
                </View>
                <Spacer height={10} />
                <Typography style={{ fontSize: 12 }} {...fontVariant.CapsBold10} color={mainColors.blue}>{"Expenses"}</Typography>

                {/* <FlatList
                    data={groups.find((group) => group.id === route.params?.group.id)?.members}
                    renderItem={({ item }) => {
                        return <>
                        <List.Item
                            title={item}
                        />
                        </>
                    }}
                /> */}
                <FlatList
                    data={expenses}
                    renderItem={({ item }) => {
                        return <>
                            {/* <List.Item */}
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text stike={item.settlementTracking[item.involvedAddresses.findIndex((_address) => _address.toLowerCase() === address!.toLowerCase())]}>{item.context} {item.splitamount[item.involvedAddresses.findIndex((_address) => _address.toLowerCase() === address!.toLowerCase())].toString()}</Text>
                                    {item.paidby.toLowerCase() !== address?.toLowerCase() && !item.settlementTracking[item.involvedAddresses.findIndex((_address) => _address.toLowerCase() === address!.toLowerCase())] ? <Button onPress={() => onSettleNowHandler(route.params!.group.UID, item.id!)} variant='secondary' kind='elevated'>Settle Now</Button> : <></>}
                                </View>
                                <Spacer height={5} />
                            </View>
                            {/* /> */}
                        </>
                    }}
                />

                {/* <PieChart
                    widthAndHeight={widthAndHeight}
                    series={series}
                    sliceColor={sliceColor}
                    coverRadius={0.45}
                    coverFill={'#FFF'}
                /> */}

                {/* <ScoreMeter
                    reading={720}
                    oldReading={500}
                    lowerLimit={100}
                    upperLimit={1000}
                    colorMode="light"
                    type="excellent"
                /> */}
                {/* </List.Accord
                ionGroup> */}
            </View>
            <MemberList list={currentGroup?.members} visible={openMembers} onClose={() => setOpenMembers(false)} />
            <AddExpenseModal members={route.params?.group.members ?? []} groupId={route.params?.group.UID ?? 0} onCreate={onAddExpense} visible={addExpenseModal} onClose={() => setAddExpenseModal(false)} />
            {/* <Button onPress={() => setAddMemberModal(true)} variant='secondary' kind='elevated'>Add members</Button> */}
            <Spacer height={10} />
            <Button onPress={() => setAddExpenseModal(true)} variant='secondary' kind='elevated'>Add Expense</Button>
            <Spacer height={10} />
            <Button onPress={() => navigate("SettlementPreference")} variant='secondary' kind='elevated'>Fiat Settle</Button>
        </View>
    )
}

export default GroupDetailScreen


const styles = StyleSheet.create({
    expenseView: {
        flex: 1
    },
    header: {
        flexDirection: 'row'
    }

})