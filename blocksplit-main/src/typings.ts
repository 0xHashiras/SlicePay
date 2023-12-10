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
