import { Client } from "./client.model";

export interface Compte {
    numCompte: string;
    devis: string
    balance: number
    createdAt: Date,
    status: any
    tauxInteret: number
    decouvert: number
    client: Client,
    clientId: number
}