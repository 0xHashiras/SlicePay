import { GroupContext } from "@/Context/GroupContext";
import { colorConfig } from "@/components/Common";
import { Group } from "@/typings";
import { abi } from "@/utils/abi";
import { Alfajores } from "@celo/rainbowkit-celo/chains";
import { Button, InputField } from "@cred/neopop-web/lib/components";
import { readContract, waitForTransaction, writeContract } from "@wagmi/core";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Button as BSButton, Modal } from "react-bootstrap";
import { useAccount, useChainId, useConnect, useContractRead } from "wagmi";

export default function Groups() {
    const { address } = useAccount()
    const { connect } = useConnect()
    const chainId = useChainId()
    const [visible, setVisible] = useState(false)
    const { groups, setGroups } = useContext(GroupContext)
    const [owedSum, setOwedSum] = useState(0)
    const [amountToBeGivenSum, setAmountToBeGivenSum] = useState(0)
    const [loading, setLoading] = useState(false)
    const [groupName, setGroupName] = useState("")
    const [memberList, setMemberList] = useState("")

    const { data, error } = useContractRead({
        abi: abi,
        address: "0x2Cae4a51f8D5Db287c3838bf487aC74a3e9F70F1",
        functionName: "getUserGroups",
        args: [address]
    })
    useEffect(() => {
        connect()
        if (data) {
            setAmountToBeGivenSum(0);
            setOwedSum(0);
            (data as any).map(async (groupId: any) => {
                const group = await readContract({
                    abi: abi,
                    account: address,
                    address: "0x2Cae4a51f8D5Db287c3838bf487aC74a3e9F70F1",
                    functionName: "getGroupDetails",
                    args: [groupId]
                }) as Group
                const owed = await readContract({
                    abi: abi,
                    account: address,
                    address: "0x2Cae4a51f8D5Db287c3838bf487aC74a3e9F70F1",
                    functionName: "amountOwed",
                    args: [groupId, address]
                })
                const amountToBeGiven = await readContract({
                    abi: abi,
                    account: address,
                    address: "0x2Cae4a51f8D5Db287c3838bf487aC74a3e9F70F1",
                    functionName: "amountToBeGiven",
                    args: [groupId, address]
                })
                setOwedSum((prev) => prev + Number(owed))
                setAmountToBeGivenSum((prev) => prev + Number(amountToBeGiven))
                group.owed = Number(owed)
                group.amountToBeGiven = Number(amountToBeGiven);
                // (setGroups as any)((prev: any) => [...prev, group] as any)
                // console.log(owed)
            })
        }
    }, [data])

    const onCreateHandler = async () => {
        try {
            setLoading(() => true)
            const UID = Math.floor(10000000 + Math.random() * 90000000)
            const members = memberList.split(",").map((address) => address.trim())
            members.push(address!.toString())
            const result = await writeContract({
                abi: abi,
                address: "0x2Cae4a51f8D5Db287c3838bf487aC74a3e9F70F1",
                account: address,
                functionName: "createGroup",
                args: [groupName, UID, members]
            })
            await waitForTransaction({ hash: result.hash })
            setGroupName("")
            setVisible(false)
            setLoading(() => false)
        } catch (error) {
            alert(error)
            setLoading(() => false)
        }
    }
    return (
        <div style={{ width: '100vw' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 20px', flexDirection: 'column', alignItems: 'center' }}>
                    <p>Owed</p>
                    <p>{owedSum}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 20px', flexDirection: 'column', alignItems: 'center' }}>
                    <p>Amount to be given</p>
                    <p>{owedSum}</p>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 5, }}>
                {groups.map((group) => {
                    return (
                        <Link href={`groups/${group.UID}`} style={{ backgroundColor: '#eee', width: '90%', display: 'flex', justifyContent: 'space-between', padding: '10px 10px', borderRadius: '10px', }}>
                            <p style={{ color: 'black' }}>{group.name}</p>
                            <p style={{ color: 'black' }}>{group.members.length}</p>
                        </Link>
                    )
                })}
            </div>
            <div onClick={() => setVisible(true)} style={{
                position: 'absolute',
                bottom: 20,
                right: 20,
                fontSize: 25,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                color: 'white',
                background: 'red',
                width: '60px',
                height: '60px'
            }}>+</div>
            <Modal
                show={visible}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header
                    style={{ background: 'black', display: 'flex', flexDirection: 'column', gap: 10 }}
                >
                    <Modal.Title style={{ color: 'white' }} id="contained-modal-title-vcenter">
                        Create new group
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{ background: 'black', display: 'flex', flexDirection: 'column', gap: 10 }}
                >
                    <InputField
                        type="text"
                        label="group name"
                        placeholder="Enter Group name"
                        id="text_field"
                        value={groupName}
                        onChange={(event: any) => setGroupName(event.target.value)}
                        autoFocus
                    />
                    <InputField
                        type="text"
                        label="members list"
                        placeholder="Enter members list"
                        id="text_field"
                        value={memberList}
                        onChange={(event: any) => setMemberList(event.target.value)}
                        autoFocus
                    />
                    {loading ? <p style={{ color: 'white' }}>Creating group, Please wait...</p> : <div style={{ display: 'flex', gap: 10 }}>
                        <Button
                            style={{ marginTop: '20px' }}
                            variant="secondary"
                            kind="elevated"
                            size="big"
                            colorMode="light"
                            onClick={() => setVisible(false)}
                            colorConfig={colorConfig}
                        >
                            Cancel
                        </Button>
                        <Button
                            style={{ marginTop: '20px' }}
                            variant="primary"
                            kind="elevated"
                            size="big"
                            onClick={() => onCreateHandler()}
                            colorMode="light"
                            colorConfig={colorConfig}
                        >
                            Create Group
                        </Button>
                    </div>}


                </Modal.Body>
            </Modal>
        </div>
    )
}