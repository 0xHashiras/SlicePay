export type Group = {
    UID: number,
    name: string,
    members: string[],
    owed?: number,
    amountToBeGiven?: number
}

export interface Expense {
    id?: number;
    amount: number;
    context: string;
    involvedAddresses: string[];
    json_deatils: string;
    paidby: string;
    settlementTracking: boolean[];
    splitamount: number[];
}
