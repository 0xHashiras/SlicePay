import { colorConfig } from '@/components/Common'
import { Expense, Group } from '@/typings'
import { abi } from '@/utils/abi'
import { Button } from '@cred/neopop-web/lib/components'
import { readContract, waitForTransaction, writeContract } from '@wagmi/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useAccount, useContractRead } from 'wagmi'


export default function Page() {
    const { address } = useAccount()
    const [visibleMembers, setVisibleMembers] = useState(false)
    const router = useRouter()
    const [expenses, setExpenses] = useState<Expense[]>([])
    const [group, setGroup] = useState<Group | undefined>()
    const { data, refetch } = useContractRead({
        abi: abi,
        address: "0x2Cae4a51f8D5Db287c3838bf487aC74a3e9F70F1",
        functionName: "getGroupExpenses",
        args: [Number(router.query.id)]
    })
    useEffect(() => {
        (async () => {
            const group = await readContract({
                abi: abi,
                account: address,
                address: "0x2Cae4a51f8D5Db287c3838bf487aC74a3e9F70F1",
                functionName: "getGroupDetails",
                args: [router.query.id]
            }) as Group
            setGroup(group)
        })()
    }, [])
    useEffect(() => {
        if (data) {
            setExpenses(prev => []);
            (data as any).map(async (expenseId: any) => {
                const expense = await readContract({
                    abi: abi,
                    account: address,
                    address: "0x2Cae4a51f8D5Db287c3838bf487aC74a3e9F70F1",
                    functionName: "getExpenseDetails",
                    args: [expenseId]
                }) as Expense
                expense.id = expenseId
                setExpenses((prev) => [...prev, expense])
                console.log(expense)
            })
        }
    }, [data])

    const onSettleNowHandler = async (groupId: number, expenseId: number) => {
        const result = await writeContract({
            abi: abi,
            address: "0x2Cae4a51f8D5Db287c3838bf487aC74a3e9F70F1",
            account: address,
            functionName: "settleUp",
            args: [groupId, [expenseId]]
        })
        await waitForTransaction({ hash: result.hash })
        await refetch()
    }
    return (
        <div style={{ width: '100vw', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 5, }}>
                <p onClick={() => setVisibleMembers(true)}>View members</p>
            </div>
            <p style={{ fontSize: 20, paddingLeft: '20px', marginBottom: '40px' }} onClick={() => setVisibleMembers(true)}>Expenses</p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 5, }}>
                {expenses.map((expense) => {
                    return (
                        <div style={{ backgroundColor: '#eee', width: '90%', display: 'flex', justifyContent: 'space-between', padding: '10px 10px', borderRadius: '10px', }}>
                            <div>
                                <p style={{ color: 'black' }}>{expense.context}</p>
                                <p style={{ color: 'black' }}>{expense.splitamount[expense.involvedAddresses.findIndex((_add) => _add.toLowerCase() === address?.toLowerCase())]}</p>
                            </div>
                            {expense.paidby.toLowerCase() !== address?.toLowerCase() && !expense.settlementTracking[expense.involvedAddresses.findIndex((_address) => _address.toLowerCase() === address!.toLowerCase())] ? <Button onClick={() => onSettleNowHandler(Number(router.query.id), expense.id!)} variant='secondary' kind='elevated'>Settle Now</Button> : <></>}
                        </div>
                    )
                })}
            </div>
            <Modal
                show={visibleMembers}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header
                    style={{ background: 'black', display: 'flex', flexDirection: 'column', gap: 10 }}
                >
                    <Modal.Title style={{ color: 'white' }} id="contained-modal-title-vcenter">
                        Group members
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{ background: 'black', display: 'flex', flexDirection: 'column', gap: 10 }}
                >
                    {group?.members.map((member) => <p style={{ color: 'white' }}>{member}</p>)}
                    <Button
                        variant="primary"
                        kind="elevated"
                        size="big"
                        colorMode="light"
                        colorConfig={colorConfig}
                        onClick={() => setVisibleMembers(false)}
                    >
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    )
}