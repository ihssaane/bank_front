import { Compte } from "./compte.model";

export interface Operation  {
    dateOperation: Date;
    id: number;
    compte: Compte;
    amount: number;
    numOperation: string
    type: any
}