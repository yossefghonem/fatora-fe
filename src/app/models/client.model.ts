import { Address } from "./address.model";

export class Client {
    id!: string;
    name!: string;
    email!: string;
    phone!: string;
    type!: ClientType;
    taxNumber!: string;
    branchId:string='0';
    address!: Address
}

export enum ClientType {
    B = "B",
    C = "C",
    P = "P",
}
