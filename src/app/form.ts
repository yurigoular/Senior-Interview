import { Enum } from "./enum";

export class Form {
    id: number;
    itemName: string;
    enum: Enum;
    quantity: number;
    price: number;
    perishable: boolean;
    validDate: Date;
    fabrication: Date;
}